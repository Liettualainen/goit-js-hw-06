const validationInput = document.querySelector("#validation-input");
const lengthInput = validationInput.dataset.length;


validationInput.addEventListener("blur", onOutBlur);

function onOutBlur () {
    validationInput.classList.remove('invalid');
    if (validationInput.value.length == lengthInput) {  
        return  validationInput.classList.add('valid');
    } 
    else {
        return  validationInput.classList.add('invalid');
    }
  
} 

