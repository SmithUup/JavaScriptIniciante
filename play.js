function addbola()
{

var bola = document.createElement("div");
bola.setAttribute("class", "bola");

//math.randon cria um números decimais aleatório, o Math.floor faz desse número um interior, eliminando a flutuação.
var p1 = Math.floor(Math.random() * 500);
var p2 = Math.floor(Math.random() * 400);

bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");

bola.setAttribute("onclick", "estourar(this)");

document.body.appendChild(bola);

}

function estourar(bolha)
{
 document.body.removeChild(bolha);
}
