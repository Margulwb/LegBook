import { CheckError } from "./CheckError.js";
import { CreateElement } from "../CreateElement.js";

export function ErrorWithEndDate(label, element) {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEndEl = document.querySelector('.dateEnd-info')
    dateEndEl.textContent = ''

    const error = CreateElement('div', 'textContent', label, 'error-end-date', 'createError')

    if (!document.querySelector('.error-end-date')) {
        callendarPageEl.appendChild(error)
        requestAnimationFrame(() => error.classList.remove('createError'))
    }

    CheckError(document.querySelector('.arrow'))
    CheckError(element)
}