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

 function rotateDna() {
    var images = [
        "../assets/images/dna/1.png",
        "../assets/images/dna/2.png",
        "../assets/images/dna/3.png",
        "../assets/images/dna/4.png",
        "../assets/images/dna/5.png",
        "../assets/images/dna/6.png",
        "../assets/images/dna/7.png",
        "../assets/images/dna/8.png",
    ];
    var obj = { curImg: 0 };
    
    // create tween
    var tween = TweenMax.to(obj, 0.5,
        {
            curImg: images.length - 1,	// animate propery curImg to number of images
            roundProps: "curImg",				// only integers so it can be used as an array index
            repeat: 5,									// repeat 3 times
            immediateRender: true,			// load first image automatically
            ease: Linear.easeNone,			// show every image the same ammount of time
            onUpdate: function () {
                $("#dna-img").attr("src", images[obj.curImg]); // set the image source
            }
        }
    );
    
    var controller = new ScrollMagic.Controller();
    
    var scene = new ScrollMagic.Scene({ triggerElement: "#dna-trriger", duration: 1200 })
        .setTween(tween)
        .addTo(controller);
 }

 rotateDna()