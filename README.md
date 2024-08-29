# CustomCard

CustomCard 是一個簡單易用的 JavaScript 套件，用於創建具有懸停動畫效果的卡片組件。

## 功能

- 創建具有圖片、標題、副標題和描述的卡片
- 懸停時的模糊效果和文字顯示動畫
- 可自定義邊框圓角、顏色等樣式

## 安裝

1. 下載 `hoverAnimationCard.js` 文件
2. 將文件放入您的項目目錄中

## 使用方法

### 步驟 1: 在 HTML 中引入 hoverAnimationCard.js

```html
<script src="path/to/hoverAnimationCard.js"></script>
```

### 步驟 2: 創建一個容器元素

在您的 HTML 中添加一個容器元素，用於放置卡片：

```html
<div id="cardContainer"></div>
```

### 步驟 3: 初始化 CustomCard

在 JavaScript 中初始化 CustomCard：

```javascript
document.addEventListener('DOMContentLoaded', function() {
    new CustomCard('#cardContainer', {
        image: 'https://example.com/your-image.jpg',
        title: 'KYOTO',
        subtitle: 'Japan',
        description: 'This photograph captures a typical street scene in Kyoto, Japan...',
        borderRadius: 60,
        titleColor: 'rgb(171, 74, 0)',
        subtitleColor: 'rgb(0, 65, 95)'
    });
});
```

## 配置選項

CustomCard 接受以下配置選項：

- `image`: (String) 卡片背景圖片的 URL
- `title`: (String) 卡片標題
- `subtitle`: (String) 卡片副標題
- `description`: (String) 卡片描述文字
- `borderRadius`: (Number) 卡片邊框圓角半徑（單位：像素）
- `titleColor`: (String) 標題文字顏色
- `subtitleColor`: (String) 副標題文字顏色

## 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CustomCard Demo</title>
</head>
<body>
    <div id="cardContainer"></div>

    <script src="CustomCard.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            new CustomCard('#cardContainer', {
                image: 'https://example.com/kyoto.jpg',
                title: 'KYOTO',
                subtitle: 'Japan',
                description: 'Experience the beauty of traditional Japan in Kyoto.',
                borderRadius: 60,
                titleColor: 'rgb(171, 74, 0)',
                subtitleColor: 'rgb(0, 65, 95)'
            });
        });
    </script>
</body>
</html>
```

## 注意事項

- 確保在 DOM 完全加載後初始化 CustomCard（使用 `DOMContentLoaded` 事件或將腳本放在 body 標籤的末尾）
- 容器元素必須存在於 DOM 中
- 如果遇到問題，請檢查控制台是否有錯誤信息

## 參考來源

- IG: @this.web