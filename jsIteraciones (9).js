function mostrar()
{/*Al presionar el botón pedir números hasta que el usuario quiera, 
	mostrar el número máximo y el número mínimo ingresado.*/

	var cont=0;
	var numero;
	var respuesta='si';
	var numeromax;
	var numeromin;
	
	while(respuesta!='no')
	{
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		while (isNaN(numero))
		{
			numero=prompt("Error, ingrese nuevamente");
			numero=parseInt(nunmero);
		}
				
		cont=cont+1;
		
			if(cont==1)
			{
					numeromax=numero;
					numeromin=numero;
			}
			if (numero>numeromax)
			{
					numeromax=numero;
			}
			if(numero<numeromin)
			{
					numeromin=numero;
			}
	
	
	respuesta=prompt("Escriba si o no para continuar");
	}

document.getElementById('maximo').value=numeromax;
document.getElementById('minimo').value=numeromin;


}//FIN DE LA FUNCIÓN