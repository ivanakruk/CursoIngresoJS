//*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
    var edad;
    var estadocivil;
    edad=document.getElementById('edad').value;
    estadocivil=document.getElementById('estadoCivil').value;

    
//tomo la edad  
if (edad<18&&estadocivil!="Soltero"){
alert("Es muy pequeño para No ser soltero");
}
	


}//FIN DE LA FUNCIÓN