const questions = [];
let score = 0;

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    score = 0;
    const userAnswers = new FormData(this);
    const results = [];

    questions.forEach((question, index) => {
        const userAnswer = userAnswers.get(`question${index}`);
        if (userAnswer === question.correctAnswer) {
            score++;
        } else {
            results.push({
                question: question.text,
                correctAnswer: question.correctAnswer,
                userAnswer: userAnswer
            });
        }
    });

    displayResults(results);
});

function displayResults(results) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `Вы набрали ${score} из ${questions.length} правильных ответов.<br>`;

    if (score === questions.length) {
        resultDiv.innerHTML += "ВЫ ЛЮБИТЕ АВГУСТА";
    } else if (score >= 10) {
        resultDiv.innerHTML += "Вы просто знаете Августа";
    } else if (score >= 5) {
        resultDiv.innerHTML += "Вы знакомы с Августом";
    } else {
        resultDiv.innerHTML += "Вы просто знаете Августа";
    }

    if (results.length > 0) {
        resultDiv.innerHTML += "<h3>Ошибки:</h3>";
        results.forEach(result => {
            resultDiv.innerHTML += `<p>Вопрос: ${result.question}<br>Правильный ответ: ${result.correctAnswer}<br>Ваш ответ: ${result.userAnswer}</p>`;
        });
    }
}

function addQuestion(text, answers, correctAnswer) {
    questions.push({
        text: text,
        answers: answers,
        correctAnswer: correctAnswer
    });
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    questions.forEach((question, index) => {
        const questionHTML = `
            <div class="question">
                <p>${question.text}</p>
                ${question.answers.map((answer, i) => `
                    <label>
                        <input type="radio" name="question${index}" value="${answer}">
                        ${answer}
                    </label>
                `).join('')}
            </div>
        `;
        container.innerHTML += questionHTML;
    });
}

// Добавляем первый вопрос
addQuestion("1 Август кого любит?", ["Артёма", "Аню", "Себя", "Всех", "Никого"], "Никого");

// Добавляем второй вопрос
addQuestion("2 Что любит Август из еды?", ["Мороженое Колу Пеппирони", "Ананасы Кашу Тушенку"], "Мороженое Колу Пеппирони");

// Добавляем второй вопрос
addQuestion("3 Август когда хотел умереть ?", ["Вчера", "Завтра", "Сегодня", "Всегда" ], "Всегда");

// Добавляем второй вопрос
addQuestion("4 Август умеет готовить ?", ["Наверно", "Да", "Нет", "Он лучше всех готовит" ], "Нет");

// Добавляем второй вопрос
addQuestion("5 Что умеет Август ?", ["Страдать", "Умнеть", "Жить", "Сдыхать" ], "Страдать");

// Добавляем второй вопрос
addQuestion("6 Август на каком инструменте играет ?", ["Домра", "Пионино", "Балолайка", "Нервы" ], "Домра");

// Добавляем второй вопрос
addQuestion("7 Август Хороший ?", ["Да", "Нет", "Я его не знаю", "Всегда" ], "Нет");

// Добавляем второй вопрос
addQuestion("8 Август умеет сожалеть ?", ["Да", "Нет", "Не знаю", "естественно" ], "Нет");

// Добавляем второй вопрос
addQuestion("9 Августа так и зовут ?", ["Нет", "Да", "Его зовут Артем", "хз зачем он себя так называет" ], "Его зовут Артем");

// Добавляем второй вопрос
addQuestion("10 Август ревнивый ?", ["нет", "конечно", "я хз", "да" ], "конечно");

// Добавляем второй вопрос
addQuestion("11 Август хочет мороженое на нг ?", ["да", "не", ], "Да");

// Добавляем второй вопрос
addQuestion("12 Август хочет в какую страну ?", ["США", "Маями", "Китай", "РОссию" ], "США");

// Добавляем второй вопрос
addQuestion("13Август любит тяпу ?", ["Нет", "Да", "Не всегда",], "Не всегда");

// Добавляем второй вопрос
addQuestion("14 Любимая музыка Августа ?", ["Рок", "он любит то, что ему понравиться", "Грусная", "МУЗЫКА ИЗ СССР" ], "Грусная");

// Добавляем второй вопрос
addQuestion("15 Август любит аниме ?", ["К сожалению да", "Нет", "наверно", "да" ], "да");


