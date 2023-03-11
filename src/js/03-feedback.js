
const refs = {
    btn: document.querySelector('feedback-form button'),
    textarea: document.querySelector('feedback-form, textarea'),

}

// refs.btn.addEventListener('submit]', onFormSubmit);
refs.textarea.addEventListener('input', OnTextareaInput);


function OnTextareaInput(event) {
    const value = event.currentTarget.value;

    console.log(value);
}