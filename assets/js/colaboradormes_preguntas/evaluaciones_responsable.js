$(document).ready(function(){
    $("#lista_equipos").change(function(event){
        var id =$("#lista_equipos").val() ;
        //console.log(id);
        $.ajax({
            url: "/api/gth/colaboradormes/evaluaciones/responsable/"+$("#lista_equipos").val(),
            data : { identificador : id },
            type : 'GET',
            dataType : 'json',
            success: function (response) {
                //console.log(response);
                $("#responsable input").remove();

                $.each(response, function(i, val) {
                    // $("#responsable").append('<strong>'+val.peso+'</strong>');  
                    $("#responsable").append('<input type="'+val.responsable+'" value="'+val.nombres +' '+val.apellidoPaterno+'">');  
                });
            }
        });
    })
})


