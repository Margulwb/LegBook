import { TypeEndTime } from "./TypeEndTime.js";
import { DeleteEndTime } from "./DeleteEndTime.js";
import { CreateElement } from "../CreateElement.js";

export function CreatorEndTime() {
    const timeEnd = document.querySelector('.time-end')
    const endTimeClose = document.querySelector('.label-end-time-close')

    const creatorEndTime = {
        createEndTime() {
            timeEnd.removeChild(endTimeClose)

            const endTimeOpen = CreateElement('button', "textContent", "- Remove End Time", 'label-end-time-open')
            const endTimeElement = CreateElement('div', 'innerHTML', '<div class="label">End Time</div>' +
                '<input type="time" class="input-form time-end-value">', 'time-end-el')

            timeEnd.appendChild(endTimeElement)
            timeEnd.appendChild(endTimeOpen)

            let startTimeValue = document.querySelector('.time-input')
            let endTimeValue = document.querySelector('.time-end-value')
            endTimeValue.value = startTimeValue.value

            endTimeOpen.addEventListener('click', creatorEndTime.removeEndTime)
            const endTimeInput = document.querySelector('.time-end-value')
            endTimeInput.addEventListener('input', TypeEndTime)
        },

        removeEndTime() {
            DeleteEndTime(timeEnd, endTimeClose)
        }
    }
    endTimeClose.addEventListener('click', creatorEndTime.createEndTime)
}