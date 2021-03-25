import { ErrorWithEndDate } from "./EndDate/ErrorWithDate.js";
import { GenitiveDate } from "./GenitiveDate.js";
import { CheckCorrenctTime } from "./StartTime/CheckCorrenctTime.js";
import { CorrenctTimeStartToday } from "./StartTime/CorrectTImeStartToday.js";
import { NextDayEvent } from "./NextDayEvent.js";

export function CreateBasicComponent(startDate) {
    let [dateStartEl, timeEl, callendarPageStartEl] = startDate
    const nameValue = document.querySelector('.name-input')
    const callendarPageEl = document.querySelector('.callendar-page')
    const desValue = document.querySelector('.value-description')

    let timeValue = document.querySelector('.time-input')
    const startTime = document.querySelector('.time-info').textContent
    timeValue.value = startTime

    let dateStartValue = document.querySelector('.date-start-value')
    const now = new Date()
    const dateStartNow = `${now.getFullYear()}-${GenitiveDate(now.getMonth()+1)}-${GenitiveDate(now.getDate())}`
    dateStartValue.value = dateStartNow

    const creator = {
        name(event) {
            event.preventDefault();
            const nameEl = document.querySelector('.event-name')
            nameEl.textContent = nameValue.value
        },

        time() {
            if (document.querySelector('.time-end-info').textContent != '') {
                CheckCorrenctTime()
            }
            const timeStart = new Date(new Date().toDateString() + ' ' + timeValue.value)
            if (timeStart.getHours() == 0) {
                NextDayEvent(".callendarStart-page", ".dateStart-info")
            }

            if (now.toDateString() == dateStartEl.textContent) {
                let timeInformation = [timeEl, now, timeValue, timeStart]
                CorrenctTimeStartToday(timeInformation)
            } else {
                timeEl.textContent = timeValue.value
            }
        },

        dateStart() {
            const now = new Date()
            const dateStart = new Date(dateStartValue.value).toDateString()

            if (Date.parse(dateStart) > Date.parse(now)) {

                if (!document.querySelector('.callendarStart-page')) {
                    callendarPageEl.appendChild(callendarPageStartEl)
                    requestAnimationFrame(() => callendarPageStartEl.classList.remove('createError'))
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
                        ErrorWithEndDate()
                    }
                }
            } else {
                ErrorWithEndDate()

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