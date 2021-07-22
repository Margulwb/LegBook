import { SetLocalTime } from "./setLocalTime.js";
import { CreateBasicComponent } from "./CreateBasicComponent.js";
import { CreatorEndDate } from "./EndDate/CreatorEndDate.js";
import { CreatorEndTime } from "./EndTime/CreatorEndTime.js";

window.onload = () => {
    const date = document.querySelector('.dateStart-info')
    const time = document.querySelector('.time-info')
    const callendarPageStart = document.querySelector('.callendarStart-page')

    const startDate = [date, time, callendarPageStart]

    SetLocalTime(startDate)
    CreateBasicComponent(startDate)
    CreatorEndDate()
    CreatorEndTime()
}