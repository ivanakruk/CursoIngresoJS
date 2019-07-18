function mostrar()
{/*Al presionar el botón pedir números hasta que el USUARIO QUIERA
	e informar la suma acumulada y el promedio.*/


	var cont=0;
	var acum=0;
	var respuesta='true';
	var numero;

	while(respuesta=='true')
	{	cont ++;
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		
		acum=acum+cont;
		

		


	}


document.getElementById('suma').value=acum;
document.getElementById('promedio').value=acum/cont;

}//FIN DE LA FUNCIÓN