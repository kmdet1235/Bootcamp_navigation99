const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods");
// const connect = require("./schemas/index");
// connect();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("기본 URL에 Post 메소드가 정상적으로 실행되었습니다.");
});

app.get("/", (req, res) => {
  console.log(req.query);

  res.json({ KeyKey: "value 입니다.", "이름입니다.": "이름일까요?" });
});

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URI에 정상적으로 반환되었습니다.");
});

app.use("/api", goodsRouter);

app.listen(port, () => {
  console.log(port, "번 포트로 서버가 열렸어요!");
});
