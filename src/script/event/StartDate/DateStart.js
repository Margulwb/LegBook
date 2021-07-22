import { CheckError } from "../Errors/CheckError.js";
import { ErrorWithEndDate } from "../Errors/ErrorWithDate.js";
import { DeleteEndDate } from "../EndDate/DeleteEndDate.js";

export function DateStart(dateData) {
    const [callendarPageStartEl, dateStartValue, dateStartEl] = dateData

    const now = new Date()
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateStart = new Date(dateStartValue.value).toDateString()

    const dateEndValue = document.querySelector('.date-end-value')

    if (dateEndValue) {
        const labelEndDateOpen = document.querySelector('.label-end-date-open')
        DeleteEndDate(labelEndDateOpen)
        CheckAndInsert()
    } else {
        CheckAndInsert()
    }

    function CheckAndInsert() {
        if (Date.parse(dateStart) > Date.parse(now)) {
            if (!document.querySelector('.callendarStart-page')) {
                callendarPageEl.appendChild(callendarPageStartEl)
                requestAnimationFrame(() => callendarPageStartEl.classList.remove('createError'))
            }

            CheckError(document.querySelector('.error-end-date'))

            dateStartEl.innerHTML = dateStart

            const day = new Date(dateStartValue.value)
            const callendarPage = `${day.getDate()}`
            callendarPageStartEl.textContent = callendarPage
        } else {
            ErrorWithEndDate("Start date must be later", callendarPageStartEl)
        }
    }
}