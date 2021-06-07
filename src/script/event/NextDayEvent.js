import { GenitiveDate } from "./GenitiveDate.js";
import { EnterDate } from "./EnterDate.js";
import { CheckError } from "./Errors/CheckError.js";

export function NextDayEvent(callendar, elDate ,dateValue) {
    const startDay = document.querySelector(`${callendar}`)
    if (callendar == ".callendarEnd-page") {
        const endTimeEL = document.querySelector('.time-end-info')
        const endTimeValue = document.querySelector('.time-end-value')
        endTimeEL.textContent = endTimeValue.value
    }

    const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const startDateInfo = new Date(document.querySelector(`${elDate}`).textContent)
    const InfoDayWeek = daysWeek[parseInt(startDateInfo.getDay())]
    const InfoMonth = month[startDateInfo.getMonth()]
    const InfoDay = GenitiveDate(startDateInfo.getDate())
    const InfoYear = startDateInfo.getFullYear()

    //Month with 28d (29d)
    const monthFeb = month[1]
        //Months with 31d
    const monthEven = month.filter((m, i) => i < 7).filter((m, i) => i % 2 == 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 == 0))
        //Months with 30d
    const monthOdd = month.filter((m, i) => i < 7 && i > 1).filter((m, i) => i % 2 != 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 != 0))

    CheckError()

    const dataDate = [startDay , startDateInfo, InfoDayWeek, InfoMonth, InfoDay, InfoYear, month,daysWeek]
    if (InfoMonth == monthEven.find(m => m == InfoMonth)) EnterDate(31, dataDate, `${elDate}`,dateValue)
    if (InfoMonth == monthOdd.find(m => m == InfoMonth)) EnterDate(30, dataDate, `${elDate}`,dateValue)
    if (InfoMonth == monthFeb)
        InfoYear % 4 == 0 ? EnterDate(29, dataDate, `${elDate}`) : EnterDate(28, dataDate, `${elDate}`,dateValue)
}