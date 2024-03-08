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
    let km = document.getElementsByClassName("km")[0];
    let el1 = document.getElementsByClassName("arrow-wrapper")[0];

    if (speed > 0) {
        for (i = 10; i <= speed; i = i + 10) {
            currentScale += 1;
            console.log(i);
            let newClass = `speed-${i}`;
            let prevClass = `speed-${prevSpeed}`;
            km.innerText = speed;
            if (el1.classList.contains(prevClass)) {
                el1.classList.remove(prevClass);
                el1.classList.add(newClass);
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
        
        currentScale = 1;
    } else {
        currentScale = 1;
        i = 0;
            let newClass = `speed-${i}`;
            let prevClass = `speed-${prevSpeed}`;
            km.innerText = speed;
            if (el1.classList.contains(prevClass)) {
                el1.classList.remove(prevClass);
                el1.classList.add(newClass);
            }
            prevSpeed = i;
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