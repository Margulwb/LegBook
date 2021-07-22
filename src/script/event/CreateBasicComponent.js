import { CheckCorrenctTime } from "./StartTime/CheckCorrenctTime.js";
import { CorrenctTimeStartToday } from "./StartTime/CorrectTImeStartToday.js";
import { DateStart } from "./StartDate/DateStart.js";
import { GenitiveDate } from "./GenitiveDate.js";
import { NextDayEvent } from "./NextDayEvent.js";
import { CheckError } from "./Errors/CheckError.js";
import { ErrorWithEndDate } from "./Errors/ErrorWithDate.js";

export function CreateBasicComponent(startDate) {
    let [dateStartEl, timeEl, callendarPageStartEl] = startDate

    const nameValue = document.querySelector('.name-input')
    const desValue = document.querySelector('.value-description')

    let timeValue = document.querySelector('.time-input')
    const startTime = document.querySelector('.time-info').textContent
    timeValue.value = startTime

    let dateStartValue = document.querySelector('.date-start-value')
    const now = new Date()
    const dateStartNow = `${now.getFullYear()}-${GenitiveDate(now.getMonth()+1)}-${GenitiveDate(now.getDate())}`
    dateStartValue.value = dateStartNow

    const creator = {
        name() {
            const nameEl = document.querySelector('.event-name')
            nameEl.textContent = nameValue.value
        },


        description() {
            const desEl = document.querySelector('.description')
            desEl.textContent = desValue.value
        },

        time() {
            const timeStart = new Date(new Date().toDateString() + ' ' + timeValue.value)
            let timeInformation = [timeEl, now, timeValue, timeStart]

            if (timeStart.getHours() == 0) NextDayEvent(".callendarStart-page", ".dateStart-info", ".date-start-value")
            if (document.querySelector('.time-end-info').textContent != '') CheckCorrenctTime()
            if (now.toDateString() == dateStartEl.textContent) CorrenctTimeStartToday(timeInformation)
            if (now.toDateString() != dateStartEl.textContent) timeEl.textContent = timeValue.value
        },

        dateStart() {
            const dateData = [callendarPageStartEl, dateStartValue, dateStartEl]
            DateStart(dateData)
        },
    }

    nameValue.addEventListener('input', creator.name)
    dateStartValue.addEventListener('input', creator.dateStart)
    timeValue.addEventListener('input', creator.time)
    desValue.addEventListener('input', creator.description)
}