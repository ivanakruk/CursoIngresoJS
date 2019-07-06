    function mostrar() 
    {
        var edad;
        edad=document.getElementById('edad').value;
        edad=parseInt(edad);

        // tomo la edad, asignando la variable luego le aviso donde va estar con el id y dsp de que va a ser un valor numerico

        if (edad>=18) {

            alert("Eres mayor de edad");
            
        } else {
            
            alert("Eres menor de edad");
        }

    


        
    }

