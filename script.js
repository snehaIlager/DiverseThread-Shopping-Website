function loadComponent(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .then(() => {
            // Run dropdown logic after components are loaded
            initDropdowns();
        });
}

function initDropdowns() {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    loadComponent("top-bar", "components/top-bar.html");
    loadComponent("navbar", "components/navbar.html");
    loadComponent("menu-bar", "components/menu-bar.html");
    loadComponent("hero", "components/hero.html");
    loadComponent("shop-category", "components/categories.html");
    loadComponent("arrivals", "components/arrivals.html");
    loadComponent("footer", "components/footer.html");
});
