function validar()
{
    var valor = document.getElementById("numero").value;

    //length conta o quantidade de caracteres.
    if(valor.length == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}