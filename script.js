/*Gallery Display Function*/
function clean(){
    document.getElementById("emotion").style.display = "none";
    document.getElementById("colors").style.display = "none";
    document.getElementById("song").style.display = "none";
}


function openTopic(evt, topic){
    var i, tabcontent, tablinks;
    
            document.getElementById("body").style.display = "none";
            document.getElementById("emotion").style.display = "none";
            document.getElementById("colors").style.display = "none";
            document.getElementById("song").style.display = "none";

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

//Family****************************************
var grandma = new Audio();
grandma.src = "sounds/lesson2/grandma.mp3";
var grandpa = new Audio();
grandpa.src = "sounds/lesson2/grandpa.mp3";
var father = new Audio();
father.src = "sounds/lesson2/dad.mp3";
var mother = new Audio();
mother.src = "sounds/lesson2/mother.mp3";
var brother = new Audio();
brother.src = "sounds/lesson2/brother.mp3";
var sister = new Audio();
sister.src = "sounds/lesson2/sister.mp3";
var baby = new Audio();
baby.src = "sounds/lesson2/baby.mp3";

//House*****************************************
var attic = new Audio();
attic.src = "sounds/lesson4/attic.mp3";
var basement = new Audio();
basement.src = "sounds/lesson4/basement.mp3";
var bathroom = new Audio();
bathroom.src = "sounds/lesson4/bathroom.mp3";
var bedroom = new Audio();
bedroom.src = "sounds/lesson4/bedroom.mp3";
var cellphone = new Audio();
cellphone.src = "sounds/lesson4/cellphone.mp3";
var couch = new Audio();
couch.src = "sounds/lesson4/couch.mp3";
var drawer = new Audio();
drawer.src = "sounds/lesson4/drawer.mp3";
var garage = new Audio();
garage.src = "sounds/lesson4/garage.mp3";
var kitchen = new Audio();
kitchen.src = "sounds/lesson4/kitchen.mp3";
var lamp = new Audio();
lamp.src = "sounds/lesson4/lamp.mp3";
var livingroom = new Audio();
livingroom.src = "sounds/lesson4/livingroom.mp3";
var oven = new Audio();
oven.src = "sounds/lesson4/oven.mp3";
var fridge = new Audio();
fridge.src = "sounds/lesson4/refrigerator.mp3";
var sink = new Audio();
sink.src = "sounds/lesson4/sink.mp3";
var tv = new Audio();
tv.src = "sounds/lesson4/tv.mp3";