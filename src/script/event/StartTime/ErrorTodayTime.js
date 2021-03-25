export function ErrorTodayTime() {
    const error = document.createElement('div')
    error.classList.add('error-bad-time')
    error.textContent = "Bad Start Time"
    error.title = "Start Time must be later"

    const timeFather = document.querySelector('.time')
    if (!document.querySelector('.error-bad-time'))
        timeFather.prepend(error)

    const startTime = document.querySelector('.time-info')
    if (startTime != '')
        startTime.textContent = ''
}