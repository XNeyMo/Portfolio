const typed = new Typed(".phrases", {
    strings: ["Web Developer", "Software Developer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true,
})

function openSkills(items) {
    var sections = document.getElementsByClassName("skills-items");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("button-active");
    }

    document.getElementById(items).style.display = "grid";
    document.querySelector(`button[onclick="openSkills('${items}')"]`).classList.add("button-active");
}