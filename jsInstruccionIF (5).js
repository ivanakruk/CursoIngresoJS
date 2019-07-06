function mostrar()
{
    var edad;
    edad=document.getElementById('edad').value;
    edad=parseInt(edad);
    //tomo la edad  
    if (edad>=1&&edad<13) 
    {
    alert("No eres adolescente");}
    else if (edad>=18&&edad<100) //else if es otra condicion dentro del if
    {
    alert("No eres adolescente");


    }


    // else no lleva condicion


}//FIN DE LA FUNCIÓN