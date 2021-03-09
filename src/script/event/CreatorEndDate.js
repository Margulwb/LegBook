import { errorWithEndDate } from "./ErrorWithDate.js";

export function CreatorEndDate() {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEnd = document.querySelector('.date-end')
    const labelEndDateOpen = document.querySelector('.label-end-date-open')

    const creatorEndDate = {
        typeEndDate() {
            const dateEndValue = document.querySelector('.date-end-value')
            const dateEndEl = document.querySelector('.dateEnd-info')
            const dateEnd = new Date(dateEndValue.value).toDateString()

            const createdEvent = document.querySelector('.createD-event')

            const dateStart = document.querySelector('.dateStart-info').textContent
            if (document.querySelector('.callendarStart-page')) {
                if (Date.parse(dateStart) > Date.parse(dateEndValue.value)) {
                    errorWithEndDate()

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
        },

        removeDateEnd() {
            if (document.querySelector('.arrow') && document.querySelector('.callendarEnd-page')) {
                const arrow = document.querySelector('.arrow')
                setTimeout(() =>
                    callendarPageEl.removeChild(arrow), 400)
                requestAnimationFrame(() => arrow.classList.add('removeArrow'))

                const callendarEndPage = document.querySelector('.callendarEnd-page')
                setTimeout(() =>
                    callendarPageEl.removeChild(callendarEndPage), 400)
                requestAnimationFrame(() => callendarEndPage.classList.add('removeCallendarEndPage'))
            }
            const dateClose = document.querySelector('.date-end-el')
            const labelClose = document.querySelector('.label-end-date-close')

            dateEnd.removeChild(dateClose)
            dateEnd.removeChild(labelClose)
            dateEnd.appendChild(labelEndDateOpen)

            const infoDateClose = document.querySelector('.dateEnd-info')
            infoDateClose.textContent = ''

            if (document.querySelector('.error-end-date')) {
                const errorLabale = document.querySelector('.error-end-date')
                errorLabale.remove()
            }
        },

        createDateEnd() {
            const dateEndValue = document.createElement('div')
            dateEndValue.classList.add('date-end-el')

            dateEnd.removeChild(labelEndDateOpen)

            const labelEndDateClose = document.createElement('button')
            labelEndDateClose.textContent = " - Remove End Date"
            labelEndDateClose.classList.add("label-end-date-close")

            dateEnd.appendChild(dateEndValue)
            dateEnd.appendChild(labelEndDateClose)

            dateEndValue.innerHTML = "<div class='label'>End Date</div>" +
                "<input type='date' class='input-form date-end-value'>";

            dateEndValue.addEventListener('input', creatorEndDate.typeEndDate)
            labelEndDateClose.addEventListener('click', creatorEndDate.removeDateEnd)
        }

    }
    labelEndDateOpen.addEventListener('click', creatorEndDate.createDateEnd)
}