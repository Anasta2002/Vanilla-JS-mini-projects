const search = document.querySelector('input');
const items = document.querySelectorAll('.item');

search.addEventListener('keyup', function(event) {
    let word = event.target.value.toLowerCase();
    console.log(word);

    items.forEach(item => {
        item.querySelector('.name').textContent.toLowerCase().includes(word) ? item.style.display = 'inline' : item.style.display = 'none';
    })
});