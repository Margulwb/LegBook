import { GenitiveDate } from "./GenitiveDate.js";
import { ClearInput } from "./EndTime/ClearInput.js";

export function EnterDate(lastDay, dataDate, elDate) {
    let switchInfo = document.querySelector(`${elDate}`)

    const [Day, days, endDateInfo, InfoDW, InfoM, InfoD, InfoY, month] = dataDate
    const switchInfoDW = days[parseInt(endDateInfo.getDay()) + 1]

    if (InfoD == lastDay) {
        Day.textContent = 1

        switchInfo.textContent = `${InfoDW == days[6] ? days[0] : switchInfoDW}
            ${month[11]==month[parseInt(endDateInfo.getMonth())]?month[0]
                :month[parseInt(endDateInfo.getMonth()) + 1]} 1 ${month[11]==month[parseInt(endDateInfo.getMonth())]?InfoY+1:InfoY}`

    } else {
        const numberDay = parseInt(Day.textContent) + 1
        Day.textContent = numberDay

        switchInfo.textContent = `${InfoDW == days[6] ? days[0] : switchInfoDW}
         ${InfoM} ${GenitiveDate(parseInt(endDateInfo.getDate() + 1))} ${InfoY}`
    }
    ClearInput("00", elDate)
}