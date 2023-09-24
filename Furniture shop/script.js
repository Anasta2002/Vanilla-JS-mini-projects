const images = document.querySelectorAll('.item');

images.forEach(function(item, index) {
    item.addEventListener('mouseover', () => {
        removeClassSelected();
        item.classList.add('selected');
    });
})

removeClassSelected = () => {
    images.forEach(item => {
        item.classList.remove('selected');
    })
}