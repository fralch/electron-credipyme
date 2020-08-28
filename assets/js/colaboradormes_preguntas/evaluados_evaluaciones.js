$(document).ready(function(){
    $("#evaluaciones").change(function(event){
        
        $.ajax({
            url: "/gth/colaboradormes/realizar_evaluacion/preguntas",
            data : { id_examen : $("#evaluaciones").val() },
            type : 'GET',
            dataType : 'json',
            success: function (response) {
                console.log(response);
                let num =1;
                $("#table_evaluados").html("<table id='t_principal'><tr><th>Evaluado</th><th>Puntaje</th><th>Pregunta</th></tr>");
                $.each(response, function(i, val) {
                    $("#t_principal tbody ").append("<tr>");
                    $("#t_principal tbody ").append("<td>"+val.nombres+'</td>');
                    $("#t_principal tbody ").append("<td>"+'<input  type="number" name="'+val.id_e_p+'" min="1" max="'+val.valor+'"></td>');
                    $("#t_principal tbody ").append("<td>"+val.pregunta+'</td> ');
                    $("#t_principal tbody ").append("</tr></table>");
                    num= num+1;
                });
            }
        });
    })
})
