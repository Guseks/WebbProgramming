(function(){
  "use strict"

  fetch("http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
    .then(res => res.json())
    .then(log)
    .then(parseData);

  function log (res){
    console.dir(res);
    console.dir(res.timeSeries);
    return res.timeSeries;
  }
  
  function getCurrentDate(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month < 10){
      month = "0" + month;
    }
    let day = date.getDate();
    if(day < 10){
      day = "0" + day;
    }
    
    return (year + "-" + month + "-" + day);
  }

  function getTomorrowsDate(){
    let today = new Date();
    let tomorrow = new Date(today.getTime()+(24*60*60*1000));
    let year = tomorrow.getFullYear();
    let month = tomorrow.getMonth() + 1;
    if(month < 10){
      month = "0" + month;
    }
    let day = tomorrow.getDate();
    
    if(day < 10){
      day = "0" + day;
    }
    
    return (year + "-" + month + "-" + day);
  }
  
  function parseData(data){
    let currentDate = getCurrentDate();
    let tomorrowsDate = getTomorrowsDate();
    let todayInfo = [];
    let tomorrowInfo = [];
    let timeInfo = {
      date: null,
      time: null
    };
    for(let ii = 0; ii < data.length; ii++){
      let temp = data[ii].validTime.split("T");
      timeInfo.date = temp[0];
      timeInfo.time = temp[1].substring(0, 8);
      if((timeInfo.date == currentDate) && (timeInfo.time == "06:00:00")){
        todayInfo[0] = data[ii];
      }
      if(timeInfo.date == currentDate && timeInfo.time == "12:00:00"){
        todayInfo[1] = data[ii];
      }
      if(timeInfo.date == currentDate && timeInfo.time == "18:00:00"){
        todayInfo[2] = data[ii];
      }
      if((timeInfo.date == tomorrowsDate) && (timeInfo.time == "06:00:00")){
        tomorrowInfo[0] = data[ii];
      }
      if(timeInfo.date == tomorrowsDate && timeInfo.time == "12:00:00"){
        tomorrowInfo[1] = data[ii];
      }
      if(timeInfo.date == tomorrowsDate && timeInfo.time == "18:00:00"){
        tomorrowInfo[2] = data[ii];
      }
    }
    formatTable(todayInfo, document.querySelectorAll("table")[0]);
    formatTable(tomorrowInfo, document.querySelectorAll("table")[1]);
    console.dir(todayInfo);
    console.dir(tomorrowInfo);
  }

  function formatTable(info, table){
    let rows = table.children[0].children;
    let th  = document.createElement("th");
    th.innerText = "Luftfuktighet";
    rows[0].insertBefore(th, rows[0].children[3]);
    for(let i = 1; i< rows.length; i++){
      if(i == 1){
        rows[i].children[0].innerText = "6";
        if(info[0] != undefined){
          rows[i].children[1].innerText = info[0].parameters[1].values[0];
          let windDirection = getWindDirection(info[0].parameters[3].values[0])
          rows[i].children[2].innerText = windDirection +" (" + Math.round(info[0].parameters[4].values[0]) + ")";
          let mostuire = info[0].parameters[5].values[0];
          let airMostuire = document.createElement("td");
          airMostuire.innerText = mostuire + "%";
          rows[i].appendChild(airMostuire);
          let weather = info[0].parameters[18].values[0];
          formatCloudInfo(weather, rows[i]);
        }
      }
      if( i == 2){
        rows[i].children[0].innerText = "12";
        if(info[1] != undefined){
          rows[i].children[1].innerText = Math.round(info[1].parameters[1].values[0]);
          let windDirection = getWindDirection(info[1].parameters[3].values[0]);
          rows[i].children[2].innerText = windDirection + " (" + Math.round(info[1].parameters[4].values[0]) +")";
          let mostuire = info[1].parameters[5].values[0];
          let airMostuire = document.createElement("td");
          airMostuire.innerText = mostuire + "%";
          rows[i].appendChild(airMostuire);
          let weather = info[1].parameters[18].values[0];
          formatCloudInfo(weather, rows[i]);
        }
      }
      if( i == 3){
        rows[i].children[0].innerText = "18";
        if(info[2] != undefined){
          rows[i].children[1].innerText = Math.round(info[2].parameters[1].values[0]);
          let windDirection = getWindDirection(info[2].parameters[3].values[0]);
          rows[i].children[2].innerText = windDirection + " (" + Math.round(info[2].parameters[4].values[0]) +")";
          let mostuire = info[2].parameters[5].values[0];
          let airMostuire = document.createElement("td");
          airMostuire.innerText = mostuire + "%";
          rows[i].appendChild(airMostuire);
          let weather = info[2].parameters[7].values[0];
          formatCloudInfo(weather, rows[i]);
        }
      }
    }
  }

  function formatCloudInfo(weather, row){
    let sky = document.createElement("td");  
    switch(weather){
      case 0:
        sky.innerText = "Klart"
        break;
      case 1:
        sky.innerText = "Nästan klar himmel"
        break;
      case 2:
        sky.innerText = "Enstaka moln"
        break;
      case 3:
        sky.innerText = "Varierande molnighet"
        break;  
      case 4:
        sky.innerText = "Halvklart"
        break;
      case 5:
        sky.innerText = "Molnigt" 
        break;
      case 6:
        sky.innerText = "Mulet" 
        break;
      case 7:
        sky.innerText = "Mulet" 
        break;
      case 8:
        sky.innerText = "Mulet" 
        break;
      

    }
    row.appendChild(sky);
  }

  function getWindDirection(windDegrees){
    let direction;
    if((windDegrees <= 22) || windDegrees > 339) {
      direction = "E"
    }
    if(windDegrees <= 68 && windDegrees > 22){
      direction = "NE";
    }
    if(windDegrees <= 112 && windDegrees > 68){
      direction = "N";
    }
    if(windDegrees <= 158 && windDegrees > 112){
      direction = "NW";
    }
    if(windDegrees <= 202 && windDegrees > 158){
      direction = "W";
    }
    if(windDegrees <= 248 && windDegrees > 202){
      direction = "SW";
    }
    if(windDegrees <= 294 && windDegrees > 248){
      direction = "S";
    }
    if(windDegrees <= 339 && windDegrees > 294){
      direction = "SE";
    }
    return direction;
  }


})()