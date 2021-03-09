import { CreateBasicComponent } from "./CreateBasicComponent.js";
import { CreatorEndDate } from "./CreatorEndDate.js";
import { CreatorEndTime } from "./CreatorEndTime.js";

export default function creatorEvent(dateStartEl, timeEl, callendarPageStartEl) {
    CreateBasicComponent(dateStartEl, timeEl, callendarPageStartEl)
    CreatorEndDate()
    CreatorEndTime()
}