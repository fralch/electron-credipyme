$(document).ready(function(){
    $("#categoria").change(function(event){
        var id =$("#categoria").val() ;
        //console.log(id);
        $.ajax({
            url: "/gth/colaboradormes/crearpreguntas",
            data : { identificador : id },
            type : 'GET',
            dataType : 'json',
            success: function (response) {
                console.log(response);
                $("#peso_categoria strong").remove();

                $.each(response, function(i, val) {
                    $("#peso_categoria").append('<strong>'+val.peso+'</strong>');  
                });
            }
        });
    })
})


