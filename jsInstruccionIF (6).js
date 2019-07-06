function mostrar()
{
    var edad;
    edad=document.getElementById('edad').value;
    edad=parseInt(edad); //Tomo la edad

    if (edad>=18)
    {
        alert("Eres mayor");}
    
        else if (edad>=13&&edad<=17)
        {
        
        alert("Eres adolescente");
    }

        else if (edad<13)
        {

        alert("Eres un niño");
        }

    

    


}