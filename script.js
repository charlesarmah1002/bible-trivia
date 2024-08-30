const inputFields = document.querySelector('.inputFields'),
    actualInpt = document.getElementById('actualInput'),
    hintField = document.getElementById('hint'),
    hintContainer = document.querySelector('.hint');

const questions = [
    { name: "david", hint: "Promiscuous king whose son became the wisest and richest on earth" },
    { name: "moses", hint: "Led the Israelites out of Egypt and received the Ten Commandments.", scripture: "Exodus 3:10-12" },
    { name: "david", hint: "Shepherd boy who became a king, known for defeating Goliath.", scripture: "1 Samuel 17:45-50" },
    { name: "paul", hint: "Apostle who wrote many of the New Testament letters and spread Christianity to the Gentiles.", scripture: "Acts 9:1-19" },
    { name: "ruth", hint: "Moabite woman who showed great loyalty to her mother-in-law Naomi and became an ancestor of David.", scripture: "Ruth 1:16-17" },
    { name: "elijah", hint: "Prophet who challenged the prophets of Baal and was taken up to heaven in a whirlwind.", scripture: "1 Kings 18:36-39" },
    { name: "daniel", hint: "Survived the lion's den because of his faithfulness to God.", scripture: "Daniel 6:16-23" },
    { name: "esther", hint: "Jewish queen who saved her people from destruction.", scripture: "Esther 4:14-16" },
    { name: "peter", hint: "Disciple who denied Jesus three times but later became a key leader in the early church.", scripture: "Matthew 26:69-75" },
    { name: "noah", hint: "Built an ark to save his family and animals from the flood.", scripture: "Genesis 6:13-22" },
    { name: "joseph", hint: "Sold into slavery by his brothers but rose to become a powerful leader in Egypt.", scripture: "Genesis 37:3-4, 50:20" }
];

let originalQuestions = [...questions]; // Make a copy of the original questions
let answerVal = "";
let timeRemaining = 120;
let characterName;
let fields = "";
let score = 0;
let countdownInterval;

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

    clearInterval(countdownInterval); // Reset timer for each new question

    countdownInterval = setInterval(() => {
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

const stopCountDown = () => {
    console.log(timeRemaining)
    clearInterval(countdownInterval)
}

// Set a new question
function setQuestion() {
    if (questions.length === 0) {
        hintField.textContent = "You have successfully finished the Demo 👏🏽👏🏽";
        stopCountDown();
        hintContainer.style.background = "var(--green)"
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

    countDown(); // Start the countdown for the new question
}

function startQuiz() {
    score = 0;
    document.getElementById('score').textContent = score;
    setQuestion();
}

function checkAnswer(value) {
    if (value.length === characterName.length) {
        if (value === characterName) {
            inputFields.classList.add("success");
            inputFields.classList.remove("error");
            addScore();
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
    setQuestion();
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

// Restart the quiz
function restartQuiz() {
    // Reset questions to their original state
    questions.splice(0, questions.length, ...originalQuestions);

    // Reset score and time
    score = 0;
    timeRemaining = 120;

    document.getElementById('score').textContent = score;
    document.getElementById('timeLeft').textContent = '2:00'; // Reset timer display

    inputFields.innerHTML = "";
    hintField.textContent = "Quiz restarted!";

    // Start with a new question
    setQuestion();
}

function stopQuiz() {
    inputFields.classList.remove("success", "error");
    stopCountDown();
    actualInpt.disabled = true;
    hintField.textContent = "Quiz stopped!";
    hintContainer.style.background = "var(--red)"
}