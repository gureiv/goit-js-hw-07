const itemlist = document.querySelectorAll(`li.item`)
console.log(`В списке ${itemlist.length} категории`)
itemlist.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}`,
    `, Количество элементов: ${element.lastElementChild.children.length}`
  )
)
