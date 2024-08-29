(function(global) {
    const style = `
        .custom-card {
            margin-top: 50px;
            margin-left: 50px;
            width: 400px;
            min-height: 460px;
            background-color: #fff;
            overflow: hidden;
            font-family: "JetBrains Mono", monospace;
        }
        .custom-card-img {
            position: relative;
            width: 100%;
            height: 400px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            filter: blur(16px);
            transition: filter 0.4s;
        }
        .custom-card:hover .custom-card-img {
            filter: blur(0);
            transition-delay: 0s;
        }
        .custom-card:hover .custom-card-content {
            grid-template-rows: min-content 1fr;
            transition-delay: 0s;
        }
        .custom-card-img::before,
        .custom-card-img::after {
            content: "";
            position: absolute;
        }
        .custom-card-img::before {
            bottom: 0;
            width: 100%;
            height: 120px;
            background-color: #fff;
        }
        .custom-card-img::after {
            right: 0;
            bottom: 60px;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: transparent;
            box-shadow: 60px 60px 0 0 #fff;
        }
        .custom-card-content {
            position: relative;
            bottom: 20px;
            margin-inline: 40px;
            display: grid;
            grid-template-rows: min-content 0fr;
            transition: grid-template-rows 0.4s;
        }
        .custom-card-title {
            margin: 0;
            letter-spacing: 0.1rem;
            font-weight: 800;
        }
        .custom-card-subtitle {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.1rem;
        }
        .custom-card-text {
            overflow: hidden;
            margin: 0;
            opacity: 0;
            transition: margin 0s 0.4s, opacity 0.4s;
            word-break: break-all;
        }
        .custom-card:hover .custom-card-text {
            margin-top: 16px;
            opacity: 1;
            transition-delay: 0.4s, 0.4s;
        }
    `;

    class CustomCard {
        constructor(container, options) {
            this.container = typeof container === 'string' ? document.querySelector(container) : container;
            this.options = Object.assign({
                image: '',
                title: 'Title',
                subtitle: 'Subtitle',
                description: 'Description goes here.',
                borderRadius: 60,
                titleColor: 'rgb(171, 74, 0)',
                subtitleColor: 'rgb(0, 65, 95)'
            }, options);

            this.init();
            this.render();
        }

        init() {
            if (!document.getElementById('custom-card-styles')) {
                const styleElement = document.createElement('style');
                styleElement.id = 'custom-card-styles';
                styleElement.textContent = style;
                document.head.appendChild(styleElement);
            }
        }

        render() {
            const card = document.createElement('div');
            card.className = 'custom-card';
            card.style.borderRadius = `${this.options.borderRadius}px`;

            card.innerHTML = `
                <div class="custom-card-img"></div>
                <div class="custom-card-content">
                    <div class="custom-card-header">
                        <h2 class="custom-card-title">${this.options.title}</h2>
                        <p class="custom-card-subtitle">${this.options.subtitle}</p>
                    </div>
                    <p class="custom-card-text">${this.options.description}</p>
                </div>
            `;

            const cardImg = card.querySelector('.custom-card-img');
            cardImg.style.backgroundImage = `url(${this.options.image})`;
            cardImg.style.borderRadius = `${this.options.borderRadius}px ${this.options.borderRadius}px 0 0`;

            cardImg.style.setProperty('--circle-radius', `${this.options.borderRadius}px`);
            cardImg.style.setProperty('--negative-circle-radius', `${-this.options.borderRadius}px`);
            cardImg.style.setProperty('--double-circle-radius', `${this.options.borderRadius * 2}px`);

            const title = card.querySelector('.custom-card-title');
            title.style.color = this.options.titleColor;

            const subtitle = card.querySelector('.custom-card-subtitle');
            subtitle.style.color = this.options.subtitleColor;

            this.container.appendChild(card);
        }
    }

    global.CustomCard = CustomCard;

})(typeof window !== 'undefined' ? window : this);