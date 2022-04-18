let contactObject = {}
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let names = document.querySelector('#name').value.split(" ");
        if (name.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Contact()).firstName = names[0];
            (new Contact()).lastName = names[1];
            nameError.textContent = '';
        } catch (e) {
            nameError.textContent = e;
        }
    });

   


    const phoneElement = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phoneElement.addEventListener('input', function () {
        let phone = document.querySelector('#phone').value;

        try {
            (new Contact()).phone = phone;
            phoneError.textContent = '';
        } catch (e) {
            phoneError.textContent = e;
        }
    });

   

    
})

const save = (event)=>{

  try{
    setContactObject();
  }catch(e){
    console.log(e);
    return;
  }
}

const setContactObject = () => {
    
    let names = getInputValueById('#name').split(" ");
    contactObject._firstName = names[0];
    contactObject._lastName = names[1];
    contactObject._address = getInputValueById('#address');
    contactObject._city = getInputValueById('#city');
    contactObject._state = getInputValueById('#state');
    contactObject._zip = getInputValueById('#zip');
    contactObject._phone = getInputValueById('#phone');
    alert(JSON.stringify(contactObject))
  }

  const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }