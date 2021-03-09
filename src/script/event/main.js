import { SetLocalTime } from "./setLocalTime.js";
import CreatorEvent from "./creatorEvent.js";

window.onload = () => {
    let date = document.querySelector('.dateStart-info')
    let time = document.querySelector('.time-info')
    let callendarPageStart = document.querySelector('.callendarStart-page')

    SetLocalTime(date, time, callendarPageStart)
    CreatorEvent(date, time, callendarPageStart)
}