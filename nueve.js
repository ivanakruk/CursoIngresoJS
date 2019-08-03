/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 
y la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera. 
 informar al terminar el ingreso por document.write: 

a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

function mostrar()
{
    var nombreAnimal;
    var nombreAnimalmaspesado;
    var pesoAnimal;
    var temperatura;
    var temperaturaAnimalmaspesado;
    var promedioPesos;
    var pesoMax;
    var pesoMaxbajocero;
    var pesoMinbajocero;

    var contadorTempmenoscero=0;
    var contadorTempPar=0;
    var contadorAnimal=0;
    var acumPeso=0;

    var respuesta=true;

    while(respuesta==true)
    {
        nombreAnimal=prompt("Ingrese nombre del animal");
        pesoAnimal=prompt("Ingrese peso del animal entre 1 y 1000");
        pesoAnimal=parseInt(pesoAnimal);
        while(pesoAnimal<1 || pesoAnimal>1000)
        {
            pesoAnimal=prompt("ERROR, Ingrese un peso correcto");
            pesoAnimal=parseInt(pesoAnimal);
        }
        
        temperatura=prompt("Ingrese temperatura del hábitat entre -30 y 30");
        while(temperatura<-30 || temperatura >30)
        {
            temperatura=prompt("ERROR, debe ingresar una temperatura entre -30 y 30");
        }

        if(temperatura%2==0)
        {
            contadorTempPar++;
        }

        if(contadorAnimal==0)// con el contador igualo las otras variables con las variables que toman datos
        {   
            pesoMax=pesoAnimal;
            temperaturaAnimalmaspesado=temperatura
            nombreAnimalmaspesado=nombreAnimal
        }
        else
        {
            if(pesoAnimal>pesoMax)//todo lo que se encuentra dentro esta condicionado por peso de animal max
            {
                pesoMax=pesoAnimal;//Estoy diciendo que ademas del peso las sig variables tmb van estar en conjunto con el peso max
                temperaturaAnimalmaspesado=temperatura;
                nombreAnimalmaspesado=nombreAnimal
            }
        }


        if(temperatura<0)
        {
            contadorTempmenoscero++;
        }
        
        if(contadorAnimal==0)
        {
            pesoMaxbajocero=pesoAnimal;
            pesoMinbajocero=pesoAnimal;
        }
        else
        {
             if (pesoAnimal>pesoMaxbajocero)
            {
                pesoMaxbajocero=pesoAnimal;

            }
            if(pesoAnimal<pesoMinbajocero)
            {
                pesoMinbajocero=pesoAnimal;
            }
        
        }


     contadorAnimal++;
     acumPeso=acumPeso+pesoAnimal;
     promedioPesos=acumPeso/contadorAnimal;
     console.log(promedioPesos)
     respuesta=confirm("Desea continuar?");
     
    }

document.write("a) La cantidad de temperaturas pares: "+contadorTempPar+"<br>");
document.write("b) Nombre y temperatura del animal más pesado :"+nombreAnimalmaspesado+" "+temperaturaAnimalmaspesado+"°grados"+" <br>"); 
document.write("c) La cantidad de animales que viven a menos de 0 grados: "+contadorTempmenoscero+"<br>");
document.write("d) El promedio del peso de todos los animales: "+promedioPesos+"<br>");
document.write("f) Peso máximo de los animales con temperaturas bajo cero "+pesoMaxbajocero+"Kg"+"<br>");
document.write("f) Peso mínimo de los animales con temperaturas bajo cero "+pesoMinbajocero+"Kg"+"<br>");
   
}
