const express = require('express');
const app = express();
const port = 8080;

// Route to serve the home page with HTML
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Sample App!</h1>
        <p>This page is served by a Node.js app inside Docker.</p>
        <p>Congratulations, your application is running!</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
