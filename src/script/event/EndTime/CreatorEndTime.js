import { TypeEndTime } from "./TypeEndTime.js";
import { CheckError } from "./CheckError.js";

export function CreatorEndTime() {
    const timeEnd = document.querySelector('.time-end')
    const endTimeClose = document.querySelector('.label-end-time-close')

    const creatorEndTime = {
        createEndTime() {
            timeEnd.removeChild(endTimeClose)

            const endTimeOpen = document.createElement('button')
            endTimeOpen.textContent = "- Remove End Time"
            endTimeOpen.classList.add('label-end-time-open')

            const endTimeValue = document.createElement('div')
            endTimeValue.classList.add('time-end-el')
            endTimeValue.innerHTML = '<div class="label">End Time</div>' +
                '<input type="time" class="input-form time-end-value">'

            timeEnd.appendChild(endTimeValue)
            timeEnd.appendChild(endTimeOpen)

            endTimeOpen.addEventListener('click', creatorEndTime.removeEndTime)
            const endTimeInput = document.querySelector('.time-end-value')
            endTimeInput.addEventListener('input', creatorEndTime.insertEndTime)
        },

        removeEndTime() {
            const endTimeValue = document.querySelector('.time-end-el')
            const endTimeOpen = document.querySelector('.label-end-time-open')
            timeEnd.removeChild(endTimeValue)
            timeEnd.removeChild(endTimeOpen)
            timeEnd.appendChild(endTimeClose)

            if (document.querySelector('.time-end-info')) {
                const endTimeEL = document.querySelector('.time-end-info')
                endTimeEL.textContent = ''
            }
            if (document.querySelector('.error-bad-time')) {
                CheckError()
            }
        },

        insertEndTime() {
            TypeEndTime()
        }
    }
    endTimeClose.addEventListener('click', creatorEndTime.createEndTime)
}