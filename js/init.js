(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.ontouchstart = function(e){ 
    e.preventDefault(); 
}
