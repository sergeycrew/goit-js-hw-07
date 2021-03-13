// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const ref = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
    htmlValue: document.querySelector('#value')
}
let value = parseInt(ref.htmlValue.textContent); 

const render = () => ref.htmlValue.textContent = value;

const decremenet = () => {
    value -= 1;
    render();
}

const incremenet = () => {
    value += 1;
    render();
}

ref.buttonDecrement.addEventListener('click' , decremenet);
ref.buttonIncrement.addEventListener('click' , incremenet)