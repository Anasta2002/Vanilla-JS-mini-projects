const input = document.querySelector('.inputField');
const addButton = document.querySelector('.addButton');
const list = document.querySelector('.list');


addButton.addEventListener('click', ()=> {
    const str = document.createElement('li');
    str.innerText = input.value;
    if (input.value.length === 0) {
        return false;
        }
    str.classList.add('toDoAdded')
    list.appendChild(str);
    input.value = '';

   str.addEventListener('click', ()=> {
       str.classList.add('toDoCompleted');
   }) 

   str.addEventListener('dblclick', ()=> {
       list.removeChild(str);
   })
})