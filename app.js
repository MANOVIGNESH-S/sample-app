const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Sample App</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Arial', sans-serif;
          background: #f4f4f9;
          color: #333;
          line-height: 1.6;
        }
        header {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }
        header h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        header p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        header .btn {
          padding: 12px 24px;
          background: #ff6f61;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          text-decoration: none;
          font-size: 1rem;
          transition: background 0.3s ease;
        }
        header .btn:hover {
          background: #ff3b2f;
        }
        section {
          padding: 2rem 1rem;
          text-align: center;
        }
        .features {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .feature {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 300px;
          margin: 1rem;
        }
        .feature h3 {
          color: #2575fc;
          margin-bottom: 0.5rem;
        }
        .about {
          background: #e0e7ff;
          padding: 2rem 1rem;
        }
        .about h2 {
          color: #333;
        }
        .about p {
          max-width: 800px;
          margin: 1rem auto;
        }
        .testimonials {
          padding: 2rem 1rem;
        }
        .testimonial {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 600px;
          margin: 1rem auto;
        }
        .testimonial h4 {
          color: #2575fc;
          margin-bottom: 0.5rem;
        }
        footer {
          background: #333;
          color: white;
          text-align: center;
          padding: 1rem;
        }
        footer p {
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .features {
            flex-direction: column;
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Welcome to the Sample App</h1>
        <p>Empowering developers to build scalable and efficient applications inside Docker containers.</p>
        <a href="#features" class="btn">Explore Features</a>
      </header>

      <section id="features">
        <h2>Features</h2>
        <div class="features">
          <div class="feature">
            <h3>Fast Deployment</h3>
            <p>Deploy your applications in seconds with Docker's lightweight containers.</p>
          </div>
          <div class="feature">
            <h3>Scalable Design</h3>
            <p>Our app architecture scales effortlessly to handle any workload.</p>
          </div>
          <div class="feature">
            <h3>Seamless Integration</h3>
            <p>Integrate with CI/CD pipelines for a smooth and automated workflow.</p>
          </div>
        </div>
      </section>

      <section class="about">
        <h2>About Us</h2>
        <p>
          At Sample App, we are dedicated to providing developers with the tools they need to build,
          test, and deploy applications efficiently. Our mission is to simplify the development process
          with modern, containerized solutions that work across platforms.
        </p>
      </section>

      <section class="testimonials">
        <h2>What Our Users Say</h2>
        <div class="testimonial">
          <h4>Jane Doe, Software Engineer</h4>
          <p>"Sample App made deploying my applications so much easier. The seamless integration with Docker is phenomenal!"</p>
        </div>
        <div class="testimonial">
          <h4>John Smith, DevOps Specialist</h4>
          <p>"I love how simple and intuitive the app is. It saved me hours of setup time!"</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Sample App. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
