const inputFields = document.querySelector('.inputFields'),
    actualInpt = document.getElementById('actualInput');

const answer = "DAVID"

document.onkeydown = (e) => {
    if(e.key === "Backspace" || e.key === "Delete"){
        e.preventDefault();
    }{
        actualInpt.focus();
    }
}

actualInpt.oninput = () => {
    
}