const typed = new Typed(".home-span-input", {
    strings:["Neyan Montes.", "Systems Engineer.", "Mechatronic Engineer.", "Front End Developer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

$(function(){
    const init_carousel = function(carousel_class, screen_class) {
        let current_view = 0;
        const count_views = $(`${carousel_class} ${screen_class} li`).length;
        
        // Methodes
        const switch_view = function(id){
            if(id >= 0  &&  id <= count_views)
                current_view = id;
            update_view();
        };
    
        const init_pagination = function() {
            for(let i=0; i<count_views; i++) {
                let page = $('<li/>');
                $(page).click(function() {switch_view(i);});
                $(`${carousel_class} .pagination`).append(page);
            }
        };
    
        const update_view = function(){
            // Calculate the current state
            let view0 = current_view;
            let view1 = current_view+1;
            let view2 = current_view+2;
            if(view0 <= 0) view0 = count_views;
            if(view2 > count_views) view2 = 1;
            $(`${carousel_class} ${screen_class} li`).removeClass('left right');
            $(`${carousel_class} ${screen_class} li, ${carousel_class} .pagination li`).removeClass('active');
            $(`${carousel_class} ${screen_class} li:nth-child(${view1})`).addClass('active');
            $(`${carousel_class} ${screen_class} li:nth-child(${view0})`).addClass('left');
            $(`${carousel_class} ${screen_class} li:nth-child(${view2})`).addClass('right');
            $(`${carousel_class} .pagination li:nth-child(${view1})`).addClass('active');
        };
    
        $(`${carousel_class} ${screen_class} li`).click(function(e){
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
    }

    init_carousel('.languages-carrousel', '.lancar-screens');
    init_carousel('.fratech-carrousel', '.fracar-screens');
    init_carousel('.project-carrousel', '.project-screens');
});