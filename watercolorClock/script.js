const url = new URL(window.location.href);

function getClock(){  
    const now = new Date();
    let hours = now.getHours()<=9 ? "0"+now.getHours() : now.getHours();
    let minutes = now.getMinutes()<=9 ? "0"+now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds()<=9 ? "0"+now.getSeconds() : now.getSeconds();
    document.getElementById("time").innerHTML = hours +":"+minutes;
    let color = url.searchParams.get("color");
    setColor(color);
    let separator = url.searchParams.get("separator");
    let format = url.searchParams.get("format");
    setDate(now,separator,format);
    let name = url.searchParams.get("name");
    setGreeting(name,now.getHours());
    
}

function setColor(color){
   // document.getElementById("clock").style.backgroundImage.replace("")
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
    document.getElementById("greeting").innerHTML = greeting + name;
    //urlWidget.searchParams.set("icon","glyphicon-phone"); 
   // document.getElementById("urlArea").innerHTML = urlWidget;
}

function setDate(date,separator,format){    
    const now = date;
    let day = now.getDate()<=9 ? "0"+now.getDate() : now.getDate();
    let month = now.getMonth()<=9 ? "0"+now.getMonth() : now.getMonth();
    let year = now.getFullYear();
    document.getElementById("calendar").innerHTML = day+separator+month+separator+year;
}

setInterval(getClock, 1000);
getClock();
