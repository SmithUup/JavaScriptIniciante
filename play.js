function addbola()
{

var bola = document.createElement("div");
bola.setAttribute("class", "bola");

//math.randon cria um números decimais aleatório, o Math.floor faz desse número um interior, eliminando a flutuação.
var p1 = Math.floor(Math.random() * 500);
var p2 = Math.floor(Math.random() * 400);

bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");

bola.setAttribute("onclick", "estourar(this)");

//appendChild add o elelmento na tela
document.body.appendChild(bola);

}

var ponto = 0;
function estourar(bolha)
{
 //removeChild remove o elemento da tela   
 document.body.removeChild(bolha);

 ponto = ponto + 10;
 document.getElementById("pontos").innerHTML = ponto;
}

function play()
{
    //roda uma função a cada 1 segundo
    setInterval(addbola, 1000);
    
}


 
