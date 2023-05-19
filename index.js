import express from "express";
import cors from "cors";

const app = express();

app.get("/", cors(), (req, res) => {
  res.sendFile(`${process.cwd()}/index.html`);
});

app.listen(4000);
console.log("Escuchando el puerto", 4000);
