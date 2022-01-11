let app = require("express")();

// 基本路由，http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Hello World");
});
// params，http://localhost:5000/p/5
app.get("/p/:uid", (req, res) => {
  res.send("Hello " + req.params.uid);
});
// query，http://localhost:5000/q?limit=21
app.get("/q/", (req, res) => {
  let limit = req.query.limit;
  res.send("Hello" + limit);
});

// 監聽 port，如無預設 port 則 port 為 5000
app.listen(process.env.PORT || 5000);
