'use strict';


/* ---------------- Functions -------------*/

var collection = [1, "hejsan", 3, "harry potter"];
//displayCollection(collection);
function displayCollection (myData){
    myData.forEach(element => {
        console.log(element);
    });
} 


var numbers = [1, 2, 3, 4];
//filterNumbers(numbers);
function filterNumbers(numbers){
    var evenNumbers = numbers.filter(isEven);
    console.dir(evenNumbers);
    
}


function isEven(number){
    return number % 2 === 0;
}



/* -------------------- Scope --------------------- */

function init(list) {
    var result = [];

    for (let i = 0; i < list.length; i++) {
        let item = 'item' + list[i];
        result.push(function () { 
            console.log(item + ' ' + list[i]);
        });
    }

    return result;
}

function start() {
    var list = init([1,2,3]);

    
    for (var j = 0; j < list.length; j++) {
        list[j]();
    }
}

start();
