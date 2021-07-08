import { CheckCorrectData } from "./CheckCorrectData.js";
import { DeleteEndDate } from "./DeleteEndDate.js";
import { CreateEndDateElement } from "./CreateEndDateElement.js";

export function CreatorEndDate() {
    const labelEndDateOpen = document.querySelector('.label-end-date-open')

    const creatorEndDate = {
        createDateEnd() {
            CreateEndDateElement()

            const dateEndValue = document.querySelector('.date-end-el')
            dateEndValue.addEventListener('input', CheckCorrectData)

            const labelEndDateClose = document.querySelector('.label-end-date-close')
            labelEndDateClose.addEventListener('click', creatorEndDate.removeDateEnd)
        },

        removeDateEnd() {
            DeleteEndDate(labelEndDateOpen)
        }
    }
    labelEndDateOpen.addEventListener('click', creatorEndDate.createDateEnd)
}