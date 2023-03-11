import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const formFeedbackData = {};

const refs = {
    btn: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    email: document.querySelector('input'),
}
refs.btn.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(OnTextareaInput, 500));
// refs.email.addEventListener('input', throttle(onEmailInput, 500));

refs.btn.addEventListener('input', event => {
    formFeedbackData[event.target.name] = event.target.type

    console.log(formFeedbackData)
})

function OnTextareaInput(event) {
    const message = event.target.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message);
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log('submit')
}

saveTextarea();
function saveTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY) 

    if (saveMessage) {
        refs.textarea.value = saveMessage;
    }
}
