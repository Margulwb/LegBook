export function ErrorBadTime(element,label) {
    const timeElement = document.querySelector(`${element}`)
    const error = document.createElement('div')
    error.classList.add('error-bad-time')
    error.textContent = label

    const timeFather = document.querySelector('.time')
    timeElement.textContent = ''
    if (!document.querySelector('.error-bad-time'))
    timeFather.prepend(error)
}