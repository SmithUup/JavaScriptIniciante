// Isso é um comentário simples de uma única linda.

/*
Isso é um 
comentário de
multiplas linhas.
*/

//Criando a primeira função.
function acao()
{
    var area = document.getElementById("area");
    var texto = prompt("Qual seu nome?");

    area.innerHTML=texto;
}

function sobrenome(nome)
{
    var snome = document.getElementById("SobreNome");
    var tsnome = prompt("Qual seu sobrenome?");

    SobreNome.innerHTML=nome+" "+tsnome;
}

function addingrediente()
{
    //caputurando o valor de uma input
    var ing = document.getElementById("igrediante").value;

    //caputrando o conteúdo html desse id
    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML=listahtml;

}

function somar()
{
//Recebendo um interior parseInt    
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
alert(n1+n2);
}

function multi()
{
//Recebendo um interior parseInt    
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
alert(n1*n2);
}

function div()
{
//Recebendo um interior parseInt    
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
alert(n1/n2);
}