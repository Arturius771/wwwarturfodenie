const express = require("express");
const app = express();
const api = require("./routes/api.js");

port = 3000;

app.use(express.json()); // This must be used first for HTTP API requests to work
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("Hello from express server");
});
app.listen(port, () => console.log("Server runs on localhost:" + port));
