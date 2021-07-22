import { CheckError } from "../Errors/CheckError.js";
import { CreateElement } from "../CreateElement.js";

export function TypeEmptyEndDate() {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEndEl = document.querySelector('.dateEnd-info')
    const createdEvent = document.querySelector('.createD-event')

    const newDateEndEl = CreateElement('div', '', '', 'date-info', 'dateEnd-info', 'creatingInfoEndDate')

    createdEvent.replaceChild(newDateEndEl, dateEndEl)
    requestAnimationFrame(() => newDateEndEl.classList.remove('creatingInfoEndDate'))

    const arrow = CreateElement('div', 'innerHTML', '&#8594', 'arrow', 'createArrow')
    if (!document.querySelector('.arrow')) {
        callendarPageEl.appendChild(arrow)
        requestAnimationFrame(() => arrow.classList.remove('createArrow'))
    }

    const callendarPageEndEl = CreateElement('div', '', '', 'callendarEnd-page', 'creatingCallendarEndPage')

    if (!document.querySelector('.callendarEnd-page')) {
        callendarPageEl.appendChild(callendarPageEndEl)
        requestAnimationFrame(() => callendarPageEndEl.classList.remove('creatingCallendarEndPage'))
    } else {
        const oldCallendarPageEndEl = document.querySelector('.callendarEnd-page')
        callendarPageEl.removeChild(oldCallendarPageEndEl)

        callendarPageEl.appendChild(callendarPageEndEl)
        requestAnimationFrame(() => callendarPageEndEl.classList.remove('creatingCallendarEndPage'))
    }

    CheckError(document.querySelector('.error-end-date'))
}