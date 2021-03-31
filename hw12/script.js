function formMade(){
    const form = document.createElement("form");
    const email = document.createElement("input");
    const password = document.createElement("input");
    form.appendChild(email);
    form.appendChild(password);
    email.type = "text";
    password.type = "password";
    email.placeholder = ("Email");
    password.placeholder = ("Password 8 or more symbols");
    return form;
};

const wrapper = document.createElement("div");
document.body.appendChild(wrapper);

function buttonMade(){
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.setAttribute("disabled", "disabled");
    btn.innerText = "Let me see this"
    return btn
};

const form = formMade();
const button = buttonMade();
form.appendChild(button);
wrapper.appendChild(form);

function emailCheck(email){
    const re = /.+@.+\..+/g;
    return re.test(String(email).toLowerCase())
};

function passwordCheck(psswrd){
    const validSymbols = ["@", "$", "#", "!", "?", "&"];
    const re = /[0-9]/g;
    if (psswrd.length < 8) return false;
    if (!re.test(psswrd)) return false;
    for (let key of psswrd){
        if(validSymbols.includes(key)) return true;
    }
    return false
};

form.addEventListener("input", () => {
    const values = form.querySelectorAll("input");
    const submit = form.querySelector("button");
    if (emailCheck(values[0].value) && passwordCheck(values[1].value)) {
        submit.removeAttribute("disabled");
    } else {
        submit.setAttribute("disabled", "disabled");
    }
    if (values[0].value) {
        emailCheck(values[0].value) ? values[0].className = "valid__values" : values[0].className = "not-valid__values";
    } else values[0].removeAttribute("class");
    if (values[1].value) {
        passwordCheck(values[1].value) ? values[1].className = "valid__values" : values[1].className = "not-valid__values";
    } else values[1].removeAttribute("class");
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    const keys = form.querySelectorAll("input");
    const json = {};
    json[keys[0].key] = keys[1].key;
    console.log (json);
    keys.forEach((k) => {
        k.key = "";
        k.removeAttribute("class");
    })
});







