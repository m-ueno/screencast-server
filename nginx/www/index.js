(function() {
  if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();

    const streamKey = new URLSearchParams(window.location.search).get('key')

    hls.loadSource(`/hls/${streamKey}.m3u8`)
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else {
    alert('HLS not supported.');
  }
})()
