const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', calculateAmounts);

const saleButton = document.querySelector('#chooseSale');

const selectElement = document.querySelector('#sales');
saleButton.addEventListener('click', (e) => {
    e.preventDefault();
    selectElement.style.display = 'block';
});

function calculateAmounts (e) {
    e.preventDefault();
    const spent = document.querySelector('#spentInput');
    if (isNaN(spent.value) || spent.value === '') {
        Swal.fire({
        icon: 'error',
        title: 'Таких цен не бывает :)',
        text: 'Вводить можно только числа. Пожалуйста попробуйте снова'
      })
      spent.value = '';
    }
    else {
        document.querySelector('#amount').textContent = spent.value;
        let sale = spent.value * selectElement.value;
        document.querySelector('#totalAmount').textContent = spent.value - sale;
        document.querySelector('#appliedSale').textContent = sale;
    }

    selectElement.addEventListener('click', () => {

    })


}

calculateAmounts();