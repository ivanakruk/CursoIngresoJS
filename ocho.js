/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número 
entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
   var datoLetra;
   var datoNumero;
   var promedioPositivos;
   var numeroMax;
   var numeroMin;
   var letraMax;
   var letraMin;

   var contadorNumero=0;
   var contadorPares=0;
   var contadorImpar=0;
   var contadorCeros=0;
   var contadorPositivo=0;
   var acumPositivo=0;
   var acumNegativo=0;

   var respuesta=true;

   while(respuesta==true)
   {
       datoLetra=prompt("Ingrese una letra");

       datoNumero=prompt("Ingrese un número entre -100 y 100");
       datoNumero=parseInt(datoNumero);

       while(datoNumero<-100 || datoNumero>100)
       {
        datoNumero=prompt("ERROR, Ingrese un número entre -100 y 100");
        datoNumero=parseInt(datoNumero);
       }

       if(datoNumero==0)
       {
           contadorCeros++;
       }
       else
       {
           if(datoNumero>0)
           {
               contadorPositivo++;
               acumPositivo=acumPositivo+datoNumero;
           }
           else
           {
               acumNegativo=acumNegativo+datoNumero;
           }         
       }
       
       if(datoNumero%2==0)
       {
           contadorPares++;
       }
       else
       {
           contadorImpar++;
       }
       
       
       if(contadorNumero==0)
       {
           numeroMax=datoNumero;
           numeroMin=datoNumero;
           letraMax=datoLetra;
           letraMin=datoLetra;
           contadorNumero++;
           
       }
       else
       {
           if(datoNumero>numeroMax)
           {
               numeroMax=datoNumero;
               letraMax=datoLetra;
           }
           if(datoNumero<numeroMin)
           {
               numeroMin=datoNumero;
               letraMin=datoLetra;
           }

       }

 


promedioPositivos=acumPositivo/contadorPositivo;
respuesta=confirm("Desea continuar?"); 

}


document.write("Los numero pares son: "+contadorPares+"<br>");
document.write("Los numero impares son: "+contadorImpar+"<br>");
document.write("Cantidad de ceros: "+contadorCeros+"<br>");
document.write("El promedio de todos los positivos: "+promedioPositivos+"<br>");
document.write("La suma de todos los negativos: "+acumNegativo+"<br>");
document.write("La letra y su número maxímo: "+letraMax+""+numeroMax+ "<br>");
document.write("La letra y su número mínimo: "+letraMin+""+numeroMin+ "<br>");




}
