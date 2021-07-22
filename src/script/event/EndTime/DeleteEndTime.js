import { CheckError } from "../Errors/CheckError.js"
import { CreateElement } from "../CreateElement.js";
import { CreatorEndTime } from "./CreatorEndTime.js";

export function DeleteEndTime(timeEnd, endTimeClose) {
    const endTimeValue = document.querySelector('.time-end-el')
    const endTimeOpen = document.querySelector('.label-end-time-open')
    const endTimeEL = document.querySelector('.time-end-info')
    endTimeEL.textContent = ''

    if (endTimeValue) timeEnd.removeChild(endTimeValue)
    if (endTimeOpen) timeEnd.removeChild(endTimeOpen)
    if (endTimeClose) timeEnd.appendChild(endTimeClose)

    if (document.querySelector('.error-bad-time')) CheckError()

    if (!endTimeClose) {
        endTimeClose = CreateElement('samp', 'textContent', ' + Add End Time', 'label-end-time-close')
        timeEnd.appendChild(endTimeClose)
        CreatorEndTime()
    }
}