function currentTime() {
    const time = new Date();
    let ss = time.getSeconds();
    if (ss < 10) ss = "0" + ss;
    let hh = time.getHours();
    if (hh < 10) hh = "0" + hh;
    let mm = time.getMinutes();
    if (mm < 10) mm = "0" + mm;
    return [hh, mm, ss];
}

function oclockWrapper(timeArray) {
    const timeWrapper = document.createElement("div");
    timeWrapper.className = "clock";
    for (let i = 0; i < timeArray.length; i++) {
        const div = document.createElement("div");
        div.className = "clock" + i;
        timeWrapper.appendChild(div);
    }
    return timeWrapper
}

document.body.appendChild(oclockWrapper(currentTime()))

function timeShow(timeElemet) {
    const clock = document.body.querySelector(".clock");
    if (clock) {
        const clocksDivs = clock.querySelectorAll("div");
        for (let i = 0; i < timeElemet.length; i++) {
            clocksDivs[i].innerText = timeElemet[i];
        }
    }
    const timeConsole = timeElemet.join(":");
    console.log (timeConsole);
}

setInterval(() => timeShow(currentTime()), 1000);

