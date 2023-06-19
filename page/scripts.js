var typed = new Typed(".home-span-input", {
    strings:["Neyan Montes.", "Systems Engineer.", "Mechatronic Engineer.", "Front End Developer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();
    sec = $('section');
    secs = "section-scrolled";

var scrollThreshold = (window.innerHeight * 1) - (window.innerHeight * 0.08) - 50;

$(window).scroll(function() {
    if ( $(this).scrollTop() > scrollThreshold ) {
        mn.addClass(mns);
        sec.addClass(secs);
    } 
        
    else {
        mn.removeClass(mns);
        sec.removeClass(secs);
    }
});