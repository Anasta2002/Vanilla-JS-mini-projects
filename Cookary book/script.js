const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeClassSelected();
        item.classList.add('selected');
    });

    function removeClassSelected() {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
});