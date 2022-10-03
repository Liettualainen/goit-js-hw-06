const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
        event.preventDefault ();

  const { elements: { email, password } } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  
  const data = {};
  const formData = new FormData (event.currentTarget);
     formData.forEach ((value, name) => {
        data[name]= value;
        //console.log(`onFormSubmit - >name:`, name );
        //console.log(`onFormSubmit - >value:`, value );        
    }); 
    console.log(data);

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();      
}
