    /*(IF)Pedir dos números y mostrar el resultado: 
    Si son iguales los muestro concatenados. 
    Si el primero es mayor, los divido, 
    de lo contrario los sumo. 
    Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
    "la suma es xxx y es menor a 50".*/

    function mostrar()
    {
        var numA;
        var numB;
        var resultado;

        numA=prompt("Ingrese el primer numero");
        numB=prompt("Ingrese el segundo numero");
        
        
        if (numA==numB)
        {
        resultado=numA+numB;  
        }
        else
        {             
            numA=parseInt(numA);
            numB=parseInt(numB);

            if(numA>numB)
            {
                resultado=numA/numB;               
            }
            else
            {
                resultado=numA+numB;


                if(resultado<50)
                {
                    resultado=numA+numB+(" es la suma y es menor a 50");
                }
            }           

        }  
    
    alert(resultado);

    }