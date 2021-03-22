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

//array, em global
var lista = ["Feijão", "Arroz", "Batata", "Pera", "Uva", "Tamara", "Ovos", "Banana"];

//Transformando o array em string separando por virgula e espaço.
var ListaString = lista.join(", ");

function VerLista()
{ 
    var ListaInfor = document.getElementById("ListaInfor");
    ListaInfor.innerHTML = ListaString;
}

function posicao()
{
    var posicaotxt = document.getElementById("posicaotxt").value; 
    var ListaInfor = document.getElementById("ListaInfor");

    //Capturando a posição do array
    var posicaonumber = lista.indexOf(posicaotxt);
    
    //Se o retorno da busca for menor que 0, o valor não existe.
    if (posicaonumber < 0)
    {
        ListaInfor.innerHTML = "Valor não encontrado.";
    }
    else
    {
        ListaInfor.innerHTML = posicaonumber;
    }
}

function quantidade()
{
 var ListaInfor = document.getElementById("ListaInfor");

 //Exibindo o total de elementos de um array
 ListaInfor.innerHTML = lista.length;
}

function removeListaUltimo()
{
    //remove o último item de um array
    lista.pop();
    var ListaInfor = document.getElementById("ListaInfor");
    ListaInfor.innerHTML = lista;

}

function removeListaPrimeiro()
{
    //remove o primeiro item de um array
    lista.shift();
    var ListaInfor = document.getElementById("ListaInfor");
    ListaInfor.innerHTML = lista;

}

function Addarray()
{
    var ArrayTxt = document.getElementById("ArrayTxt").value;
    //Adiciona um item em um array.
    lista.push(ArrayTxt);
    ListaInfor.innerHTML = lista;
}

//LOOP WHILE

function W()
{
var x = 0;

document.write("Iniciando um Loop WHILE...<br>");

while (x < 10)
{
    document.write("Número: "+x+"<br>");
    x++;
}
document.write("Finalizando o loop");
}
//FIM DO LOOP WHILE



//LOOP FOR
function F()
{
document.write("<br><br>");
document.write("Iniciando um Loop FOR...<br>");
for(x = 0; x < 10; x++)
{
    document.write("Número: "+x+"<br>");

}
document.write("Finalizando o loop");
}

//FIM LOOP FOR


function UmLindoSwitch()
{

    x =prompt("Qual é o número?");

    switch(x)
    {
        case "0":
            alert("Agora X é 0");
            break;
        
        case "1":
             alert("Agora X é 1");
             break;

        case "2":
            alert("Agora X é 2");
            break;

        default:
            alert("X não pode ser "+x);
            break;
        
    }


}
