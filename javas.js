function cliquedown()
{
    document.getElementById("retornoClique").innerHTML = "Clicou";

}

function cliquesolto()
{

    document.getElementById("retornoClique").innerHTML = "Soltou o clique";

}

function passouMouse()
{

    document.getElementById("retornoClique").innerHTML = "Tá em cima do botão.";

}

function saiu()
{
    document.getElementById("retornoClique").innerHTML = "Ei volte aqui!!!";
}

function movendo()
{
    document.getElementById("retornoClique").innerHTML = "Movendo sobre o botão.";  
}

function clique()
{
    document.getElementById("retornoClique").innerHTML = "Clicou no segundo botão.";  
}

function btdireito()
{
    //o retunr é sobre a ação do botão diretio do Mouse, para não aparecer o menu.
    document.getElementById("retornoClique").innerHTML = "Clicou com botão direito";
    return false;
}

function dbclick()
{
    document.getElementById("retornoClique").innerHTML = "Clicou 2 vezes";
}