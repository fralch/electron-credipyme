
$(document).ready(function(){
    $("#lista_equipos").change(function(event){
       //console.log("funciono?");
        // var nom =$("#nombre_tardanzas").val() ;
 
        $.ajax({
            url : '/api/gth/colaboradormes/evaluaciones/'+$("#lista_equipos").val() ,
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#integrantes td").remove();
                           
                $.each(response, function(i, val) {
                    $("#integrantes").append('<tr><td>'+val.dni+"</td> <td>"+val.nombres+" "+val.apellidoPaterno+" </td> <td>"+val.cargo+"</td> </tr></table>");            
                });
                  
            },
            error : function(xhr, status) {
                console.log('problema buscando por desde ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
      
    })
});

$(document).ready(function(){
    $("#lista_equipos").change(function(event){
       //console.log("funciono2");
        // var nom =$("#nombre_tardanzas").val() ;
 
    
        $.ajax({
            url : '/api/gth/colaboradormes/evaluaciones/responsable/'+$("#lista_equipos").val() ,
            type : 'GET',
            dataType : 'json',
            success : function(response) {
                $("#responsable input").remove();
                           
                $.each(response, function(i, val) {
                    $("#responsable").append('<input type="text" value="'+val.nombres+" "+val.apellidoPaterno+'">');            
                    $("#responsable").append('<input type="hidden" name = "responsable" value="'+val.responsable+'">');            
                });
                  
            },
            error : function(xhr, status) {
                console.log('problema buscando  2 ');
            },
            complete : function(xhr, status) {
                // alert('Petición realizada');
            }
        })
    })
});