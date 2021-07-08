import { ErrorBadTime } from "../Errors/ErrorBadTime.js";
import { CheckError } from "../Errors/CheckError.js";
import { NextDayEvent } from "../NextDayEvent.js";
import { CreateEndDateElement } from "../EndDate/CreateEndDateElement.js";

export function TypeEndTime() {
    const endTimeValue = document.querySelector('.time-end-value')
    const endTimeEL = document.querySelector('.time-end-info')
    const startTimeValue = document.querySelector('.time-input')

    const dateStart = document.querySelector('.dateStart-info').textContent
    const dateEnd = document.querySelector('.dateEnd-info').textContent

    const startTimeH = new Date(new Date().toDateString() + ' ' + startTimeValue.value).getHours()
    const startTimeM = new Date(new Date().toDateString() + ' ' + startTimeValue.value).getMinutes()
    const startTime = startTimeH + startTimeM / 60

    const endTimeH = new Date(new Date().toDateString() + ' ' + endTimeValue.value).getHours()
    const endTimeM = new Date(new Date().toDateString() + ' ' + endTimeValue.value).getMinutes()
    const endTime = endTimeH + endTimeM / 60

    CheckError()

    if (dateEnd !== '') {
        if (Date.parse(dateStart) == Date.parse(dateEnd)) {
            if (startTime < endTime) endTimeEL.textContent = endTimeValue.value
            if (startTime > endTime) ErrorBadTime('.time-end-info', "Bad End Time")
            if (endTimeH == 0) NextDayEvent(".callendarEnd-page", ".dateEnd-info", '.date-end-value')
        } else endTimeEL.textContent = endTimeValue.value
    } else {
        if (startTime < endTime) endTimeEL.textContent = endTimeValue.value
        if (startTime > endTime) ErrorBadTime('.time-end-info', "Bad End Time")
        if (endTimeH == 0) CreateEndDateElement('NEXT_DAY')
    }
}