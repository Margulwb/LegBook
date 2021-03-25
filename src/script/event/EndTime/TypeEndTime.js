import { ErrorBadTime } from "./ErrorBadTime.js";
import { CheckError } from "./CheckError.js";
import { NextDayEvent } from "../NextDayEvent.js";

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

    if (dateEnd !== '') {
        if (Date.parse(dateStart) == Date.parse(dateEnd)) {
            if (startTime < endTime) {
                CheckError()
                const newEndTimeEL = document.querySelector('.time-end-info')
                newEndTimeEL.textContent = endTimeValue.value
            } else {
                ErrorBadTime()
            }
            if (endTimeH == 0) {
                CheckError()
                NextDayEvent(".callendarEnd-page", ".dateEnd-info")
            }
        } else {
            endTimeEL.textContent = endTimeValue.value
        }
    } else {
        if (startTime < endTime) {
            CheckError()
            const newEndTimeEL = document.querySelector('.time-end-info')
            newEndTimeEL.textContent = endTimeValue.value
        } else {
            ErrorBadTime()
        }
        if (endTimeH == 0 && endTimeM < 1) {
            CheckError()
        }
    }
}