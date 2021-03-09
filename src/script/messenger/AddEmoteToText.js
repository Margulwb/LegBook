const sendMenu = document.querySelector('.writing')
const result = document.querySelector('.result')

export function AddEmoteToText() {
    const emoticones = document.querySelector(".input-emoticone")
    emoticones.addEventListener('click', () => Emote.CreateBoardEmote())

    const Emote = {
        CreateBoardEmote() {
            const emoteBorder = document.createElement('div')
            emoteBorder.classList.add('emote-border', 'is-close')
            emoteBorder.innerHTML =
                "<div class='emote-box smile'><img src='/src/images/smile.png'></div>" +
                "<div class='emote-box suprice'><img src='/src/images/suprice.png'></div>" +
                "<div class='emote-box laugh'><img src='/src/images/laugh.png'></div>" +
                "<div class='emote-box sad'><img src='/src/images/sad.png'></div>"

            document.querySelector('.emote-border') ?
                Emote.RemoveEmoteBorder() :
                sendMenu.prepend(emoteBorder)
            requestAnimationFrame(() => {
                emoteBorder.classList.remove('is-close')
            })
            const allEmote = document.querySelectorAll('.emote-box')
            allEmote.forEach(emote => {
                emote.addEventListener('click', () => {
                    let emoteName = emote.classList[1]
                    let addEmote = document.createElement('div')
                    addEmote.classList.add('add-message')
                    addEmote.innerHTML = `<img src="/src/images/${emoteName}.png"/>`
                    result.prepend(addEmote)
                    Emote.RemoveEmoteBorder()
                })
            })
        },

        RemoveEmoteBorder() {
            let emoteBorder = document.querySelector('.emote-border')
            requestAnimationFrame(() => {
                emoteBorder.classList.add('is-close-again')
            })
            setTimeout(() => {
                sendMenu.removeChild(emoteBorder)
            }, 150);
        }
    }

    const textForm = document.querySelector(".text-message")
    textForm.addEventListener('submit', () => {
        if (document.querySelector('.emote-border')) {
            Emote.RemoveEmoteBorder()
        }
    })
}