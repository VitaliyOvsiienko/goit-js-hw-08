import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(OnTimeUpdate, 1000));

function OnTimeUpdate(data) {
    console.log(data)
    localStorage.setItem(PLAYER_CURRENT_TIME, JSON.stringify(data));
}

const playbackTime = localStorage.getItem(PLAYER_CURRENT_TIME);
const currentTime = JSON.parse(playbackTime);

player.setCurrentTime(currentTime.seconds);