function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}



const express = require('express');
const jsonServer = require('json-server')

const app = express();
const server = jsonServer.create()
const router = jsonServer.router('api/db.json')

const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use(router)
app.use(requireHTTPS);
app.use(express.static('./dist/projetocadastroveiculos'));



const port = 3000

app.listen(3000, () => {
    console.log(`JSON Server is running on port ${port}`)
})

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/projetocadastroveiculos/'}),
);

app.listen(process.env.PORT || 8080);
