(function($) {
    "use strict"; // Start of use strict
  
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };


      if ($("body").hasClass("sidebar-toggled")) {
        document.getElementById("logoPrincipal").src="../../images/asistencia/logocortoverde.svg";
      }else {
        if (screen.width < 900) {
            document.getElementById("logoPrincipal").src="../../images/asistencia/logocortoverde.svg";
        }else{
            document.getElementById("logoPrincipal").src="../../images/asistencia/logo.svg";
          };
        
      }
      

    });
  
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
      if ($(window).width() < 900) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  
    // Scroll to top button appear
    $(document).on('scroll', function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });
  
  })(jQuery); // End of use strict

  function ocultarNavegadorLateral(){

    
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
            };

  };

  function navegar(subMenuId){

    
    if (subMenuId == "submenu_Gestion"){

        document.getElementById("contenedor_usuarios_gestion").style.display = 'contents';
        document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
        document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
        document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
        document.getElementById("contenedor_reportes_faltas").style.display = 'none';
        document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
        document.getElementById("contenedor_controles_sanciones").style.display = 'none';
                
        if (screen.width < 900) {
            ocultarNavegadorLateral();
        };

        return;
    }

    if (subMenuId == "submenu_Horarios"){

      document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
      document.getElementById("contenedor_usuarios_horarios").style.display = 'contents';
      document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
      document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
      document.getElementById("contenedor_reportes_faltas").style.display = 'none';
      document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
      document.getElementById("contenedor_controles_sanciones").style.display = 'none';
              
      if (screen.width < 900) {
        ocultarNavegadorLateral();
      };

        return;
    }

    if (subMenuId == "submenu_Asistencias"){

        document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
        document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
        document.getElementById("contenedor_reportes_asistencias").style.display = 'contents';
        document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
        document.getElementById("contenedor_reportes_faltas").style.display = 'none';
        document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
        document.getElementById("contenedor_controles_sanciones").style.display = 'none';
          
        if (screen.width < 900) {
          ocultarNavegadorLateral();
        };
          
          return;
    }

    if (subMenuId == "submenu_Tardanzas"){

      document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
      document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
      document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
      document.getElementById("contenedor_reportes_tardanzas").style.display = 'contents';
      document.getElementById("contenedor_reportes_faltas").style.display = 'none';
      document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
      document.getElementById("contenedor_controles_sanciones").style.display = 'none';
        
      if (screen.width < 900) {
        ocultarNavegadorLateral();
      };
        
        return;
    }

    if (subMenuId == "submenu_Faltas"){

      document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
      document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
      document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
      document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
      document.getElementById("contenedor_reportes_faltas").style.display = 'contents';
      document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
      document.getElementById("contenedor_controles_sanciones").style.display = 'none';
      
        if (screen.width < 900) {
            ocultarNavegadorLateral();
        };

        return;
    }

    if (subMenuId == "submenu_Justificaciones"){

      document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
      document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
      document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
      document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
      document.getElementById("contenedor_reportes_faltas").style.display = 'none';
      document.getElementById("contenedor_controles_justificaciones").style.display = 'contents';
      document.getElementById("contenedor_controles_sanciones").style.display = 'none';

      if (screen.width < 900) {
        ocultarNavegadorLateral();
      };

      return;
  }

  if (subMenuId == "submenu_Sanciones"){

    document.getElementById("contenedor_usuarios_gestion").style.display = 'none';
    document.getElementById("contenedor_usuarios_horarios").style.display = 'none';
    document.getElementById("contenedor_reportes_asistencias").style.display = 'none';
    document.getElementById("contenedor_reportes_tardanzas").style.display = 'none';
    document.getElementById("contenedor_reportes_faltas").style.display = 'none';
    document.getElementById("contenedor_controles_justificaciones").style.display = 'none';
    document.getElementById("contenedor_controles_sanciones").style.display = 'contents';

    if (screen.width < 900) {
        ocultarNavegadorLateral();
      };

    return;
}
    
}


//------------------------xxxxxxxxxxxxxx  Datos Basicos  xxxxxxxxxxxxxxxx------------------------------
$(document).ready(function(){
  $.ajax({
      url : '/api/usuarios/',
      data : { id : $("#cmbagencia").val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla").html("<table class='table table-hover' id='t_principal'><tr><th>DNI</th><th>NOMBRE Y APELLIDOS</th><th>DIRECCIÓN</th><th>TELÉFONO</th><th>CORREO</th><th>FECHA NACIMIENTO</th><th>CARGO</th><th>AGENCIA</th><th>EDITAR</th></tr>");
          $.each(response, function(i, val) {
              $("#t_principal tbody ").append("<tr>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.direccion+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.telefono+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.correoPrincipal+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.fechaNacimiento+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.cargo+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/show/"+val.dni+"'>"+"EDITAR"+"</a></td>")
              $("#t_principal tbody ").append("</tr></table>");
          });

          if (screen.width < 900) {
            var elemento = document.getElementById("t_principal");
            elemento.className += " table-responsive";
          };

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
      url :'/api/usuarios/'+$("#cmbagencia").val(),
      data : { id : $("#cmbagencia").val() },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla").html("<table class='table table-hover' id='t_principal'><tr><th>DNI</th><th>NOMBRE Y APELLIDOS</th><th>DIRECCIÓN</th><th>TELÉFONO</th><th>CORREO</th><th>FECHA NACIMIENTO</th><th>CARGO</th><th>AGENCIA</th><th>EDITAR</th></tr>");
          $.each(response, function(i, val) {
              $("#t_principal tbody ").append("<tr>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.direccion+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.telefono+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered'>"+val.correoPrincipal+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.fechaNacimiento+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.cargo+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#t_principal tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/show/"+val.dni+"'>"+"EDITAR"+"</a></td>");
              $("#t_principal tbody ").append("</tr></table>");
          });

          if (screen.width < 900) {
            var elemento = document.getElementById("t_principal");
            elemento.className += " table-responsive";
          };


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
  $("#txtUsuarioBuscar").keyup(function(event){

      $.ajax({
          url : '/api/usuarios/'+$("#txtUsuarioBuscar").val() ,
          data : { nombre : $("#txtUsuarioBuscar").val() },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              $("#tabla").html("<table class='table table-hover' id='t_principal'><tr><th>DNI</th><th>NOMBRE Y APELLIDOS</th><th>DIRECCIÓN</th><th>TELÉFONO</th><th>CORREO</th><th>FECHA NACIMIENTO</th><th>CARGO</th><th>AGENCIA</th><th>EDITAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#t_principal tbody ").append("<tr>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered'>"+val.direccion+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.telefono+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered'>"+val.correoPrincipal+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.fechaNacimiento+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.cargo+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#t_principal tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/show/"+val.dni+"'>"+"EDITAR"+"</a></td>");
                  $("#t_principal tbody ").append("</tr></table>");
              });

              if (screen.width < 900) {
                var elemento = document.getElementById("t_principal");
                elemento.className += " table-responsive";
              };

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

$(document).ready(function(){
//function horarios(){

  $.ajax({
      url : '/api/horarios/',
      data : { id : $("#cmbTipoHorariosUH").val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_horarios").html("<table class='table table-hover' id='t_horarios' ><tr><th>NOMBRE Y APELLIDOS</th><th>INGRESO MAÑANA</th><th>SALIDA MAÑANA</th><th>INGRESO TARDE</th><th>SALIDA TARDE</th><th>SÁBADO INGRESO MAÑANA</th><th>SÁBADO SALIDA MAÑANA</th><th>AGENCIA</th><th>TIPO DE HORARIO</th><th>EDITAR</th></tr>");
          $.each(response, function(i, val) {
              $("#t_horarios tbody ").append("<tr>");
              $("#t_horarios tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_tarde+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_tarde+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana_s+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana_s+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.nombre_horario+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/horario/"+val.dni+"'>"+"EDITAR"+"</a></td>")
              $("#t_horarios tbody ").append("</tr></table>");
          });
          //console.log(response);

          if (screen.width < 900) {
            var elemento = document.getElementById("t_principal");
            elemento.className += " table-responsive";
          };

      },
      error : function(xhr, status) {
          console.log('Disculpe, existió un problema');
      },
      complete : function(xhr, status) {
          // alert('Petición realizada');
      }
  })
});


function mifuncion_horario() {

  $.ajax({
      url : '/api/horarios/'+$("#cmbTipoHorariosUH").val(),
      data : { id : $("#cmbTipoHorariosUH").val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_horarios").html("<table class='table table-hover' id='t_horarios' ><tr><th>NOMBRE Y APELLIDOS</th><th>INGRESO MAÑANA</th><th>SALIDA MAÑANA</th><th>INGRESO TARDE</th><th>SALIDA TARDE</th><th>SÁBADO INGRESO MAÑANA</th><th>SÁBADO SALIDA MAÑANA</th><th>AGENCIA</th><th>TIPO DE HORARIO</th><th>EDITAR</th></tr>");
          $.each(response, function(i, val) {
              $("#t_horarios tbody ").append("<tr>");
              $("#t_horarios tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_tarde+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_tarde+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana_s+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana_s+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.nombre_horario+"</td>");
              $("#t_horarios tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/horario/"+val.dni+"'>"+"EDITAR"+"</a></td>")
              $("#t_horarios tbody ").append("</tr></table>");
          });
         //console.log(response);

         if (screen.width < 900) {
            var elemento = document.getElementById("t_principal");
            elemento.className += " table-responsive";
          };

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
  $("#txtNombreColaboradorUH").keyup(function(event){
     // console.log("funciono?");
      var x =$("#txtNombreColaboradorUH").val() ;
      console.log(x);

      $.ajax({
          url : '/api/horarios/'+x,
          data : { nombre : x  },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              $("#tabla_horarios").html("<table class='table table-hover' id='t_horarios' ><tr><th>NOMBRE Y APELLIDOS</th><th>INGRESO MAÑANA</th><th>SALIDA MAÑANA</th><th>INGRESO TARDE</th><th>SALIDA TARDE</th><th>SÁBADO INGRESO MAÑANA</th><th>SÁBADO SALIDA MAÑANA</th><th>AGENCIA</th><th>TIPO DE HORARIO</th><th>EDITAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#t_horarios tbody ").append("<tr>");
                  $("#t_horarios tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_tarde+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_tarde+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_entrada_maniana_s+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.hora_salida_maniana_s+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'>"+val.nombre_horario+"</td>");
                  $("#t_horarios tbody ").append("<td class='table-bordered' align='center'><a href='/gth/usuarios/horario/"+val.dni+"'>"+"EDITAR"+"</a></td>")
                  $("#t_horarios tbody ").append("</tr></table>");
              });
             //console.log(response);

             if (screen.width < 900) {
                var elemento = document.getElementById("t_principal");
                elemento.className += " table-responsive";
              };

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

function a_horarios() {
    x =$("#cmbTipoHorarioUHE").val();

    $.ajax({
        url : '/api/horariosagencia/'+x,
        //data : {    },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#contenedor_lv").remove();
            $("#L-V").append("<div id= 'contenedor_lv'>");
            $.each(response, function(i, val) {

                $("#contenedor_lv").append("<span>Ingreso Mañana: </span> <input class='form-control' id='txtIngresoMañanasUHE' value='"+val.hora_entrada_maniana +"' readonly>");
                $("#contenedor_lv").append("<span>Salida Mañana: </span> <input class='form-control' id='txtSalidaMañanasUHE' value='"+val.hora_salida_maniana +"' readonly>");
                $("#contenedor_lv").append("<span>Ingreso Tarde: </span> <input class='form-control' id='txtIngresoTardesUHE' value='"+val.hora_entrada_tarde  +"' readonly>");
                $("#contenedor_lv").append("<span>Salida Tarde: </span> <input class='form-control' id='txtSalidaTardesUHE' value='"+val.hora_salida_tarde  +"' readonly><br>");

            });
            $("#L-V").append("</div>");
           // console.log(response);
            $("#contenedor_s").remove();
            $("#S").append("<div id= 'contenedor_s'>");
            $.each(response, function(i, val) {
                $("#contenedor_s").append("<span>Ingreso Mañana: </span> <input class='form-control' id='txtIngresoMañanasUHE' value='"+val.hora_entrada_maniana_s +"' readonly>");
                $("#contenedor_s").append("<span>Salida Mañana: </span> <input class='form-control' id='txtSalidaMañanasUHE' value='"+val.hora_salida_maniana_s +"' readonly><br>");
            });
            $("#L-V").append("</div>");

        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })
    

 }



//------------------------xxxxxxxxxxxxxx  tardanzas  xxxxxxxxxxxxxxxx------------------------------


//$(document).ready(function(){
function tardanzas(){

    var nom =$("#txtUsuarioBuscarRT").val() ;
    var desde = $('#dtpDesdeRT').val();
    // var desde = new Date($('#desde_tardanzas').val());
    // desde = desde.toISOString();        

    //var hasta = $('#hasta_tardanzas').val();
    var hasta = new Date($('#dtpHastaRT').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();
  //console.log(hasta);
      
  var agencia =   $("#cmbAgenciaRT").val();
  //console.log(agencia);

  $.ajax({
      url : '/api/tardanzas/'+$("#cmbAgenciaRT").val()+'/'+desde+'/'+hasta,
      data : { agencia : $("#cmbAgenciaRT").val(), antes : desde, despues : hasta , _token: $('#buscar #toquen input').val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {
          var minutos =0; 
          $("#tabla_tardanzas").html("<table class='table table-hover' id='tabla_tardanzas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA MARCADO</th><th>MINUTOS TARDANZA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_tardanzas tbody ").append("<tr>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.minutos+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanzas'>"+"Justificar"+"</a></td>")
              $("#tabla_tardanzas tbody ").append("</tr></table>");
              min =parseFloat(val.minutos);
              minutos += min;
              
          });
          $('#minutos p strong').remove();
          $("#minutos p").append('<strong>'+minutos+'</strong>');
          console.log("todos");

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_tardanzas");
            elemento.className += " table-responsive";
          };

      },
      error : function(xhr, status) {
          console.log('Disculpe, existió un problema al cargar tardanza ');
      },
      complete : function(xhr, status) {
          // alert('Petición realizada');
      }
  })
};


function mifuncion_tardanza() {

  var nom =$("#txtUsuarioBuscarRT").val() ;
      

  var desde = new Date($('#dtpDesdeRT').val());
  desde = desde.toISOString();        

  var hasta = new Date($('#dtpHastaRT').val());
  hasta.setDate(hasta.getDate() + 1);
  hasta = hasta.toISOString();

 // console.log(desde);
  //console.log(hasta);

  $.ajax({
      url : '/api/tardanzas/'+$("#cmbAgenciaRT").val()+'/'+desde+'/'+hasta,
      data : { agencia : $("#cmbAgenciaRT").val(), antes : desde, despues : hasta  , _token: $('#buscar #toquen input').val() },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          var minutos =0; 
          $("#tabla_tardanzas").html("<table class='table table-hover' id='tabla_tardanzas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA MARCADO</th><th>MINUTOS TARDANZA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_tardanzas tbody ").append("<tr>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.minutos+"</td>");
              $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_tardanzas tbody ").append("<td><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanzas'>"+"Justificar"+"</a></td>")
              $("#tabla_tardanzas tbody ").append("</tr></table>");
              min =parseFloat(val.minutos);
              minutos += min;
              
          });
          $('#minutos p strong').remove();
          $("#minutos p").append('<strong>'+minutos+'</strong>');
          console.log("agencia");

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_tardanzas");
            elemento.className += " table-responsive";
          };
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
  $("#txtUsuarioBuscarRT").keyup(function(event){
     // console.log("funciono?");
      var nom =$("#txtUsuarioBuscarRT").val() ;
      var desde = new Date($('#dtpDesdeRT').val());
      desde = desde.toISOString();        
      console.log(nom);
      var hasta = new Date($('#dtpHastaRT').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/tardanzasnombre/'+nom+'/'+desde+'/'+hasta,
          data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar #toquen input').val()},
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              var minutos =0; 
              $("#tabla_tardanzas").html("<table class='table table-hover' id='tabla_tardanzas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA MARCADO</th><th>MINUTOS TARDANZA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_tardanzas tbody ").append("<tr>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.minutos+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                  $("#tabla_tardanzas tbody ").append("</tr></table>");
                  min =parseFloat(val.minutos);
                  minutos += min;
                  
              });
              $('#minutos p strong').remove();
              $("#minutos p").append('<strong>'+minutos+'</strong>');
              console.log("solo nombre");

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_tardanzas");
                elemento.className += " table-responsive";
              };

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
  $("#dtpDesdeRT").change(function(event){
     // console.log("funciono?");
      var nom =$("#txtUsuarioBuscarRT").val() ;
      var desde = $('#dtpDesdeRT').val();
      // var desde = new Date($('#desde_tardanzas').val());
      // desde = desde.toISOString();        

      //var hasta = $('#hasta_tardanzas').val();
      var hasta = new Date($('#dtpHastaRT').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();


      $.ajax({
          url : '/api/tardanzasfecha/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar #toquen input').val() },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              var minutos =0; 
              $("#tabla_tardanzas").html("<table class='table table-hover' id='tabla_tardanzas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA MARCADO</th><th>MINUTOS TARDANZA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_tardanzas tbody ").append("<tr>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.minutos+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                  $("#tabla_tardanzas tbody ").append("</tr></table>");
                  min =parseFloat(val.minutos);
                  minutos += min;
                  
              });
              $('#minutos p strong').remove();
              $("#minutos p").append('<strong>'+minutos+'</strong>');
              console.log("desde con nombre: "+nom);

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_tardanzas");
                elemento.className += " table-responsive";
              };

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
  $("#dtpHastaRT").change(function(event){
     // console.log("funciono?");
    // console.log("funciono?");
      var nom =$("#txtUsuarioBuscarRT").val() ;
      var desde = $('#dtpDesdeRT').val();
    // var desde = new Date($('#desde_tardanzas').val());
    // desde = desde.toISOString();        

    //var hasta = $('#hasta_tardanzas').val();
      var hasta = new Date($('#dtpHastaRT').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();


      $.ajax({
          url : '/api/tardanzasfecha/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar #toquen input').val() },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              var minutos =0; 
              $("#tabla_tardanzas").html("<table class='table table-hover' id='tabla_tardanzas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA MARCADO</th><th>MINUTOS TARDANZA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_tardanzas tbody ").append("<tr>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+val.apellidoMaterno+"</td>")
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.minutos+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_tardanzas tbody ").append("<td class='table-bordered' align='center'><a href='/api/tardanzas/delete/"+val.fecha+"/"+val.dni+"/Tardanza'>"+"Justificar"+"</a></td>")
                  $("#tabla_tardanzas tbody ").append("</tr></table>");
                  min =parseFloat(val.minutos);
                  minutos += min;
                  
              });
              $('#minutos p strong').remove();
              $("#minutos p").append('<strong>'+minutos+'</strong>');
              console.log("desde con nombre: "+nom);

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_tardanzas");
                elemento.className += " table-responsive";
              };

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

    var desde = new Date($('#dtpDesdeRF').val());
    // desde.setDate(desde.getDate() + 1);
    desde = desde.toISOString();
    //console.log(desde); 
  
    var hasta = new Date($('#dtpHastaRF').val());
    // hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();
    //console.log(hasta);
        
    var agencia =   $("#cmbAgenciaRF").val();
    //console.log(agencia);

  

  $.ajax({
      url : '/api/faltas/create/',
      data : { agencia : $("#agencia_faltas").val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_faltas").html("<table class='table table-hover' id='tabla_faltas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE FALTA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_faltas tbody ").append("<tr>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")  
          });

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_faltas");
            elemento.className += " table-responsive";
          };


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
          
  var nom =$("#txtUsuarioBuscarRF").val() ;
  var desde = new Date($('#dtpDesdeRF').val());
  //desde = desde.toISOString();        

  var hasta = new Date($('#dtpHastaRF').val());
  hasta.setDate(hasta.getDate() + 1);
  hasta = hasta.toISOString();

 // console.log(desde);
  //console.log(hasta);

  $.ajax({
      url : '/api/verfaltas/'+$("#cmbAgenciaRF").val()+'/'+desde+'/'+hasta+'/'+nom,
      data : { agencia : $("#cmbAgenciaRF").val(), antes : desde, despues : hasta  , _token: $('#buscar_faltas #toquen input').val() },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_faltas").html("<table class='table table-hover' id='tabla_faltas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE FALTA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_faltas tbody ").append("<tr>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
          });

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_faltas");
            elemento.className += " table-responsive";
          };
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
  $("#txtUsuarioBuscarRF").keyup(function(event){
     // console.log("funciono?");
      var nom =$("#txtUsuarioBuscarRF").val() ;
      var desde = new Date($('#dtpDesdeRF').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaRF').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/verfaltas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_faltas #toquen input').val()},
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              $("#tabla_faltas").html("<table class='table table-hover' id='tabla_faltas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE FALTA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_faltas tbody ").append("<tr>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")   
              });

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_faltas");
                elemento.className += " table-responsive";
              };

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
  $("#dtpDesdeRF").change(function(event){
     // console.log("funciono?");
      var nom =$("#txtUsuarioBuscarRF").val() ;
      var desde = new Date($('#dtpDesdeRF').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaRF').val());
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

              $("#tabla_faltas").html("<table class='table table-hover' id='tabla_faltas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE FALTA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_faltas tbody ").append("<tr>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
              });

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_faltas");
                elemento.className += " table-responsive";
              };

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
  $("#dtpHastaRF").change(function(event){

      var nom =$("#txtUsuarioBuscarRF").val() ;
      

      var desde = new Date($('#dtpDesdeRF').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaRF').val());
      hasta.setDate(hasta.getDate() + 0);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/verfaltasfechas/'+$("#agencia_faltas").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta , _token: $('#buscar_faltas #toquen input').val() },
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              $("#tabla_faltas").html("<table class='table table-hover' id='tabla_faltas' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE FALTA</th><th>AGENCIA</th><th>JUSTIFICAR</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_faltas tbody ").append("<tr>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_faltas tbody ").append("<td class='table-bordered' align='center'><a href='/api/faltas/delete/"+val.fecha+"/"+val.dni+"/Falta'>"+"Justificar"+"</a></td>")    
              });
              console.log("click desde");

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_faltas");
                elemento.className += " table-responsive";
              };
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

    var desde = new Date($('#dtpDesdeCJ').val());
    desde.setDate(desde.getDate() + 1);
    desde = desde.toISOString();
    //console.log(desde); 
  
    var hasta = new Date($('#dtpHastaCJ').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();
    //console.log(hasta);
        
    var agencia =   $("#cmbAgenciaCJ").val();
    //console.log(agencia);

  //console.log(agencia);

  $.ajax({
      url : '/api/verjustificacion/'+$("#cmbAgenciaCJ").val()+'/'+desde+'/'+hasta,
      data : {agencia : $("#cmbAgenciaCJ").val(), antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_justificaciones").html("<table class='table table-hover' id='tabla_justificaciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE JUSTIFICACIÓN</th><th>AGENCIA</th><th>TIPO</th><th>OBSERVACIONES</th><th>DOCUMENTO DE JUSTIFICACIÓN</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_justificaciones tbody ").append("<tr>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='data:image/jpg;base64,"+val.archivo+"' width='50' height='60'></td>")
          });
          //console.log(response); <img src="{{asset('storage).'/'.'$ruta'}}" alt=""> 

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_justificaciones");
            elemento.className += " table-responsive";
          };


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

  var nom =$("#txtUsuarioBuscarCJ").val() ;
  var desde = new Date($('#dtpDesdeCJ').val());
  desde = desde.toISOString();        

  var hasta = new Date($('#dtpHastaCJ').val());
  hasta.setDate(hasta.getDate() + 1);
  hasta = hasta.toISOString();

 // console.log(desde);
  //console.log(hasta);

  $.ajax({
      url : '/api/verjustificacion/'+$("#cmbAgenciaCJ").val()+'/'+desde+'/'+hasta+'/'+nom,
      data : {agencia : $("#cmbAgenciaCJ").val(), antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {

          $("#tabla_justificaciones").html("<table class='table table-hover' id='tabla_justificaciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE JUSTIFICACIÓN</th><th>AGENCIA</th><th>TIPO</th><th>OBSERVACIONES</th><th>DOCUMENTO DE JUSTIFICACIÓN</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_justificaciones tbody ").append("<tr>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
              $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='data:image/jpg;base64,"+val.archivo+"' width='50' height='60'></td>")
          });

          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_justificaciones");
            elemento.className += " table-responsive";
          };
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
  $("#txtUsuarioBuscarCJ").keyup(function(event){
      
      var nom =$("#txtUsuarioBuscarCJ").val() ;
      console.log(nom);
      var desde = new Date($('#dtpDesdeCJ').val());
      //desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCJ').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/verjustificacionfechas/'+$("#cmbAgenciaCJ").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              $("#tabla_justificaciones").html("<table class='table table-hover' id='tabla_justificaciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE JUSTIFICACIÓN</th><th>AGENCIA</th><th>TIPO</th><th>OBSERVACIONES</th><th>DOCUMENTO DE JUSTIFICACIÓN</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_justificaciones tbody ").append("<tr>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='data:image/jpg;base64,"+val.archivo+"' width='50' height='60'></td>")
              });

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_justificaciones");
                elemento.className += " table-responsive";
              };

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
  $("#dtpDesdeCJ").change(function(event){
      //console.log("funciono desde");
      var nom =$("#txtUsuarioBuscarCJ").val() ;
      var desde = new Date($('#dtpDesdeCJ').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCJ').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/verjustificacionfechas/'+$("#cmbAgenciaCJ").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              $("#tabla_justificaciones").html("<table class='table table-hover' id='tabla_justificaciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE JUSTIFICACIÓN</th><th>AGENCIA</th><th>TIPO</th><th>OBSERVACIONES</th><th>DOCUMENTO DE JUSTIFICACIÓN</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_justificaciones tbody ").append("<tr>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");

                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='data:image/jpg;base64,"+val.archivo+"' width='50' height='60'></td>")

                  
                  

              });

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_justificaciones");
                elemento.className += " table-responsive";
              };

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
  $("#dtpHastaCJ").change(function(event){

      var nom =$("#txtUsuarioBuscarCJ").val() ;
      var desde = new Date($('#dtpDesdeCJ').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCJ').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      $.ajax({
          url : '/api/verjustificacionfechas/'+$("#cmbAgenciaCJ").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom, antes : desde, despues : hasta  , _token: $('#buscar_justificaciones #toquen input').val()},
          type : 'GET',
          dataType : 'json',
          success : function(response) {

              $("#tabla_justificaciones").html("<table class='table table-hover' id='tabla_justificaciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE JUSTIFICACIÓN</th><th>AGENCIA</th><th>TIPO</th><th>OBSERVACIONES</th><th>DOCUMENTO DE JUSTIFICACIÓN</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_justificaciones tbody ").append("<tr>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
                  $("#tabla_justificaciones tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='data:image/jpg;base64,"+val.archivo+"' width='50' height='60'></td>")
              });

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_justificaciones");
                elemento.className += " table-responsive";
              };

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

    var desde = new Date($('#dtpDesdeCS').val());
    desde.setDate(desde.getDate() + 1);
    desde = desde.toISOString();
    //console.log(desde); 
  
    var hasta = new Date($('#dtpHastaCS').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();
    //console.log(hasta);
        
    var agencia =   $("#cmbAgenciaCS").val();
    //console.log(agencia);

  //console.log(agencia);


  $.ajax({
      url : '/api/versanciones/'+$("#cmbAgenciaCS").val()+'/'+desde+'/'+hasta,
      data : {agencia : $("#cmbAgenciaCS").val(), antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {
          $("#tabla_sanciones").html("<table class='table table-hover' id='tabla_sanciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE SANCIÓN</th><th>CANTIDAD DE AMONESTACIONES</th><th>DÍAS SUSPENDIDO</th><th>OBSERVACIONES</th><th>AGENCIA</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_sanciones tbody ").append("<tr>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.amonestacion+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dias_suspencion+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
          });   
          
          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_sanciones");
            elemento.className += " table-responsive";
          };
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
  var nom =$("#txtUsuarioBuscarCS").val() ;
  

  var desde = new Date($('#dtpDesdeCS').val());
  desde = desde.toISOString();        

  var hasta = new Date($('#dtpHastaCS').val());
  hasta.setDate(hasta.getDate() + 1);
  hasta = hasta.toISOString();

  $.ajax({
      url : '/api/versanciones/'+$("#cmbAgenciaCS").val()+'/'+desde+'/'+hasta,
      data : {agencia : $("#cmbAgenciaCS").val(), antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
      type : 'GET',
      dataType : 'json',
      success : function(response) {
          $("#tabla_sanciones").html("<table class='table table-hover' id='tabla_sanciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE SANCIÓN</th><th>CANTIDAD DE AMONESTACIONES</th><th>DÍAS SUSPENDIDO</th><th>OBSERVACIONES</th><th>AGENCIA</th></tr>");
          $.each(response, function(i, val) {
              $("#tabla_sanciones tbody ").append("<tr>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.amonestacion+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dias_suspencion+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
              $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
          });
          
          if (screen.width < 900) {
            var elemento = document.getElementById("tabla_sanciones");
            elemento.className += " table-responsive";
          };

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
  $("#txtUsuarioBuscarCS").keyup(function(event){
      //console.log("funciono nombres ?");
      var nom=$("#txtUsuarioBuscarCS").val();
      // falta modificar funcion en el controlador 
      //console.log(nom);
      var desde = new Date($('#dtpDesdeCS').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCS').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();
      
      $.ajax({
          url : '/api/versanciones/'+$("#cmbAgenciaCS").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              $("#tabla_sanciones").html("<table class='table table-hover' id='tabla_sanciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE SANCIÓN</th><th>CANTIDAD DE AMONESTACIONES</th><th>DÍAS SUSPENDIDO</th><th>OBSERVACIONES</th><th>AGENCIA</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_sanciones tbody ").append("<tr>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.amonestacion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dias_suspencion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              });

              console.log(response);

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_sanciones");
                elemento.className += " table-responsive";
              };

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
  $("#dtpDesdeCS").change(function(event){
      //console.log("funciono desde");
      var nom =$("#txtUsuarioBuscarCS").val() ;
      var desde = new Date($('#dtpDesdeCS').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCS').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      
      $.ajax({
          url : '/api/versanciones/'+$("#cmbAgenciaCS").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              $("#tabla_sanciones").html("<table class='table table-hover' id='tabla_sanciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE SANCIÓN</th><th>CANTIDAD DE AMONESTACIONES</th><th>DÍAS SUSPENDIDO</th><th>OBSERVACIONES</th><th>AGENCIA</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_sanciones tbody ").append("<tr>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.amonestacion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dias_suspencion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              });
              
              console.log(response);

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_sanciones");
                elemento.className += " table-responsive";
              };

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
  $("#dtpDesdeCS").change(function(event){
      //console.log("funciono desde");
      var nom =$("#txtUsuarioBuscarCS").val() ;
      var desde = new Date($('#dtpDesdeCS').val());
      desde = desde.toISOString();        

      var hasta = new Date($('#dtpHastaCS').val());
      hasta.setDate(hasta.getDate() + 1);
      hasta = hasta.toISOString();

      
      $.ajax({
          url : '/api/versanciones/'+$("#cmbAgenciaCS").val()+'/'+desde+'/'+hasta+'/'+nom,
          data : { nombre : nom , antes : desde, despues : hasta  , _token: $('#buscar_sanciones #toquen input').val()  },
          type : 'GET',
          dataType : 'json',
          success : function(response) {
              $("#tabla_sanciones").html("<table class='table table-hover' id='tabla_sanciones' ><tr><th>DNI</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE SANCIÓN</th><th>CANTIDAD DE AMONESTACIONES</th><th>DÍAS SUSPENDIDO</th><th>OBSERVACIONES</th><th>AGENCIA</th></tr>");
              $.each(response, function(i, val) {
                  $("#tabla_sanciones tbody ").append("<tr>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.fecha+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.amonestacion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.dias_suspencion+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered'>"+val.observaciones+"</td>");
                  $("#tabla_sanciones tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
              });
              
              console.log(response);

              if (screen.width < 900) {
                var elemento = document.getElementById("tabla_sanciones");
                elemento.className += " table-responsive";
              };

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



//------------------------xxxxxxxxxxxxxx  ASISTENCIA  xxxxxxxxxxxxxxxx------------------------------



function mifuncion_asistencias() {
            
    var nom =$("#txtUsuarioBuscarRA").val() ;
    var desde = new Date($('#dtpDesdeRA').val());
    desde = desde.toISOString();        

    var hasta = new Date($('#dtpHastaRA').val());
    hasta.setDate(hasta.getDate() + 1);
    hasta = hasta.toISOString();

//    console.log(desde);
//     console.log(hasta);

    $.ajax({
        url : '/asistencia/ver_entrada_salida',
        data : { agencia : $("#cmbAgenciaRA").val(), antes : desde, despues : hasta},
        type : 'GET',
        dataType : 'json',
        success : function(response) {
            // console.log(response);
            $("#tabla_asistencias").html("<table class='table table-hover' id='tablas_a' ><tr><th>DNI</th><th>FOTO</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE MARCADO</th><th>AGENCIA</th><th>TIPO</th></tr>");
            $.each(response, function(i, val) {
                $("#tablas_a tbody ").append("<tr>");
                $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                $("#tablas_a tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='"+val.foto+"' width='50' height='60'></td>") 
                $("#tablas_a tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.fechahora+"</td>");
                $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                   
            });

            if (screen.width < 900) {
                var elemento = document.getElementById("tablas_a");
                elemento.className += " table-responsive";
              };

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
    $("#txtUsuarioBuscarRA").keyup(function(event){
        // console.log($("#txtUsuarioBuscarRF").val());
        var nom =$("#txtUsuarioBuscarRA").val() ;
        var desde = new Date($('#dtpDesdeRA').val());
        desde = desde.toISOString();        
    
        var hasta = new Date($('#dtpHastaRA').val());
        hasta.setDate(hasta.getDate() + 1);
        hasta = hasta.toISOString();
    
       // console.log(desde);
        //console.log(hasta);
    
        $.ajax({
            url : '/asistencia/ver_entrada_salida',
            data : {nombre : nom,  antes : desde, despues : hasta},
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                // console.log(response);
                $("#tabla_asistencias").html("<table class='table table-hover' id='tablas_a' ><tr><th>DNI</th><th>FOTO</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE MARCADO</th><th>AGENCIA</th><th>TIPO</th></tr>");
                $.each(response, function(i, val) {
                    $("#tablas_a tbody ").append("<tr>");
                    $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                    $("#tablas_a tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='"+val.foto+"' width='50' height='60'></td>")
                    $("#tablas_a tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                    $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.fechahora+"</td>");
                    $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                    $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                        
                });

                if (screen.width < 900) {
                    var elemento = document.getElementById("tablas_a");
                    elemento.className += " table-responsive";
                  };
            },
            error : function(xhr, status) {
                //console.log('Disculpe, existió un problema horario');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
       
    })
});

$(document).ready(function(){
    $("#dtpDesdeRA").change(function(event){
       
         // console.log($("#txtUsuarioBuscarRF").val());
         var nom =$("#txtUsuarioBuscarRA").val() ;
         var desde = new Date($('#dtpDesdeRA').val());
         desde = desde.toISOString();        
     
         var hasta = new Date($('#dtpHastaRA').val());
         hasta.setDate(hasta.getDate() + 1);
         hasta = hasta.toISOString();
     
        // console.log(desde);
         //console.log(hasta);
     
         $.ajax({
             url : '/asistencia/ver_entrada_salida',
             data : {nombre : nom,  antes : desde, despues : hasta,  agencia : $("#cmbAgenciaRA").val()},
             type : 'GET',
             dataType : 'json',
             success : function(response) {
                 // console.log(response);
                 $("#tabla_asistencias").html("<table class='table table-hover' id='tablas_a' ><tr><th>DNI</th><th>FOTO</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE MARCADO</th><th>AGENCIA</th><th>TIPO</th></tr>");
                 $.each(response, function(i, val) {
                     $("#tablas_a tbody ").append("<tr>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='"+val.foto+"' width='50' height='60'></td>")
                     $("#tablas_a tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.fechahora+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                         
                 });

                 if (screen.width < 900) {
                    var elemento = document.getElementById("tablas_a");
                    elemento.className += " table-responsive";
                  };
             },
             error : function(xhr, status) {
                 //console.log('Disculpe, existió un problema horario');
             },
             complete : function(xhr, status) {
                 // alert('Petición realizada');
             }
         })
    })
});


$(document).ready(function(){
    $("#dtpHastaRA").change(function(event){
       
         // console.log($("#txtUsuarioBuscarRF").val());
         var nom =$("#txtUsuarioBuscarRA").val() ;
         var desde = new Date($('#dtpDesdeRA').val());
         desde = desde.toISOString();        
     
         var hasta = new Date($('#dtpHastaRA').val());
         hasta.setDate(hasta.getDate() + 1);
         hasta = hasta.toISOString();
     
        // console.log(desde);
         //console.log(hasta);
     
         $.ajax({
             url : '/asistencia/ver_entrada_salida',
             data : {nombre : nom,  antes : desde, despues : hasta,  agencia : $("#cmbAgenciaRA").val()},
             type : 'GET',
             dataType : 'json',
             success : function(response) {
                 // console.log(response);
                 $("#tabla_asistencias").html("<table class='table table-hover' id='tablas_a' ><tr><th>DNI</th><th>FOTO</th><th>NOMBRES Y APELLIDOS</th><th>FECHA DE MARCADO</th><th>AGENCIA</th><th>TIPO</th></tr>");
                 $.each(response, function(i, val) {
                     $("#tablas_a tbody ").append("<tr>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.dni+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'><img id='fotoAsistencia' src='"+val.foto+"' width='50' height='60'></td>")
                     $("#tablas_a tbody ").append("<td class='table-bordered'>"+val.nombres+" "+val.apellidoPaterno+" "+"</td>")
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.fechahora+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.agencia+"</td>");
                     $("#tablas_a tbody ").append("<td class='table-bordered' align='center'>"+val.tipo+"</td>");
                         
                 });

                 if (screen.width < 900) {
                    var elemento = document.getElementById("tablas_a");
                    elemento.className += " table-responsive";
                  };
             },
             error : function(xhr, status) {
                 //console.log('Disculpe, existió un problema horario');
             },
             complete : function(xhr, status) {
                 // alert('Petición realizada');
             }
         })
    })
});



//------------------------xxxxxxxxxxxxxx  fin ASISTENCIA  xxxxxxxxxxxxxxxx------------------------------