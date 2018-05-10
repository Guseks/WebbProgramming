'use strict'
/*
var fifth = document.getElementById("fifth");
console.dir(document.getElementsByTagName("Body"));

var list = fifth.parentNode;
console.dir(fifth.parentElement);
list.removeChild(fifth);
*/
var pElement = document.querySelector("p");
console.dir(pElement);
var pElementStyle = pElement.style;
var out = "";
var prop;
pElementStyle.backgroundColor = "#CCC";
pElementStyle.padding = "5px";


var items = document.querySelectorAll('.item');
console.dir(items);
for (let i = 0; i<items.length; i++){
    let elementStyle = items[i].style;
    elementStyle.color = "red";
    console.dir(elementStyle);
    elementStyle.fontWeight = "bold";
    elementStyle.padding = "5px";
}

var orderedList = document.getElementsByTagName("ol")[0];

console.dir(orderedList);
var newListItem = document.createElement("li");
newListItem.style.color = "red";
newListItem.style.fontWeight = "bold";
newListItem.style.padding = "5px";
var newContent = document.createTextNode("Fjärde");
newListItem.appendChild(newContent);

orderedList.insertBefore(newListItem, document.getElementById("fifth"));

var unOrderedList = document.querySelector("ul");

var unOrderedListener = function(item){
  orderedList.appendChild(item);
  item.addEventListener("click", orderedListener(item)); 
}

var orderedListener = function (item){
  unOrderedList.appendChild(item);
  item.addEventListener("click", unOrderedListener(item));
}

function setup(){
  
  var orderedListItems = document.querySelector("ol").children;
  console.dir(orderedListItems);
  
  for (let i = 0; i < orderedListItems.length; i++){
    var item = orderedListItems[i];
    orderedListItems[i].addEventListener("click", orderedListener(item));
    
  }
}

//console.dir(orderedListItems);

function test(){
  var unOrderedListItems = document.querySelector("ul").children;
  orderedList = document.querySelector("ol");
  console.dir(unOrderedListItems);
  for (let i = 0; i < unOrderedListItems.length; i++){
    unOrderedListItems[i].addEventListener("click", function() {
      orderedList.appendChild(this);
    })
    
  }

}

window.onload = function(){
  
  setup();
}

