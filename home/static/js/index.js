var captionLength = 0;
var cap = [" By NightFury"];
var caption = '';
var i=0;

$(document).ready(function() {
    setInterval ('cursorAnimation()', 1000);
    captionEl = $('#caption');
});

(function testTypingEffect() {
    i=cap.length-1;
    
    
    myLoop(i);
    type();
    
})();
function myLoop (i) {           
   setTimeout(function () {   
        caption=cap[i];
        type();
        i--;    
        if(i<0)
        {
           i=cap.length-1;
        }                 
      if (i < 10 && i >= 0) {            
         myLoop(i);             
      }  

   }, 3500)
} 

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 100);
    } 
     setTimeout('erase()', 2000);
}


function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 100);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}