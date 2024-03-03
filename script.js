const numberOfNotchs = 19;
function massiveCreate(){
    let container = document.getElementsByClassName("speedometer-container")[0];   
    for(let i = 1; i<= numberOfNotchs+1 ;i++)
    {
        let div = document.createElement('div');
        div.classList.add("speedometer-notch");
        div.classList.add("notch" + i);
        container.appendChild(div);
    }
}

var speed = 0;
var prevSpeed = 0;
var currentScale = 1;

function setSpeed_GIGACHAD(){
    console.log(speed);
    currentScale = 1;
    if (speed < 180 || currentScale < 19) {
        speed = 30;
        currentScale = 4;
        addClass();
        changeActive();
    }
}
function setSpeed_CAPTAIN(){
    console.log(speed);
    currentScale = 1;
    if (speed < 180 || currentScale < 19) {
        speed = 90;
        currentScale = 10;
        addClass();
        changeActive();
    }
}
function setSpeed_ROOKIE(){
    console.log(speed);
    currentScale = 1;
    if (speed < 180 || currentScale < 19) {
        speed = 180;
        currentScale = 19;
        addClass();
        changeActive();
    }
}
function setSpeed_NOOB(){
    console.log(speed);
    if (speed > 0 || currentScale > 0) {
        speed = 0;
        currentScale = 0;
        removeClass();
        changeActive();
    }
}

function addClass() {
    for (i = 10; i <= speed; i = i + 10) {
        console.log(i);
        let newClass = `speed-${i}`;
        let prevClass = `speed-${prevSpeed}`;
        let el = document.getElementsByClassName("arrow-wrapper")[0];
        if (el.classList.contains(prevClass)) {
            el.classList.remove(prevClass);
            el.classList.add(newClass);
        }
        prevSpeed = i;
    }
}

function removeClass() {
    for (i = 0; i >= 0; i = i - 10) {
        console.log(i);
        let newClass = `speed-${i}`;
        let prevClass = `speed-${prevSpeed}`;
        let el = document.getElementsByClassName("arrow-wrapper")[0];
        if (el.classList.contains(prevClass)) {
            el.classList.remove(prevClass);
            el.classList.add(newClass);
        }
        prevSpeed = i;
    }
}

function changeActive() {
    let i = 1;
    for (i = 1; i <= currentScale; i++) {
        let tempClass = `notch${i}`;
        let el = document.getElementsByClassName(tempClass)[0];
        el.classList.add("active");
    }
    for (let j = i; j >= i && j <= 20; j++) {
        let tempClass = `notch${j}`;
        let el = document.getElementsByClassName(tempClass)[0];
        el.classList.remove("active");
    }
}