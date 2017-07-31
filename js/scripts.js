// Variables

document.getElementById("bone").onclick = bone;
document.getElementById("btwo").onclick = btwo;
document.getElementById("bthree").onclick = bthree;
document.getElementById("bfour").onclick = bfour;
document.getElementById("responsivebars").onclick = bnav;

// Want Block

tone = document.getElementById("tone");
ttwo = document.getElementById("ttwo");
tthree = document.getElementById("tthree");
tfour = document.getElementById("tfour");

function bone() {
    tone.style.display='block';
    ttwo.style.display='none';
    tthree.style.display='none';
    tfour.style.display='none';
}


function btwo() {
    tone.style.display='none';
    ttwo.style.display='block';
    tthree.style.display='none';
    tfour.style.display='none';
}

function bthree() {
    tone.style.display='none';
    ttwo.style.display='none';
    tthree.style.display='block';
    tfour.style.display='none';
}

function bfour() {
    tone.style.display='none';
    ttwo.style.display='none';
    tthree.style.display='none';
    tfour.style.display='block';
}


// Responsive Nav

// function bnav() {
//   window.alert(2);
//   bottlist.style.display = 'block';
// }
function bnav() {
    var x = document.getElementById("bot-nav");
    var y = x.getElementsByTagName("LI");
    var i;

    var NAME = document.getElementById("barcan");
    var currentClass = NAME.className;
    if (currentClass == "fa fa-bars") { // Check the current class name
        NAME.className = "fa fa-times";   // Set other class name
        for (i = 0; i < y.length; i++) {
            y[i].style.display='block';
        }
    } else {
        NAME.className = "fa fa-bars";  // Otherwise, use `second_name`
        for (i = 0; i < y.length; i++) {
            y[i].style.display='none';
        }
    }

}
