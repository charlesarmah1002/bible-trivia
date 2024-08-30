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
    { name: "joseph", hint: "Sold into slavery by his brothers but rose to become a powerful leader in Egypt.", scripture: "Genesis 37:3-4, 50:20" },
    { name: "abraham", hint: "Father of many nations who was tested by God to sacrifice his son Isaac.", scripture: "Genesis 22:2-13" },
    { name: "jacob", hint: "He wrestled with God and was renamed Israel.", scripture: "Genesis 32:24-28" },
    { name: "sarah", hint: "Wife of Abraham who gave birth to Isaac in her old age.", scripture: "Genesis 21:1-7" },
    { name: "isaac", hint: "Son of Abraham who was almost sacrificed by his father.", scripture: "Genesis 22:6-12" },
    { name: "rebecca", hint: "Wife of Isaac and mother of Esau and Jacob.", scripture: "Genesis 25:21-23" },
    { name: "esau", hint: "Elder twin brother of Jacob who sold his birthright for a meal.", scripture: "Genesis 25:29-34" },
    { name: "leah", hint: "First wife of Jacob who bore him six sons.", scripture: "Genesis 29:23-35" },
    { name: "rachel", hint: "Beloved wife of Jacob and mother of Joseph and Benjamin.", scripture: "Genesis 29:18-28" },
    { name: "samson", hint: "Nazirite judge of Israel known for his immense strength.", scripture: "Judges 16:17-30" },
    { name: "delilah", hint: "Woman who betrayed Samson by cutting his hair.", scripture: "Judges 16:4-21" },
    { name: "gideon", hint: "Judge of Israel who led 300 men to victory with God's help.", scripture: "Judges 7:7-22" },
    { name: "samuel", hint: "Last judge of Israel who anointed the first two kings.", scripture: "1 Samuel 3:19-21" },
    { name: "saul", hint: "First king of Israel who was rejected by God.", scripture: "1 Samuel 9:1-2" },
    { name: "jonathan", hint: "Son of Saul and close friend of David.", scripture: "1 Samuel 18:1-4" },
    { name: "bathsheba", hint: "Wife of Uriah and later King David, mother of Solomon.", scripture: "2 Samuel 11:2-27" },
    { name: "solomon", hint: "Son of David, known for his wisdom and building the temple.", scripture: "1 Kings 3:16-28" },
    { name: "rehoboam", hint: "Son of Solomon who caused the division of Israel.", scripture: "1 Kings 12:1-24" },
    { name: "jezebel", hint: "Wicked queen who persecuted the prophets of God.", scripture: "1 Kings 18:4-19" },
    { name: "ahab", hint: "King of Israel, husband of Jezebel, known for his wickedness.", scripture: "1 Kings 16:30-33" },
    { name: "elisha", hint: "Prophet who succeeded Elijah and performed many miracles.", scripture: "2 Kings 2:9-15" },
    { name: "hezekiah", hint: "King of Judah who prayed for healing and received 15 more years of life.", scripture: "2 Kings 20:1-6" },
    { name: "josiah", hint: "Young king of Judah who initiated religious reforms.", scripture: "2 Kings 22:1-20" },
    { name: "nehemiah", hint: "Led the rebuilding of Jerusalem's walls after the exile.", scripture: "Nehemiah 2:17-18" },
    { name: "ezra", hint: "Priest and scribe who led a group of exiles back to Jerusalem.", scripture: "Ezra 7:1-10" },
    { name: "job", hint: "Man of great faith who endured immense suffering.", scripture: "Job 1:1-22" },
    { name: "jeremiah", hint: "Weeping prophet who warned Judah of coming exile.", scripture: "Jeremiah 1:4-10" },
    { name: "isaiah", hint: "Prophet who foretold the coming of the Messiah.", scripture: "Isaiah 7:14" },
    { name: "ezekiel", hint: "Prophet who saw visions of God's glory and the valley of dry bones.", scripture: "Ezekiel 37:1-14" },
    { name: "hosea", hint: "Prophet whose marriage to an unfaithful wife symbolized God's relationship with Israel.", scripture: "Hosea 1:2-9" },
    { name: "joel", hint: "Prophet who spoke of the outpouring of God's Spirit in the last days.", scripture: "Joel 2:28-32" },
    { name: "amos", hint: "Shepherd prophet who spoke against social injustice.", scripture: "Amos 5:24" },
    { name: "obadiah", hint: "Prophet who foretold the downfall of Edom.", scripture: "Obadiah 1:1-4" },
    { name: "jonah", hint: "Prophet swallowed by a great fish for fleeing God's command.", scripture: "Jonah 1:1-17" },
    { name: "micah", hint: "Prophet who foretold the birthplace of the Messiah.", scripture: "Micah 5:2" },
    { name: "nahum", hint: "Prophet who predicted the fall of Nineveh.", scripture: "Nahum 1:7-14" },
    { name: "habakkuk", hint: "Prophet who questioned God's justice but learned to trust in Him.", scripture: "Habakkuk 2:4" },
    { name: "zephaniah", hint: "Prophet who spoke of the coming day of the Lord.", scripture: "Zephaniah 1:14-18" },
    { name: "haggai", hint: "Prophet who encouraged the rebuilding of the temple.", scripture: "Haggai 1:7-8" },
    { name: "zechariah", hint: "Prophet who had visions of the future Messianic kingdom.", scripture: "Zechariah 9:9" },
    { name: "malachi", hint: "Last prophet of the Old Testament who spoke of a messenger to prepare the way.", scripture: "Malachi 3:1" },
    { name: "mary", hint: "Mother of Jesus, blessed among women.", scripture: "Luke 1:28-38" },
    { name: "joseph", hint: "Husband of Mary and earthly father of Jesus.", scripture: "Matthew 1:18-25" },
    { name: "john the baptist", hint: "Forerunner of Jesus who baptized Him in the Jordan River.", scripture: "Matthew 3:1-17" },
    { name: "peter", hint: "Disciple who walked on water and was a leader among the apostles.", scripture: "Matthew 14:29-31" },
    { name: "james", hint: "Brother of John and one of Jesus' closest disciples.", scripture: "Matthew 4:21-22" },
    { name: "john", hint: "Beloved disciple who wrote the Gospel of John.", scripture: "John 13:23" },
    { name: "andrew", hint: "Peter's brother who brought him to Jesus.", scripture: "John 1:40-42" },
    { name: "thomas", hint: "Disciple known for doubting the resurrection until he saw Jesus.", scripture: "John 20:24-29" },
    { name: "matthew", hint: "Tax collector who became a disciple of Jesus.", scripture: "Matthew 9:9" },
    { name: "simon", hint: "The Zealot, one of the twelve apostles of Jesus.", scripture: "Luke 6:15" },
    { name: "judas", hint: "Disciple who betrayed Jesus for thirty pieces of silver.", scripture: "Matthew 26:14-16" },
    { name: "barnabas", hint: "Companion of Paul on his missionary journeys.", scripture: "Acts 4:36-37" },
    { name: "silas", hint: "Companion of Paul who was imprisoned with him.", scripture: "Acts 16:25-26" },
    { name: "timothy", hint: "Young pastor mentored by Paul.", scripture: "1 Timothy 4:12" },
    { name: "philip", hint: "Disciple who brought Nathanael to Jesus.", scripture: "John 1:45-46" },
    { name: "lydia", hint: "First European convert to Christianity.", scripture: "Acts 16:14-15" },
    { name: "priscilla", hint: "Wife of Aquila who worked with Paul in ministry.", scripture: "Acts 18:24-26" },
    { name: "aquila", hint: "Husband of Priscilla who was a tentmaker and partner with Paul.", scripture: "Acts 18:1-3" },
    { name: "stephen", hint: "First Christian martyr.", scripture: "Acts 7:54-60" },
    { name: "cornelius", hint: "Roman centurion who was the first Gentile convert to Christianity.", scripture: "Acts 10:1-48" },
    { name: "dorcas", hint: "Woman known for her good works and acts of charity.", scripture: "Acts 9:36-42" },
    { name: "ananias", hint: "Disciple who baptized Paul after his conversion.", scripture: "Acts 9:10-18" },
    { name: "sapphira", hint: "Wife of Ananias who lied to the Holy Spirit and died.", scripture: "Acts 5:1-11" },
    { name: "mary magdalene", hint: "Follower of Jesus who witnessed His resurrection.", scripture: "John 20:11-18" },
    { name: "martha", hint: "Sister of Mary and Lazarus who served Jesus.", scripture: "Luke 10:38-42" },
    { name: "lazarus", hint: "Friend of Jesus who was raised from the dead.", scripture: "John 11:43-44" },
    { name: "zacchaeus", hint: "Tax collector who climbed a tree to see Jesus.", scripture: "Luke 19:1-10" },
    { name: "nicodemus", hint: "Pharisee who visited Jesus by night to learn about being born again.", scripture: "John 3:1-21" },
    { name: "simon of cyrene", hint: "Man who was compelled to carry Jesus' cross.", scripture: "Luke 23:26" },
    { name: "bartimaeus", hint: "Blind beggar healed by Jesus.", scripture: "Mark 10:46-52" },
    { name: "mary of bethany", hint: "Sister of Martha who anointed Jesus with perfume.", scripture: "John 12:3-8" },
    { name: "jairus", hint: "Synagogue leader whose daughter was raised from the dead by Jesus.", scripture: "Mark 5:22-43" },
    { name: "pilate", hint: "Roman governor who authorized Jesus' crucifixion.", scripture: "John 19:1-16" },
    { name: "herod", hint: "King who sought to kill baby Jesus and later mocked Him before His crucifixion.", scripture: "Matthew 2:1-18" },
    { name: "barabbas", hint: "Criminal released instead of Jesus.", scripture: "Matthew 27:16-26" },
    { name: "cleopas", hint: "One of the disciples who met the risen Jesus on the road to Emmaus.", scripture: "Luke 24:13-35" },
    { name: "thaddeus", hint: "One of the twelve apostles, also known as Judas, son of James.", scripture: "Luke 6:16" },
    { name: "simon peter", hint: "Fisherman turned apostle, known for his boldness and leadership.", scripture: "Matthew 16:18" },
    { name: "paul", hint: "Apostle who preached the gospel to the Gentiles and wrote many New Testament letters.", scripture: "Acts 9:1-19" },
    { name: "barnabas", hint: "Apostle who accompanied Paul on missionary journeys.", scripture: "Acts 11:22-30" },
    { name: "titus", hint: "Apostolic delegate of Paul in Crete.", scripture: "Titus 1:4-5" }
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
                hintField.innerText = "Time up bruh";
            }
            actualInpt.disabled = true;
        }
    }, 1000);
};

const stopCountDown = () => {
    clearInterval(countdownInterval);
};

// Set a new question
function setQuestion() {
    if (questions.length === 0) {
        hintField.textContent = "You have successfully completed the Demo 👏🏽👏🏽";
        stopCountDown();
        hintContainer.style.background = "var(--green)";
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
    timeRemaining = 120;
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
    hintContainer.style.background = "";

    // Start with a new question
    setQuestion();
}

// Stop the quiz
function stopQuiz() {
    inputFields.classList.remove("success", "error");
    stopCountDown();
    actualInpt.disabled = true;
    hintField.textContent = "Quiz stopped!";
    hintContainer.style.background = "var(--red)";
}