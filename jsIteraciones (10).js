function mostrar()
{	
	var contNegativos=0;
	var contPositivo=0;
	var contPares=0
	var contCeros=0
	var numero;
	var promediosPositivos;
	var promediosNegativos;
	var acumPositivo=0;
	var acumNegativo=0;//SI NO LO IGUALO A CERO O A 1 NO VA ACUMULAR Y VA DAR UNDEFINED o NaN, undefine mas algo NaN
	//declarar contadores y variables 
	
	var respuesta="true";

	while(respuesta=="true")
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		


		if(numero>0)
		{
			contPositivo++;    // O contadorPositivo=contadorPositivo + 1
			acumPositivo=acumPositivo+=numero; 
		}
		
		else
		{
			
			
			if(numero<0)
			{
			
				contNegativos++; 
				acumPositivo=acumPositivo+=numero;

			}
			else
			{
				contCeros++;
			}


		}
		
		if (numero%2==0)
		{
			contPares++;
		}
		
		respuesta=confirm("Desea ingresar otro numero");
	
	}

	if(contPositivo!=0)
	{
		promediosPositivos=acumPositivo/contPositivo;
	}
	else
	{
		promediosPositivos="No se ingresaron numeros positivos";
	}
	if(contNegativos!=0)
	{
		promediosNegativos=acumNegativo/contNegativos;
	}
	else
	{
		promediosNegativos="No se ingresaron numeros negativos"
	}
	
	

	document.write("Suma de los Positivos: " + acumPositivo)+"<br>";
	document.write("Suma de los Negativos: " + acumNegativo)+"<br>";
	document.write("Cantidad de Positivos: " + contPositivo)+"<br>";
	document.write("Cantidad de Negativos: " + contNegativos)+"<br>";
	document.write("Cantidad de Ceros: " + contCeros)+"<br>";
	document.write("Cantidad de Pares: " + contPares)+"<br>";
	document.write("Promedio de Positivos: " + promedioPositivo)+"<br>";
	document.write("Promedio de Negativos: " + promedioNegativos)+"<br>";


}//FIN DE LA FUNCIÓN