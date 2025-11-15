// Відкриття списків
import openList from "./lists_open.js";
openList();

// Кнопка копіювати
import copyBtn from "./copy_btn.js";
copyBtn();

let day = "";
let kids = "";

// Вибір дня
const days = document.querySelectorAll(".day");
days.forEach((item) => {
  item.addEventListener("click", function () {
    day = item.textContent;
    showInfo();
  });
});

// Друк кого покликати
const form = document.querySelector("form");
form.addEventListener("input", function (e) {
  e.preventDefault();
  kids = e.target.value;
  showInfo();
});

function showInfo() {
  const confirm_text = document.querySelector(".confirm");
  const message = `Урок: <br>
                  День: ${day} <br>
                  Кличемо: ${kids}<br>`;
  confirm_text.innerHTML = message;
}

function checkDay() {
  const days = {
    dayTheme: "",
    dayQuestions: "",
    dayHW: "",
  };
  if (day == "ПН") {
    days.dayTheme = "понеділок";
    days.dayQuestions = "неділю";
    days.dayHW = "неділю";
  } else if (day == "ВТ") {
    days.dayTheme = "вівторок";
    days.dayQuestions = "понеділок";
    days.dayHW = "понеділок";
  } else if (day == "СР") {
    days.dayTheme = "середу";
    days.dayQuestions = "вівторок";
    days.dayHW = "вівторок";
  } else if (day == "ЧТ") {
    days.dayTheme = "четвер";
    days.dayQuestions = "середу";
    days.dayHW = "середу";
  } else if (day == "ПТ") {
    days.dayTheme = "п'ятницю";
    days.dayQuestions = "четвер";
    days.dayHW = "четвер";
  } else if (day == "СБ") {
    days.dayTheme = "суботу";
    days.dayQuestions = "п'ятницю";
    days.dayHW = "п'ятницю";
  } else if (day == "НД") {
    days.dayTheme = "неділю";
    days.dayQuestions = "суботу";
    days.dayHW = "суботу";
  }
  return days;
}


function createText() {
  let text_copy = document.querySelector(".text-copy");
  const { dayTheme, dayQuestions, dayHW } = checkDay();
  const message = `Добрий день, шановні батьки! ☀️

На уроці були всі присутні ☀️

❗️Важливо! Якщо виникнуть запитання по минулій темі або потрібна допомога із виконанням домашньої практики — повідомте.
Далі чекаємо Вас за півгодини до уроку в кімнаті Google Meet. Дякую!

💡 Тема заняття в ${dayTheme}:
Підготовка до релізу, урок № 3

✅ Ми вивчили:
як створити повноцінний застосунок за допомогою customtkinter
Як запрограмувати логіку перемикань між вікнами

🌟 Нові знання нам допоможуть:
продовжити роботу над релізним проектом

📕 Домашня практика:
Допрацювати роботу та надіслати фінальний проект❗️

❗️Практику потрібно здати до суботи. Якщо щось незрозуміло — ставимо запитання в онлайн-чаті.

🕧 У ${dayQuestions} я відповідаю на всі питання на платформі.
✅ У ${dayHW} перевіряю домашнє завдання.

Усім бажаю мирного неба та продуктивного тижня! 💙💛`;
  text_copy.textContent = message;
}

// Кнопка згенерувати
let generate_btn = document.getElementById("generate_btn");
generate_btn.addEventListener("click", createText);

console.log("Hello, World!!!")
console.log("Hello, World!!!");
console.log("Hello, World!!!");
console.log("Hello, World!!!");
console.log("Hello, World!!!");