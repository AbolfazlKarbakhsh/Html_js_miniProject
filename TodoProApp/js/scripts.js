// theme switcher 
const BtnThemeSwitcher = document.getElementById('theme-switcher');
const body = document.querySelector("body");
const img = BtnThemeSwitcher.children[0];
const ul = document.querySelector(".todos");
const filter = document.querySelector(".filter");
const btnFilter = document.querySelector("#clear-completed")


// localStorage 
const btnInput = document.getElementById('add-btn');


function main() {

  // theme switcher 
  BtnThemeSwitcher.addEventListener("click", () => {
    body.classList.toggle("light");

    img.setAttribute("src",
      img.getAttribute("src") === "./assets/images/icon-sun.svg" ? "./assets/images/icon-moon.svg" : "./assets/images/icon-sun.svg"
    )
  });
  CreatEl(JSON.parse(localStorage.getItem("todos")))

  // move element 
  ul.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (e.target.classList.contains("card") && !e.target.classList.contains("draging")) {
      const dragingCard = document.querySelector(".draging")
      const cards = [...ul.querySelectorAll(".card")];
      const indexDragOld = cards.indexOf(dragingCard);
      const indexDragNew = cards.indexOf(e.target);

      console.log(indexDragOld, indexDragNew);

      if (indexDragOld > indexDragNew) {
        ul.insertBefore(dragingCard, e.target);
      } else {
        ul.insertBefore(dragingCard, e.target.nextSibling);

      }
      const todos = JSON.parse(localStorage.getItem("todos"));
      // ریحتن اوون تگ . پاک کردنش
      const removed = todos.splice(indexDragOld, 1)
      todos.splice(indexDragNew, 0, removed[0])
      localStorage.setItem("todos", JSON.stringify(todos))


    }
  });


  let input = document.getElementById('addt');

  // localStorage Enter

  input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      btnInput.click();
    }
  })

  //filteringv ************************************************************************
  filter.addEventListener('click', (e) => {
    const id = e.target.id
    if (id) {
      document.querySelector(".on").classList.remove("on");
      e.target.classList.add("on");
      ul.className = `todos ${id}`
    }



  })
  // localStorage Button

  btnInput.addEventListener("click", () => {
    const input = document.getElementById('addt');
    if (input.value != "") {
      const get = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];

      let objectCreator = { todo: input.value, isComplete: "false" };
      get.push(objectCreator);
      localStorage.setItem("todos", JSON.stringify(get))
      input.value = "";
      CreatEl(JSON.parse(localStorage.getItem("todos")))
    }

  })

  btnFilter.addEventListener("click", () => {
    var aryIndex = []
    document.querySelectorAll(".card.checked").forEach((card) => {
      aryIndex.push(
        [...document.querySelectorAll(".todos .card")].indexOf(card)
      )

      card.classList.add("fall");
      card.addEventListener('animationend', () => {
        card.remove();
      });
    });
    removeMultipelTodos(aryIndex);
  })
}

// remove todo 
function reomveTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeMultipelTodos(indexes) {
  var todos = JSON.parse(localStorage.getItem("todos"));

  todos = todos.filter((todo, index) => {
    return !indexes.includes(index);
  });
  localStorage.setItem("todos",JSON.stringify(todos))

  console.log(todos)
}

// is complete todo
function stateTodo(index, isCompletee) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos[index].isComplete = isCompletee;
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Creat element li 
function CreatEl(object) {

  if (!object) {
    return null;
  }
  ul.innerHTML = "";
  const ItemsLeft = document.querySelector('#items-left');
  console.log(object);
  object.forEach(itemm => {
    //Create Html Elements Of Todo
    const card = document.createElement("li");
    const cbContainer = document.createElement("div");
    const cbInput = document.createElement("input");
    const checkSpan = document.createElement("span");
    const item = document.createElement("p");
    const clearBtn = document.createElement("button");
    const img = document.createElement("img");

    //Add Classes
    card.classList.add("card");
    cbContainer.classList.add("cb-container");
    cbInput.classList.add("cb-input");
    checkSpan.classList.add("check");
    item.classList.add("item");
    clearBtn.classList.add("clear");

    //Add Attributes
    card.setAttribute("draggable", true);
    cbInput.setAttribute("type", "checkbox");
    img.setAttribute("src", "./assets/images/icon-cross.svg");
    img.setAttribute("alt", "Clear It");
    item.textContent = itemm.todo;
    if (itemm.isComplete) {
      card.classList.add('checked');
      cbInput.setAttribute('checked', 'checked')
    }

    //Add EventListener
    card.addEventListener('dragstart', () => {
      card.classList.add("dragging");
    });

    card.addEventListener('dragend', () => {
      card.classList.remove("dragging");
    });

    cbInput.addEventListener('click', () => {
      const curentCard = cbInput.parentElement.parentElement;
      const cheked = cbInput.checked;
      const indexOFcurent = [...document.querySelectorAll(".todos .card")].indexOf(curentCard);
      stateTodo(indexOFcurent, cheked);
      curentCard.classList.toggle("checked");
      ItemsLeft.textContent = document.querySelectorAll(".todos .card:not(.checked)").length

    });

    clearBtn.addEventListener("click", () => {
      const curentCard = clearBtn.parentElement;
      curentCard.classList.add('fall');
      const indexOFcurent = [...document.querySelectorAll(".todos .card")].indexOf(curentCard);
      reomveTodo(indexOFcurent)
    })
    //Set Element by Parent Child
    clearBtn.appendChild(img);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(checkSpan);
    card.appendChild(cbContainer);
    card.appendChild(item);
    card.appendChild(clearBtn);

    ul.appendChild(card);

  });
  ItemsLeft.textContent = document.querySelectorAll(".todos .card:not(.checked)").length;



}

document.addEventListener("DOMContentLoaded", main);