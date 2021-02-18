const performanceButton = document.querySelectorAll('.Performance');
const notPerfromanceButton = document.querySelectorAll('.not-Performance');

performanceButton.forEach(Button => {
    Button.addEventListener("click", (e) => {
        Button.parentElement.parentElement.classList.add("done")
    })
})

notPerfromanceButton.forEach(Button => {
    Button.addEventListener("click", (e) => {
        Button.parentElement.parentElement.classList.remove("done")
    })
})