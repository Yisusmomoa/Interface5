

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

window.onscroll = function(){
  AddOrRemove()
};

var Nav = document.getElementById("EjNav");
var NavPosition = Nav.offsetTop;

function AddOrRemove(){
  if(window.pageYOffset >= NavPosition){
      Nav.classList.add("Paste");
  }
  else{
      Nav.classList.remove("Paste");
  }
}


$(document).ready(function(){
  //links categorias iniciar sesión registrate
    $(".navbar-links li a").mouseenter(
      function(){
        $(this).animate( {fontSize:"1.1rem"},10);
        $(this).animate({opacity: '0.5'},'fast');
      });
      $(".navbar-links li a").mouseleave(
        function(){
            $(this).animate( {fontSize:"1rem"},10);
            $(this).animate({opacity: '1', },'fast');
      });
      //toggle animacion slide
      $(".toggle-button").click(function(){
          $(".navbar-links").slideToggle("slow");
      });

      //Boton más información
      $("div#QuienesSomos button").mouseenter(
        function(){
          $(this).animate( {fontSize:"1.1rem"},100);
          
        });
        $("div#QuienesSomos button").mouseleave(
          function(){
              $(this).animate( {fontSize:"1rem"},100);
              
        });

        var carousel1=document.getElementsByClassName('Card3');
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:100,
          merge:true,
          mergeFit:true,
        //  nav:true, //se puede quitar
          items:4,
          stagePadding: Number,
          
          responsive:{
              600:{
                  items:2
                  
              },
              900:{
                  items:3
              },
              800:{
                  items:2
              },
              1000:{
                items:4
              },
              500:{
                items:1
                
                //modificar el padding o margin
              }
          }
        });


/*
      //logo
      $(".brand-title a img").mouseenter(
        function(){
          $(this).animate( { height: '110px',
          width: '200px'});
        });

      $(".brand-title a img").mouseleave(
          function(){
            $(this).animate( { height: '90px',
            width: '150px'});
        });
        */
    });
    

    //como animar bien la imagen sin que se ueva todo alv 






//popup
var btnAbrirPopup=document.getElementById('btn-abrir-popup'),
    overlay=document.getElementById('overlay'),
    popup=document.getElementById('popup'),
    btncerrarpopup=document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});


btncerrarpopup.addEventListener('click',function(){
  overlay.classList.remove('active');
  popup.classList.remove('active');
});















