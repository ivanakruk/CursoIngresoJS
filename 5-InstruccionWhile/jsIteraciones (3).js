function mostrar()
{ /*al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

    var clave = prompt("Ingrese el número clave.");
    while(clave!='utn750')//TE OLVIDAS LAS COMILLAS Q VAN ENTRE LA CLAVE, OJO.!
    {
        alert("Contraseña invalida, ingrese nuevamente");
        clave=prompt("Ingrese clave nuevamente");
    }


}//FIN DE LA FUNCIÓN
