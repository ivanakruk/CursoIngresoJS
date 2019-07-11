function mostrar()
{
    var precio;
    precio=document.getElementById('edad').value;

    if (precio<25)
    {
        alert("BARATO");
    }

    else 
        
        if (precio>75)
        {
            alert("CARO");
        }
        
        else
        {
            alert("BIEN");
        }
//tomo la edad  


}//FIN DE LA FUNCIÓN