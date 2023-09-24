const input = document.querySelector('input');
const btn = document.querySelector('button');
const number = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    play();
  }
})

btn.addEventListener('click', play);

function play () {
    const userNumber = input.value;
        if (userNumber < 0 || userNumber > 20) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Введите число от 1 до 20'
              })
        }
        else if (isNaN(userNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Введите число'
              })
        }
        else {
             if (number > userNumber) {
                Swal.fire(
                    'Не совсем! ',
                    'Введите число выше',
                    'question'
                  )
             }
             else if (number < userNumber) {
                Swal.fire(
                    'Не совсем! ',
                    'Введите число ниже',
                    'question'
                  )
             }
             else {
                Swal.fire(
                    'Победа!'
                  )
             }
        }
}