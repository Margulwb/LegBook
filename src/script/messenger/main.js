let result = document.querySelector('.result');
let addText = document.querySelector('.text-message');
let textMessage = document.querySelector('.input-message');

addText.addEventListener('submit', (event) => {
    event.preventDefault()
    if (textMessage.value != "") {
        let result = document.querySelector('.result');
        let newMessage = document.createElement("span");
        newMessage.classList = 'add-message';
        newMessage.textContent = textMessage.value;
        result.appendChild(newMessage);
    }
    textMessage.value = "";
});