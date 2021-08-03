

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