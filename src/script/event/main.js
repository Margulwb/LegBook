import { SetLocalTime } from "./setLocalTime.js";
import { CreateBasicComponent } from "./CreateBasicComponent.js";
import { CreatorEndDate } from "./EndDate/CreatorEndDate.js";
import { CreatorEndTime } from "./EndTime/CreatorEndTime.js";

window.onload = () => {
    let date = document.querySelector('.dateStart-info')
    let time = document.querySelector('.time-info')
    let callendarPageStart = document.querySelector('.callendarStart-page')

    let startDate = [date, time, callendarPageStart]

    SetLocalTime(startDate)
    CreateBasicComponent(startDate)
    CreatorEndDate()
    CreatorEndTime()
}