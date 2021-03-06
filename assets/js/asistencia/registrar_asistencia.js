$(function(){
    var actualizarHora = function(){
      var fecha = new Date(),
          hora = fecha.getHours(),
          minutos = fecha.getMinutes(),
          segundos = fecha.getSeconds(),
          diaSemana = fecha.getDay(),
          dia = fecha.getDate(),
          mes = fecha.getMonth(),
          anio = fecha.getFullYear(),
          ampm;
      
      var $pHoras = $("#horas"),
          $pSegundos = $("#segundos"),
          $pMinutos = $("#minutos"),
          $pAMPM = $("#ampm"),
          $pDiaSemana = $("#diaSemana"),
          $pDia = $("#dia"),
          $pMes = $("#mes"),
          $pAnio = $("#anio");
      var semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
      var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
      
      $pDiaSemana.text(semana[diaSemana]);
      $pDia.text(dia);
      $pMes.text(meses[mes]);
      $pAnio.text(anio);
      if(hora>=12){
        hora = hora - 12;
        ampm = "PM";
      }else{
        ampm = "AM";
      }
      if(hora == 0){
        hora = 12;
      }
      if(hora<10){$pHoras.text("0"+hora)}else{$pHoras.text(hora)};
      if(minutos<10){$pMinutos.text("0"+minutos)}else{$pMinutos.text(minutos)};
      if(segundos<10){$pSegundos.text("0"+segundos)}else{$pSegundos.text(segundos)};
      $pAMPM.text(ampm);
      
    };
    
    
  actualizarHora();
  var intervalo = setInterval(actualizarHora,1000);
  });

  var numeros =  /^[0-9]+$/ ;

$( "#txtAsistenciaDni" ).keyup(function() {
  var dni = $("#txtAsistenciaDni").val().length;
  var nums=  $("#txtAsistenciaDni").val().match(numeros) ? true : false;
  if (!nums && dni!=0) {
    $("#txtAsistenciaDni").val("");
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'Ingrese el numero de su DNI! ',
      footer:'Esto escribio:  '+ $("#txtAsistenciaDni").val()
      
    })
    
  }
  if (dni >8) {
    $("#txtAsistenciaDni").val("");
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'El DNI debe tener 8 digitos!',
      footer: 'Esto escribio:  '+ $("#txtAsistenciaDni").val()
    })
  }
});