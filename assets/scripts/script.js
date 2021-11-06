import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

$('.history-row').each(function(){
    $(this).addClass('currentElement');
    $(this).find('.history-date').addClass('currentElement');

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: 0,
        triggerHook: 2
    })
    .setClassToggle('.currentElement', 'show')
    .addTo(controller)

    $(this).removeClass('currentElement','show');
    $(this).find('.history-date').removeClass('currentElement','show');
})

function playVideo() {
    $('.video').on('click', function() {
        const video =  $('.video-mp4').get(0);

        if (video.paused) {
            video.play();
            $('.play-btn').hide();
        } else {
            video.pause();
            $('.play-btn').show();
        }
    });
 }

 playVideo();