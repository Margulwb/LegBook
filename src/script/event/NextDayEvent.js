import { GenitiveDate } from "./GenitiveDate.js";
import { EnterDate } from "./EnterDate.js";
import { CheckError } from "./Errors/CheckError.js";

export function NextDayEvent(callendar, elDate, dateValue, action = '') {
    const startDay = document.querySelector(`${callendar}`)
    if (callendar == ".callendarEnd-page") {
        const endTimeEL = document.querySelector('.time-end-info')
        const endTimeValue = document.querySelector('.time-end-value')
        endTimeEL.textContent = endTimeValue.value
    }

    const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        //Month with 28 days (29 days)
    const monthFeb = month[1]
        //Months with 31 days
    const monthEven = month.filter((m, i) => i < 7).filter((m, i) => i % 2 == 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 == 0))
        //Months with 30 days
    const monthOdd = month.filter((m, i) => i < 7 && i > 1).filter((m, i) => i % 2 != 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 != 0))

    CheckError()

    console.log('.date-start-value');
    console.log(elDate);
    console.log(`${elDate}`);

    if (action === '') {
        const startDateInfo = new Date(document.querySelector(`${elDate}`).textContent)
        const InfoDayWeek = daysWeek[parseInt(startDateInfo.getDay())]
        const InfoMonth = month[startDateInfo.getMonth()]
        const InfoDay = GenitiveDate(startDateInfo.getDate())
        const InfoYear = startDateInfo.getFullYear()

        const dataDate = [startDay, startDateInfo, InfoDayWeek, InfoMonth, InfoDay, InfoYear, month, daysWeek]
        const dataElement = [`${elDate}`, dateValue, action]

        if (InfoMonth == monthEven.find(m => m == InfoMonth)) EnterDate(31, dataDate, dataElement)
        if (InfoMonth == monthOdd.find(m => m == InfoMonth)) EnterDate(30, dataDate, dataElement)
        if (InfoMonth == monthFeb)
            InfoYear % 4 == 0 ? EnterDate(29, dataDate, dataElement) : EnterDate(28, dataDate, dataElement)
    }

    if (action === 'CREATE') {
        const startDateInfo = new Date(document.querySelector('.date-start-value').value)

        const InfoDayWeek = daysWeek[parseInt(startDateInfo.getDay())]
        const InfoMonth = month[startDateInfo.getMonth()]
        const InfoDay = GenitiveDate(startDateInfo.getDate())
        const InfoYear = startDateInfo.getFullYear()

        const dataDate = [startDay, startDateInfo, InfoDayWeek, InfoMonth, InfoDay, InfoYear, month, daysWeek]
        const dataElement = ['.date-start-value', dateValue, action]
        let enterDateValue
            /* const a = {
                evenMonthMethot() {
                    EnterDate(31, dataDate, dataElement)
                }
            } */

        if (InfoMonth == monthEven.find(m => m == InfoMonth)) {
            enterDateValue = EnterDate(31, dataDate, dataElement)
        }
        if (InfoMonth == monthOdd.find(m => m == InfoMonth)) EnterDate(30, dataDate, dataElement)
        if (InfoMonth == monthFeb)
            InfoYear % 4 == 0 ? EnterDate(29, dataDate, dataElement) : EnterDate(28, dataDate, dataElement)

        console.log(enterDateValue);
        return enterDateValue
    }
}
/* if (action === 'CREATE') {
        const startDateInfo = new Date(document.querySelector('.date-start-value').value)

        const InfoDayWeek = daysWeek[parseInt(startDateInfo.getDay())]
        const InfoMonth = month[startDateInfo.getMonth()]
        const InfoDay = GenitiveDate(startDateInfo.getDate())
        const InfoYear = startDateInfo.getFullYear()

        const dataDate = [startDay, startDateInfo, InfoDayWeek, InfoMonth, InfoDay, InfoYear, month, daysWeek]
        const dataElement = ['.date-start-value', dateValue, action]
        let EnterDateValue
        const a ={
            evenMonthMethot(){
                EnterDate(31, dataDate, dataElement)
            }
        }

        if (InfoMonth == monthEven.find(m => m == InfoMonth)) EnterDate(31, dataDate, dataElement)
        if (InfoMonth == monthOdd.find(m => m == InfoMonth)) EnterDate(30, dataDate, dataElement)
        if (InfoMonth == monthFeb)
            InfoYear % 4 == 0 ? EnterDate(29, dataDate, dataElement) : EnterDate(28, dataDate, dataElement)

        console.log(EnterDate(31, dataDate, dataElement));
    } */