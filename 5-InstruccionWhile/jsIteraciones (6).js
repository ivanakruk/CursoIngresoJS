function mostrar()
{	/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

	var numero;
	var cont=0;
	var acum=0;

	while(cont<5)
	{
		cont++;
		numero=prompt("Ingrese cinco números, uno por ventana");
		numero=parseInt(numero);
		
		acum=acum+numero;
		promedio= acum/cont;
		while (isNaN(numero))
		{
			numero=prompt("Usted no ingreso un número, intente nuevamente");
		}
	}



document.getElementById('suma').value=acum;
document.getElementById('promedio').value=acum/5;

}//FIN DE LA FUNCIÓN