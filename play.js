function green()
{

var bolaverde10 = document.createElement("div");
bolaverde10.setAttribute("class", "bolaverde10");

//math.randon cria um números decimais aleatório, o Math.floor faz desse número um interior, eliminando a flutuação.
var pg1 = Math.floor(Math.random() * 1300);

// left=400px top=60px
var pg2 = Math.floor(Math.random() * (400) + 60);

bolaverde10.setAttribute("style", "left:"+pg1+"px;top:"+pg2+"px;");

bolaverde10.setAttribute("onclick", "estourarverde(this)");

//appendChild add o elelmento na tela
document.body.appendChild(bolaverde10);

}


function red()
{

var bolavemelha50 = document.createElement("div");
bolavemelha50.setAttribute("class", "bolavemelha50");

var pr1 = Math.floor(Math.random() * 1000);
var pr2 = Math.floor(Math.random() * (400) + 60);

bolavemelha50.setAttribute("style", "left:"+pr1+"px;top:"+pr2+"px;");
bolavemelha50.setAttribute("onclick", "estourarvermelho(this)");

document.body.appendChild(bolavemelha50);

}


var ponto = 0;
function estourarverde(verde)
{
 //removeChild remove o elemento da tela   
 document.body.removeChild(verde);

 ponto = ponto + 10;
 document.getElementById("pontos").innerHTML = ponto;
}


function estourarvermelho(vermelha)
{
 //removeChild remove o elemento da tela   
 document.body.removeChild(vermelha);

 ponto = ponto + 50;
 document.getElementById("pontos").innerHTML = ponto;
}


function play()
{
 //roda uma função a cada 1 segundo
 setInterval(green, 1000);
 setInterval(red, 10000); 
}


 
