function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
const app = express();

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('api/db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

app.use(requireHTTPS);
app.use(express.static('./dist/projetocadastroveiculos'));



const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/projetocadastroveiculos/'}),
);

app.listen(process.env.PORT || 8080);
