document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

document.addEventListener("click", function() {
  document.body.style.overflow = 'hidden';
}, false);

document.addEventListener("touchstart", function() {
  document.body.style.overflow = 'hidden';
}, false);

document.addEventListener("touchend", function() {
  document.body.style.overflow = 'hidden';
}, false);

document.addEventListener("touchmove", function() {
  document.body.style.overflow = 'hidden';
}, false);

document.addEventListener("touchcancel", function() {
  document.body.style.overflow = 'hidden';
}, false);