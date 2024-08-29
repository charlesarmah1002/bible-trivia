const inputFields = document.querySelector('.inputFields'),
    actualInpt = document.getElementById('actualInput'),
    hintField = document.getElementById('hint');

const questions = [
    {
        name: "david",
        hint: "Promiscuous king whose son became the wisest and richest on earth"
    },
    {
        name: "wesley",
        hint: "The name of the brothers who founded the Methodist Church"
    }
];

let answerVal = "";
let timeRemaining = 10;
let characterName;
let fields = "";
let score = 0;

// Disable certain keys and focus on the input
document.onkeydown = (e) => {
    if (e.key === "Delete" || e.key === "Enter") {
        e.preventDefault();
    } else {
        actualInpt.focus();
        actualInpt.maxLength = characterName ? characterName.length : 0;
    }
};

// Countdown function
const countDown = () => {
    const countdownDisplay = document.getElementById('timeLeft');
    actualInpt.disabled = false;

    const countdownInterval = setInterval(() => {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownDisplay.textContent = `${minutes}:${seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            if (!inputFields.classList.contains("success")) {
                inputFields.classList.add("error");
            }
            actualInpt.disabled = true;
        }
    }, 1000);
};

// Set a new question
function startQuiz() {
    if (questions.length === 0) {
        hintField.textContent = "No more questions available!";
        actualInpt.disabled = true;
        return;
    }

    // Select a random question and remove it from the array
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions.splice(randomIndex, 1)[0];

    hintField.textContent = randomQuestion.hint;
    characterName = randomQuestion.name;
    actualInpt.maxLength = characterName.length;

    fields = "";
    inputFields.innerHTML = "";

    for (let index = 0; index < characterName.length; index++) {
        fields += "<input type='text' disabled maxlength='1'>";
    }

    inputFields.innerHTML = fields;
    actualInpt.value = "";
    inputFields.classList.remove("success", "error");

    countDown();
}


function nextQuestion() {
    if (questions.length === 0) {
        hintField.textContent = "No more questions available!";
        actualInpt.disabled = true;
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions.splice(randomIndex, 1)[0];

    hintField.textContent = randomQuestion.hint;
    characterName = randomQuestion.name;
    actualInpt.maxLength = characterName.length;

    fields = "";
    inputFields.innerHTML = "";

    for (let index = 0; index < characterName.length; index++) {
        fields += "<input type='text' disabled maxlength='1'>";
    }

    inputFields.innerHTML = fields;
    actualInpt.value = "";
    inputFields.classList.remove("success", "error");
}

// Check the answer
function checkAnswer(value) {
    if (value.length === characterName.length) {
        if (value === characterName) {
            inputFields.classList.add("success");
            inputFields.classList.remove("error");
            addScore()
        } else {
            inputFields.classList.add("error");
            inputFields.classList.remove("success");
        }
    } else {
        inputFields.classList.remove("success", "error");
    }
}

function addScore() {
    score++;
    document.getElementById('score').textContent = score;
    nextQuestion();
}

// Handle input
function handleInput(e) {
    answerVal = e.target.value.toLowerCase();
    let inputs = inputFields.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = answerVal[i] || '';
    }

    checkAnswer(answerVal);
}

// Attach the handleInput function to the input event
actualInpt.oninput = handleInput;