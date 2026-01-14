document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

document.addEventListener("click", function() {
  if (document.body.style.overflow !== 'hidden' && document.title === 'funnyfoodguy'){
    document.body.style.overflow = 'hidden';
  };
}, false);

document.addEventListener("touchstart", function() {
  if (document.body.style.overflow !== 'hidden' && document.title === 'funnyfoodguy'){
    document.body.style.overflow = 'hidden';
  };
}, false);

document.addEventListener("touchend", function() {
  if (document.body.style.overflow !== 'hidden' && document.title === 'funnyfoodguy'){
    document.body.style.overflow = 'hidden';
  };
}, false);

document.addEventListener("touchmove", function() {
  if (document.body.style.overflow !== 'hidden' && document.title === 'funnyfoodguy'){
    document.body.style.overflow = 'hidden';
  };
}, false);

document.addEventListener("touchcancel", function() {
  if (document.body.style.overflow !== 'hidden' && document.title === 'funnyfoodguy'){
    document.body.style.overflow = 'hidden';
  };
}, false);