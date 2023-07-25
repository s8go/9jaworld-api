const express = require("express");
const url = require("url");
const statesRouter = express.Router();
const {
  getAllStates,
  getSingleState,
  searchStates,
} = require("../controller/statesController");

statesRouter.get("/states", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const states = getAllStates(query.sort, query.desc);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: states.length,
      data: states,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

statesRouter.get("/states/search", (req, res) => {
  try {
    const query = url.parse(req.url, true).query;
    const states = searchStates({ ...query });
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      total: states.length,
      data: states,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

statesRouter.get("/states/:id", (req, res) => {
  try {
    const state = getSingleState(req.params.id);
    res.status(200).send({
      statusCode: res.statusCode,
      statusText: "Ok",
      data: state,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: res.statusCode,
      statusText: "Internal Error",
      error: err.message,
    });
  }
});

module.exports = statesRouter;
