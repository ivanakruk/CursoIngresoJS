/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numerouno;
    var numerodos;
    var resultado;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;

    numerouno= parseInt(numerouno);
    numerodos= parseInt(numerodos);

    resultado=parseInt(numerouno)+ parseInt(numerodos);

    alert("el resultado es:"+resultado);
	
}

function restar()
{
    var numerouno;
    var numerodos;
    var resultado;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;

    numerouno= parseInt(numerouno);
    numerodos= parseInt(numerodos);

    resultado=parseInt(numerouno)- parseInt(numerodos);

    alert("el resultado es:"+resultado);
	
	
}

function multiplicar()
{ 
	var numerouno;
    var numerodos;
    var resultado;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;

    numerouno= parseInt(numerouno);
    numerodos= parseInt(numerodos);

    resultado=parseInt(numerouno)* parseInt(numerodos);

    alert("el resultado es:"+resultado);
}

function dividir()
{
	var numerouno;
    var numerodos;
    var resultado;
    numerouno=document.getElementById('numeroUno').value;
    numerodos=document.getElementById('numeroDos').value;

    numerouno= parseInt(numerouno);
    numerodos= parseInt(numerodos);

    resultado=parseInt(numerouno)/ parseInt(numerodos);

    alert("el resultado es:"+resultado);
}

