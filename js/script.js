document.querySelector(".active_item-x").addEventListener("click", () => hideElement("nav", "active"));
document.querySelector(".hamburger").addEventListener("click", () => hideElement("active", "nav"));

// Функция для удаления класса 'active'
function hideElement(elementId1, elementId2) {
    let element1 = document.getElementById(elementId1);
        element1.classList.remove("active");
        console.log(element1)
    let element2 = document.getElementById(elementId2);
        element2.classList.add("active");
        console.log(element2)
}