const sliderContainer = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dot = document.querySelectorAll('.dot');
let slideIndex = 1;

function showSlides(index) {
    if (index > slide.length) {
        slideIndex = 1;
    } else if (index < 1) {
        slideIndex = slide.length;
    };

    if ( index === slide.length) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    } else if (index <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }

    slide.forEach(item=> {
        item.style.display = 'none';
    });

    dot.forEach(item=> {
        item.classList.remove('active');
    })

    slide[slideIndex - 1].style.display = 'block';
    dot[slideIndex - 1].classList.add('active');
};

function plusSlides(n) {
    showSlides(slideIndex += n)
};

sliderContainer.addEventListener('click', (e)=> {
    const target = e.target;    
    if (target === nextBtn) {
        plusSlides(+ 1);
    } else if (target === prevBtn) {
        plusSlides( - 1);
    };
});

dot.forEach((item, i)=> {
    item.addEventListener('click', (e)=> {
        const target = e.target;

        slideIndex = i + 1;
        showSlides(slideIndex);
    });
});


