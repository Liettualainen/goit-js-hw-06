function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonClick= document.querySelector('button.change-color');
const spanButton = document.querySelector('.color');


onButtonClick.addEventListener ('click', () => {    
 //onButtonClick.style.backgroundColor = getRandomHexColor();
 document.querySelector('body').style.backgroundColor = getRandomHexColor();
 spanButton.textContent = onButtonClick.style.backgroundColor;
  console.log(spanButton.textContent);

} );


