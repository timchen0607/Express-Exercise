let app = require("express")();

// 基本路由
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/a", (req, res) => {
  res.send("Hello A");
});

// 監聽 port
app.listen(5000);
