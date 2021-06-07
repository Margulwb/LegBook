import { CheckError } from "./CheckError.js";

export function ErrorWithEndDate(label,element) {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEndEl = document.querySelector('.dateEnd-info')
    dateEndEl.textContent = ''

    const error = document.createElement('div')
    error.classList.add('error-end-date', 'createError')
    error.textContent = label

    if (!document.querySelector('.error-end-date')) {
        callendarPageEl.appendChild(error)
        requestAnimationFrame(() => error.classList.remove('createError'))
    }

    CheckError(document.querySelector('.arrow'))
    CheckError(element)
}