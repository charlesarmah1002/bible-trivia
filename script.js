const inputFields = document.querySelector('.inputFields'),
    actualInpt = document.getElementById('actualInput');

const answer = "DAVID"

document.onkeydown = (e) => {
    if(e.key === "Backspace" || e.key === "Delete"){
        e.preventDefault();
    }{
        actualInpt.focus();
        actualInpt.maxLength = answer.length;
    }
}

const inputField = document.createElement('input')
inputField.type('text');
inputField.disabled;
inputField.maxLength = 1;

for (let index = 0; index < answer.length; index++) {
    const element = answer[index];
    actualInpt.innerHTML = element;
    inputField.appendChild(inputField)
}

actualInpt.oninput = () => {
    for (let letter = 0; letter < actualInpt.value.length; letter++) {
        const element = actualInpt.value[letter];
        
    }
}