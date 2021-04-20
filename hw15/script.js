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
        div.className = "clock" + i;
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
const optionSecond = document.createElement("option");
optionSecond.value = "ampm";
optionSecond.innerText = "ampm";
const optionThird = document.createElement("option");
optionThird.value = "ydm";
optionThird.innerText = "full Date";

formElement.appendChild(optionFirst);
formElement.appendChild(optionSecond);
formElement.appendChild(optionThird);
form.appendChild(formElement);
document.body.appendChild(form);

const select = document.querySelector('select');

select.addEventListener('change',() => { 
    if (select.value === "hhmmdd"){
        document.body.appendChild(oclockWrapper(currentTime()));
        setInterval(() => timeShow(currentTime()), 1000)
    } 
    if (select.value === "ampm"){
        document.body.appendChild(oclockWrapper(formatAMPM()));
        setInterval(() => timeShow(formatAMPM()), 1000);
    } 
    if (select.value === "ydm"){  
        document.body.appendChild(oclockWrapper(fullDate()));
        setInterval(() => timeShow(fullDate()), 1000);
    }
});

// optionElement.value = "hhmmss";
// optionElement.text = "hhmmss"
// optionElement.selected = true;
// let newOption = new Option("ampm", "ampm")


// function selectMade(){
//     const selectList = document.createElement("select");
//     selectList.className = "time-format" //added
//     return selectList
// }

// function optionMade(){
//     let selectList = 

//     // const selectOption = document.createElement("option");
//     // const selectOptionSecond = document.createElement("option");
//     // const selectOptionThird = document.createElement("option");
//     // selectOption.className = "hhmmss";
//     // selectOption.value = "hhmmss";
//     // selectOption.innerText = "HH:MM:SS";
//     // selectOptionSecond.innerText = "AM/PM";
//     // selectOptionSecond.className = "ampm";
//     // selectOptionSecond.value = "ampm";
//     // selectOptionThird.innerText = "YYYY-MM-DD HH:MM";
//     // selectOptionThird.className = "ymd";
//     // selectOptionThird.value = "ymd";
//     // return (selectOption, selectOptionSecond, selectOptionThird)
// }

// const select = selectMade();
// document.body.appendChild(select);
// const option = optionMade();
// select.appendChild(option)

// document.body.appendChild(oclockWrapper(formatAMPM()));
// document.body.appendChild(oclockWrapper(currentTime()))


// setInterval(() => timeShow(formatAMPM()), 1000);
// setInterval(() => timeShow(currentTime()), 1000);
    
    // function oclockWrapper(timeArray) {
    //     const timeWrapper = document.createElement("div");
    //     timeWrapper.className = "clock";
    //     for (let i = 0; i < timeArray.length; i++) {
    //       const div = document.createElement("div");
    //       div.className = "clock" + i;
    //       timeWrapper.appendChild(div);
    //     }
    //     const selectList = document.createElement("select");
    //     selectList.className = "time-format"; //added
    //     timeWrapper.appendChild(selectList);
    //     return {
    //       timeWrapper,
    //       selectList
    //     };
    //   }
      
    //   const result = oclockWrapper([]);
    //   const timeWrapper = result.timeWrapper;
    //   const selectList = result.selectList;
      
    //   function chooseFormat() {
    //     console.log(selectList);
    // }
    
