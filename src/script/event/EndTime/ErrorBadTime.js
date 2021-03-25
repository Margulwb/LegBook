export function ErrorBadTime() {
    const endTime = document.querySelector('.time-end-info')
    const error = document.createElement('div')
    error.classList.add('error-bad-time')
    error.textContent = "Bad End Time"
    error.title = "End time must be later"

    const timeFather = document.querySelector('.time')
    endTime.textContent = ''
    if (!document.querySelector('.error-bad-time'))
        timeFather.appendChild(error)
}