let typed = new Typed(".auto-input", {
    strings:["Wai Linn Aung","Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

$(".project-slick").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive:[
        {
            breakpoint: 770,
            settings:{
                dots:true,
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false
            }
        },
        {
            breakpoint: 480,
            settings:{
                dots:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }
    ]
})

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();
