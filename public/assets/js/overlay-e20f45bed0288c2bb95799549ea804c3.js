!function(){function e(){if(classie.has(d,"open")){classie.remove(d,"open"),classie.add(d,"close");var e=function(n){if(support.transitions){if("visibility"!==n.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(d,"close")};support.transitions?d.addEventListener(transEndEventName,e):e(),$("body").removeClass("noscroll")}else classie.has(d,"close")||(classie.add(d,"open"),$("body").addClass("noscroll"))}var n=document.getElementById("trigger-overlay"),t=document.getElementById("trigger-overlay-two"),i=document.getElementById("trigger-overlay-three"),r=document.getElementById("trigger-overlay-four"),s=document.getElementById("trigger-overlay-five"),o=document.getElementById("trigger-overlay-six"),a=document.getElementById("trigger-overlay-seven"),d=document.querySelector("div.overlay"),c=d.querySelector("a.overlay-close");return transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},$(document).bind("keydown",function(n){27==n.which&&e()}),n.addEventListener("click",e),t.addEventListener("click",e),i.addEventListener("click",e),r.addEventListener("click",e),s.addEventListener("click",e),o.addEventListener("click",e),a.addEventListener("click",e),c.addEventListener("click",e),!1}();