const buttonCalculate = document.querySelector('#btn');
buttonCalculate.addEventListener('click', calculate);


const addTip = document.querySelector('#addTip');
addTip.addEventListener('click', showTip);

function showTip (e) {
    e.preventDefault();
    tip.style.display = 'block';
}

function calculate (e) {
    e.preventDefault();
    const inputBill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip');

    if (inputBill === '' || people === '' || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter bill and number of people'
        })
    }

    let amountPerPerson = inputBill / people;
    let tipPerPerson = (inputBill * tip.value) / people;
    let totalAmount =  amountPerPerson + tipPerPerson;

    document.querySelector('#dividedBill').textContent = amountPerPerson.toFixed(2);
    document.querySelector('#totalTip').textContent = tipPerPerson.toFixed(2);
    document.querySelector('#totalAmount').textContent = totalAmount.toFixed(2);
}

calculate();

