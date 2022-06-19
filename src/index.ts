import express from "express";
const app = express();

app.listen(process.env["PORT"] || 80, () => console.log("Server started"));
app.use(express.static(__dirname + "/public"));

app.get("/*", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
