import { errorWithEndDate } from "./ErrorWithDate.js";

export function CreateBasicComponent(dateStartEl, timeEl, callendarPageStartEl) {
    const nameValue = document.querySelector('.name-input')
    const timeValue = document.querySelector('.time-input')
    const dateStartValue = document.querySelector('.date-start-value')
    const callendarPageEl = document.querySelector('.callendar-page')
    const desValue = document.querySelector('.value-description')

    const creator = {
        name(event) {
            event.preventDefault();
            const nameEl = document.querySelector('.event-name')
            nameEl.textContent = nameValue.value
        },

        time() {
            timeEl.textContent = timeValue.value
        },

        dateStart() {
            const now = new Date()
            const dateStart = new Date(dateStartValue.value).toDateString()

            if (Date.parse(dateStart) > Date.parse(now)) {

                if (!document.querySelector('.callendarStart-page')) {
                    callendarPageEl.appendChild(callendarPageStartEl)
                }

                if (document.querySelector('.error-end-date')) {
                    const error = document.querySelector('.error-end-date')
                    callendarPageEl.removeChild(error)
                }

                dateStartEl.innerHTML = dateStart

                const day = new Date(dateStartValue.value)
                const callendarPage = `${day.getDate()}`
                callendarPageStartEl.textContent = callendarPage

                if (document.querySelector('.date-end-value')) {
                    const dateEndValue = document.querySelector('.date-end-value')

                    if (Date.parse(dateStart) > Date.parse(dateEndValue.value)) {
                        errorWithEndDate()
                    }
                }
            } else {
                errorWithEndDate()

                const error = document.querySelector('.error-end-date')
                error.textContent = "Start date must be later"
                callendarPageEl.removeChild(callendarPageStartEl)
            }
        },

        des(event) {
            event.preventDefault();

            const desEl = document.querySelector('.description')
            desEl.textContent = desValue.value
        },

    }

    nameValue.addEventListener('input', creator.name)
    dateStartValue.addEventListener('input', creator.dateStart)
    timeValue.addEventListener('input', creator.time)
    desValue.addEventListener('input', creator.des)

}