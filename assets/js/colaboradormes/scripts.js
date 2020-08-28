(function($) {
    "use strict"; // Start of use strict
  
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };

      if ($("body").hasClass("sidebar-toggled")) {
        document.getElementById("logoPrincipal").src="../../images/colaboradormes/logocortoverde.svg";
      }else {
        if (screen.width < 900) {
            document.getElementById("logoPrincipal").src="../../images/colaboradormes/logocortoverde.svg";
        }else{
            document.getElementById("logoPrincipal").src="../../images/colaboradormes/logo.svg";
          };
        
      }

    });
  
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
      if ($(window).width() < 900) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  
    // Scroll to top button appear
    $(document).on('scroll', function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });
  
  })(jQuery); // End of use strict

  function ocultarNavegadorLateral(){

    
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
            };

  };

  function navegar(subMenuId){

    
    if (subMenuId == "submenu_Lista_Preguntas"){

        document.getElementById("contenedor_lista_preguntas").style.display = 'contents';
                
        if (screen.width < 900) {
            ocultarNavegadorLateral();
        };

        return;
    }
    
};
