/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparascant;
    var precio;
    var descuento;
    lamparascant=document.getElementById("Cantidad").value;
    Marca=document.getElementById('Marca').value;

    lamparascant=parseInt(lamparascant);
    precio=parseInt(precio);
    precio=35;
    descuento=parseInt(descuento);
    
    

    if(lamparascant>6)
    {
        descuento=precio*lamparascant-(precio*lamparascant*50/100);
        document.getElementById('precioDescuento').value=descuento;

    }
    else if (lamparascant==5&&Marca=="ArgentinaLuz")
    {
    descuento=precio*lamparascant-(precio*lamparascant*40/100);
    document.getElementById('precioDescuento').value=descuento;

    }
    else if (lamparascant==5&&Marca!="ArgentinaLuz")
    {
    descuento=precio*lamparascant-(precio*lamparascant*30/100);
    document.getElementById('precioDescuento').value=descuento;
    } 

    else if (lamparascant==4&&Marca=="ArgentinaLuz"||"FelipeLamparas"){
    descuento=precio*lamparascant-(precio*lamparascant*25/100);
    document.getElementById('precioDescuento').value=descuento;
    }

    else if (lamparascant==4&&Marca!="ArgentinaLuz"||"FelipeLamparas"){
    descuento=precio*lamparascant-(precio*lamparascant*20/100);
    document.getElementById('precioDescuento').value=descuento;
    }

    
}
 