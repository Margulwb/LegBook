import { ErrorTodayTime } from "./ErrorTodayTime.js";
import { CheckError } from "../EndTime/CheckError.js";

export function CorrenctTimeStartToday(timeInformation) {
    let [timeEl, now, timeValue, timeStart] = timeInformation

    if (timeStart.getHours() < now.getHours()) {
        ErrorTodayTime()
    } else if (timeStart.getHours() == now.getHours()) {
        if (timeStart.getMinutes() < now.getMinutes()) {
            ErrorTodayTime()
        } else {
            CheckError()
            timeEl.textContent = timeValue.value
        }
    } else {
        CheckError()
        timeEl.textContent = timeValue.value
    }
}