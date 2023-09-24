const back = document.querySelector('#back');
const next = document.querySelector('#next');

const images = ['https://cdn.glitch.global/3283da03-201d-4a7b-9844-1fd7741ebda1/1.jpeg?v=1655502278838', 'https://cdn.glitch.global/3283da03-201d-4a7b-9844-1fd7741ebda1/2.jpeg?v=1655502286682', 'https://cdn.glitch.global/3283da03-201d-4a7b-9844-1fd7741ebda1/3.jpeg?v=1655502286891', 'https://cdn.glitch.global/3283da03-201d-4a7b-9844-1fd7741ebda1/4.jpeg?v=1655502286947', 'https://cdn.glitch.global/3283da03-201d-4a7b-9844-1fd7741ebda1/5.jpeg?v=1655502286828'];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > images.length - 1) {
        i = 0;
    }
    document.querySelector('#images').src = images[i];
})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.querySelector('#images').src = images[i];

})