export default function AddText() {
    let addText = document.querySelector('.text-message');
    let textMessage = document.querySelector('.input-message');

    let Text = {
        AddMessage() {
            event.preventDefault()
            if (textMessage.value) {
                let result = document.querySelector('.result')

                let newMessage = document.createElement("span")
                newMessage.classList.add('add-message')
                newMessage.textContent = textMessage.value
                result.prepend(newMessage)

                textMessage.placeholder = "Aa.."
            } else {
                textMessage.placeholder = "Write something"
            }
            textMessage.value = ""
        }
    }

    addText.addEventListener('submit', () => Text.AddMessage())

    textMessage.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            Text.AddMessage()
        }
    })
}