const url = new URL(window.location.href);
let prueba = "";

function getClock(){  
    const now = new Date();
    let hours = now.getHours()<=9 ? "0"+now.getHours() : now.getHours();
    let minutes = now.getMinutes()<=9 ? "0"+now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds()<=9 ? "0"+now.getSeconds() : now.getSeconds();
    document.getElementById("time").innerHTML = hours +":"+minutes;
    let color = url.searchParams.get("color");
    setColor(color);
    let format = url.searchParams.get("format");
    setDate(now,format);
    let name = url.searchParams.get("name");
    setGreeting(name,now.getHours());
    
}

function setColor(color){
    let colorString = "url('images/";
    let format = ".png')";
    for (let i = 0; i < document.getElementsByClassName("clock-area").length; i++) {
        document.getElementById("clock").style.backgroundImage = colorString+color+format;
    }     
    prueba = document.getElementById("clock").style.backgroundImage;
}

function setGreeting(name,hours){
    let greeting = "Have a nice day, ";
    if(hours>=5&&hours<=11){ //morning
        greeting = "Good Morning, ";
    }else if(hours>=12&&hours<=14){ //afternoon
        greeting = "Good Afternoon, ";
    }
    else if(hours>=15&&hours<=18){ //evening
        greeting = "Good Evening, ";
    }else { //night
        greeting = "Good Night, ";
    }
    document.getElementById("greeting").innerHTML = greeting + name+"!";
}

function setDate(date,format){    
    const now = date;
    let literalDate = "";
    let day = now.getDate()<=9 ? "0"+now.getDate() : now.getDate();
    let month = now.getMonth()<=9 ? "0"+now.getMonth() : now.getMonth();
    let year = now.getFullYear();
    switch(format){
        case "dd-mm-yyyy":
           literalDate = day+"-"+month+"-"+year;
           break;
       case "mm/dd/yyyy":
           literalDate = month+"/"+day+"/"+year;
           break;
       case "mm-dd-yyyy":
           literalDate = month+"-"+day+"-"+year;
           break;  
       default: //dd/mm/yyyy
           literalDate = day+"/"+month+"/"+year;
           break;
   }

    document.getElementById("calendar").innerHTML = literalDate;
}

setInterval(getClock, 1000);
getClock();
