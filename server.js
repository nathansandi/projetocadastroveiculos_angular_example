const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('api/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

const express = require('express');
const app = express();
app.use(middlewares)
app.use(router)
//app.use(requireHTTPS);
app.use(express.static('./dist/projetocadastroveiculos'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/projetocadastroveiculos/'}),
);

app.listen(8080);
