const item = document.querySelector("#item");
const toDoBox = document.querySelector("#todo-box");
const clear=document.querySelector("#clear");
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(event.key);
    if(this.value==""){
      alert("please Enter task")
    }else{
      addToDo(this.value);
      this.value = "";
    }

  }
});
//  delete all function
clear.addEventListener("click",function(){
const toDoBox = document.querySelector("#todo-box");
const oldList = toDoBox.childNodes;
toDoBox.remove(oldList);
})


const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${item}<i class="fa-solid fa-xmark"></i>`;
  listItem.addEventListener("click",
   function () {
    this.classList.toggle("done");
  }
  )
  listItem.querySelector("i").addEventListener("click",function(){
    listItem.remove();
  })
  toDoBox.appendChild(listItem);
}
