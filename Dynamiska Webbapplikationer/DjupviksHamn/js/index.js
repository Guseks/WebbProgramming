(function(){
  'use strict'

  window.onscroll = function(){
    fixMenu();
  }
  function fixMenu(){
    let menu = document.querySelector("nav");
    let documentPos = scrollY;
    let navStyle = menu.style;
    let contentStyle = document.querySelector("main").style;
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
      if(documentPos > 420){
        navStyle.position = "fixed";
        navStyle.top = 0;
        navStyle.width = "100%";
        navStyle.zIndex = 1;
        
        contentStyle.marginTop = "290px";
      }
      else {
        navStyle.position = "static";
        navStyle.zIndex = 0;
        contentStyle.marginTop = "20px";
      }
    }
  }

})();