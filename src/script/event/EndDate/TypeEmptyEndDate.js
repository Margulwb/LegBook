import { CheckError } from "../Errors/CheckError.js";

export function TypeEmptyEndDate() {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEndEl = document.querySelector('.dateEnd-info')
    const createdEvent = document.querySelector('.createD-event')

    const newDateEndEl = document.createElement('div')
    newDateEndEl.classList.add('date-info', 'dateEnd-info', 'creatingInfoEndDate')

    createdEvent.replaceChild(newDateEndEl, dateEndEl)
    requestAnimationFrame(() => newDateEndEl.classList.remove('creatingInfoEndDate'))

    const arrow = document.createElement('div')
    arrow.classList.add('arrow', 'createArrow')
    arrow.innerHTML = "&#8594"
    if (!document.querySelector('.arrow')) {
        callendarPageEl.appendChild(arrow)
        requestAnimationFrame(() => arrow.classList.remove('createArrow'))
    }

    const callendarPageEndEl = document.createElement('div')
    callendarPageEndEl.classList.add('callendarEnd-page', 'creatingCallendarEndPage')

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