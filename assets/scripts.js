const typed = new Typed(".phrases", {
    strings: ["Web Developer", "Software Developer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true,
})

function openKnowledge(knowledge) {
    var i;

    var x = document.getElementsByClassName("knowledge");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    
    document.getElementById(knowledge).style.display = "block";
}