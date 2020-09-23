let today = new Date();
const test = document.createElement('b');
test.textContent = today.getFullYear().toString();
const rights = document.querySelector('.rights');
rights.querySelector('.one').appendChild(test);




var nav = document.getElementById("topNav");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");




//default to measure if/else from
nav.style.height = "50px";
main.style.marginTop = "50px";
for (i = 0; i < menu.length; i++) {
  menu[i].style.marginTop = "100px";
};

close.addEventListener("click", function () {
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++) {
    menuIcon[i].classList.toggle("active");
  }
});

function navToggle() {
  //to close
  if (nav.style.height <= "275px") {
    nav.style.height = "50px";
    main.style.marginTop = "50px";

    var i = 0;
    for (i = 0; i < menu.length; i++) {
      menu[i].style.opacity = "0.0";
      menu[i].style.marginTop = "100px";
    };
    document.body.style.backgroundColor = "rgba(0,0,0,0.0)";

  }
  //to open
  else if (nav.style.height <= "50px") {
    nav.style.height = "275px";
    main.style.marginTop = "275px";
    var i = 0;
    for (i = 0; i < menu.length; i++) {
      menu[i].style.opacity = "1.0";
      menu[i].style.marginTop = "0px";
    };
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }

};
let a= window.innerWidth;
//const width = document.querySelector("#width span");
window.onload = function () {
  //width.innerHTML = window.innerWidth;
  
  if (a > 1200) {
    
    close.style.opacity="0.0";
    close.style.cursor="default";
    close.style.pointerEvents="none";
}

};
window.onresize = function () {

  //width.innerHTML = window.innerWidth;
  a= window.innerWidth;
   
  if (a > 1200) {

    close.style.opacity="0.0";
    close.style.cursor="default";
    close.style.pointerEvents="none";
    }
    else{
      close.style.opacity="1.0";
      close.style.cursor="pointer";
      close.style.pointerEvents="auto";
    }

};