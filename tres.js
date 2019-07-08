function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;// tomo las variables

    precio=prompt("Ingrese el precio"); // Tomo los datos por prompt
    descuento=prompt("Ingrese el porcentaje del descuento");

    preciofinal=parseInt(preciofinal); //aviso que la variable del resultado es un numero

    preciofinal=precio-(precio*descuento/100);

    document.getElementById('elPrecioFinal').value=preciofinal// la variable se va a mostrar en el casillero de id


}
