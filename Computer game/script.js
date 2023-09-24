const text = `Test your strength against the computer! Have no fear.`;
const speed = 60;
let i = 0;

function typeHeading () {
    if (i < text.length) {
        document.querySelector('#head').textContent += text.charAt(i);
        i++;
        setTimeout(typeHeading, speed);
    }
}

typeHeading();


// game

const input = document.querySelector('#enterField');
const btn = document.querySelector('button');
const randomNumber = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) game()
})

btn.addEventListener('click', game);

function game () {
    const userNumber = input.value;
    if (userNumber > randomNumber) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...' + userNumber + ' is too big number',
            text: 'Try less number'
        })
    }
    else if (userNumber < randomNumber) {
        Swal.fire({
            icon: 'error',
            title: 'Oops... ' + userNumber + ' is not enough',
            text: 'Try bigger number'
        })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter only numbers'
        })
    }
    else {
        Swal.fire({
            title: 'You are winner!!!',
            width: 600,
            padding: '3em',
            color: '#716add',
            // background: '#fff url(/imaesg/treesg.pn)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
    input.value = '';
}