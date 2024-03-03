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

var prevSpeed = 0;
var currentScale = 1;

function setSpeed_GOD(speed){
    console.log(speed);

    //ROOKIE
    if (speed == 30) {
        currentScale = 4;
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
        let o = 1;
        for (o = 1; o <= currentScale; o++) {
            let tempClass = `notch${o}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.add("active");
        }
        for (let j = o; j >= o && j <= 20; j++) {
            let tempClass = `notch${j}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.remove("active");
        }
    }

    //CAPTAIN
    if (speed == 90) {
        currentScale = 10;
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
        let o = 1;
        for (o = 1; o <= currentScale; o++) {
            let tempClass = `notch${o}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.add("active");
        }
        for (let j = o; j >= o && j <= 20; j++) {
            let tempClass = `notch${j}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.remove("active");
        }
    }

    //GIGACHAD
    if (speed == 180) {
        currentScale = 19;
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
        let o = 1;
        for (o = 1; o <= currentScale; o++) {
            let tempClass = `notch${o}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.add("active");
        }
        for (let j = o; j >= o && j <= 20; j++) {
            let tempClass = `notch${j}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.remove("active");
        }
    }

    //NOOB
    if (speed == 0) {
        currentScale = 0;
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
        let o = 1;
        for (o = 1; o <= currentScale; o++) {
            let tempClass = `notch${o}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.add("active");
        }
        for (let j = o; j >= o && j <= 20; j++) {
            let tempClass = `notch${j}`;
            let el = document.getElementsByClassName(tempClass)[0];
            el.classList.remove("active");
        }
    }
}