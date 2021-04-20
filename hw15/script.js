function currentTime() {
    const time = new Date();
    let ss = time.getSeconds();
    if (ss < 10) ss = "0" + ss;
    let hh = time.getHours();
    if (hh < 10) hh = "0" + hh;
    let mm = time.getMinutes();
    if (mm < 10) mm = "0" + mm;
    return [hh + ':' + mm + ':' + ss];
}

function formatAMPM() {
    const time = new Date
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ampm = hh >= 12 ? 'pm' : 'am';
    hh = hh % 12;
    hh = hh ? hh : 12; 
    mm = mm < 10 ? '0'+ mm : mm;
    const strTime = hh + ':' + mm + ' ' + ampm;
    return strTime;
}

function fullDate(){
    const time = new Date;
    let yy = time.getFullYear();
    let month = time.getUTCMonth() + 1;
    let dd = time.getUTCDate();
    let hh = time.getHours();
    if (hh < 10) hh = "0" + hh; 
    let mm = time.getMinutes();
    if (mm < 10) mm = "0" + mm
    let full = yy + '-' + month + '-' + dd + '/' + hh + ':' + mm;
    return full
}

function oclockWrapper(timeArray) {
    const timeWrapper = document.createElement("div");
    timeWrapper.className = "clock";
    for (let i = 0; i < timeArray.length; i++) {
        const div = document.createElement("div");
        div.className = "clock" ;
        timeWrapper.appendChild(div);
    }
    
    return timeWrapper
}
  
function timeShow(timeElemet) {
    const clock = document.body.querySelector(".clock");
    if (clock) {
        const clocksDivs = clock.querySelectorAll("div");
        for (let i = 0; i < timeElemet.length; i++) {
            clocksDivs[i].innerText = timeElemet[i];
        }
    }
    console.log (timeElemet);
}


const form = document.createElement("form");
const formElement = document.createElement("select");


const optionFirst = document.createElement("option");
optionFirst.value = "hhmmdd";
optionFirst.innerText = "hhmmdd";
optionFirst.className = "hhmmdd"
const optionSecond = document.createElement("option");
optionSecond.value = "ampm";
optionSecond.innerText = "ampm";
optionSecond.className = "ampm";
const optionThird = document.createElement("option");
optionThird.value = "ydm";
optionThird.innerText = "full Date";
optionThird.className = "ydm";

formElement.appendChild(optionFirst);
formElement.appendChild(optionSecond);
formElement.appendChild(optionThird);
form.appendChild(formElement);
document.body.appendChild(form);

const select = document.querySelector('select');
const option = document.querySelectorAll('option');

select.addEventListener('change',() => { 
    switch (select.value){
        case 'hhmmdd':
            document.body.appendChild(oclockWrapper(currentTime()));
            setInterval(() => timeShow(currentTime()), 1000)
            break;
        case 'ampm':
            document.body.appendChild(oclockWrapper(formatAMPM()));
            setInterval(() => timeShow(formatAMPM()), 1000);
            break;
        case 'ydm':
            document.body.appendChild(oclockWrapper(fullDate()));
            setInterval(() => timeShow(fullDate()), 1000);
            break;
   }
});

// if (select.value === "hhmmdd"){
//     document.body.appendChild(oclockWrapper(currentTime()));
//     setInterval(() => timeShow(currentTime()), 1000)   
// } 
// if (select.value === "ampm"){
    
// } 
// if (select.value === "ydm"){  
//     document.body.appendChild(oclockWrapper(fullDate()));
//     setInterval(() => timeShow(fullDate()), 1000);
// }