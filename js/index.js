let card = document.querySelectorAll(".card-header");
card.forEach((e) => {
    e.addEventListener("click", () => {
        e.querySelector(".fa-angle-down").classList.toggle("show-icon");
        document.querySelectorAll(".show")
        e.nextElementSibling
    })
})
