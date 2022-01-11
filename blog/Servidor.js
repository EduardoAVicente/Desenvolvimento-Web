let http = require("http");//chama o protocolo http
let express= require('express');//chama a biblioteca express
let bodyParser = require('body-parser');
let mongoose = require("mongoose")//chama o banco de dados
let app = express();// variavel para acessar o fremework do express
app.set('view engine', "ejs");
app.set("views","./views");

app.use(express.static("./public"));//define o conteudo da pasta public como estatica
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

let postSchema= new mongoose.Schema({//define os esquema do post como string
    dbtitulo: "String",
    dbresumo : "String",
    dbconteudo: "String"

});
let postModel = mongoose.model("Post", postSchema);

mongoose.connect("mongodb://localhost/blog");

app.get("/", function (req,resp) { //pagina inicial é a /
    postModel.find(function (erro,objs){
        resp.render("principal", {posts: objs});
    });

});

app.get("/criaPost", function (req,resp) { //pagina inicial é a
    resp.render("formulario")
});
app.post("/criaPost",function (req,resp){
    let titulo_servidor = req.body.titulo;
    let resumo_servidor = req.body.resumo;
    let conteudo_servidor = req.body.conteudo;


let novo = new postModel({
    dbtitulo: titulo_servidor,
    dbresumo: resumo_servidor,
    dbconteudo: conteudo_servidor
});
novo.save();
resp.render("mensagem");
});
var servidor = http.createServer(app);///cria o servidor
servidor.listen(8080);//porta do servidor

console.log("Servdor online...");//mostra que o servidor esta online