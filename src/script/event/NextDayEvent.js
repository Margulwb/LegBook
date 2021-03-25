import { GenitiveDate } from "./GenitiveDate.js";
import { EnterDate } from "./EnterDate.js";

export function NextDayEvent(callendar, elDate) {
    const startDay = document.querySelector(`${callendar}`)
    if (callendar == ".callendarEnd-page") {
        const endTimeEL = document.querySelector('.time-end-info')
        const endTimeValue = document.querySelector('.time-end-value')
        endTimeEL.textContent = endTimeValue.value
    }

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const startDateInfo = new Date(document.querySelector(`${elDate}`).textContent)
    const InfoDW = days[parseInt(startDateInfo.getDay())]
    const InfoM = month[startDateInfo.getMonth()]
    const InfoD = GenitiveDate(startDateInfo.getDate())
    const InfoY = startDateInfo.getFullYear()

    //Month with 28d (29d)
    const monthFeb = month[1]
        //Months with 31d
    const monthEven = month.filter((m, i) => i < 7).filter((m, i) => i % 2 == 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 == 0))
        //Months with 30d
    const monthOdd = month.filter((m, i) => i < 7 && i > 1).filter((m, i) => i % 2 != 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 != 0))

    const dataDate = [startDay, days, startDateInfo, InfoDW, InfoM, InfoD, InfoY, month]

    if (InfoM == monthEven.find(m => m == InfoM)) {
        EnterDate(31, dataDate, `${elDate}`)

    } else if (InfoM == monthOdd.find(m => m == InfoM)) {
        EnterDate(30, dataDate, `${elDate}`)

    } else if (InfoM == monthFeb) {
        InfoY % 4 == 0 ? EnterDate(29, dataDate, `${elDate}`) : EnterDate(28, dataDate, `${elDate}`)
    }
}