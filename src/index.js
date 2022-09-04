import "./styles.css";
var searchInput = document.getElementById("search-input");
var spanText = document.getElementById("span-text");
var searchBtn = document.getElementById("search-btn");
var clearBtn = document.getElementById("clear-btn");
//console.log(searchInput.value);

function updateSpan() {
  //console.log(searchInput.value);
  spanText.innerText = searchInput.value;
}
function clearSpan() {
  searchInput.value = "";
  spanText.innerText = "";
}

//searchInput.addEventListener("onChange", updateSpan);
searchBtn.addEventListener("click", updateSpan);
clearBtn.addEventListener("click", clearSpan);

/////////////////////////////////////////////////////
//3. Word Counter
var couterInput = document.getElementById("counter-input");
var couterOutput = document.getElementById("counter-output");

function updateCount(e) {
  couterOutput.innerText = e.target.value.length;
}

couterInput.addEventListener("change", updateCount);

////////////////////////////////////////////////////////
//4. Digital Clock
var digClock = document.getElementById("digital-clock");
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  digClock.innerText = time;
}, 1000);

////////////////////////////////////////////////////////
//4. Todo List
var todoInput = document.getElementById("todo-ip");
var todoBtn = document.getElementById("todo-btn");
var todoList = document.getElementById("to-do-list");

function addtoList(e) {
  let todoitem = todoInput.value;

  const node = document.createElement("li");
  const textnode = document.createTextNode(todoitem);
  node.appendChild(textnode);
  todoList.appendChild(node);
}

todoBtn.addEventListener("click", addtoList);
