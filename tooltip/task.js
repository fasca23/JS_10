const links = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < links.length; i++) {
    let placeLinks = links[i].getBoundingClientRect();
    let hints = `<div class="tooltip tooltip_active" style="left:${placeLinks.x}px">${links[i].title}</div>`;

    links[i].addEventListener("click", (e) => {
        e.preventDefault();
        if(!e.target.nextElementSibling.classList.contains("tooltip_active")) {
            e.target.insertAdjacentHTML("afterEnd", hints)
        } else {
            e.target.nextElementSibling.remove();
        }
    });
}