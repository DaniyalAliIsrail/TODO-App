const item = document.querySelector("#item");
const toDoBox = document.querySelector("todo-box");
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});
const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item}`;
  toDoBox.appendChild(listItem);
}
