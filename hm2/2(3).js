let userName = prompt('Имя')
let userAge = +prompt('Возраст')
let userDecision = confirm('Алкоголь употребляем?')
console.log(userName, userAge, userDecision)
if (userDecision === false) {
    alert("Так держать!")
} else if (userAge > 40) {
    alert("Не злоупотребляйте")
} else if (userAge < 18) {
    alert("Ты что?! Маме расскажу!")
} else if (userAge > 18 || userAge < 40) {
    alert("Только водку с пивом не мешай...")
}