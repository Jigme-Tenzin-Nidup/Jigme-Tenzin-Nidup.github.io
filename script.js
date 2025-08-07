$(document).ready(function() {
    var $body = $('body');
    
    // Add loading class to body
    $body.addClass('loading');
    
    var loading = [
        { elements: $body, properties: { width: '20%' } },
        { elements: $body, properties: { width: '30%' } },
        { elements: $body, properties: { width: '50%' } },
        { elements: $body, properties: { width: '100%' } },
        { 
            elements: $body, 
            properties: { height: '100%' }, 
            options: { 
                complete: function() { 
                    $('.wrap').velocity('transition.slideUpIn');
                    $('img').velocity('transition.flipYIn');
                    $('html').css({ background: '#fff' });
                    
                    // Add class to indicate loading is complete
                    $body.removeClass('loading').addClass('loading-complete');
                }
            }
        }
    ];
    
    $.Velocity.RunSequence(loading);
});



document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Hello", "Ideas", "Opinion", "Insight"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h4").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 200);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

//Python area
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("pythonCode");
  if (textarea) {
    CodeMirror.fromTextArea(textarea, {
      mode: "python",
      lineNumbers: true,
      theme: "material-darker",  
      readOnly: "nocursor",
      viewportMargin: Infinity
    });
  }
});

//toggle btn
function toggleMenu() {
  const menu = document.querySelector('.navigation-menu');
  menu.classList.toggle('active');
}

