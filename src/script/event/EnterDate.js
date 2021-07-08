import { GenitiveDate } from "./GenitiveDate.js";

export function EnterDate(lastDay, dataDate, dataElement) {
    const [elDate, dateValue, action] = dataElement
    const [Day, endDateInfo, InfoDayWeek, InfoMonth, InfoDay, InfoYear, month, daysWeek] = dataDate

    let switchInfo = document.querySelector(elDate)
    const switchInfoDW = daysWeek[parseInt(endDateInfo.getDay()) + 1]

    const switchValue = document.querySelector(`${dateValue}`)
    const value = new Date(switchValue.value)
    const valueYear = value.getFullYear()

    if (InfoDay == lastDay) {
        Day.textContent = 1

        switchInfo.textContent = `${InfoDayWeek == daysWeek[6] ? daysWeek[0] : switchInfoDW}
            ${month[11]==month[parseInt(endDateInfo.getMonth())]?month[0]:month[parseInt(endDateInfo.getMonth()) + 1]}
             1 ${month[11]==month[parseInt(endDateInfo.getMonth())]?InfoYear+1:InfoYear}`

        switchValue.value =
            `${value.getMonth()!=11 ? valueYear : valueYear+1}-${value.getMonth()!=11 ? GenitiveDate(value.getMonth()+2) : '01'}-01`
    } else {
        Day.textContent = parseInt(Day.textContent) + 1

        switchInfo.textContent = `${InfoDayWeek == daysWeek[6] ? daysWeek[0] : switchInfoDW}
         ${InfoMonth} ${GenitiveDate(parseInt(endDateInfo.getDate() + 1))} ${InfoYear}`

        switchValue.value = `${valueYear}-${GenitiveDate(value.getMonth()+1)}-${GenitiveDate(value.getDate()+1)}`

        console.log(switchValue);
    }

    if (action === 'CREATE') switchValue.value
}