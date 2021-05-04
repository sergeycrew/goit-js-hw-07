// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const inputValidLength = +inputRef.dataset.length; // приведение к числу


inputRef.addEventListener('blur', onInputBlur) 


function onInputBlur(event) {
    if (event.currentTarget.value.length === inputValidLength) {
      inputRef.classList.add("valid");
      inputRef.classList.remove("invalid");
    } else if (event.currentTarget.value.length !== inputValidLength) {
      inputRef.classList.add("invalid");
      inputRef.classList.remove("valid");
    }
  }




//console.dir(inputRef)