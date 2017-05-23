var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', function() {
            /*alert("imprimir");*/
            var parentElement = document.getElementById('deviceready');

            console.log('Received Event: ' + 'deviceready');
        }, false);
    }

};

var enviarEmail = false;


function enviarFacturaPDF(){
    $.ajax({
            type: "post",          
            url: "http://appretail.unidatos.net/appunidatos/pdf/facturaPDF.php?ticket="+ localStorage.getItem('ticket')

        }).success(function(reso) {
                alertify.set('notifier','position', 'top-left');
                alertify.success('Factura generada con exito!');
         $.ajax({
          type: "POST",
          url: "http://appretail.unidatos.net/appunidatos/emailphp/gmail/gmail.php?ticket=" + localStorage.getItem('ticket')+"&correo="+ localStorage.getItem('correo')
            }).done(function(resp) {
                  alertify.set('notifier','position', 'top-left');
                  if(resp=="true"){
                     alertify.success('Se envió correo con éxito');

                  }else{
                     alertify.error('Error al enviar el correo');
                  }
                 console.log(resp);
         });
        });
    }
     function enviarReciboPDF(){
    $.ajax({        
          type: "post",           
          url:"http://appretail.unidatos.net/appunidatos/pdf/reciboPDF.php?ticket="+localStorage.getItem('ticket')
          }).success(function(reso){
                alertify.set('notifier','position', 'top-left');
                alertify.success('Recibo generado con exito!');
        $.ajax({
          type: "POST",
          dataType: "json",
          url:"http://appretail.unidatos.net/appunidatos/emailphp/gmail/gmailRecibo.php?ticket="+localStorage.getItem('ticket')+"&correo="+ localStorage.getItem('correo')
        }).success(function(resp) {
                 alertify.set('notifier','position', 'top-left');
                  if(resp=="true"){
                     alertify.success('Se envió correo con éxito');
                  }else{
                     alertify.error('Error al enviar el correo');
                  }
                 console.log(resp);
         });
         });
   }

function imprimirTres() {
    if (localStorage["tipo"] == "1") {
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "NIT: 900455301-1\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "Ed Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["resolucion"] + "\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}FACTURA # {b}C " + localStorage["ticket2"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["neto1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto1"] + "\n";
        //iva=(localstorage["total"]*16)/116;
        texto = texto + "{right}$ " + valor + "\n";
        texto = texto + "\n";
        //texto=texto+"{left}{b}Serial   Equipo:{/b} "+localStorage["serialequipo"]+"\n";
        texto = texto + "{left}{b}Garantia Equipo:{/b} " + localStorage["garantia"] + "\n";
        texto = texto + "{left}{b}Nro.Linea nueva:{/b} " + localStorage["nrosimcard"] + "\n";
        texto = texto + "{left}{b}imei:{/b} " + localStorage["imei"] + "\n";
        texto = texto + "{left}{b}iccid:{/b} " + localStorage["issed"] + "\n";
        texto = texto + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}NETO:             $ " + neto + "\n";

        var num = localStorage["iva1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}IVA :               $ " + iva + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";

        var num = localStorage["valor1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{left}{b}*{/b} Esta factura de venta se asimila en todos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio\n\n";
        texto = texto + "{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    if (localStorage["tipo"] == 2) {
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "NIT: 900455301-1\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["resolucion"] + "\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}FACTURA # {b}C " + localStorage["ticket2"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["neto2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto2"] + "\n";
        //iva=(localstorage["total"]*16)/116;
        texto = texto + "{right}$ " + valor + "\n";
        texto = texto + "\n";
        /*texto=texto+"{left}{b}Serial   Equipo:{/b} "+localStorage["serialequipo"]+"\n";
        texto=texto+"{left}{b}Garantia Equipo:{/b} "+localStorage["garantia"]+"\n";
        texto=texto+"{left}{b}Nro.Linea nueva:{/b} "+localStorage["nrosimcard"]+"\n";
        texto=texto+"{left}{b}imei:{/b} "+localStorage["imei"]+"\n";*/
        texto = texto + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}NETO:             $ " + neto + "\n";

        var num = localStorage["iva2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}IVA :               $ " + iva + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";

        var num = localStorage["valor2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{left}{b}*{/b} Esta factura de venta se asimila en todos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio\n\n";
        texto = texto + "{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";

    }

    if (localStorage["tipo"] == 3) {
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "NIT: 900455301-1\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["resolucion"] + "\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}FACTURA # {b}C " + localStorage["ticket2"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["neto1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        /*valor 1*/
        var total = localStorage["valor1"];
        if (!isNaN(total)) {
            total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = total.split('').reverse().join('').replace(/^[\.]/, '');
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto1"] + "\n";
        //iva=(localstorage["total"]*16)/116;
        texto = texto + "{right}$ " + total + "\n";
        texto = texto + "{left}Saldo a diferir\n";

        var cuota = localStorage["valor1"] - localStorage["cuota"];
        if (!isNaN(cuota)) {
            cuota = cuota.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            cuota = cuota.split('').reverse().join('').replace(/^[\.]/, '');
        }

        texto = texto + "{right}$ " + cuota + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "\n";
        //texto=texto+"{left}{b}Serial   Equipo:{/b} "+localStorage["serialequipo"]+"\n";
        texto = texto + "{left}{b}Garantia Equipo:{/b} " + localStorage["garantia"] + "\n";
        texto = texto + "{left}{b}Nro.Linea nueva:{/b} " + localStorage["nrosimcard"] + "\n";
        texto = texto + "{left}{b}imei:{/b} " + localStorage["imei"] + "\n";
        texto = texto + "{left}{b}iccid:{/b} " + localStorage["issed"] + "\n";
        texto = texto + "{left}{b}Nro Cuotas:{/b} " + localStorage["ncuotas"] + "\n";
        texto = texto + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";

        /*dar formato al numero*/

        ivva = (localStorage["cuota"] * 16) / 116;
        ivva = Math.round(ivva);
        nneto = localStorage["cuota"] - ivva;

        var num = nneto;
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/, '');
        }

        texto = texto + "{right}NETO:             $ " + neto + "\n";

        var num = ivva;
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}IVA :               $ " + iva + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";

        var num = localStorage["cuota"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{left}{b}*{/b} Esta factura de venta se asimila en todos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio\n\n";
        texto = texto + "{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    if (localStorage["tipo"] == 4) {
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "NIT: 900455301-1\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{center}" + localStorage["resolucion"] + "\n";
        texto = texto + "\n";
        texto = texto + "{reset}{center}FACTURA # {b}C " + localStorage["ticket2"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["neto1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            valor = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto1"] + "\n";
        //iva=(localstorage["total"]*16)/116;
        texto = texto + "{right}$ " + valor + "\n";
        texto = texto + "\n";
        /*texto=texto+"{left}{b}Serial   Equipo:{/b} "+localStorage["serialequipo"]+"\n";
        texto=texto+"{left}{b}Garantia Equipo:{/b} "+localStorage["garantia"]+"\n";
        texto=texto+"{left}{b}Nro.Linea nueva:{/b} "+localStorage["nrosimcard"]+"\n";
        texto=texto+"{left}{b}imei:{/b} "+localStorage["imei"]+"\n";*/
        texto = texto + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";

        /*dar formato al numero*/

        var num = localStorage["neto1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            neto = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}NETO:             $ " + neto + "\n";

        var num = localStorage["iva1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            iva = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}IVA :              $ " + iva + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";

        var num = localStorage["valor1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{left}{b}*{/b} Esta factura de venta se asimila en todos sus efectos legales a una letra de cambio segun art. 774 del codigo de comercio\n\n";
        texto = texto + "{b}OBSERVACIONES{/b}: En virtud por lo reglamentado en la ley 1607 de 2012, art. 57, favor efectuar retencion en la fuente sobre.";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: localStorage["durl"] + "EstadoFactura.php",
        data: {

            ticket: localStorage.getItem('ticket')
        },
    }).done(function(resp) {
        alertify.alert("Factura Impresa");
    });

    window.DatecsPrinter.listBluetoothDevices(
        function(devices) {
            window.DatecsPrinter.connect(devices[0].address, function() {
                window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
                    window.DatecsPrinter.feedPaper(100, function() {
                        window.DatecsPrinter.disconnect(function() {
                        }, function() {
                            alertify.alert('Error!', JSON.stringify(error));
                            //alert(JSON.stringify(error));
                        });
                    }, function(error) {
                        alertify.alert('Error!', JSON.stringify(error));
                        //alert(JSON.stringify(error));
                    });
                }, function(error) {
                    alertify.alert('Error!', JSON.stringify(error));
                    //alert(JSON.stringify(error));
                });
            }, function(error) {
                alertify.alert('Error!', JSON.stringify(error));
                //alert(JSON.stringify(error));
            });
        },
        function(error) {
            alertify.alert('Error!', JSON.stringify(error));
            //alert(JSON.stringify(error));
        }
    );


}

function imprimirTicket() {
    if (localStorage.getItem('uTicket') == 1) {
        var num = localStorage.getItem('total');
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = "{center}UNIDATOS DE COLOMBIA SAS\n";
        texto = texto + "{center}PREVENTA\n";
        texto = texto + "{center}Fecha: " + localStorage.getItem('fecha') + "  " + localStorage.getItem('hora') + "\n\n";
        texto = texto + "{br}{h}" + "Cuenta: " + localStorage["cuenta"] + "{/h}\n";
        texto = texto + "Total: $ " + total + "\n\n";

        texto = texto + "Nombre :" + localStorage.getItem('cliente') + "\n";
        texto = texto + "Ticket # " + localStorage["ticket"];
    } else {
        return;
    }

    window.DatecsPrinter.listBluetoothDevices(
        function(devices) {
            window.DatecsPrinter.connect(devices[0].address, function() {
                window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
                    window.DatecsPrinter.feedPaper(100, function() {
                        window.DatecsPrinter.disconnect(function() {
                            $.ajax({
                                type: "POST",
                                dataType: "json",
                                url: localStorage.getItem('durl') + "cambioEstado.php",
                                data: {

                                    ticket: localStorage["ticket"]
                                },
                            }).done(function(resp) {
                                localStorage.setItem("uTicket", 0);
                            });
                        }, function() {
                            alert(JSON.stringify(error));
                            setTimeout("location.href='listarTicket.html'", 1000);
                        });
                    }, function(error) {
                        alertify.alert('Error!', JSON.stringify(error));
                        //alert(JSON.stringify(error));
                    });
                }, function(error) {
                    alertify.alert('Error!', JSON.stringify(error));
                    //alert(JSON.stringify(error));
                });
            }, function(error) {
                alertify.alert('Error!', JSON.stringify(error));
                //alert(JSON.stringify(error));
            });
        },
        function(error) {
            alertify.alert('Error!', JSON.stringify(error));
            //alert(JSON.stringify(error));
        }
    );

}

function imprimirTicket2() {
    var num = localStorage.getItem('total');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        total = num.split('').reverse().join('').replace(/^[\.]/, '');
        num;
    }

    texto = "{center}UNIDATOS DE COLOMBIA SAS\n";
    texto = texto + "{center}PREVENTA\n";
    texto = texto + "{center}Fecha: " + localStorage.getItem('fecha') + "  " + localStorage.getItem('hora') + "\n\n";
    texto = texto + "{br}{h}" + "Cuenta: " + localStorage["cuenta"] + "{/h}\n";
    texto = texto + "Total: $ " + total + "\n\n";

    texto = texto + "Nombre :" + localStorage.getItem('cliente') + "\n";
    texto = texto + "Ticket # " + localStorage["ticket"];

    window.DatecsPrinter.listBluetoothDevices(
        function(devices) {
            window.DatecsPrinter.connect(devices[0].address, function() {
                window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
                    window.DatecsPrinter.feedPaper(100, function() {
                        window.DatecsPrinter.disconnect(function() {
                            $.ajax({
                                type: "POST",
                                dataType: "json",
                                url: localStorage.getItem('durl') + "cambioEstado.php",
                                data: {

                                    ticket: localStorage["ticket"]
                                },
                            }).done(function(resp) {
                                localStorage.setItem("uTicket", 0);
                            });
                        }, function() {
                            alertify.alert('Error!', JSON.stringify(error));
                            //alert(JSON.stringify(error));
                        });
                    }, function(error) {
                        alertify.alert('Error!', JSON.stringify(error));
                        //alert(JSON.stringify(error));
                    });
                }, function(error) {
                    alertify.alert('Error!', JSON.stringify(error));
                    //alert(JSON.stringify(error));
                });
            }, function(error) {
                alertify.alert('Error!', JSON.stringify(error));
                //alert(JSON.stringify(error));
            });
        },
        function(error) {
            alertify.alert('Error!', JSON.stringify(error));
            //alert(JSON.stringify(error));
        }
    );

}

function imprimirCuatro() {
    if (localStorage["tipo"] == 3) {
        /**********************************/
        /*          RECIBO                */

        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}RECIBO # {b}" + localStorage["ticket3"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["valor2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto2"] + "\n";
        texto = texto + "{right}$ " + total + "\n";

        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    if (localStorage["tipo"] == 4) {
        /**********************************/
        /*          RECIBO                */

        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}RECIBO # {b}" + localStorage["ticket3"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["valor2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto2"] + "\n";
        texto = texto + "{right}$ " + total + "\n";
        texto = texto + "{left}{b}Nro.Linea nueva:{/b} " + localStorage["nrosimcard"] + "\n";
        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";

    }

    if (localStorage["tipo"] == 2) {
        /**********************************/
        /*          RECIBO                */
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}RECIBO # {b}" + localStorage["ticket3"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["valor1"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto1"] + "\n";
        texto = texto + "{right}$ " + total + "\n";

        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    if (localStorage["tipo"] == 1) {
        /**********************************/
        /*          RECIBO                */
        texto = "{center}{h}{b}UNIDATOS DE COLOMBIA SAS{/b}{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}Cel.: 3213317578 - 3144796165\n";
        texto = texto + "Cra. 5 # 14 - 42 Ofic. 10\n";
        texto = texto + "El Portal de la 5\n";
        texto = texto + "Email: comercial@unidatos.com\n";
        texto = texto + "\n";
        texto = texto + "{center}" + localStorage["fecha"] + "\n";
        texto = texto + "{reset}{center}RECIBO # {b}" + localStorage["ticket3"] + "\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}CLIENTE:   {/left}{b}" + localStorage["cliente"] + "{/b}\n";
        texto = texto + "{left}DOCUMENTO: {/left}{b}" + localStorage["documento"] + "{/b}\n";
        texto = texto + "{left}DIRECCION: {/left}{b}" + localStorage["direccion"] + "{/b}\n";
        //texto=texto+"TELEFONO:  "+localstorage["celular"]+"\n";
        texto = texto + "{left}CORREO: {/left}{b}" + localStorage["correo"] + "{/b}\n";

        var num = localStorage["valor2"];
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            total = num.split('').reverse().join('').replace(/^[\.]/, '');
            num;
        }

        texto = texto + "\n";
        texto = texto + "{reset}";
        texto = texto + "{center}DETALLE\n";
        texto = texto + "--------------------------------\n";
        texto = texto + "{reset}";
        texto = texto + "{left}" + localStorage["producto2"] + "\n";
        texto = texto + "{right}$ " + total + "\n";

        texto = texto + "================================\n";
        texto = texto + "{reset}";
        texto = texto + "\n";
        texto = texto + "{right}{h}TOTAL:             $ " + total + "{/h}\n";
        texto = texto + "\n";
        texto = texto + "{center}{h}" + localStorage["marcaCopia"] + "{/h}";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
        texto = texto + "\n";
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: localStorage.getItem('durl') + "EstadoFactura.php",
        data: {

            ticket: localStorage.getItem('ticket')
        },
    }).done(function(resp) {

    });

    window.DatecsPrinter.listBluetoothDevices(
        function(devices) {
            window.DatecsPrinter.connect(devices[0].address, function() {
                window.DatecsPrinter.printText(texto, "ISO-8859-1", function() {
                    window.DatecsPrinter.feedPaper(100, function() {
                        window.DatecsPrinter.disconnect(function() {

                        }, function() {
                            alert(JSON.stringify(error));
                        });
                    }, function(error) {
                        alertify.alert('Error!', JSON.stringify(error));
                        //alert(JSON.stringify(error));
                    });
                }, function(error) {
                    alertify.alert('Error!', JSON.stringify(error));
                    //alert(JSON.stringify(error));
                });
            }, function(error) {
                alertify.alert('Error!', JSON.stringify(error));
                //alert(JSON.stringify(error));
            });
        },
        function(error) {
            alertify.alert('Error!', JSON.stringify(error));
            //alert(JSON.stringify(error));
        }
    );

   
   
}

app.initialize();