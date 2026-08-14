const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Forge DEV</title>
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #101014;
            color: #f4f4f5;
          }
          main {
            text-align: center;
            padding: 48px;
            border: 1px solid rgba(255,255,255,.12);
            border-radius: 24px;
            background: rgba(255,255,255,.04);
          }
          h1 {
            margin: 0 0 12px;
            font-size: clamp(32px, 6vw, 64px);
          }
          p {
            margin: 0;
            color: #a1a1aa;
            font-size: 18px;
          }
          code {
            color: #ff6b57;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>Hello from Forge DEV v2</h1>
          <p>Environment ready at <code>hello.dev.core01.io</code></p>
        </main>
      </body>
    </html>
  `);
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "forge-hello-dev",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Forge hello dev app listening on port ${port}`);
});
