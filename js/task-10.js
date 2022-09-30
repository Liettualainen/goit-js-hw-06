function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onInput = document.querySelector('input');
const onButtonCreate = document.querySelector('button[data-create]');
const onButtonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

onButtonCreate.addEventListener( "click", createBoxes);
onButtonDestroy.addEventListener( "click", destroyBoxes);



function createBoxes () { 
  let boxSize = 30;
  for (let i = 0; i < onInput.value ; i += 1) {
  // console.log(boxSize);
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = boxSize + 'px';
  box.style.height = boxSize + 'px';
  boxes.append(box);
  boxSize += 10;
 }

}

function destroyBoxes () {
  for (let i = 0; i < onInput.value ; i += 1) {
  const boxDiv = document.querySelector(".box")
  boxDiv.remove();
  }
}






// const collection = [];
//       collection.push(event.currentTarget.value);
//          event.currentTarget.reset();

// const form = document.querySelector("#controls");

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//         event.preventDefault ();

//   const { elements: {number} } = event.currentTarget;

//   if (number.value === "") {
//     return console.log("Please fill in all the fields!");
//   }
  
//   console.log(number.value);

//   const formData = new FormData (event.currentTarget);
//      formData.forEach ((value, name) => {
//         console.log(`onFormSubmit - >name:`, name );
//         console.log(`onFormSubmit - >value:`, value );        
//     }); 

//   console.log(`Login: ${email.value}, Password: ${password.value}`);
//   // event.currentTarget.reset();      
// }
