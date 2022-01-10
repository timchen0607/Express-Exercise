let app = require("express")();

// 基本路由
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/a", (req, res) => {
  res.send("Hello A");
});

// 監聽 port，如無預設 port 則 port 為 5000
app.listen(process.env.PORT || 5000);
