import { CheckError } from "../Errors/CheckError.js";
import { CreateElement } from "../CreateElement.js";
import { CreatorEndDate } from "./CreatorEndDate.js";
import { DeleteEndTime } from "../EndTime/DeleteEndTime.js";

export function DeleteEndDate(labelEndDateOpen) {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEnd = document.querySelector('.date-end')

    if (document.querySelector('.arrow')) {
        const arrow = document.querySelector('.arrow')
        setTimeout(() =>
            callendarPageEl.removeChild(arrow), 400)
        requestAnimationFrame(() => arrow.classList.add('removeArrow'))

        const callendarEndPage = document.querySelector('.callendarEnd-page')
        setTimeout(() =>
            callendarPageEl.removeChild(callendarEndPage), 400)
        requestAnimationFrame(() => callendarEndPage.classList.add('removeCallendarEndPage'))
    }

    const dateClose = document.querySelector('.date-end-el')
    dateEnd.removeChild(dateClose)

    const labelClose = document.querySelector('.label-end-date-close')
    dateEnd.removeChild(labelClose)

    if (!!labelEndDateOpen) dateEnd.appendChild(labelEndDateOpen)

    if (!labelEndDateOpen) {
        labelEndDateOpen = CreateElement('samp', 'textContent', '+ Add End Date', 'label-end-date-open')
        dateEnd.appendChild(labelEndDateOpen)
        CreatorEndDate()
    }

    const infoDateClose = document.querySelector('.dateEnd-info')
    infoDateClose.textContent = ''

    CheckError(document.querySelector('.error-end-date'))

    const dateEndCallendar = document.querySelector('.callendarEnd-page')
    const timeEndInfo = document.querySelector('.time-end-info')

    if (!!timeEndInfo && !!dateEndCallendar) {
        timeEndInfo.textContent = ''
        const timeEnd = document.querySelector('.time-end')
        const endTimeClose = document.querySelector('.label-end-time-close')
        DeleteEndTime(timeEnd, endTimeClose)
    }
}