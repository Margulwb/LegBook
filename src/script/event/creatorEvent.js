function creatorEvent(dateStartEl, timeEl, callendarPageStartEl) {
    const nameValue = document.querySelector('.name-input')
    
    const timeValue = document.querySelector('.time-input')
    
    const dateStartValue = document.querySelector('.date-start-value')
    
    let dateEnd = document.querySelector('.line-form')
    let labelEndDateOpen = document.querySelector('.label-end-date-open')

    const desValue = document.querySelector('.value-description')

    let creator = {
        name(event){
            event.preventDefault();

            const nameEl = document.querySelector('.event-name')
            nameEl.textContent = nameValue.value
        },

        time(){
            timeEl.textContent = timeValue.value
        },

        dateStart(){
            let date = new Date(dateStartValue.value).toDateString()
            dateStartEl.innerHTML = date

            let day = new Date(dateStartValue.value)
            const callendarPage = `${day.getDate()}`
            callendarPageStartEl.textContent = callendarPage
        },

        des(event){
            event.preventDefault();
            
            const desEl = document.querySelector('.description')
            desEl.textContent = desValue.value
        },

    }

    nameValue.addEventListener('input', creator.name)
    dateStartValue.addEventListener('input', creator.dateStart)
    timeValue.addEventListener('input', creator.time)
    desValue.addEventListener('input', creator.des)

    let creatorEndDate = {
        typeEndDate(){
            
            let dateEndValue = document.querySelector('.date-end-value')
            
            let dateEndEl = document.querySelector('.dateEnd-info')
            let date = new Date(dateEndValue.value).toDateString()
            dateEndEl.textContent = date

            let callendarPageEl = document.querySelector('.callendar-page')

            let arrow = document.createElement('div')
            arrow.classList = 'arrow'
            arrow.innerHTML = "&#8594"

            if(document.querySelector('.arrow') == null) 
            callendarPageEl.appendChild(arrow)

            let callendarPageEndEl = document.createElement('div')
            callendarPageEndEl.className='callendarEnd-page'

            let day = new Date(dateEndValue.value)
            let callendarPage = `${day.getDate()}`
            callendarPageEndEl.textContent = callendarPage

            if(document.querySelector('.callendarEnd-page') == null){
                callendarPageEl.appendChild(callendarPageEndEl)
            }else{
                let oldCallendarPageEndEl =document.querySelector('.callendarEnd-page')
                callendarPageEl.removeChild(oldCallendarPageEndEl)

                callendarPageEl.appendChild(callendarPageEndEl)
            }
            
        },

        createDateEnd(event){
            event.preventDefault()

            let dateEndValue = document.createElement('div')
            dateEndValue.classList = 'date-end-el'

            dateEnd.removeChild(labelEndDateOpen)

            let labelEndDateClose = document.createElement('button')
            labelEndDateClose.textContent=" - Remove End Date"
            labelEndDateClose.classList="label-end-date-close" 

            dateEnd.appendChild(dateEndValue)
            dateEnd.appendChild(labelEndDateClose)
            
            dateEndValue.innerHTML = "<div class='label'>End Date</div>" +
                "<input type='date' class='input-form date-end-value'>";
            
            dateEndValue.addEventListener('input', creatorEndDate.typeEndDate)
            
            labelEndDateClose.addEventListener('click', creatorEndDate.removeDateEnd)
        },

         removeDateEnd(){
            let callendarPageEl = document.querySelector('.callendar-page')
                
            if(document.querySelector('.arrow') && document.querySelector('.callendarEnd-page')){
                let arrow = document.querySelector('.arrow')
                callendarPageEl.removeChild(arrow)

                let callendarEndPage = document.querySelector('.callendarEnd-page')
                callendarPageEl.removeChild(callendarEndPage)
            }
            let dateClose = document.querySelector('.date-end-el')
            let labelClose = document.querySelector('.label-end-date-close')
            let dateInfo = document.querySelector('.created-event')
            
            dateEnd.removeChild(dateClose)
            dateEnd.removeChild(labelClose)
            dateEnd.appendChild(labelEndDateOpen)

            let infoDateClose = document.querySelector('.dateEnd-info')
            infoDateClose.textContent=''
        } 
    }

    labelEndDateOpen.addEventListener('click',creatorEndDate.createDateEnd)
}