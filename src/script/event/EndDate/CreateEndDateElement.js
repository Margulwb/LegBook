import { CheckError } from "../Errors/CheckError.js";
import { DeleteEndDate } from "./DeleteEndDate.js";
import { NextDayEvent } from "../NextDayEvent.js";
import { TypeEndDate } from "./TypeEndDate.js";
import { TypeEmptyEndDate } from "./TypeEmptyEndDate.js";

export function CreateEndDateElement(action) {
    const dateEnd = document.querySelector('.date-end')
    const labelEndDateOpen = document.querySelector('.label-end-date-open')

    dateEnd.removeChild(labelEndDateOpen)

    const dateEndValue = document.createElement('div')
    dateEndValue.classList.add('date-end-el')
    dateEndValue.innerHTML = "<div class='label'>End Date</div>" +
        "<input type='date' class='input-form date-end-value'>";
    dateEnd.appendChild(dateEndValue)

    const labelEndDateClose = document.createElement('button')
    labelEndDateClose.textContent = " - Remove End Date"
    labelEndDateClose.classList.add("label-end-date-close")
    dateEnd.appendChild(labelEndDateClose)

    if (action === "NEXT_DAY") {
        CheckError()
        labelEndDateClose.addEventListener('click', () => DeleteEndDate(labelEndDateOpen))

        TypeEmptyEndDate()
        const nextDayValue = NextDayEvent(".callendarEnd-page", ".dateStart-info", ".date-start-value", 'CREATE')
        console.log(nextDayValue);
        TypeEndDate(nextDayValue)

        const endTimeValue = document.querySelector('.time-end-value')
        const endTimeEL = document.querySelector('.time-end-info')
        endTimeEL.textContent = endTimeValue.value
    }
}