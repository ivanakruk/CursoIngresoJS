function mostrar()
{/*Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert*/

    var dia;
    var mensaje;

    dia=prompt("Ingrese un dia de la semana");

    switch(dia){

    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
        mensaje= "A trabajar";
    break;
    
    case 'Sabado':
    case 'Domingo':
        mensaje= "Buen findee!";
    break;
    
    default:
        mensaje="No es un dia valido";
    break;
    }
alert(mensaje);
}
