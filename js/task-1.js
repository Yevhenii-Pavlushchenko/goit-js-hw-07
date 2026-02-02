//!Через цикл for 

const categories = document.querySelectorAll('li.item')
console.log("Number of caregoreies:", categories.length)

for (let i = 0; i < categories.length; i++) {
  console.log('Category: ', categories[i].firstElementChild.textContent);
  console.log('Elements: ',categories[i].children[1].children.length,);
}
//!Через метод map
// const categories = document.querySelector("#categories");
// const category = categories.querySelectorAll(".item");
// console.log(`Number of categories: ${category.length}`);
// [...category].map(element => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });

//!Через метод forEach
// {
//   const ul = document.querySelector('#categories');
//   console.log('Number of categories:', `${Number(ul.children.length)}`);
//   const arr = [...ul.children];

//   arr.forEach(element => {
//     console.log('Category:', element.children[0].textContent);
//     console.log('Elements:', element.children[1].children.length);
//   });
// }