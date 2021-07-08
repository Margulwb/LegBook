import { TypeEmptyEndDate } from "./TypeEmptyEndDate.js";

export function TypeEndDate(dateValue) {
    TypeEmptyEndDate()

    const dateEnd = new Date(dateValue.value).toDateString()

    const newDateEndEl = document.querySelector('.dateEnd-info')
    newDateEndEl.textContent = dateEnd

    const day = new Date(dateValue.value)
    const callendarPage = `${day.getDate()}`

    const callendarPageEndEl = document.querySelector('.callendarEnd-page')
    callendarPageEndEl.textContent = callendarPage
}