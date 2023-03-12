import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

function onTextareaInput(event) {
  let formFieldInput;
  if (localStorage.getItem(STORAGE_KEY)) {
    formFieldInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } else {
    formFieldInput = {};
  }
  formFieldInput[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formFieldInput));
}

function onFormSubmit(event) {
    event.preventDefault();

    const {elements:{email, message}} = event.target;
    if (email.value === '' || message.value === '') {
        return alert('Please make sure all fields are filled in correctly');
    }
    const formData = {email: email.value, message: message.value};
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

saveInputs();

function saveInputs() {
    let savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
        form.elements[name].value = value;
        })
    }
}