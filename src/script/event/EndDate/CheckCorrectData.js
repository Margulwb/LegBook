import { ErrorWithEndDate } from "../Errors/ErrorWithDate.js";
import { TypeEndDate } from "./TypeEndDate.js";

export function CheckCorrectData() {
    const dateEndValue = document.querySelector('.date-end-value')
    const dateStart = document.querySelector('.dateStart-info').textContent

    if (document.querySelector('.callendarStart-page')) {
        if (Date.parse(dateStart) > Date.parse(dateEndValue.value))
            ErrorWithEndDate("End date must be later", document.querySelector('.callendarEnd-page'))

        if (Date.parse(dateStart) < Date.parse(dateEndValue.value)) TypeEndDate(dateEndValue)
    }
}