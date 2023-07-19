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

$(function(){
    let current_view = 0;
    let count_views = $('.languages-carrousel .lancar-screens li').length;
    
    // Methodes
    let switch_view = function(id){
        if(id >= 0  &&  id <= count_views)
            current_view = id;
        update_view();
    };

    let init_pagination = function() {
        for(let i=0; i<count_views; i++) {
            let page = $('<li/>');
            $(page).click(function() {switch_view(i);});
            $('.languages-carrousel .pagination').append(page);
        }
    };

    let update_view = function(){
        // Calculate the current state
        let view0 = current_view;
        let view1 = current_view+1;
        let view2 = current_view+2;
        if(view0 <= 0) view0 = count_views;
        if(view2 > count_views) view2 = 1;
        $('.languages-carrousel .lancar-screens li').removeClass('left right');
        $('.languages-carrousel .lancar-screens li, .languages-carrousel .pagination li').removeClass('active');
        $('.languages-carrousel .lancar-screens li:nth-child('+view1+')').addClass('active');
        $('.languages-carrousel .lancar-screens li:nth-child('+view0+')').addClass('left');
        $('.languages-carrousel .lancar-screens li:nth-child('+view2+')').addClass('right');
        $('.languages-carrousel .pagination li:nth-child('+view1+')').addClass('active');
    };

    $('.languages-carrousel .lancar-screens li').click(function(e){
        let classes = $(e.target).attr('class');
        if(classes.includes('left')) {
            if(current_view==0)
                current_view = count_views-1;
            else
                current_view--;
        }
        else if(classes.includes('right')) {
            if(current_view == (count_views-1))
                current_view = 0;
            else
                current_view++;
        }
        update_view();
    });
    
    init_pagination();
    update_view();
});

$(function(){
    let current_view = 0;
    let count_views = $('.fratech-carrousel .fracar-screens li').length;
    
    // Methodes
    let switch_view = function(id){
        if(id >= 0  &&  id <= count_views)
            current_view = id;
        update_view();
    };

    let init_pagination = function() {
        for(let i=0; i<count_views; i++) {
            let page = $('<li/>');
            $(page).click(function() {switch_view(i);});
            $('.fratech-carrousel .pagination').append(page);
        }
    };

    let update_view = function(){
        // Calculate the current state
        let view0 = current_view;
        let view1 = current_view+1;
        let view2 = current_view+2;
        if(view0 <= 0) view0 = count_views;
        if(view2 > count_views) view2 = 1;
        $('.fratech-carrousel .fracar-screens li').removeClass('left right');
        $('.fratech-carrousel .fracar-screens li, .fratech-carrousel .pagination li').removeClass('active');
        $('.fratech-carrousel .fracar-screens li:nth-child('+view1+')').addClass('active');
        $('.fratech-carrousel .fracar-screens li:nth-child('+view0+')').addClass('left');
        $('.fratech-carrousel .fracar-screens li:nth-child('+view2+')').addClass('right');
        $('.fratech-carrousel .pagination li:nth-child('+view1+')').addClass('active');
    };

    $('.fratech-carrousel .fracar-screens li').click(function(e){
        let classes = $(e.target).attr('class');
        if(classes.includes('left')) {
            if(current_view==0)
                current_view = count_views-1;
            else
                current_view--;
        }
        else if(classes.includes('right')) {
            if(current_view == (count_views-1))
                current_view = 0;
            else
                current_view++;
        }
        update_view();
    });
    
    init_pagination();
    update_view();
});

$(function(){
    let current_view = 0;
    let count_views = $('.project-carrousel .project-screens li').length;
    
    // Methodes
    let switch_view = function(id){
        if(id >= 0  &&  id <= count_views)
            current_view = id;
        update_view();
    };

    let init_pagination = function() {
        for(let i=0; i<count_views; i++) {
            let page = $('<li/>');
            $(page).click(function() {switch_view(i);});
            $('.project-carrousel .pagination').append(page);
        }
    };

    let update_view = function(){
        // Calculate the current state
        let view0 = current_view;
        let view1 = current_view+1;
        let view2 = current_view+2;
        if(view0 <= 0) view0 = count_views;
        if(view2 > count_views) view2 = 1;
        $('.project-carrousel .project-screens li').removeClass('left right');
        $('.project-carrousel .project-screens li, .project-carrousel .pagination li').removeClass('active');
        $('.project-carrousel .project-screens li:nth-child('+view1+')').addClass('active');
        $('.project-carrousel .project-screens li:nth-child('+view0+')').addClass('left');
        $('.project-carrousel .project-screens li:nth-child('+view2+')').addClass('right');
        $('.project-carrousel .pagination li:nth-child('+view1+')').addClass('active');
    };

    $('.project-carrousel .project-screens li').click(function(e){
        let classes = $(e.target).attr('class');
        if(classes.includes('left')) {
            if(current_view==0)
                current_view = count_views-1;
            else
                current_view--;
        }
        else if(classes.includes('right')) {
            if(current_view == (count_views-1))
                current_view = 0;
            else
                current_view++;
        }
        update_view();
    });
    
    init_pagination();
    update_view();
});