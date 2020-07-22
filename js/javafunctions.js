

//Parallax//

function paraTop(){
    
    t = window.scrollY;
    var m = -0.25;
    var b = 0;
    newY = m*t + b;
    
    var paraAbout = document.getElementById("para-Top");
    paraAbout.style.backgroundPositionY = newY + "px";
   
}



// X Button on Covid Message //
function covidClose(){
    var xbtn = document.getElementById("xbtn");
    var covBox = document.getElementById("covidBox");
    covBox.style.display = "none";
}



//Account Stuff//

function goRegister(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var goReg = document.getElementById("goReg");
    var goLog = document.getElementById("goLog");
    
    login.style.display = "none";
    register.style.display = "block";
    goReg.style.display = "none";
    goLog.style.display = "block";
    
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerPW").value = "";
    document.getElementById("registerCPW").value = "";
    
    var userbox = document.getElementById("registerUsername");
    userbox.style.borderColor = "black";
    var pwbox = document.getElementById("registerPW");
    pwbox.style.borderColor = "black";
    var cpwbox = document.getElementById("registerCPW");
    cpwbox.style.borderColor = "black";
    
}


function goLogin(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var goReg = document.getElementById("goReg");
    var goLog = document.getElementById("goLog");
    
    login.style.display = "block";
    register.style.display = "none";
    goReg.style.display = "block";
    goLog.style.display = "none";
    
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
}


function checkLogin(){
    
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    

    
    if(username == "user2033" && password == "letmein"){
        alert("Welcome back!");
    }
    else shake();
    
    
}

function checkRegister(){
    
    var username = document.getElementById("registerUsername").value;
    var pw = document.getElementById("registerPW").value;
    var cpw = document.getElementById("registerCPW").value;
    
    var userbox = document.getElementById("registerUsername");
    userbox.style.borderColor = "black";
    var pwbox = document.getElementById("registerPW");
    pwbox.style.borderColor = "black";
    var cpwbox = document.getElementById("registerCPW");
    cpwbox.style.borderColor = "black";
    
    
    var pwNum = false;
    var pwChar = false;
    
    var valid = true;

    //Username 6-10 chars
    if( !(username.length > 5 && username.length < 11)){
        valid = false;
        userbox.style.borderColor = "red";
    }
    
    
    //check for inclusion of 1 letter and 1 number
    for(var i = 0; i < pw.length; i++){
        var ascii = pw.charCodeAt(i);
        if(isNumber(ascii)){
            pwNum = true;
        }
        if(isLetter(ascii)){
            pwChar = true;
        }
    }
    
    //Password 1 letter, 1 num, at least 5 char
    if (pwNum == false || pwChar == false || pw.length < 5){
        valid = false;
        pwbox.style.borderColor = "red";
    }
    

    //Confirm PW = PW
    if(cpw != pw){
        valid = false;
        cpwbox.style.borderColor = "red";
    }
    
    if(valid == true){
        userbox.style.borderColor = "black";
        pwbox.style.borderColor = "black";
        cpwbox.style.borderColor = "black";
        alert("Welcome aboard!");
    }
    else shake();
    
    
}



function shake(){
    var box = document.getElementById("accountDiv");
    
    //replacing old element with itself (restting animation)
    var newone = box.cloneNode(true);
    box.parentNode.replaceChild(newone, box);
    
    newone.classList.add("animate");  
}






function scrollFire(){
    
    var t = window.scrollY + 300;
        
    var top = document.getElementById("para-Top");
    var about = document.getElementById("about");
    var services = document.getElementById("services");
    var account = document.getElementById("accountDiv");
    
    var t1 = top.offsetTop;
    var t2 = about.offsetTop;
    var t3 = services.offsetTop;
    var t4 = account.offsetTop;

    document.title = "Popcorn Productions - Welcome"
    
    if (t > t4) {
        document.title = "Popcorn Productions - Account"
    } else if (t > t3) {
        document.title = "Popcorn Productions - Services"
    } else if (t > t2) {
        document.title = "Popcorn Productions - About"
    } else if (t > t1) {
        document.title = "Popcorn Productions - Welcome"
    }
    
    
    slog = document.getElementById("slogan");
    if (t>slog.offsetTop-350){
        slog.classList.add("animateFade");
        slog.style.opacity = "1";
    }
}











function isLetter (ch) {

    if (ch >= 65 && ch <= 90) { // Capital letters
        return true;
    } else if (ch >= 97 && ch <= 122) { // Lowercase letters
        return true;
    } else { // Anything else
        return false;
    }
}
            
function isNumber (ch) {

    if (ch >= 48 && ch <= 57) { // Digits
        return true;
    } else { // Anything else
        return false;
    }
}












