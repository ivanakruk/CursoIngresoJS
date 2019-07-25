function mostrar()
{ /*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos.2-Suma de los positivos.3-Cantidad de positivos.
	4-Cantidad de negativos.5-Cantidad de ceros. 6-Cantidad de números pares. 
	7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).*/
		var numero;
		var contadorCeros=0;
		var contadorPares=0;
		var contadorPositivos=0;
		var contadorNegativos=0;
		var acumuladorPositivos=0;
		var acumuladorNegativos=0;//se inicializa en 0, sino me da undefined o NaN;
		var promedioPositivos;
		var promedioNegativos;
		var respuesta=true;
		var Diferencia;
		while(respuesta==true)
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
	
			if(numero>0)
			{
				contadorPositivos++;
				acumuladorPositivos+=numero;
			}
			else
			{
				if(numero<0)
				{
					contadorNegativos++;
					acumuladorNegativos+=numero;
				}
				else
				{
					contadorCeros++;
				}
			}
			
			
			if(numero%2==0)
			{
				contadorPares++;
			}
	
		
		
		if(contadorPositivos!=0)
		{
			promedioPositivos=acumuladorPositivos/contadorPositivos;
		}
			else
		{	
				promedioPositivos=("No se ingresaron numeros Positivos");
		}
		if(contadorNegativos!=0)
		{
	
			promedioNegativos=acumuladorNegativos/contadorNegativos;//si se divide por 0 da NaN
		}
			else
		{
				promedioNegativos=("No se ingresaron numeros Negativos");
		}
		
				
		
		
		respuesta=confirm("Desea continuar?");
		
	}

	Diferencia=acumuladorPositivos+(acumuladorNegativos);
	
	
	document.write("1.suma de positivos :"+acumuladorPositivos + "<br>");
	document.write("2.suma de negativoss :"+acumuladorNegativos + "<br>");
	document.write("3.cantidad de positivos :"+contadorPositivos + "<br>");
	document.write("4.cantidad de negativos :"+contadorNegativos + "<br>");
	document.write("4.cantidad de ceros :"+contadorCeros + "<br>");
	document.write("5.cantidad de pares :"+contadorPares + "<br>");
	document.write("7.Promedio de positivos :"+promedioPositivos+ "<br>");
	document.write("8.Promedio de negativos:"+promedioNegativos + "<br>");
	document.write("9.Diferencia e/ positivos y negativos: "+ Diferencia + "<br>");
	}//FIN DE LA FUNCIÓN