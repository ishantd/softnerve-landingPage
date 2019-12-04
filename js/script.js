// for transparent navbar

$(document).ready(function(){
          
    $(window).scroll(function(){

      if($(window).scrollTop()>300){
        $('nav').addClass('grey');
      }else{
        $('nav').removeClass('grey');
      }

    });

});

// transparent navbar ends here

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });