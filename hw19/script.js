function memoryStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

let botAnswerType = true;

const history = memoryStorage("history") ?? [];
let id;

const chatBlock = document.createElement("div");
chatBlock.className = "chatBlock";

const chatInput = document.createElement("input");
chatInput.setAttribute("placeholder", "введите сообщение");
chatInput.className = "chatInput";

const messageButton = document.createElement("button");
messageButton.type = "submit";
messageButton.innerText = "send";
messageButton.className = "sendBtn";

const form = document.createElement("form");
form.appendChild(chatInput);
form.appendChild(messageButton);

document.body.appendChild(chatBlock);
document.body.appendChild(form);

messageButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let text = document.querySelector(".chatInput");
    const newMessage = addMessage({id: id++, text: text.value, user: "user"});
    history.push(newMessage);
    localStorage.setItem("history", JSON.stringify(history));
    switch (text.value.toLocaleLowerCase()){
        case "пока": botAnswerType = false;
            break;
        case "привет": botAnswerType = true
            break;
    }
    if (botAnswerType) botAnswer(await botChoose(answers));
    text.value = "";
})

class Message {
    constructor(props) {
        this.id = props.id;
        this.text = props.text;
        this.user = props.user;
        this.time = Date.now();
    }

    render() {
        const div = document.createElement("div");
        const mes = document.createElement("p");
        const time = document.createElement("span");
        time.innerText = timeText(this.time);
        mes.className = this.id;
        mes.innerText = this.text;
        if (this.user === "bot") mes.className = "botMessage";
        if (this.user === "user") {
            mes.className = "userMessage";
            div.className = "user";
        }
        if (this.user === "system") mes.className = "sysMessage";
        div.appendChild(mes);
        mes.appendChild(time);
        return div;
    }
}

function timeText(msec) {
    const time = new Date(msec);
    let hh = time.getHours();
    if (hh < 10) hh = "0" + hh;
    let mm = time.getMinutes();
    if (mm < 10) mm = "0" + mm;
    return `${hh}:${mm}`;
}

if (history.length > 0) {
    id = history.length + 1;
    history.map(el => addMessage(el));
    chatBlock.scrollTop = chatBlock.scrollHeight - chatBlock.clientHeight;
} else {
    addMessage({
        id: 0,
        text: "Для начала общения, просто напиши (привет), чтоб прекратить общение (пока)",
        user: ""
    })
    id = 0;
}

function addMessage(message) {
    const mes = new Message({id: id, text: message.text, user: message.user});
    document.body.querySelector(".chatBlock").appendChild(mes.render("user"));
    chatBlock.scrollTop = chatBlock.scrollHeight - chatBlock.clientHeight;
    return mes;
}

const answers = [
    "Слышал песню Rockfeller Street?",
    "Подожди, ты уверен?",
    "Прости, но я женат",
    "Димитрий , как дела?",
    "Думаю, что пора искать работу",
    "Что-то не хочу я тебе отвечать",
    "Пока!",
]

async function botChoose(ans) {
    const randomTime = 1000 * (Math.floor(1 + Math.random() * 3))
    const random = Math.floor(Math.random() * (ans.length));

    let promise = new Promise(((resolve) => {
        setTimeout(() => resolve(ans[random]), randomTime)
    }));
    return await promise;
}

function botAnswer(text) {
    const newMessage = addMessage({id: id++, text: text, user: "bot"});
    history.push(newMessage);
    localStorage.setItem("history", JSON.stringify(history));
}