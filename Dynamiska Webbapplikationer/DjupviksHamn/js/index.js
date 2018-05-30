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

/*--------- Kommentar till min lösning---------
Jag anser att min sajt till stora delar är produktionsredo och utformad enligt den designspecifikation jag fick. 
Designen och layout känns väl anpassad och sajten andas rätt atmosfär. 
Det tydliga området som jag upplever skulle kunna förbättras är implementeringen av Javascript koden och hur menyn fäster sig vid toppen.
Vilket mer är ett tekniskt perspektiv eftersom att den nuvarande menyn är fullt användbar, men den som gillar detaljer kan se att sajten "hackar" till när menyn fäster.
Dessutom skulle menyn även kunna fastna på mindre skärmar om det är önskvärt, men i nuläget är inte det aktuellt eftersom att det gör zoomning helt omöjligt på mindre skärm.
En annan möjlig förbättring är att göra navigeringsmenyn för mindre skärmar mer användarvänlig och så att den tar upp mindre plats på sajten.
Detta skulle kunna göras genom att dölja menyn i en meny som visas när användaren vill. Någon form av navigeringsknapp som är vanlig på mobilsajter.

En annan sak som inte är implementerad är att formuläret i nuläget inte gör något med den data som användaren skickar in. Den skickar inte informationen någonstans på något lämpligt sätt.
För att implementera detta behövs ytterligare teknisk utveckling i form av javascript kod som utvecklar denna funktionalitet och exempelvis skickar informationen som fylldes i till en mailadress
formaterat på ett lämpligt sätt.
*/