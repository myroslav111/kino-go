import { refs } from "./refs";
import {onWatchedBtnClick} from './on-watched-btn-click';
import {onQueueBtnClick} from "./on-queue-btn-click";

refs.showWatchedBtn.addEventListener('click', onWatchedBtnClick);
refs.showQueueBtn.addEventListener('click', onQueueBtnClick);
