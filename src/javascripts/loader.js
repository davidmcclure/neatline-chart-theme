

$(function() {

  NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100
  });

  NProgress.start();

  Neatline.vent.on('MAP:ingest', function() {
    NProgress.done();
  });

});
