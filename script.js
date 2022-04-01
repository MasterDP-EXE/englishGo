/*Gallery Display Function*/

function openTopic(evt, topic){
    var i, tabcontent, tablinks;
    
            document.getElementById("body").style.display = "none";
            document.getElementById("emotion").style.display = "none";
            document.getElementById("colors").style.display = "none";

    tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(topic).style.display = "block";
  evt.currentTarget.className += " active";
}

/*Audio buttons*/

var elbow = new Audio();
elbow.src = "sounds/elbow.mp3";
var angry = new Audio();
angry.src = "sounds/angry.mp3";
var arm = new Audio();
arm.src = "sounds/arm.mp3";
var black = new Audio();
black.src = "sounds/black.mp3";
var blue = new Audio();
blue.src = "sounds/blue.mp3";
var brown = new Audio();
brown.src = "sounds/brown.mp3";
var chest = new Audio();
chest.src = "sounds/chest.mp3";
var colors = new Audio();
colors.src = "sounds/colors.mp3";
var disgusted = new Audio();
disgusted.src = "sounds/disgusted.mp3";
var ears = new Audio();
ears.src = "sounds/ears.mp3";
var elbow = new Audio();
elbow.src = "sounds/elbow.mp3";
var feet = new Audio();
feet.src = "sounds/feet.mp3";
var fingers = new Audio();
fingers.src = "sounds/fingers.mp3";
var gray = new Audio();
gray.src = "sounds/gray.mp3";
var green = new Audio();
green.src = "sounds/green.mp3";
var hand = new Audio();
hand.src = "sounds/hand.mp3";
var happy = new Audio();
happy.src = "sounds/happy.mp3";
var cabe = new Audio();
cabe.src = "sounds/cabe.mp3";
var knee = new Audio();
knee.src = "sounds/knee.mp3";
var leg = new Audio();
leg.src = "sounds/leg.mp3";
var love = new Audio();
love.src = "sounds/love.mp3";
var neck = new Audio();
neck.src = "sounds/neck.mp3";
var nervous = new Audio();
nervous.src = "sounds/nervous.mp3";
var orange = new Audio();
orange.src = "sounds/orange.mp3";
var peach = new Audio();
peach.src = "sounds/peach.mp3";
var pink = new Audio();
pink.src = "sounds/pink.mp3";
var purple = new Audio();
purple.src = "sounds/purple.mp3";
var red = new Audio();
red.src = "sounds/red.mp3";
var sad = new Audio();
sad.src = "sounds/sad.mp3";
var scared = new Audio();
scared.src = "sounds/scared.mp3";
var shoulder = new Audio();
shoulder.src = "sounds/shoulder.mp3";
var surprise = new Audio();
surprise.src = "sounds/surprise.mp3";
var white = new Audio();
white.src = "sounds/white.mp3";
var yellow = new Audio();
yellow.src = "sounds/yellow.mp3";
var eye = new Audio();
eye.src = "sounds/eye.mp3";