var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady(id) {
  player = new YT.Player('player', {
    modestbranding: 1,
    height: '360',
    width: '640',
    videoId: `${id}`,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
  document.querySelector('.backdrop-youtube').classList.remove('is-hidden');
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 600000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}

function closeYouTube(e) {
  // e.stopPropagation();
  if (!player) return;

  player.destroy();
  document.querySelector('.backdrop-youtube').classList.add('is-hidden');
}

export { onYouTubeIframeAPIReady, closeYouTube };
