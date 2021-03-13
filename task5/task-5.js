// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const ref = {
nameInput: document.querySelector('#name-input'),
nameOutput: document.querySelector('#name-output')
}

const handleInput = () => ref.nameOutput.textContent = ref.nameInput.value.trim() ? ref.nameInput.value : 'незнакомец!'; // игнорирует пробелы

ref.nameInput.addEventListener('input', handleInput);
