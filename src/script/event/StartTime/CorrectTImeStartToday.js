import { ErrorBadTime } from "../Errors/ErrorBadTime.js";
import { CheckError } from "../Errors/CheckError.js";

export function CorrenctTimeStartToday(timeInformation) {
    let [timeEl, now, timeValue, timeStart] = timeInformation
    if (timeStart.getHours() < now.getHours()) {
        ErrorBadTime(".time-info","Bad Start Time")
    } else if (timeStart.getHours() == now.getHours()) {
        if (timeStart.getMinutes() < now.getMinutes()) {
            ErrorBadTime(".time-info","Bad Start Time")
        } else {
            CheckError()
            timeEl.textContent = timeValue.value
        }
    } else {
        CheckError()
        timeEl.textContent = timeValue.value
    }
}