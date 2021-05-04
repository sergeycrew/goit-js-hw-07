// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.





const createBtnEl = document.querySelector(
    '#controls button[data-action="render"]'
  );
  const destroyBtnEl = document.querySelector(
    '#controls button[data-action="destroy"]'
  );
  const inputEl = document.querySelector("#controls input");
  const boxesContainerEl = document.querySelector("#boxes");
  
  const randomRgbColor = () => {
    const firstRandomColor = Math.round(Math.random() * 256);
    const secondRandomColor = Math.round(Math.random() * 256);
    const thirdRandomColor = Math.round(Math.random() * 256);
  
    return `rgb(${firstRandomColor},${secondRandomColor},${thirdRandomColor})`;
  };
  
  function createBoxes(amount) {
    const array = new Array(amount);
    const boxes = [...array];
    boxesContainerEl.innerHTML = boxes
      .map(
        (box, i) =>
          `<div style="height: ${i * 10 + 30}px; width: ${i * 10 + 30}px;
      background-color: ${randomRgbColor()};"></div>`
      )
      .join("");
  }
  
  createBtnEl.addEventListener("click", function () {
    createBoxes(Number(inputEl.value));
  });
  
  destroyBtnEl.addEventListener("click", destroyBoxes);
  
  function destroyBoxes() {
    boxesContainerEl.innerHTML = "";
    inputEl.value = "";
  }


