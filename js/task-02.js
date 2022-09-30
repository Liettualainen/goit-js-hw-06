const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector(`#ingredients`);

 const elements = ingredients.map(food => {
      const elementLi = document.createElement(`li`);
      elementLi.classList.add(`item`);
      elementLi.textContent = food;
      return elementLi; 
 });    
   console.log(elements);
   ingredientsContainer.append(...elements);


// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const food = ingredients[i];

//     const elementLi = document.createElement(`li`);
//     elementLi.classList.add(`item`);
//     elementLi.textContent = food;

//     elements.push(elementLi);   
// }

//  console.log(elements);
//  ingredientsContainer.append(...elements);


