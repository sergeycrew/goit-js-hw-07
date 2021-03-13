const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
//   Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//   после чего вставит все li за одну операцию в список ul.ingredients. 
//   Для создания DOM-узлов используй document.createElement().

const ingredientList = document.querySelector("ul")

const makeList = array => {
return array.map(element => {
    const liRef = document.createElement("li")
    liRef.textContent = element;
    return liRef
})
}
ingredientList.append(...makeList(ingredients))


