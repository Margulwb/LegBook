import { GenitiveDate } from "../GenitiveDate.js";
import { EnterDate } from "../EnterDate.js";

export function TimeEndEqualZero(endTimeValue) {
    const endTimeEL = document.querySelector('.time-end-info')
    endTimeEL.textContent = endTimeValue.value
    const endDay = document.querySelector('.callendarEnd-page')


    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const endDateInfo = new Date(document.querySelector('.dateEnd-info').textContent)
    const InfoDW = days[parseInt(endDateInfo.getDay())]
    const InfoM = month[endDateInfo.getMonth()]
    const InfoD = GenitiveDate(endDateInfo.getDate())
    const InfoY = endDateInfo.getFullYear()

    //Month with 28d (29d)
    const monthFeb = month[1]
        //Months with 31d
    const monthEven = month.filter((m, i) => i < 7).filter((m, i) => i % 2 == 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 == 0))
        //Months with 30d
    const monthOdd = month.filter((m, i) => i < 7 && i > 1).filter((m, i) => i % 2 != 0)
        .concat(month.filter((m, i) => i >= 7).filter((m, i) => i % 2 != 0))

    const dataDate = [endDay, days, endDateInfo, InfoDW, InfoM, InfoD, InfoY, month]

    if (InfoM == monthEven.find(m => m == InfoM)) {
        EnterDate(31, dataDate, '.dateEnd-info')

    } else if (InfoM == monthOdd.find(m => m == InfoM)) {
        EnterDate(30, dataDate, '.dateEnd-info')

    } else if (InfoM == monthFeb) {
        InfoY % 4 == 0 ? EnterDate(29, dataDate, '.dateEnd-info') : EnterDate(28, dataDate, '.dateEnd-info')
    }
}