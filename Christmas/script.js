function christmasDown () {

    const now = new Date;
    const christmas = new Date(2023, 11, 24, 0o0, 0o0)
    const number = christmas - now;
    
    const msInSecound = 1000;
    const msInMinute = 60 * msInSecound;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;
    
    const displayDay = Math.floor(number/msInDay); // days
    document.querySelector('.days').textContent = displayDay;
    
    const displayHours = Math.floor(number % msInDay / msInHour); 
    document.querySelector('.hours').textContent = displayHours;
    
    const displayMinutes = Math.floor(number % msInHour / msInMinute);
    document.querySelector('.minutes').textContent = displayMinutes;
    
    const displaySeconds = Math.floor(number % msInMinute / msInSecound);
    document.querySelector('.seconds').textContent = displaySeconds; 
    
        if (number <= 0) {
            document.querySelector('.days').textContent = 0;
            document.querySelector('.hours').textContent = 0;
            document.querySelector('.minutes').textContent = 0;
            document.querySelector('.seconds').textContent = 0;
            clearInterval(timer);
            merriChristmas();
        }
    };
    
    let timer = setInterval(christmasDown, 1000);
    
    function merriChristmas () {
        const heading = document.querySelector('.head');
        heading.textContent = 'Merry Christmas!!! Ho-ho-ho!';
        heading.classList.add('merriChristmas');
    }
    
    const btn = document.querySelector('#myBtn');
    btn.addEventListener('click', () => {
        document.querySelector('#myAudio').play();
    })