import { ErrorWithEndDate } from "./ErrorWithDate.js";

export function TypeEndDate(callendarPageEl) {
    const dateEndValue = document.querySelector('.date-end-value')
    const dateEndEl = document.querySelector('.dateEnd-info')
    const dateEnd = new Date(dateEndValue.value).toDateString()

    const createdEvent = document.querySelector('.createD-event')

    const dateStart = document.querySelector('.dateStart-info').textContent
    if (document.querySelector('.callendarStart-page')) {
        if (Date.parse(dateStart) > Date.parse(dateEndValue.value)) {
            ErrorWithEndDate()

        } else if (Date.parse(dateStart) < Date.parse(dateEndValue.value)) {
            const newDateEndEl = document.createElement('div')
            newDateEndEl.classList.add('date-info', 'dateEnd-info', 'creatingInfoEndDate')
            newDateEndEl.textContent = dateEnd

            createdEvent.replaceChild(newDateEndEl, dateEndEl)
            requestAnimationFrame(() => newDateEndEl.classList.remove('creatingInfoEndDate'))

            const arrow = document.createElement('div')
            arrow.classList.add('arrow', 'createArrow')
            arrow.innerHTML = "&#8594"

            if (document.querySelector('.arrow') == null) {
                callendarPageEl.appendChild(arrow)
                requestAnimationFrame(() => arrow.classList.remove('createArrow'))
            }

            const callendarPageEndEl = document.createElement('div')
            callendarPageEndEl.classList.add('callendarEnd-page', 'creatingCallendarEndPage')

            const day = new Date(dateEndValue.value)
            const callendarPage = `${day.getDate()}`
            callendarPageEndEl.textContent = callendarPage

            if (document.querySelector('.callendarEnd-page') == null) {
                callendarPageEl.appendChild(callendarPageEndEl)
                requestAnimationFrame(() => callendarPageEndEl.classList.remove('creatingCallendarEndPage'))
            } else {
                const oldCallendarPageEndEl = document.querySelector('.callendarEnd-page')
                callendarPageEl.removeChild(oldCallendarPageEndEl)

                callendarPageEl.appendChild(callendarPageEndEl)
                requestAnimationFrame(() => callendarPageEndEl.classList.remove('creatingCallendarEndPage'))
            }

            if (document.querySelector('.error-end-date')) {
                const error = document.querySelector('.error-end-date')
                callendarPageEl.removeChild(error)
            }
        }
    }
}