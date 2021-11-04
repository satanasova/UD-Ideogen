import '../../node_modules/jquery/dist/jquery.min.js';

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