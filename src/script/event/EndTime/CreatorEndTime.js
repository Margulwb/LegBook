import { TypeEndTime } from "./TypeEndTime.js";
import { CheckError } from "../Errors/CheckError.js";

export function CreatorEndTime() {
    const timeEnd = document.querySelector('.time-end')
    const endTimeClose = document.querySelector('.label-end-time-close')

    const creatorEndTime = {
        createEndTime() {
            timeEnd.removeChild(endTimeClose)

            const endTimeOpen = document.createElement('button')
            endTimeOpen.textContent = "- Remove End Time"
            endTimeOpen.classList.add('label-end-time-open')

            const endTimeElement = document.createElement('div')
            endTimeElement.classList.add('time-end-el')
            endTimeElement.innerHTML = '<div class="label">End Time</div>' +
                '<input type="time" class="input-form time-end-value">'

            timeEnd.appendChild(endTimeElement)
            timeEnd.appendChild(endTimeOpen)

            let startTimeValue = document.querySelector('.time-input')
            let endTimeValue = document.querySelector('.time-end-value')
            endTimeValue.value= startTimeValue.value

            endTimeOpen.addEventListener('click', creatorEndTime.removeEndTime)
            const endTimeInput = document.querySelector('.time-end-value')
            endTimeInput.addEventListener('input', TypeEndTime)
        },

        removeEndTime() {
            const endTimeValue = document.querySelector('.time-end-el')
            const endTimeOpen = document.querySelector('.label-end-time-open')
            const endTimeEL = document.querySelector('.time-end-info')

            timeEnd.removeChild(endTimeValue)
            timeEnd.removeChild(endTimeOpen)
            timeEnd.appendChild(endTimeClose)
            endTimeEL.textContent = ''
            if (document.querySelector('.error-bad-time')) CheckError()
        }
    }
    endTimeClose.addEventListener('click', creatorEndTime.createEndTime)
}