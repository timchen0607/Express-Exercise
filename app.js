const express = require("express");
const app = express();
// 設定靜態檔案路徑
app.use(express.static("public"));

// middleware
app.use((req, res, next) => {
  console.log("有人進來了");
  next();
});
const login = (req, res, next) => {
  console.log("登入中...");
  next();
};

// 基本路由，http://localhost:5000/
app.get("/", login, (req, res) => {
  res.send('<image src="./profile.png">');
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
// when err，http://localhost:5000/err
app.get("/err/", (req, res) => {
  someErr();
});

// 404 page
app.use((req, res, next) => {
  res.status(404).send("無此頁面");
});
// error page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("發生錯誤");
});

// 監聽 port，如無預設 port 則 port 為 5000
app.listen(process.env.PORT || 5000);
