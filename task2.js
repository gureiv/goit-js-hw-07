const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
]
const ingredientsEl = document.querySelector('#ingredients')
ingredients.forEach(element => {
  const item = document.createElement('li')
  item.textContent = element
  console.log(item)
})
ingredientsEl.append(...ingredients)
