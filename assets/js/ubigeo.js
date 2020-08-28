$(document).ready(function(){
    $.ajax({
        // la URL para la petición
        url : '/php/ubigeo/departamento.php',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //data : { id : $("#departamento").val() },

        // especifica si será una petición POST o GET
        type : 'GET',

        // el tipo de información que se espera de respuesta
        dataType : 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(response) {
            $("#departamento option").remove();
            $.each(response, function(i, val) { 
                $("#departamento").append(" <option value="+val.id+" selected>"+val.name+"</option> ");
            });
            $("#departamento").append("<option value='departamento' selected>Departamento</option>");
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
});
function myfuncion() {
$.ajax({
        // la URL para la petición
        url : '/php/ubigeo/provincia.php',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data : { id : $("#departamento").val() },

        // especifica si será una petición POST o GET
        type : 'GET',

        // el tipo de información que se espera de respuesta
        dataType : 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(response) {
            $("#provincia option").remove();
            $.each(response, function(i, val) { 
                $("#provincia").append(" <option value="+val.id+" selected>"+val.name+"</option> ");
            });
            $("#provincia").append("<option value='pronvinciaa' selected>Provincia</option>  ");
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });

}


function distri() {
    //console.log("funciono");

    $.ajax({
        // la URL para la petición
        url : '/php/ubigeo/distrito.php',

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        data : { id : $("#provincia").val() },

        // especifica si será una petición POST o GET
        type : 'GET',

        // el tipo de información que se espera de respuesta
        dataType : 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success : function(response) {
            //console.log(response);
            $("#distrit option").remove();
            $.each(response, function(i, val) { 
                $("#distrit").append(" <option value="+val.id+" selected>"+val.name+"</option> ");
            });
            $("#distrit").append(" <option value='distritoo' selected>Distrito</option>");
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    });
}    