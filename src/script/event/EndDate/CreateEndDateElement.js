import { CheckError } from "../Errors/CheckError.js";
import { DeleteEndDate } from "./DeleteEndDate.js";
import { NextDayEvent } from "../NextDayEvent.js";
import { TypeEmptyEndDate } from "./TypeEmptyEndDate.js";
import { CreateElement } from "../CreateElement.js";

export function CreateEndDateElement(action) {
    const dateEnd = document.querySelector('.date-end')
    const labelEndDateOpen = document.querySelector('.label-end-date-open')

    if (!!labelEndDateOpen) dateEnd.removeChild(labelEndDateOpen)

    const dateEndValue = CreateElement('div', "innerHTML",
        "<div class='label'>End Date</div>" +
        "<input type='date' class='input-form date-end-value'>", 'date-end-el')
    const labelEndDateClose = CreateElement("button", 'textContent', " - Remove End Date", "label-end-date-close")

    dateEnd.appendChild(dateEndValue)
    dateEnd.appendChild(labelEndDateClose)

    if (action === "NEXT_DAY") {
        CheckError()

        TypeEmptyEndDate()
        NextDayEvent(".callendarEnd-page", ".dateStart-info", ".date-start-value", 'CREATE')

        const endTimeValue = document.querySelector('.time-end-value')
        const endTimeEL = document.querySelector('.time-end-info')
        endTimeEL.textContent = endTimeValue.value

        labelEndDateClose.addEventListener('click', () => DeleteEndDate(labelEndDateOpen))
    }
}