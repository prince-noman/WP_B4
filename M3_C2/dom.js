// console.log(document);
// console.log(typeofdocument);
// console.log(document.body);
// console.log(document.title);
// document.title = "PHP";

// Getting element by ID
// const title = document.getElementById("title");
// console.log(title.innerText);
// console.log(title.innerHTML);
// console.log(title.textContent);
// title.innerText = "PHP";

// Styling

// title.style.color = "red";
// title.style.fontSize = "100px"; // font-size backgroundColor
// document.body.style.backgroundColor = "yellow";

// Getting elements by Classname

// const items = document.getElementsByClassName("item");
// console.log(item);
// for (let item of items) {
//   item.style.color = "red";
// }

// Get elements by Tagname
// const heading = document.getElementsByTagName("h1");
// console.log(heading);

// Getting elements by querySelector
// const heading = document.querySelectorAll("h1");
// heading.innerHTML = "PHP";
// console.log(heading);

// Getting elements by querySelectorAll

// const items = document.querySelectorAll(".item");
// console.log(items);
// for (let item of items) {
//   item.style.color = "red";
// }

// Top to bottom
// const ul = document.querySelector(".items");
// const li = ul.children;
// console.log(li);

//  Bottom to top
// const child = document.querySelectorAll(".item");
// console.log(child[0]);
// const parent = child[0].parentElement;
// console.log(parent);

// const li = document.querySelectorAll(".item:first-child");
// const li = document.querySelectorAll(".item:nth-child(2)");
// const li = document.querySelectorAll(".item");
// console.log(li);
// const ul = li[0].closest(".items");
// console.log(ul);

// Creating Element
// const divElement = document.createElement("div");
// console.log(divElement);

// Adding Class
// divElement.classList.add("container");
// console.log(divElement);

// Adding Attribute
// divElement.setAttribute("id", "main");
// console.log(divElement);

// Adding Element
// const container = document.getElementById("container");
// console.log(container);
// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello World";
// container.appendChild(h1Element);

// Event Listeners

// const btn = document.getElementById("btn");
// console.log(btn);

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("Button Clicked");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("Button Clicked");
// });

// const inputElement = document.getElementById("input");
// inputElement.addEventListener("keyup", () => {
//   console.log(inputElement.value);
// });

// inputElement.addEventListener("focus", () => {
//   console.log("focused");
// });

// inputElement.addEventListener("blur", () => {
//   console.log("blured");
// });

// inputElement.addEventListener("copy", () => {
//   console.log("copy");
// });

// inputElement.addEventListener("cut", () => {
//   console.log("cut");
// });

// inputElement.addEventListener("paste", () => {
//   console.log("paste");
// });

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(inputElement.value);
// });
