// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const ref = {
inputRange: document.querySelector('#font-size-control'),
textStyle: document.querySelector('#text')
}
ref.textStyle.style.fontSize = `${ref.inputRange.value}px`
ref.inputRange.addEventListener('input', e => ref.textStyle.style.fontSize = `${e.target.value}px`)
console.dir(ref.textStyle)