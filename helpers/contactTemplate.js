exports.newContactTemplate = (contact) => `<!DOCTYPE html>
<html>
  <head>
    <title>Thank You for Reaching Out</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }
      h1 {
        color: #007BFF;
      }
      a {
        color: #007BFF;
        text-decoration: none;
      }
      .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #777;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        color: #fff !important;
        background-color: #007BFF;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <h1>Thanks for Reaching Out, ${contact?.name?.split(" ")[0]}! 🚀</h1>
      <p>Hi ${contact?.name?.split(" ")[0]},</p>
      <p>Thank you for reaching out through my portfolio website! I appreciate your interest and will review your message shortly.</p>
      <br>
      <p>If you're inquiring about a web development project, collaboration, or job opportunity, I’ll get back to you within 24-48 hours.</p>
      <p>In the meantime, feel free to explore my portfolio:</p>
      <p><a href="https://nnamdi-portfolio.netlify.app/" target="_blank" class="button">View My Work</a></p>
      <br>
      <p>Let’s connect on social media:</p>
      <p>
        <a href="https://www.linkedin.com/in/agu-james-19a8a91a9/" target="_blank">LinkedIn</a> |
        <a href="https://github.com/jharmez007" target="_blank">GitHub</a> |
        <a href="https://twitter.com/brodannamdi_r" target="_blank">Twitter</a>
      </p>
      <p>Looking forward to chatting soon!</p>
      <p>Best regards,</p>
      <p><strong>Nnamdi</strong></p>
      <div class="footer">
        <p>&copy; 2025 <a href="https://nnamdi-portfolio.netlify.app/" target="_blank">Nnamdi.dev</a>. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`;
