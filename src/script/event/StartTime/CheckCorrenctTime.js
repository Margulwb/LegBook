import { ErrorBadTime } from "../EndTime/ErrorBadTime.js";

export function CheckCorrenctTime() {
    const startTimeValue = document.querySelector('.time-input')
    const endTimeValue = document.querySelector('.time-end-value')

    const startTimeH = new Date(new Date().toDateString() + ' ' + startTimeValue.value).getHours()
    const startTimeM = new Date(new Date().toDateString() + ' ' + startTimeValue.value).getMinutes()
    const startTime = startTimeH + startTimeM / 60

    const endTimeH = new Date(new Date().toDateString() + ' ' + endTimeValue.value).getHours()
    const endTimeM = new Date(new Date().toDateString() + ' ' + endTimeValue.value).getMinutes()
    const endTime = endTimeH + endTimeM / 60

    if (startTime > endTime) {
        ErrorBadTime()
    }
}