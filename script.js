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

var angry, arm, black, blue, brown, chest, colors, disgusted, ears, elbow, feet, fingers, gray, green, hand, happy, head, knee, leg, love, neck, nervous, orange, peach, pink, purple, red, sad, scared, shoulder, surprise, white, yellow = new Audio();

angry.src = "sounds/angry.mp3";
arm.src = "sounds/arm.mp3";
black.src = "sounds/black.mp3";
blue.src = "sounds/blue.mp3";
brown.src = "sounds/brown.mp3";
chest.src = "sounds/chest.mp3";
colors.src = "sounds/colors.mp3";
disgusted.src = "sounds/disgusted.mp3";
ears.src = "sounds/ears.mp3";
elbow.src = "sounds/elbow.mp3";
feet.src = "sounds/feet.mp3";
fingers.src = "sounds/fingers.mp3";
gray.src = "sounds/gray.mp3";
green.src = "sounds/green.mp3";
hand.src = "sounds/hand.mp3";
happy.src = "sounds/happy.mp3";
head.src = "sounds/head.mp3";
knee.src = "sounds/knee.mp3";
leg.src = "sounds/leg.mp3";
love.src = "sounds/love.mp3";
neck.src = "sounds/neck.mp3";
nervous.src = "sounds/nervous.mp3";
orange.src = "sounds/orange.mp3";
peach.src = "sounds/peach.mp3";
pink.src = "sounds/pink.mp3";
purple.src = "sounds/purple.mp3";
red.src = "sounds/red.mp3";
sad.src = "sounds/sad.mp3";
scared.src = "sounds/scared.mp3";
shoulder.src = "sounds/shoulder.mp3";
surprise.src = "sounds/surprise.mp3";
white.src = "sounds/white.mp3";
yellow.src = "sounds/yellow.mp3";


