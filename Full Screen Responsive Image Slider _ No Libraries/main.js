const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideIntervel;


const nextSlide = () => {
    //Get the current class
    const current = document.querySelector('.current');
    // Remove the current
    current.classList.remove('current');
    //Check for next slide

    if(current.nextElementSibling){
        //Add current to next element
        current.nextElementSibling.classList.add('current')
    }else{
        //Add currnet to first element
        slides[0].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current')
    }, timeout);
}

const prevSlide = () => {
    //Get the current class
    const current = document.querySelector('.current');
    // Remove the current
    current.classList.remove('current');
    //Check for next slide

    if(current.previousElementSibling){
        //Add current to next element
        current.previousElementSibling.classList.add('current')
    }else{
        //Add currnet to first element
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => {
        current.classList.remove('current')
    }, timeout);
}


//Button event

next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval();
        slideIntervel = setInterval(nextSlide, intervalTime)

    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval();
        slideIntervel = setInterval(nextSlide, intervalTime)

    }

});


//Auto Slide

if(auto){
    //run next slide at intervel time
    slideIntervel = setInterval(nextSlide, intervalTime)
}