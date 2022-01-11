var http = require("http");
var express = require("express");

var app = express();
var bodypParser = require("body-parser");
var login_cad;
var senha_cad;

app.use(express.static("./public"));
app.use(bodypParser.urlencoded({extended: false}));
app.use(bodypParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/cadastrar", function (requisicao, resposta){

    resposta.render("cadastrar");
});

app.get("/", function (req, resp){

    resp.render("logar");
});

app.post(["/","/login"], function (req, resp){
    let login = req.body.logar_login;
    let senha = req.body.logar_senha;
    if(login === login_cad && senha === senha_cad){
        let mensagem = "Sucesso"
        resp.render("Resposta",{mensagem, login, senha})
    }
    else {
        let mensagem = "Falha"
        resp.render("Resposta",{mensagem, login, senha})
    }
    resp.end();
});

app.post("/cadastrar_usuario", function (req, resp){

    login_cad = req.body.login;
    senha_cad = req.body.senha;
    resp.write("<h1>Cadastro realizado!!!</h1>");
    resp.end();
    console.log(login_cad);
    console.log(senha_cad);

    });

let servidor = http.createServer(app);
servidor.listen(8080);
console.log("Servidor Online");