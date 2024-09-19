const fs = require('fs');
const path = require('path');

// Example button data
const buttonData = [
  // Add your button data here in the format { text: 'Button Text', url: 'https://example.com', bgColor: '#e16259', padding: 10, radius: 5 }
];

buttonData.forEach(button => {
  const pageName = button.text.replace(/\s+/g, '-').toLowerCase();
  const filePath = path.join(__dirname, 'generated-buttons', `${pageName}.html`);

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${button.text} Button</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        background-color: #f0f0f0;
      }
      a {
        display: inline-block;
        text-decoration: none;
        padding: ${button.padding}px;
        border-radius: ${button.radius}px;
        background-color: ${button.bgColor};
        color: #ffffff;
        font-size: 16px;
        font-family: Arial, sans-serif;
        text-align: center;
        line-height: 100px;
        width: 300px;
      }
      img {
        border: none;
        display: block;
      }
    </style>
  </head>
  <body>
    <a href="${button.url}" target="_blank">
      <img src="https://via.placeholder.com/300x100/${button.bgColor.substring(1)}/ffffff?text=${encodeURIComponent(button.text)}" alt="${button.text} Button">
    </a>
  </body>
  </html>
  `;

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, htmlContent, 'utf8');
  console.log(`Generated ${filePath}`);
});

console.log('All pages generated.');
