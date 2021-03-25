import { GenitiveDate } from "./GenitiveDate.js";

export function SetLocalTime(startDate) {
    let [dateEl, timeEl, callendarPageEl] = startDate
    const now = new Date()
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let localTime = {
        showDate: (days, month, now) => {
            const dateNow = `${days[now.getDay()]} ${month[now.getMonth()]} ${GenitiveDate(now.getDate())} ${GenitiveDate(now.getFullYear())}`
            dateEl.textContent = dateNow
        },

        showTime: (now) => {
            const timeNow = `${GenitiveDate(now.getHours())}:00`
            timeEl.textContent = timeNow
        },

        showToday: (now) => {
            const today = `${now.getDate()}`
            callendarPageEl.textContent = today
        }
    }

    localTime.showDate(days, month, now)
    localTime.showTime(now)
    localTime.showToday(now)
}