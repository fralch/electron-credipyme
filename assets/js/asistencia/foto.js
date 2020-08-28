// obtener numero de camaras
var tipodispositivo= navigator.mediaDevices.enumerateDevices();
var listaDeDispositivos = document.querySelector("#listaDeDispositivos");
var video = document.querySelector('#video');
var canvas = document.querySelector("#canvas");
var boton = document.querySelector("#btnRegistrar");



var camara = navigator.mediaDevices.getUserMedia({ audio: false, video: true });
camara.then(function(mediaStream) {
        //console.log(mediaStream);   
    media=mediaStream; 
    video.srcObject= mediaStream;

});

 
        
boton.addEventListener("click", function() {

    //Pausar reproducción
    video.pause();

    //Obtener contexto del canvas y dibujar sobre él
    let contexto = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    foto = canvas.toDataURL(); //Esta es la foto, en base 64
    
    fetch("guardar_foto.php", {
            method: "POST",
            body: encodeURIComponent(foto),
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            }
        })
        .then(resultado => {
            // A los datos los decodificamos como texto plano
            return resultado.text()
        })
       

    //Reanudar reproducción
    video.play();
});

// function foto() {
//     // media.getTracks().forEach(track => track.stop())
//     console.log('funciono');
//     video.pause();
//      //Obtener contexto del canvas y dibujar sobre él
//      let contexto = canvas.getContext("2d");
//      canvas.width = video.videoWidth;
//      canvas.height = video.videoHeight;
//      contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
//      let foto = canvas.toDataURL(); 
    
//      fetch("/img/asistencia/guardar_foto.php", {
        
//              method: "POST",
//              body: encodeURIComponent(foto),
//              headers: {
//                  "Content-type": "application/x-www-form-urlencoded",
//              }
//          })
//          .then(resultado => {
//              // A los datos los decodificamos como texto plano
//              console.log(" correctamente");
//              return resultado.text()
             
//          })
//          .then(nombreDeLaFoto => {
//              // nombreDeLaFoto trae el nombre de la imagen que le dio PHP
//              console.log("La foto fue enviada correctamente");
//             //  $estado.innerHTML = `Foto guardada con éxito. Puedes verla <a target='_blank' href='./${nombreDeLaFoto}'> aquí</a>`;
//          })

   

//      //Reanudar reproducción
//      video.play();
// }
