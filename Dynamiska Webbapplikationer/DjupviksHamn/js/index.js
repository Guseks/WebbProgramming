(function(){
  "use strict";

  
  addEventListener("scroll", fixMenu);
  let menu = document.querySelector("nav");
  let navStyle = menu.style;
  let contentStyle = document.querySelector("main").style;
  function fixMenu(){
    let documentPos = window.scrollY;
    
   
    let documentWidth = document.querySelector("body").clientWidth;
    if(documentWidth > 1000){
      if(documentPos > 420) {
        navStyle.position = "fixed";
        navStyle.top = 0;
        navStyle.width = "100%";
        navStyle.zIndex = 1;
        
        contentStyle.marginTop = "75px";
      }
      else {
        navStyle.position = "static";
        navStyle.zIndex = 0;
        contentStyle.marginTop = "20px";
      }
    }
    else {
      navStyle.position ="static";
    }
  }

})();