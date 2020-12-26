const express = require('express');
const router = express.Router();

// Metodos Get ----------------
router.get('/', (req,res) =>{
  res.status(200).send({
     messagem: "Usando o método GET"
     })
});

router.get('/:id_pedido', (req,res) =>{
  
  const id = req.params;

  res.status(200).send({
     messagem: "Listando um pedido",
     id: id
     })
});
// END Metodos Get ------------

// Metodos POST ------------
router.post('/', (req,res) =>{
  res.status(200).send({
     messagem: "Criando um pedido"
     })
});

// Metodos PUT ------------
router.put('/', (req,res) =>{
  res.status(200).send({
     messagem: "Usando o método PUT"
     })
});

// Metodos DELETE ------------
router.delete('/', (req,res) =>{
  res.status(200).send({
     messagem: "Usando o método DELETE"
     })
});

module.exports = router;