/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerodividendo;
    var numerodivisor;
    var resultado;

    numerodividendo=document.getElementById('numeroDividendo').value;
    numerodivisor=document.getElementById('numeroDivisor').value;
    
    numerodividendo= parseInt(numerodividendo);
    numerodivisor= parseInt(numerodivisor);

    resultado=parseInt(numerodividendo) % parseInt(numerodivisor);
    alert("El restoo es:"+resultado);
}
