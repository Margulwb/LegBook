export function DeleteEndDate(callendarPageEl, dateEnd, labelEndDateOpen) {
    if (document.querySelector('.arrow') && document.querySelector('.callendarEnd-page')) {
        const arrow = document.querySelector('.arrow')
        setTimeout(() =>
            callendarPageEl.removeChild(arrow), 400)
        requestAnimationFrame(() => arrow.classList.add('removeArrow'))

        const callendarEndPage = document.querySelector('.callendarEnd-page')
        setTimeout(() =>
            callendarPageEl.removeChild(callendarEndPage), 400)
        requestAnimationFrame(() => callendarEndPage.classList.add('removeCallendarEndPage'))
    }
    const dateClose = document.querySelector('.date-end-el')
    const labelClose = document.querySelector('.label-end-date-close')

    dateEnd.removeChild(dateClose)
    dateEnd.removeChild(labelClose)
    dateEnd.appendChild(labelEndDateOpen)

    const infoDateClose = document.querySelector('.dateEnd-info')
    infoDateClose.textContent = ''

    if (document.querySelector('.error-end-date')) {
        const errorLabale = document.querySelector('.error-end-date')
        errorLabale.remove()
    }
}