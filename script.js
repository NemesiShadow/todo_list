const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";

    deleteButton.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(deleteButton);
    list.appendChild(task);

    input.value = "";
});
