(function($){
  $(function(){
	  $("img.lazy").lazyload({
		skip_invisible : true,
		threshold : 117
	  });
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

	});
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  $(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
  });

  $(document).ready(function(){
      $('.carousel').carousel();
    });
	  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
	$(document).ready(function(){
      $(window).scroll(function(){
          if($(window).scrollTop() > 11000) {
              $(picture).fadeIn("fast");
          }
          else if($(window).scrollTop() <= 11000){
              $(picture).fadeOut("fast");
          }
      });
    });



  document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget"));
  });

  document.getElementById("copyButton2").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget2"));
  });

  document.getElementById("copyButton3").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget3"));
  });

  document.getElementById("copyButton4").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget4"));
  });

  document.getElementById("copyButton5").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget5"));
  });

  document.getElementById("copyButton6").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget6"));
  });

  document.getElementById("copyButton7").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget7"));
  });

  document.getElementById("copyButton8").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget8"));
  });

  document.getElementById("copyButton9").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget9"));
  });

  document.getElementById("copyButton10").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget10"));
  });

  document.getElementById("copyButton11").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget11"));
  });

  document.getElementById("copyButton12").addEventListener("click", function() {
    copyToClipboard(document.getElementById("copyTarget12"));
  });


function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "fixed";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}





}(jQuery));// end of jQuery name space
