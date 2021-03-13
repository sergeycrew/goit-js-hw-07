// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const validation = () => {if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
    inputRef.classList.toggle('valid');

} else if (inputRef.value.length !== parseInt(inputRef.dataset.length)) {
    inputRef.classList.toggle('invalid');
    inputRef.value = '';
}

}

inputRef.addEventListener('blur', validation) 