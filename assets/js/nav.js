$(document).ready(function(){

    // Js que maneja la forma de mostrar datos del nav

    $("#m_principal").css("background-color", "#89BC2A");
    $("#content_principal").css("display", "block");
    //console.log("principal");

    $( "#m_principal" ).click(function() {
        $("#m_principal").css("background-color", "#89BC2A");
        $("#content_principal").css("display", "block");
        //console.log("principal");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");

        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");

        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");

        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");

        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");

        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");
        
        
    })

    $( "#m_datos_laborales" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");

        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#89BC2A");
        $("#content_datos_laborales").css("display", "block");
        //console.log("datos laborales");
        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");

        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");

        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");

        
    })
    $( "#m_horarios" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");
        
        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");

        $("#m_horarios").css("background-color", "#89BC2A");
        $("#content_horario").css("display", "block");
        //console.log("datos laborales");
        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");
        
        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");

        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");
        
        horarios();
    })
    $( "#m_tardanzas" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");
        
        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");


        $("#m_tardanzas").css("background-color", "#89BC2A");
        $("#content_tardanzas").css("display", "block");
        //console.log("datos laborales");
        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");
        
        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");

        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");

        tardanzas();
    })
    $( "#m_faltas" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");
        
        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");


        $("#m_faltas").css("background-color", "#89BC2A");
        $("#content_faltas").css("display", "block");
        //console.log("datos laborales");
        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");
        
        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");
        
        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");
        
        faltas();
    })

    $( "#m_justificaciones" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");
        
        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");


        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");
        //console.log("datos laborales");
        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");

        $("#m_sanciones").css("background-color", "#2655B4");
        $("#content_sanciones").css("display", "none");
        
        $("#m_justificaciones").css("background-color", "#89BC2A");
        $("#content_justificaciones").css("display", "block");

        justificaciones();
    })


    $( "#m_sanciones" ).click(function() {
        $("#m_principal").css("background-color", "#2655B4");
        $("#content_principal").css("display", "none");

        $("#m_datos_laborales").css("background-color", "#2655B4");
        $("#content_datos_laborales").css("display", "none");
        
        $("#m_horarios").css("background-color", "#2655B4");
        $("#content_horario").css("display", "none");


        $("#m_faltas").css("background-color", "#2655B4");
        $("#content_faltas").css("display", "none");
        //console.log("datos laborales");
        $("#m_tardanzas").css("background-color", "#2655B4");
        $("#content_tardanzas").css("display", "none");
        
        $("#m_justificaciones").css("background-color", "#2655B4");
        $("#content_justificaciones").css("display", "none");

        $("#m_sanciones").css("background-color", "#89BC2A");
        $("#content_sanciones").css("display", "block");

        sanciones();
    })


});

