import { TypeEndDate } from "./TypeEndDate.js";
import { DeleteEndDate } from "./DeleteEndDate.js";

export function CreatorEndDate() {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEnd = document.querySelector('.date-end')
    const labelEndDateOpen = document.querySelector('.label-end-date-open')

    const creatorEndDate = {
        createDateEnd() {
            const dateEndValue = document.createElement('div')
            dateEndValue.classList.add('date-end-el')

            dateEnd.removeChild(labelEndDateOpen)

            const labelEndDateClose = document.createElement('button')
            labelEndDateClose.textContent = " - Remove End Date"
            labelEndDateClose.classList.add("label-end-date-close")

            dateEnd.appendChild(dateEndValue)
            dateEnd.appendChild(labelEndDateClose)

            dateEndValue.innerHTML = "<div class='label'>End Date</div>" +
                "<input type='date' class='input-form date-end-value'>";

            dateEndValue.addEventListener('input', creatorEndDate.insertEndDate)
            labelEndDateClose.addEventListener('click', creatorEndDate.removeDateEnd)
        },

        insertEndDate() {
            TypeEndDate(callendarPageEl)
        },

        removeDateEnd() {
            DeleteEndDate(callendarPageEl, dateEnd, labelEndDateOpen)
        }
    }
    labelEndDateOpen.addEventListener('click', creatorEndDate.createDateEnd)
}