function a_horarios() {
    x =$("#agencia").val();

    $.ajax({
        url : '/api/horariosagencia/'+x,
        //data : {    },
        type : 'GET',
        dataType : 'json',
        success : function(response) {

            $("#contenedor_lv").remove();
            $("#L-V").append("<div id= 'contenedor_lv'>");
            $.each(response, function(i, val) {

                $("#contenedor_lv").append("<span>Ingreso Mañana: </span> <input value='"+val.hora_entrada_maniana +"' readonly><br>");
                $("#contenedor_lv").append("<span>Salida Mañana: </span> <input value='"+val.hora_salida_maniana +"' readonly><br>");
                $("#contenedor_lv").append("<span>Ingreso Tarde: </span> <input value='"+val.hora_entrada_tarde  +"' readonly><br>");
                $("#contenedor_lv").append("<span>Salida Tarde: </span> <input value='"+val.hora_salida_tarde  +"' readonly><br>");

            });
            $("#L-V").append("</div>");
           // console.log(response);
            $("#contenedor_s").remove();
            $("#S").append("<div id= 'contenedor_s'>");
            $.each(response, function(i, val) {
                $("#contenedor_s").append("<span>Ingreso Mañana: </span> <input value='"+val.hora_entrada_maniana_s +"' readonly><br>");
                $("#contenedor_s").append("<span>Salida Mañana: </span> <input value='"+val.hora_salida_maniana_s +"' readonly><br>");
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
