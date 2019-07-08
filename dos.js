function mostrar()
{
    var nombre;
    var localidad;


    nombre=document.getElementById('elNombre').value;
    localidad=document.getElementById('laLocalidad').value;
 //Si El id esta mal, sale null
// Sale undefine cuando la variable no esta definida
// Si sale object[htmlimputElement] significa que el codigo document esta incompleto le falta el .value 

    alert("Usted es: " +nombre+ " y vive en la localidad de "+localidad);
  
}
