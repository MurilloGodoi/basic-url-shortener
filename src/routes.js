const { Router } = require("express");
const linkController = require("./app/controllers/LinkController");

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})
routes.post("/links/encode", linkController.encode);
routes.get("/links/decode/:code", linkController.decode);
routes.get("/links/clicks/:id", linkController.getClicksLink);

module.exports = routes;
