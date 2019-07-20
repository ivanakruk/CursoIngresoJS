function mostrar()
{/*Al presionar el botón pedir números hasta que el usuario quiera, 
	sumar los que son positivos y multiplicar los negativos.*/

	var positivo=0;
	var negativo=1; //Es igual a 1 para q se multiplique por un n°negativo de bien el resultado,
	var numero; //			si fuera cero daria cero la multiplicacion
	var respuesta='si';

	
	while(respuesta=='si')
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		
		while (isNaN(numero))
		{
			numero=prompt("Error, ingrese un numero");
			numero=parseInt(numero);
		}
			
		
			if(numero>0)
			{
			positivo=positivo+numero;
			}
			else
			{
				negativo=negativo*numero;
			}

	respuesta=prompt("Escriba si o no para continuar");
	}

	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN