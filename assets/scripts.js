const typed = new Typed(".phrases", {
    strings: ["Web Developer", "Software Developer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true,
})

function openKnowledge(knowledge) {
    var sections = document.getElementsByClassName("knowledge");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived");
    }

    document.getElementById(knowledge).style.display = "grid"; // Mostrar la sección seleccionada
    document.querySelector(`button[onclick="openKnowledge('${knowledge}')"]`).classList.add("actived");
}