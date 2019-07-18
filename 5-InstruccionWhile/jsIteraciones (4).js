function mostrar()
{	/*al presionar el botón pedir un número entre 0 y 9 inclusive.*/

	var numero
	numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while ((numero<0 || numero>9) || isNaN(numero))//si el n° es menor a cero o el n° es mayor a 9 
	//o si no es un numero, que reproduzca el bucle de vuelta hasta ingresar lo que se pide
	{	
		numero=prompt("Número invalido,ingrese nuevamente.");
		numero=parseInt(numero);

	}
	document.getElementById('Numero').value=numero; 
	//LE AVISAMOS Q QUEREMOS QUE SE MUESTRE DSP EN EL RECUADRO Q ESTA EN LA PAG
}//FIN DE LA FUNCIÓN