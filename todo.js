const input = document.querySelector('#input');
const list = document.querySelector('#list');

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && this.value.trim() !== "") {
        addItem(this.value);
        this.value = "";
    }
});
function addItem(task) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${task} <i class="fas fa-check"></i> <i class="fas fa-times"></i>
    `;
    list.appendChild(listItem);
    listItem.querySelector('.fa-check').addEventListener('click', function() {
        listItem.classList.toggle('done');
    });
    listItem.querySelector('.fa-times').addEventListener('click', function() {
        listItem.remove();
    });
}
