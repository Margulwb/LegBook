export function ClearInput(hour, elStartEnd) {
    if (elStartEnd == ".dateEnd-info") {
        const input = document.querySelector('.time-end-value')
        const info = document.querySelector('.time-end-info')
        input.value = `${hour}:00`
        info.textContent = `${hour}:00`

    } else
    if (elStartEnd == ".dateStart-info") {
        const input = document.querySelector('.time-input')
        const info = document.querySelector('.time-info')
        input.value = `${hour}:00`
        info.textContent = `${hour}:00`
    }
}