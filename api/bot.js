const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();
const access_token = process.env.ACCESS_TOKEN;
const group_id = process.env.GROUP_ID;
const webhook_url = process.env.WEB_HOOK_URL;

fetch(
  `https://api.telegram.org/bot${access_token}/setWebhook?url=${webhook_url}`,
  { method: "GET" }
)
  .then(res => res.json())
  .then(data => console.log(data));

router.get("/bot/callback", (req, res, next) => {
  res.status(200).json({ Status: res.statusCode });
  res.end();
});

router.post("/bot/callback", (req, res, next) => {
  const { name, number } = req.body;
  const letters = /^[а-яА-Яa-zA-Z]+$/;
  const numbers = /^[0-9]+$/;
  if (!name.match(letters)) {
    return res
      .status(400)
      .json({ message: "Имя может состоять только из букв" });
  }
  if (!number.match(numbers)){
    return res
      .status(400)
      .json({ message: "Номер может состоять только из цифр" });
  }
  const message = `Имя: ${name} Номер: ${number}`;
  fetch(
    `https://api.telegram.org/bot${access_token}/sendMessage?chat_id=${group_id}&text=${encodeURIComponent(
      message
    )}`,
    { method: "POST" }
  )
    .then(res => {
      res.json();
    })
    .then(json => {
      console.log(json);
    });
  res.end();
});

module.exports = router;
