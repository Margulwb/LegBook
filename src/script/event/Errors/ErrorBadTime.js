import { CreateElement } from "../CreateElement.js";

export function ErrorBadTime(element, label) {
    const timeElement = document.querySelector(`${element}`)
    const error = CreateElement('div', 'textContent', label, 'error-bad-time')

    const timeFather = document.querySelector('.time')
    timeElement.textContent = ''
    if (!document.querySelector('.error-bad-time'))
        timeFather.prepend(error)
}