const express = require('express')
const app = express()

//midlleware
function cabecalho (conteudo) {
	const topo = "<!DOCTYPE html><html lang = 'pt-br'><head><title>Personagens</title><meta charset = 'UTF-8'></head>"
	return topo + conteudo
}
function corpo (conteudo) {
	return "<body>" + conteudo + "</body></html>"
}
function inicio () {
	return "<h1>Bem vindo a API personagem! Cabeçalho filhão</h1>"
}

function personagem () {
	return "<h1>Oi, eu sou goku!</h1>"
}

//routes
app.get('/', function (req, res) {
	res.send(cabecalho(corpo(inicio())))
})

app.get('/personagem', function (req, res) {
	res.send(personagem())
})

app.listen(8080, function () {
	console.log('Servidor rodando na porta 3000.')
})