
function responsable_intetrantes() {


    $.ajax({
        url :'/api/gth/colaboradormes/evaluacion/registrar',
        data : {id_equipo : $("#lista_equipos").val(), 	id_examen : $("#examen_r_i").val() , mes : $("#mes").val(), año : $("#año").val() , quien:'responsable' },
        type : 'GET',
        // dataType : 'json',
        success : function(response) {

            console.log(response)


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}



function intetrantes_responsable() {


    $.ajax({
        url :'/api/gth/colaboradormes/evaluacion/registrar',
        data : {id_equipo : $("#lista_equipos").val(), 	id_examen : $("#examen_i_r").val() , mes : $("#mes").val(), año : $("#año").val()   , quien:'integrantes'},
        type : 'GET',
        // dataType : 'json',
        success : function(response) {

            console.log(response)


        },
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(xhr, status) {
            // alert('Petición realizada');
        }
    })

}