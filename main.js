function fisrtList(){
document.querySelector('li').style.textDecoration = 'line-through'
}

fisrtList()


function setSource(id, url){
  document.querySelector(`#${id}`).src= url
}

setSource('image-1','https://tse1.mm.bing.net/th?id=OIP.CmNl3LTpuXxQJAJL2yp6sgHaKW&pid=Api&P=0&h=220')
setSource('image-2', 'https://tse2.mm.bing.net/th?id=OIP.eRCAtTlmA6AqtkgLdudO5AHaIH&pid=Api&P=0&h=220')
setSource('image-3', 'https://tse4.mm.bing.net/th?id=OIP.xDNgQu4Tmlsf75ID-b9yngHaEo&pid=Api&P=0&h=220')

function removeItem(){
    let unorderedList = document.querySelector('ul')
    let unorderedListItem = document.querySelector('ul>li')
unorderedList.removeChild(unorderedListItem)
}

removeItem()
removeItem()




function setImage(element){
let newSetImage = document.querySelector('#arguments')
newSetImage.appendChild(element)
}
let newElement = document.createElement('img')
setImage(newElement)

function changeHeight(element){
    element.style.height = '30px'
  }
  const heightChange = document.querySelector('#image-1')
  changeHeight(heightChange)
  
   function makeDisappear(element){
    element.classList.add('invisible')
   }
   let hidden = document.querySelector('#thing-2')
   makeDisappear(hidden)

   function addList(text){
    let addedList = document.createElement('li')
    addedList.innerText = 'Hello'
    return addedList
   }

   let newList = addList('Hello')
   setImage(newList)
