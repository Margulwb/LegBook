window.onload = () => {
    let date = document.querySelector('.dateStart-info')
    let time = document.querySelector('.time-info')
    let callendarPageStart = document.querySelector('.callendarStart-page')
    /* let form = document.querySelector('.event-form') */

    setLocalTime(date, time, callendarPageStart)
    creatorEvent(date, time, callendarPageStart/* , form */)
}