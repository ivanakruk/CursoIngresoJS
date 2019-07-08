/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero1;
    var numero2;
    var numero3;
    var resultado;

    
    numero1=document.getElementById('PrecioUno').value;
    numero2=document.getElementById('PrecioDos').value;
    numero3=document.getElementById('PrecioTres').value;

    resultado=parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
    alert("La suma es :"+resultado);
	
}
function Promedio () 
{   var numero1;
    var numero2;
    var numero3;
    var resultado;
    var suma;

    numero1=document.getElementById('PrecioUno').value;
    numero2=document.getElementById('PrecioDos').value;
    numero3=document.getElementById('PrecioTres').value;

    
    suma=parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
    resultado=(suma)/3;
    
    
    alert("El promedio es :"+resultado);
	
}
function PrecioFinal () 
{   
    var numero1;
    var numero2;
    var numero3;
    var resultado;
    var suma;

    numero1=document.getElementById('PrecioUno').value;
    numero2=document.getElementById('PrecioDos').value;
    numero3=document.getElementById('PrecioTres').value;

    
    suma=parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
    resultado=parseInt(resultado);
    resultado=suma+((21*suma)/100);
    
    
    alert("El precio final mas IVA del 21% es :"+resultado);
	
}