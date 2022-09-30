const decrementClick= document.querySelector('button[data-action="decrement"]');
const incrementClick= document.querySelector('button[data-action="increment"]');
let counterValue = 0;
let spanValue = document.querySelector('#value');



decrementClick.addEventListener ('click', () => {    
counterValue += Number(decrementClick.textContent);
console.log(counterValue);
spanValue.textContent = counterValue;

} );

incrementClick.addEventListener ('click', () => {    
    counterValue += Number(incrementClick.textContent);
    console.log(counterValue);
    spanValue.textContent = counterValue;
} );




