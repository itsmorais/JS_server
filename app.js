const express = require('express');
const livros = require('./livros')
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/',(req,res) => {
  res.send("Olá, seja bem vindo ao meu servidor Express")
});

app.get('/cap12', (req,res) =>{
  res.send("<h2> Cápitulo 12: Introdução ao Express </h2>")})


app.post('/filmes',(req,res)=>{
  const {titulo,genero} = req.body
  res.send(`Filme: ${titulo} - Gênero;${genero}, recebido...`)
})

const log = (req,res,next)=>{
  console.log(`........ Acessado em ${new Date()}`)
  next()
}

app.get("/transfere",log,(req,res)=>{
  res.send("OK! Valor transferido com sucesso!")
})

app.use('/livros',livros);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`)
})