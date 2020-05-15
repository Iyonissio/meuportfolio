
/*Para efeito do amburguer nav icon (!nao esta a ser usado no site!!)*/
$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
});

/*Para o navbar subir quando um link a  do navbar for clicado*/
$(function(){ 
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  var anim = $(".animated-icon2");
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
     
  });
 
});

Aos.init({
    duration:1200,
})



