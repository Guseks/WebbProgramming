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

var unorderedList = document.getElementsByTagName("ol")[0];

console.dir(unorderedList);
var newListItem = document.createElement("li");
newListItem.style.color = "red";
newListItem.style.fontWeight = "bold";
newListItem.style.padding = "5px";
var newContent = document.createTextNode("Fjärde");
newListItem.appendChild(newContent);

unorderedList.insertBefore(newListItem, document.getElementById("fifth"));
