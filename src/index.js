const express = require("express");
const React = require("react");
const renderToString = requiere("react-dov/server").renderToString;
const Home = require("./client/components/Home").default;
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home/>);

  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on protocol 3000");
});
