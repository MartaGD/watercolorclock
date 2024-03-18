const urlWidget = new URL(window.location.origin+window.location.pathname+"/watercolorClock/index.html");
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function copyAreaBtn() {
    // Get the text field
    var copyText = document.getElementById("urlArea");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}
function getClock(){  
    const now = new Date();
    let hours = now.getHours()<=9 ? "0"+now.getHours() : now.getHours();
    let minutes = now.getMinutes()<=9 ? "0"+now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds()<=9 ? "0"+now.getSeconds() : now.getSeconds();
    document.getElementById("time").innerHTML = hours +":"+minutes;
    let color = document.getElementById("colorSelector").value;
    setColor(color);
    let format = document.getElementById("formatSelector").value;
    setDate(now,format);
    let name = document.getElementById("labelSelector").value;
    setGreeting(name,now.getHours());
   
    
}

function setColor(color){
    let colorString = "url('watercolorClock/images/";
    let format = ".png')";
    for (let i = 0; i < document.getElementsByClassName("clock-area").length; i++) {
        document.getElementById("clock").style.backgroundImage = colorString+color+format;
    }     
    prueba = document.getElementById("clock").style.backgroundImage;
    urlWidget.searchParams.set("color", color);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function setGreeting(name,hours){
    if(name==""){
        name = "Cutie";
    }
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
    urlWidget.searchParams.set("name",name);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function setDate(date,format){
    const now = date;
    let day = now.getDate()<=9 ? "0"+now.getDate() : now.getDate();
    let month = (now.getMonth()+1)<=9 ? "0"+(now.getMonth()+1) : (now.getMonth()+1);
    let year = now.getFullYear();
    let literalDate = "";
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
    urlWidget.searchParams.set("format",format);
    document.getElementById("urlArea").innerHTML = urlWidget;
}

function getlabel(name){
    const now = new Date();
    setGreeting(name,now.getHours());
    urlWidget.searchParams.set("name",name);
    document.getElementById("urlArea").innerHTML = urlWidget;

}

function getColor(val){
    setColor(val);

}



setInterval(getClock, 1000);
getClock();
