//------------------------xxxxxxxxxxxxxx  Datos Basicos  xxxxxxxxxxxxxxxx------------------------------
$(document).ready(function(){
    $.ajax({
        url : '/api/usuarios/',
        data : { id : $("#agencia").val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla").html("<table id='t_principal'><tr><th>DNI</th><th>Nombre</th><th>Direccion</th><th>Telefono</th><th>Correo</th><th>Fecha Nacimiento</th><th>Cargo</th><th>Agencia</th><th>Editar</th></tr>");
            $.each(response, function(i, val) {
                $("#t_principal tbody ").append("<tr>");
                $("#t_principal tbody ").append("<td>"+val.dni+"</td>");
                $("#t_principal tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>");
                $("#t_principal tbody ").append("<td>"+val.direccion+"</td>");
                $("#t_principal tbody ").append("<td>"+val.telefono+"</td>");
                $("#t_principal tbody ").append("<td>"+val.correoPrincipal+"</td>");
                $("#t_principal tbody ").append("<td>"+val.fechaNacimiento+"</td>");
                $("#t_principal tbody ").append("<td>"+val.cargo+"</td>");
                $("#t_principal tbody ").append("<td>"+val.agencia+"</td>");
                $("#t_principal tbody ").append("<td><a href='/gth/usuarios/show/"+val.dni+"'>"+"VER"+"</a></td>")
                $("#t_principal tbody ").append("</tr></table>");
            });

        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
})
//------------------------

function myfuncion() {


    $.ajax({
        url :'/api/usuarios/'+$("#agencia").val(),
        data : { id : $("#agencia").val() },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla").html("<table id='t_principal'><tr><th>DNI</th><th>Nombre</th><th>Direccion</th><th>Telefono</th><th>Correo</th><th>Fecha Nacimiento</th><th>Cargo</th><th>Agencia</th><th>Editar</th></tr>");
            $.each(response, function(i, val) {
                $("#t_principal tbody ").append("<tr>");
                $("#t_principal tbody ").append("<td>"+val.dni+"</td>");
                $("#t_principal tbody ").append("<td>"+val.nombres+"</td>");
                $("#t_principal tbody ").append("<td>"+val.direccion+"</td>");
                $("#t_principal tbody ").append("<td>"+val.telefono+"</td>");
                $("#t_principal tbody ").append("<td>"+val.correoPrincipal+"</td>");
                $("#t_principal tbody ").append("<td>"+val.fechaNacimiento+"</td>");
                $("#t_principal tbody ").append("<td>"+val.cargo+"</td>");
                $("#t_principal tbody ").append("<td>"+val.agencia+"</td>");
                $("#t_principal tbody ").append("<td><a href='/gth/usuarios/show/"+val.dni+"'>"+"VER"+"</a></td>");
                $("#t_principal tbody ").append("</tr></table>");
            });


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}

$(document).ready(function(){
    $("#nombre").keyup(function(event){

        $.ajax({
            url : '/api/usuarios/'+$("#nombre").val() ,
            data : { nombre : $("#nombre").val() },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#tabla").html("<table id='t_principal'><tr><th>DNI</th><th>Nombre</th><th>Direccion</th><th>Telefono</th><th>Correo</th><th>Fecha Nacimiento</th><th>Cargo</th><th>Agencia</th><th>Editar</th></tr>");
                $.each(response, function(i, val) {
                    $("#t_principal tbody ").append("<tr>");
                    $("#t_principal tbody ").append("<td>"+val.dni+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.direccion+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.telefono+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.correoPrincipal+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.fechaNacimiento+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.cargo+"</td>");
                    $("#t_principal tbody ").append("<td>"+val.agencia+"</td>");
                    $("#t_principal tbody ").append("<td><a href='/gth/usuarios/show/"+val.dni+"'>"+"VER"+"</a></td>");
                    $("#t_principal tbody ").append("</tr></table>");
                });

                //console.log(response.length);
            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    });
});

//------------------------xxxxxxxxxxxxxx  HORARIOS  xxxxxxxxxxxxxxxx------------------------------

//$(document).ready(function(){
function horarios(){

    $.ajax({
        url : '/api/horarios/',
        data : { id : $("#agencia_horarios").val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_horarios").html("<table id='t_horarios' ><tr><th>Nombre</th><th>Ingreso Mañanas</th><th>Salida Mañanas</th><th>Ingreso Tardes</th><th>Salida Tardes</th><th>Sabádo Ingreso Mañanas</th><th>Sabádo Salida Mañanas</th><th>Agencia</th><th>Horario</th><th>Editar</th></tr>");
            $.each(response, function(i, val) {
                $("#t_horarios tbody ").append("<tr>");
                $("#t_horarios tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_tarde+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_tarde+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana_s+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana_s+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.agencia+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.nombre_horario+"</td>");
                $("#t_horarios tbody ").append("<td><a href='/gth/usuarios/horario/"+val.dni+"'>"+"VER"+"</a></td>")
                $("#t_horarios tbody ").append("</tr></table>");
            });
            //console.log(response);

        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
}


function mifuncion_horario() {

    $.ajax({
        url : '/api/horarios/'+$("#agencia_horarios").val(),
        data : { id : $("#agencia_horarios").val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_horarios").html("<table id='t_horarios' ><tr><th>Nombre</th><th>Ingreso Mañanas</th><th>Salida Mañanas</th><th>Ingreso Tardes</th><th>Salida Tardes</th><th>Sabádo Ingreso Mañanas</th><th>Sabádo Salida Mañanas</th><th>Agencia</th><th>Horario</th><th>Editar</th></tr>");
            $.each(response, function(i, val) {
                $("#t_horarios tbody ").append("<tr>");
                $("#t_horarios tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_tarde+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_tarde+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana_s+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana_s+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.agencia+"</td>");
                $("#t_horarios tbody ").append("<td>"+val.nombre_horario+"</td>");
                $("#t_horarios tbody ").append("<td><a href='/gth/usuarios/horario/"+val.dni+"'>"+"VER"+"</a></td>")
                $("#t_horarios tbody ").append("</tr></table>");
            });
           //console.log(response);

        },
        error : function(xhr, status) {
            //console.log('Disculpe, existió un problema horario');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}

$(document).ready(function(){
    $("#nombre_horarios").keyup(function(event){
       // console.log("funciono?");
        var x =$("#nombre_horarios").val() ;
        console.log(x);

        $.ajax({
            url : '/api/horarios/'+x,
            data : { nombre : x  },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#tabla_horarios").html("<table id='t_horarios' ><tr><th>Nombre</th><th>Ingreso Mañanas</th><th>Salida Mañanas</th><th>Ingreso Tardes</th><th>Salida Tardes</th><th>Sabádo Ingreso Mañanas</th><th>Sabádo Salida Mañanas</th><th>Agencia</th><th>Horario</th><th>Editar</th></tr>");
                $.each(response, function(i, val) {
                    $("#t_horarios tbody ").append("<tr>");
                    $("#t_horarios tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                    $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.hora_entrada_tarde+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.hora_salida_tarde+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.hora_entrada_maniana_s+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.hora_salida_maniana_s+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.agencia+"</td>");
                    $("#t_horarios tbody ").append("<td>"+val.nombre_horario+"</td>");
                    $("#t_horarios tbody ").append("<td><a href='/gth/usuarios/horario/"+val.dni+"'>"+"VER"+"</a></td>")
                    $("#t_horarios tbody ").append("</tr></table>");
                });
               //console.log(response);

            },
            error : function(xhr, status) {
               // console.log('Disculpe, existió un problema key ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    });
});
//------------------------




//------------------------xxxxxxxxxxxxxx  tardanzas  xxxxxxxxxxxxxxxx------------------------------

//$(document).ready(function(){
function tardanzas(){
    
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes
    document.getElementById('desde_tardanzas').value=ano+"-"+mes+"-"+dia;
    document.getElementById('hasta_tardanzas').value=ano+"-"+mes+"-"+dia;

    var desde = ano+"-"+mes+"-"+dia
    //console.log(desde); 


    var hasta = new Date($('#hasta_tardanzas').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();
    //console.log(hasta);
        
    var agencia =   $("#agencia_tardanzas").val();
    //console.log(agencia);

    $.ajax({
        url : '/api/tardanzas/'+$("#agencia_tardanzas").val()+'/'+desde+'/'+hasta,
        data : { agencia : $("#agencia_tardanzas").val(), antes : desde, despues : hasta , _token: $('#buscar #toquen input').val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            var minutos =0; 
            $("#tabla_tardanzas").html("<table id='tabla_tardanzas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Minutos</th><th>Agencia</th><th>Justificar</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_tardanzas tbody ").append("<tr>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                $("#tabla_tardanzas tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.minutos+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanzas'>"+"Justificar"+"</a></td>")
                $("#tabla_tardanzas tbody ").append("</tr></table>");
                min =parseFloat(val.minutos);
                minutos += min;
                
            });
            $('#minutos p strong').remove();
            $("#minutos p").append('<strong>'+minutos+'</strong>');
            console.log("todos");

        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema al cargar tardanza ');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
}


function mifuncion_tardanza() {

    var nom =$("#nombre_tardanzas").val() ;
        

    var desde = new Date($('#desde_tardanzas').val());
    desde = desde.toISOString();        

    var hasta = new Date($('#hasta_tardanzas').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

   // console.log(desde);
    //console.log(hasta);

    $.ajax({
        url : '/api/tardanzas/'+$("#agencia_tardanzas").val()+'/'+desde+'/'+hasta,
        data : { agencia : $("#agencia_tardanzas").val(), antes : desde, despues : hasta  , _token: $('#buscar #toquen input').val() },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            var minutos =0; 
            $("#tabla_tardanzas").html("<table id='tabla_tardanzas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Minutos</th><th>Agencia</th><th>Justificar</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_tardanzas tbody ").append("<tr>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                $("#tabla_tardanzas tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.minutos+"</td>");
                $("#tabla_tardanzas tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanzas'>"+"Justificar"+"</a></td>")
                $("#tabla_tardanzas tbody ").append("</tr></table>");
                min =parseFloat(val.minutos);
                minutos += min;
                
            });
            $('#minutos p strong').remove();
            $("#minutos p").append('<strong>'+minutos+'</strong>');
            console.log("agencia");
        },
        error : function(xhr, status) {
            //console.log('Disculpe, existió un problema horario');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}

$(document).ready(function(){
    $("#nombre_tardanzas").keyup(function(event){
       // console.log("funciono?");
        var nom =$("#nombre_tardanzas").val() ;
        var desde = new Date($('#desde_tardanzas').val());
        desde = desde.toISOString();        
        console.log(nom);
        var hasta = new Date($('#hasta_tardanzas').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/tardanzasnombre/'+$("#nombre_tardanzas").val()+'/'+desde+'/'+hasta,
            data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar #toquen input').val()},
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                var minutos =0; 
                $("#tabla_tardanzas").html("<table id='tabla_tardanzas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Minutos</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_tardanzas tbody ").append("<tr>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                    $("#tabla_tardanzas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.minutos+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                    $("#tabla_tardanzas tbody ").append("</tr></table>");
                    min =parseFloat(val.minutos);
                    minutos += min;
                    
                });
                $('#minutos p strong').remove();
                $("#minutos p").append('<strong>'+minutos+'</strong>');
                console.log("solo nombre");

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema buscando por nombre');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#desde_tardanzas").change(function(event){
       // console.log("funciono?");
        var nom =$("#nombre_tardanzas").val() ;
        var desde = $('#desde_tardanzas').val();
        // var desde = new Date($('#desde_tardanzas').val());
        // desde = desde.toISOString();        

        //var hasta = $('#hasta_tardanzas').val();
        var hasta = new Date($('#hasta_tardanzas').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();


        $.ajax({
            url : '/api/tardanzasfecha/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar #toquen input').val() },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                var minutos =0; 
                $("#tabla_tardanzas").html("<table id='tabla_tardanzas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Minutos</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_tardanzas tbody ").append("<tr>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                    $("#tabla_tardanzas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.minutos+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                    $("#tabla_tardanzas tbody ").append("</tr></table>");
                    min =parseFloat(val.minutos);
                    minutos += min;
                    
                });
                $('#minutos p strong').remove();
                $("#minutos p").append('<strong>'+minutos+'</strong>');
                console.log("desde con nombre: "+nom);

            },
            error : function(xhr, status) {
                console.log('problema buscando por desde '+nom+desde+desde);
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#hasta_tardanzas").change(function(event){
       // console.log("funciono?");
      // console.log("funciono?");
        var nom =$("#nombre_tardanzas").val() ;
        var desde = $('#desde_tardanzas').val();
      // var desde = new Date($('#desde_tardanzas').val());
      // desde = desde.toISOString();        

      //var hasta = $('#hasta_tardanzas').val();
        var hasta = new Date($('#hasta_tardanzas').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();


        $.ajax({
            url : '/api/tardanzasfecha/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar #toquen input').val() },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                var minutos =0; 
                $("#tabla_tardanzas").html("<table id='tabla_tardanzas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Minutos</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_tardanzas tbody ").append("<tr>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                    $("#tabla_tardanzas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.minutos+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                    $("#tabla_tardanzas tbody ").append("</tr></table>");
                    min =parseFloat(val.minutos);
                    minutos += min;
                    
                });
                $('#minutos p strong').remove();
                $("#minutos p").append('<strong>'+minutos+'</strong>');
                console.log("desde con nombre: "+nom);

            },
            error : function(xhr, status) {
                console.log('problema buscando por desde '+nom+desde+desde);
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});
//------------------------fin tardanzas



//------------------------xxxxxxxxxxxxxx  faltas  xxxxxxxxxxxxxxxx------------------------------

//$(document).ready(function(){ // crea las faltas de cada dia 
function faltas(){ 

    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes
    document.getElementById('desde_faltas').value=ano+"-"+mes+"-"+dia;
    document.getElementById('hasta_faltas').value=ano+"-"+mes+"-"+dia;

    var desde = ano+"-"+mes+"-"+dia
    //console.log(desde); 


    var hasta = new Date($('#hasta_faltas').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

    //console.log(agencia);

    $.ajax({
        url : '/api/faltas/create/',
        data : { agencia : $("#agencia_faltas").val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_faltas").html("<table id='tabla_faltas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Justificar</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_faltas tbody ").append("<tr>");
                $("#tabla_faltas tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_faltas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_faltas tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_faltas tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_faltas tbody ").append("<td><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")  
            });


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
}


function mifuncion_faltas() {
            
    var nom =$("#nombre_faltas").val() ;
    var desde = new Date($('#desde_faltas').val());
    //desde = desde.toISOString();        

    var hasta = new Date($('#hasta_faltas').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

   // console.log(desde);
    //console.log(hasta);

    $.ajax({
        url : '/api/verfaltas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
        data : { agencia : $("#agencia_faltas").val(), antes : desde, despues : hasta  , _token: $('#buscar_faltas #toquen input').val() },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_faltas").html("<table id='tabla_faltas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Justificar</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_faltas tbody ").append("<tr>");
                $("#tabla_faltas tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_faltas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_faltas tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_faltas tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_faltas tbody ").append("<td><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
            });
        },
        error : function(xhr, status) {
            //console.log('Disculpe, existió un problema horario');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}

$(document).ready(function(){
    $("#nombre_faltas").keyup(function(event){
       // console.log("funciono?");
        var nom =$("#nombre_faltas").val() ;
        var desde = new Date($('#desde_faltas').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_faltas').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/verfaltas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_faltas #toquen input').val()},
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_faltas").html("<table id='tabla_faltas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_faltas tbody ").append("<tr>");
                    $("#tabla_faltas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_faltas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_faltas tbody ").append("<td><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")   
                });

            },
            error : function(xhr, status) {
               // console.log('Disculpe, existió un problema key ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#desde_faltas").change(function(event){
       // console.log("funciono?");
        var nom =$("#nombre_faltas").val() ;
        var desde = new Date($('#desde_faltas').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_faltas').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        //console.log(desde);
        //console.log(hasta);

        $.ajax({
            url : '/api/verfaltasfechas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar_faltas #toquen input').val() },
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_faltas").html("<table id='tabla_faltas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_faltas tbody ").append("<tr>");
                    $("#tabla_faltas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_faltas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_faltas tbody ").append("<td><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
                });

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema key ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#hasta_faltas").change(function(event){
 
        var nom =$("#nombre_faltas").val() ;
        

        var desde = new Date($('#desde_faltas').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_faltas').val());
        hasta.setDate(hasta.getDate() + 0);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/verfaltasfechas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar_faltas #toquen input').val() },
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_faltas").html("<table id='tabla_faltas' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Justificar</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_faltas tbody ").append("<tr>");
                    $("#tabla_faltas tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_faltas tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_faltas tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_faltas tbody ").append("<td><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
                });
                console.log("click desde");
            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema key ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});
//------------------------ fin faltas




//------------------------xxxxxxxxxxxxxx  justificaciones  xxxxxxxxxxxxxxxx------------------------------

//$(document).ready(function(){ 
function justificaciones(){ 

    var nom =$("#nombre_justificaciones").val() ;
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes
    document.getElementById('desde_justificaciones').value=ano+"-"+mes+"-"+dia;
    document.getElementById('hasta_justificaciones').value=ano+"-"+mes+"-"+dia;

    var desde = ano+"-"+mes+"-"+dia
    //console.log(desde); 


    var hasta = new Date($('#hasta_justificaciones').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

    //console.log(agencia);

    $.ajax({
        url : '/api/verjustificacion/'+$("#agencia_justificaciones").val()+'/'+desde+'/'+hasta,
        data : {agencia : $("#agencia_justificaciones").val(), antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_justificaciones").html("<table id='tabla_justificaciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Tipo</th><th>Observaciones</th><th>Archivo</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_justificaciones tbody ").append("<tr>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_justificaciones tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.tipo+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.observaciones+"</td>");
                $("#tabla_justificaciones tbody ").append("<td><a href='/justificacion/imagen/"+val.id+"'>Archivo Adjunto</td>");
            });
            //console.log(response);


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema justificaciones inicio');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
}


function mifuncion_justificaciones() {

    var nom =$("#nombre_justificaciones").val() ;
    var desde = new Date($('#desde_justificaciones').val());
    desde = desde.toISOString();        

    var hasta = new Date($('#hasta_justificaciones').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

   // console.log(desde);
    //console.log(hasta);

    $.ajax({
        url : '/api/verjustificacion/'+$("#agencia_justificaciones").val()+'/'+desde+'/'+hasta+'/'+nom,
        data : {agencia : $("#agencia_justificaciones").val(), antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#tabla_justificaciones").html("<table id='tabla_justificaciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Tipo</th><th>Observaciones</th><th>Archivo</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_justificaciones tbody ").append("<tr>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_justificaciones tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.agencia+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.tipo+"</td>");
                $("#tabla_justificaciones tbody ").append("<td>"+val.observaciones+"</td>");
                $("#tabla_justificaciones tbody ").append("<td><a href='/justificacion/imagen/"+val.id+"'>Archivo Adjunto</td>");
            });
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema agencia');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}

$(document).ready(function(){
    $("#nombre_justificaciones").keyup(function(event){
        
        var nom =$("#nombre_justificaciones").val() ;
        console.log(nom);
        var desde = new Date($('#desde_justificaciones').val());
        //desde = desde.toISOString();        

        var hasta = new Date($('#hasta_justificaciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/verjustificacionfechas/'+$("#agencia_justificaciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_justificaciones").html("<table id='tabla_justificaciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Tipo</th><th>Observaciones</th><th>Archivo</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_justificaciones tbody ").append("<tr>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_justificaciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.tipo+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td><a href='/justificacion/imagen/"+val.id+"'>Archivo Adjunto</td>");
                });

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema con nombres '+nom);
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#desde_justificaciones").change(function(event){
        //console.log("funciono desde");
        var nom =$("#nombre_justificaciones").val() ;
        var desde = new Date($('#desde_justificaciones').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_justificaciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/verjustificacionfechas/'+$("#agencia_justificaciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_justificaciones").html("<table id='tabla_justificaciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Tipo</th><th>Observaciones</th><th>Archivo</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_justificaciones tbody ").append("<tr>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_justificaciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.tipo+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td><a href='/justificacion/imagen/"+val.id+"'>Archivo Adjunto</td>");
                });

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema con desde '+nom);
            },
            complete : function(xhr, status) {
               // alert('Petición realizada');
            }
        })
    })
});

$(document).ready(function(){
    $("#hasta_justificaciones").change(function(event){

        var nom =$("#nombre_justificaciones").val() ;
        var desde = new Date($('#desde_justificaciones').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_justificaciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        $.ajax({
            url : '/api/verjustificacionfechas/'+$("#agencia_justificaciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
            type : 'GET',
            dataType : 'json',
            success : function(response) {

                $("#tabla_justificaciones").html("<table id='tabla_justificaciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha</th><th>Agencia</th><th>Tipo</th><th>Observaciones</th><th>Archivo</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_justificaciones tbody ").append("<tr>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_justificaciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.agencia+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.tipo+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_justificaciones tbody ").append("<td><a href='/justificacion/imagen/"+val.id+"'>Archivo Adjunto</td>");
                });

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema con hasta  '+nom);
            },
            complete : function(xhr, status) {
               // alert('Petición realizada');
            }
        })
    })
});
//------------------------ fin justificaciones


//------------------------ inicio Sanciones
function sanciones() {
    //alert("funciono sanciones");  
    var fecha = new Date(); //Fecha actual
    var desde_mes = fecha.getMonth()+0; //obteniendo mes
    var hasta_mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(desde_mes<10){
        desde_mes='0'+desde_mes
    }
    if(hasta_mes<10){
        hasta_mes='0'+hasta_mes
    }
    document.getElementById('desde_sanciones').value=ano+"-"+desde_mes+"-"+dia;
    document.getElementById('hasta_sanciones').value=ano+"-"+hasta_mes+"-"+dia;

    var desde = ano+"-"+desde_mes+"-"+dia

    var hasta = new Date($('#hasta_sanciones').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();


    $.ajax({
        url : '/api/versanciones/'+$("#agencia_sanciones").val()+'/'+desde+'/'+hasta,
        data : {agencia : $("#agencia_sanciones").val(), antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            $("#tabla_sanciones").html("<table id='tabla_sanciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha de Sancion</th><th>Cantidad de  Amonestaciones</th><th>Dias Suspendido</th><th>Observaciones</th><th>Agencia</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_sanciones tbody ").append("<tr>");
                $("#tabla_sanciones tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_sanciones tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.amonestacion+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.dias_suspencion+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.observaciones+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.agencia+"</td>");
            });            
        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema sanciones');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        } 
    })
}

function mifuncion_sanciones() {
    //console.log("funciono sanciones desde agencia");
    var nom =$("#nombre_sanciones").val() ;
    

    var desde = new Date($('#desde_sanciones').val());
    desde = desde.toISOString();        

    var hasta = new Date($('#hasta_sanciones').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

    $.ajax({
        url : '/api/versanciones/'+$("#agencia_sanciones").val()+'/'+desde+'/'+hasta,
        data : {agencia : $("#agencia_sanciones").val(), antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            $("#tabla_sanciones").html("<table id='tabla_sanciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha de Sancion</th><th>Cantidad de  Amonestaciones</th><th>Dias Suspendido</th><th>Observaciones</th><th>Agencia</th></tr>");
            $.each(response, function(i, val) {
                $("#tabla_sanciones tbody ").append("<tr>");
                $("#tabla_sanciones tbody ").append("<td>"+val.dni+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tabla_sanciones tbody ").append("<td>"+val.fecha+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.amonestacion+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.dias_suspencion+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.observaciones+"</td>");
                $("#tabla_sanciones tbody ").append("<td>"+val.agencia+"</td>");
            });
            


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema sanciones');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        } 
    })
}


$(document).ready(function(){
    $("#nombre_sanciones").keyup(function(event){
        //console.log("funciono nombres ?");
        var nom=$("#nombre_sanciones").val();
        // falta modificar funcion en el controlador 
        //console.log(nom);
        var desde = new Date($('#desde_sanciones').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_sanciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();
        
        $.ajax({
            url : '/api/versanciones/'+$("#agencia_sanciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#tabla_sanciones").html("<table id='tabla_sanciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha de Sancion</th><th>Cantidad de  Amonestaciones</th><th>Dias Suspendido</th><th>Observaciones</th><th>Agencia</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_sanciones tbody ").append("<tr>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_sanciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.amonestacion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dias_suspencion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.agencia+"</td>");
                });
                
                console.log(response);

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema sanciones');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            } 
        })
    })
});



$(document).ready(function(){
    $("#desde_sanciones").change(function(event){
        //console.log("funciono desde");
        var nom =$("#nombre_sanciones").val() ;
        var desde = new Date($('#desde_sanciones').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_sanciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        
        $.ajax({
            url : '/api/versanciones/'+$("#agencia_sanciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#tabla_sanciones").html("<table id='tabla_sanciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha de Sancion</th><th>Cantidad de  Amonestaciones</th><th>Dias Suspendido</th><th>Observaciones</th><th>Agencia</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_sanciones tbody ").append("<tr>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_sanciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.amonestacion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dias_suspencion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.agencia+"</td>");
                });
                
                console.log(response);

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema sanciones');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            } 
        })
    })
});



$(document).ready(function(){
    $("#hasta_sanciones").change(function(event){
        //console.log("funciono desde");
        var nom =$("#nombre_sanciones").val() ;
        var desde = new Date($('#desde_sanciones').val());
        desde = desde.toISOString();        

        var hasta = new Date($('#hasta_sanciones').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();

        
        $.ajax({
            url : '/api/versanciones/'+$("#agencia_sanciones").val()+'/'+desde+'/'+hasta+'/'+nom,
            data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#tabla_sanciones").html("<table id='tabla_sanciones' ><tr><th>DNI</th><th>Nombre</th><th>Fecha de Sancion</th><th>Cantidad de  Amonestaciones</th><th>Dias Suspendido</th><th>Observaciones</th><th>Agencia</th></tr>");
                $.each(response, function(i, val) {
                    $("#tabla_sanciones tbody ").append("<tr>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dni+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tabla_sanciones tbody ").append("<td>"+val.fecha+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.amonestacion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.dias_suspencion+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.observaciones+"</td>");
                    $("#tabla_sanciones tbody ").append("<td>"+val.agencia+"</td>");
                });
                
                console.log(response);

            },
            error : function(xhr, status) {
                console.log('Disculpe, existió un problema sanciones');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            } 
        })
    })
});
//------------------------ fin Sanciones