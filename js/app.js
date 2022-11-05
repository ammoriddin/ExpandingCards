const panels = document.querySelectorAll(".panel");


panels.forEach(function(panel) {
    panel.addEventListener('click',() => {
        removeActive();
        panel.classList.add("active")
    })
})

function removeActive(){
    panels.forEach((item) => {
        item.classList.remove("active")
    })
}