import express from "express";

const app = express();

app.use("/static", express.static("./static/"));

app.get("/", (_, res) => {
  res.sendFile(`${process.cwd()}/static/index.html`);
});

app.listen(4000);
console.log("Listening on port:", 4000);
