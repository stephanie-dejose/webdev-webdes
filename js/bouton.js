/**
 *  ./js/bouton.js
 */

$(function(){
  // Quand l'utilisateur clique sur le bouton, il remonte lentement jusqu'au dessus du document
  $('#boutonHaut').click(function() {
  $('html,body').animate({scrollTop: 0}, 'slow');
  });

  // L'icône par défaut est présente à partir du scroll de l'utilisateur
  $(window).scroll(function() {
    if ($(window).scrollTop()>200) {
      $('#boutonHaut').fadeIn();
    }
    else {
      $('#boutonHaut').fadeOut();
    }
  });
});
