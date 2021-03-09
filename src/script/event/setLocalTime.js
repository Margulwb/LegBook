export function SetLocalTime(dateEl, timeEl, callendarPageEl) {
    const now = new Date()
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let localTime = {
        showDate: (days, month, now) => {
            const dateNow = `${days[now.getDay()]} ${month[now.getMonth()]} ${genitive(now.getDate())} ${genitive(now.getFullYear())}`
            dateEl.textContent = dateNow
        },

        showTime: (now) => {
            const timeNow = `${genitive(now.getHours())}:${genitive(now.getMinutes())}`
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

    function genitive(i) {
        return `${i}`.padStart(2, "0")
    }

}