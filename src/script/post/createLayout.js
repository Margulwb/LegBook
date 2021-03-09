import { CreatePost } from "./CreatePost.js";

export function CreateLayout() {
    let input = document.querySelector('.user-input')
    let container = document.querySelector('.container')
    let layout = document.querySelector('.layout-post')
    let textAreaValue = document.querySelector('.post-value')

    let layoutCreate = {
        close() {
            layout.classList = "is-close"
            container.style.opacity = "100%"
            textAreaValue.value = ''
        },

        open() {
            layout.classList = "is-open layout-post"
            container.style.opacity = "50%"
        },
        empty() {
            textAreaValue.placeholder = "Writre sometching"
        }
    }
    input.addEventListener('click', layoutCreate.open)

    let exit = document.querySelector('#exitImage')
    exit.addEventListener('click', layoutCreate.close)

    CreatePost(layoutCreate)
}