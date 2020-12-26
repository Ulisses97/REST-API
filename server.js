const express = require('express');
const server = express();
//const port = process.env.PORT || 3000;

// Chamando as rotas
const rotasProdutos = require('./routes/produtos');
const rotasPedidos = require('./routes/pedidos');

server.use('/produtos', rotasProdutos);
server.use('/pedidos', rotasPedidos);

// server.use('/', (req,res) => {
//   res.send("Ok")
// })

// Tratamentos para url desconhecida
server.use((req,res, next) => {
  const erro = new Error ('Não Encontrado');
  res.status = 404;
  next(erro);
})

server.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: { mensagem: error.message}
  })
});


server.listen( 5000, () => console.log("Server conectado") )