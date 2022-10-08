let typed = new Typed(".auto-input", {
    strings:["Wai Linn Aung","Web Desginer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

let screenHeight = $(window).height();
console.log(screenHeight)
$(window).scroll(function (){
    let currentPosition = $(this).scrollTop();
    if(currentPosition >= screenHeight){
        $(".site-nav").addClass("site-nav-scroll")
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
        setActive('home')
    }
});

function setActive(current){
    $('.nav-link').removeClass("active");
    $(`.nav-link[href='#${current}']`).addClass("active");
}
function navScroll(){
    let currentSection = $('section[id]');
    currentSection.waypoint(function (direction) {
        if(direction==="down"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId)
        }
    });

    currentSection.waypoint(function (direction) {
        if(direction==="up"){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId)
        }
    });

}
navScroll();

$(".project-slick").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // infinite: true,
    responsive:[
        {
            breakpoint: 1026,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // {
        //     breakpoint: 770,
        //     settings:{
        //         dots:true,
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         arrows:false
        //     }
        // },
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