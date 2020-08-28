// $(document).click(function(){
//     if (document.getElementById("contenedor_gth").getAttribute("aria-expanded")=='false'){
//         document.getElementById("btnLogistica").style='backgroundColor:#70639E;color:#FFF;';
//         document.getElementById("btnOperaciones").style.backgroundColor='backgroundColor:#71BC9C;color:#FFF;';
//     }
// });

$(document).ready(function(){
    $(document).click(function(){
        var x = document.getElementById("contenedor_gth").getAttribute("aria-expanded") 
        if (x=="false"){
            document.getElementById("btnOperaciones").style.marginBottom='0px';
            document.getElementById("btnLogistica").style.marginTop='0px';
        };
    });
    $("#contenedor_gth").click(function(){
        var x = document.getElementById("contenedor_gth").getAttribute("aria-expanded") 
        if (x=="false"){
            document.getElementById("btnOperaciones").style.marginBottom='0px';
            document.getElementById("btnLogistica").style.marginTop='0px';
        };
    });
});


// function VerificarPosicion(){
   
//     var positionDown= 'translate3d(0px, 224px, 0px)'
//     var positionUp= 'translate3d(0px, -226px, 0px)'

//     if (document.getElementById("submenu_gth").style.transform==positionUp){
//         document.getElementById("btnOperaciones").style.backgroundColor='transparent';
//         document.getElementById("btnOperaciones").style.color='transparent';
//         document.getElementById("btnLogistica").style.backgroundColor='#70639E';
//         document.getElementById("btnLogistica").style.color='#FFF';
//     }else if(document.getElementById("submenu_gth").style.transform==positionDown){
//         document.getElementById("btnOperaciones").style.backgroundColor='#71BC9C';
//         document.getElementById("btnOperaciones").style.color='#FFF';
//         document.getElementById("btnLogistica").style.backgroundColor='transparent';
//         document.getElementById("btnLogistica").style.color='transparent';
//     };
// };



// $(document).scroll(function(){
//     VerificarPosicion()
// });

function VerificarPosicion(){
   
    var positionDown= 'translate3d(0px, 224px, 0px)'
    var positionUp= 'translate3d(0px, -226px, 0px)'

    if (document.getElementById("submenu_gth").style.transform==positionUp){
        document.getElementById("btnOperaciones").style.marginBottom='120%';
        document.getElementById("btnLogistica").style.marginTop='0px';
    }else if(document.getElementById("submenu_gth").style.transform==positionDown){
        document.getElementById("btnOperaciones").style.marginBottom='0px';
        document.getElementById("btnLogistica").style.marginTop='120%';
    };
};



$(document).scroll(function(){
    VerificarPosicion()
});
