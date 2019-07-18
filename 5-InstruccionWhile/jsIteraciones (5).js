function mostrar()
{ //Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.

    var sexo = prompt("ingrese f ó m .");
    sexo=sexo.toLowerCase();

    while (sexo!='f' && sexo!='m' ) //DEJA DE OLVIDARTE LAS COMILLAS EEH!
    {
        alert("Dato incorrecto, ingrese nuevamente.");
        sexo =prompt(" Ingrese nuevamente f ó m ");
    }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN