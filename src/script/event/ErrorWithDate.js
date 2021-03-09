export function errorWithEndDate() {
    const callendarPageEl = document.querySelector('.callendar-page')
    const dateEndEl = document.querySelector('.dateEnd-info')
    dateEndEl.textContent = ''

    const error = document.createElement('div')
    error.classList.add('error-end-date')
    error.textContent = "End date must be later"

    if (document.querySelector('.error-end-date') == null) {
        callendarPageEl.appendChild(error)
    }

    if (document.querySelector('.arrow')) {
        const arrow = document.querySelector('.arrow')
        callendarPageEl.removeChild(arrow)
    }

    if (document.querySelector('.callendarEnd-page')) {
        const callendarPageEndEl = document.querySelector('.callendarEnd-page')
        callendarPageEl.removeChild(callendarPageEndEl)
    }
}