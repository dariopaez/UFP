function imprimir()
{
    window.DatecsPrinter.connect("00:19:56:78:9B:59", function() {
        var texto = 'Cualquier texto que quieras imprimir';
        window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
            window.DatecsPrinter.feedPaper(150, function() {
                window.DatecsPrinter.disconnect(function() {
                    /*alert("impreso");*/
                }, function() {
                    alert(JSON.stringify(error));
                });
            }, function(error) {
                alert(JSON.stringify(error));
            });
        }, function(error) {
            alert(JSON.stringify(error));
        });
    }, function(error) {
        alert(JSON.stringify(error));
    });
}

/*FIN POCESO BUENO*/
function imprimirTres()
{
    if(localStorage["tipo"]=="1")
    {
        texto="{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto=texto+"\n";
        texto=texto+"{center}{s}Tel.: 3213317578 - 3144796165\n";
        texto=texto+"Cra. 5 14 -42 Ofi 10 Ed Ptal de la 5\n";
        texto=texto+"Email: comercial@unidatos.com{/s}\n";
        texto=texto+"\n";
        texto=texto+"{reset}{center}FACTURA NRO: {b}"+localStorage["ticket"]+"\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}CLIENTE:   {/left}{b}"+localStorage["cliente"]+"{/b}\n";
        texto=texto+"{left}DOCUMENTO: {/left}{b}"+localStorage["documento"]+"{/b}\n";
        texto=texto+"{left}DIRECCION: {/left}{b}"+localStorage["direccion"]+"{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        //texto=texto+"EMAIL:     "+localstorage["correo"]+"\n";

        var num = localStorage["neto1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"{center}DETALLE\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}"+localStorage["producto1"]+"\n";
        //iva=(localstorage["total"]*16)/116;
        texto=texto+"{right}$ "+valor+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}NETO:             $ "+neto+"\n";

        var num = localStorage["iva1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }
        
        texto=texto+"{right}IVA 16%:           $ "+iva+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        
        var num = localStorage["valor1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}{h}TOTAL:             $ "+total+"{/h}\n";
        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        texto=texto+"{left}{s}{b}*{/b} Esta factura de venta se asimila en tdos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio{/s}\n\n";
        texto=texto+"{s}{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.{/s}";
        texto=texto+"{reset}";
    }

    if(localStorage["tipo"]==2)
    {
        texto="{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto=texto+"\n";
        texto=texto+"{center}{s}Tel.: 3213317578 - 3144796165\n";
        texto=texto+"Cra. 5 14 -42 Ofi 10 Ed Ptal de la 5\n";
        texto=texto+"Email: comercial@unidatos.com{/s}\n";
        texto=texto+"\n";
        texto=texto+"{reset}{center}FACTURA NRO: {b}"+localStorage["ticket"]+"\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}CLIENTE:   {/left}{b}"+localStorage["cliente"]+"{/b}\n";
        texto=texto+"{left}DOCUMENTO: {/left}{b}"+localStorage["documento"]+"{/b}\n";
        texto=texto+"{left}DIRECCION: {/left}{b}"+localStorage["direccion"]+"{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        //texto=texto+"EMAIL:     "+localstorage["correo"]+"\n";

        var num = localStorage["neto2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"{center}DETALLE\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}"+localStorage["producto2"]+"\n";
        //iva=(localstorage["total"]*16)/116;
        texto=texto+"{right}$ "+valor+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}NETO:             $ "+neto+"\n";

        var num = localStorage["iva2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }
        
        texto=texto+"{right}IVA 16%:           $ "+iva+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        
        var num = localStorage["valor2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}{h}TOTAL:             $ "+total+"{/h}\n";
        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        texto=texto+"{left}{s}{b}*{/b} Esta factura de venta se asimila en tdos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio{/s}\n\n";
        texto=texto+"{s}{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.{/s}";
        texto=texto+"{reset}";

    }

    if(localStorage["tipo"]==3)
    {
        texto="{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto=texto+"\n";
        texto=texto+"{center}{s}Tel.: 3213317578 - 3144796165\n";
        texto=texto+"Cra. 5 14 -42 Ofi 10 Ed Ptal de la 5\n";
        texto=texto+"Email: comercial@unidatos.com{/s}\n";
        texto=texto+"\n";
        texto=texto+"{reset}{center}FACTURA NRO: {b}"+localStorage["ticket"]+"\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}CLIENTE:   {/left}{b}"+localStorage["cliente"]+"{/b}\n";
        texto=texto+"{left}DOCUMENTO: {/left}{b}"+localStorage["documento"]+"{/b}\n";
        texto=texto+"{left}DIRECCION: {/left}{b}"+localStorage["direccion"]+"{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        //texto=texto+"EMAIL:     "+localstorage["correo"]+"\n";

        var num = localStorage["neto1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"{center}DETALLE\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}"+localStorage["producto1"]+"\n";
        //iva=(localstorage["total"]*16)/116;
        texto=texto+"{right}$ "+valor+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}NETO:             $ "+neto+"\n";

        var num = localStorage["iva1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }
        
        texto=texto+"{right}IVA 16%:           $ "+iva+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        
        var num = localStorage["valor1"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}{h}TOTAL:             $ "+total+"{/h}\n";
        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        texto=texto+"{left}{s}{b}*{/b} Esta factura de venta se asimila en tdos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio{/s}\n\n";
        texto=texto+"{s}{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.{/s}";
        texto=texto+"{reset}";
    }
    
    window.DatecsPrinter.connect("00:19:56:78:9B:59", function() {
        window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
            window.DatecsPrinter.feedPaper(150, function() {
                window.DatecsPrinter.disconnect(function() {
                    /*alert("impreso");*/
                }, function() {
                    alert(JSON.stringify(error));
                });
            }, function(error) {
                alert(JSON.stringify(error));
            });
        }, function(error) {
            alert(JSON.stringify(error));
        });
    }, function(error) {
        alert(JSON.stringify(error));
    });

}

function imprimirCuatro()
{
    if(localStorage["tipo"]==3)
    {
        /**********************************/
        /*          RECIBO                */

        texto="{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto=texto+"\n";
        texto=texto+"{center}{s}Tel.: 3213317578 - 3144796165\n";
        texto=texto+"Cra. 5 14 -42 Ofi 10 Ed Ptal de la 5\n";
        texto=texto+"Email: comercial@unidatos.com{/s}\n";
        texto=texto+"\n";
        texto=texto+"{reset}{center}RECIBO NRO: {b}"+localStorage["ticket"]+"\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}CLIENTE:   {/left}{b}"+localStorage["cliente"]+"{/b}\n";
        texto=texto+"{left}DOCUMENTO: {/left}{b}"+localStorage["documento"]+"{/b}\n";
        texto=texto+"{left}DIRECCION: {/left}{b}"+localStorage["direccion"]+"{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        //texto=texto+"EMAIL:     "+localstorage["correo"]+"\n";

        var num = localStorage["valor2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"{center}DETALLE\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}"+localStorage["producto2"]+"\n";
        texto=texto+"{right}$ "+total+"\n";

        texto=texto+"================================\n";
        texto=texto+"{reset}";  
        texto=texto+"\n";
        texto=texto+"{right}{h}TOTAL:             $ "+total+"{/h}\n";

    }

    if(localStorage["tipo"]==2)
    {
        texto="{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto=texto+"\n";
        texto=texto+"{center}{s}Tel.: 3213317578 - 3144796165\n";
        texto=texto+"Cra. 5 14 -42 Ofi 10 Ed Ptal de la 5\n";
        texto=texto+"Email: comercial@unidatos.com{/s}\n";
        texto=texto+"\n";
        texto=texto+"{reset}{center}FACTURA NRO: {b}"+localStorage["ticket"]+"\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}CLIENTE:   {/left}{b}"+localStorage["cliente"]+"{/b}\n";
        texto=texto+"{left}DOCUMENTO: {/left}{b}"+localStorage["documento"]+"{/b}\n";
        texto=texto+"{left}DIRECCION: {/left}{b}"+localStorage["direccion"]+"{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        //texto=texto+"EMAIL:     "+localstorage["correo"]+"\n";

        var num = localStorage["neto2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"{center}DETALLE\n";
        texto=texto+"--------------------------------\n";
        texto=texto+"{reset}";
        texto=texto+"{left}"+localStorage["producto2"]+"\n";
        //iva=(localstorage["total"]*16)/116;
        texto=texto+"{right}$ "+valor+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}NETO:             $ "+neto+"\n";

        var num = localStorage["iva2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }
        
        texto=texto+"{right}IVA 16%:           $ "+iva+"\n";
        texto=texto+"================================\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        
        var num = localStorage["valor2"];
        if(!isNaN(num)){
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/,'');
            num;
        }

        texto=texto+"{right}{h}TOTAL:             $ "+total+"{/h}\n";
        texto=texto+"\n";
        texto=texto+"{reset}";
        texto=texto+"\n";
        texto=texto+"{left}{s}{b}*{/b} Esta factura de venta se asimila en tdos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio{/s}\n\n";
        texto=texto+"{s}{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.{/s}";
        texto=texto+"{reset}";
    }
    
    window.DatecsPrinter.connect("00:19:56:78:9B:59", function() {
        window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
            window.DatecsPrinter.feedPaper(100, function() {
                window.DatecsPrinter.disconnect(function() {
                    /*alert("impreso");*/
                }, function() {
                    alert(JSON.stringify(error));
                });
            }, function(error) {
                alert(JSON.stringify(error));
            });
        }, function(error) {
            alert(JSON.stringify(error));
        });
    }, function(error) {
        alert(JSON.stringify(error));
    });

}