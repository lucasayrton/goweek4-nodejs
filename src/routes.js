const express = require("express");

const routes = express.Router();

const TweetController = require("./controller/TweetController");
const LikeController = require("./controller/LikeController");

routes.get("/tweets", TweetController.index);
routes.post("/tweets", TweetController.store);

routes.post('/likes/:id', LikeController.store);

module.exports = routes;
