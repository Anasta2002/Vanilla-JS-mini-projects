const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    let newElement = document.createElement('li');
    newElement.innerText = input.value;
    
    if (input.value.length === 0) {
        alert('You should fill the field before pushing');
        return false;
    }

    newElement.classList.add('li');
    list.appendChild(newElement);
    input.value = '';

    newElement.addEventListener('mouseover', () => {
        newElement.classList.add('mouseover');
    })

    newElement.addEventListener('contextmenu', () => {
        list.removeChild(newElement);
    })
})

