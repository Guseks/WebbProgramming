(function(){
  'use strict';
  let input = document.querySelector("#search_input");
  
  let test;
  document.querySelector("button").addEventListener("click", function(){
    let searchQuery = input.value;
    
    fetch("http://api.tvmaze.com/search/shows?q="+searchQuery)
        .then(res => res.json())
        .then(log)
        .then(display);
  })
  function log(res){
    console.dir(res);
    return res;
  }

  function display (shows){
    let div_cards = document.querySelector(".cards");
    
    for(let ii = 0; ii < shows.length; ii++){
      let a = document.createElement("a");
      a.setAttribute("class", "card card-show");
      a.setAttribute("href", "#preview_url");
      let cardHeader = document.createElement("span");
      cardHeader.setAttribute("class", "card-header");
      if(shows[ii].show.image == null){
        cardHeader.style = "background-color: #CCC";
      }
      else {
        cardHeader.style = "background-image: url(" + shows[ii].show.image.original + ");";
      }
      
      let cardTitle = document.createElement("span");
      cardTitle.setAttribute("class", "card-title")
      let h3 = document.createElement("h3");
      h3.innerText = shows[ii].show.name;
      cardTitle.appendChild(h3);
      cardHeader.appendChild(cardTitle);
      a.appendChild(cardHeader);
      let cardSummary = document.createElement("span");
      cardSummary.setAttribute("class", "card-summary");
      cardSummary.innerText = shows[ii].score;
      a.appendChild(cardSummary);
      let cardMeta = document.createElement("span");
      cardMeta.setAttribute("class", "card-meta");
      cardMeta.innerText = "Click for more info";
      a.appendChild(cardMeta);
      div_cards.appendChild(a);

    }
    console.dir(div_cards);
  }
    
  


}());