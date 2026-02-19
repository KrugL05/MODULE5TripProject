//данные для первого слайдера
const tourProgram = [{
    day: 1,
    title: 'Знакомство с Исландией',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/Iceland.jpg',
    alt: 'Рейкьявик'
}, {
    day: 2,
    title: 'Золотое кольцо',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/GoldRing.jpg',
    alt: 'Золотое кольцо Исландии'
}, {
    day: 3,
    title: 'Познакомимся с исландскими овечками',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/барашки.png',
    alt: 'Исландские овечки'
}, {
    day: 4,
    title: 'Водопады южного побережья',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/Waterfall.jpg',
    alt: 'Водопад Сельяландсфосс'
}, {
    day: 5,
    title: 'Чёрные пляжи Вик',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/Darksand.jpg',
    alt: 'Пляж Рейнисфьяра'
}, {
    day: 6,
    title: 'Ледниковая лагуна',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/IceLaguna.jpg',
    alt: 'Ледниковая лагуна'
}, {
    day: 7,
    title: 'Голубая лагуна',
    text: 'Мы отправимся в путешествие по одному из самых необычных туристических маршрутов Исландии — Золотому кольцу. Овeчки будут вaшими пocтoянными \n' + 'cпутникaми. Ha пoляx и в кeмпингax, в гopныx дoлинax и пpямo пocpeди тpacc — кудa бы вы ни пoexaли, вaм будут вcтpeчaтьcя бpoдящиe caми пo ceбe oвeчки c \n' + 'бapaшкaми.',
    image: '../images/SwiperLaguna.jpg',
    alt: 'Голубая лагуна'
},];

const slidesContainer = $('#tourSlides');
const totalDays = tourProgram.length;

slidesContainer.html(tourProgram.map(item => `
    <div class="swiper-slide">
        <div class="tour-slide">

            <div class="tour-slide__image white-block">
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
            </div>

            <div class="tour-slide__content">
                <span class="tour-slide__day">День ${item.day} <span class="tour-slide__total">/ ${totalDays}</span></span>
                <h3 class="tour-slide__heading">${item.title}</h3>
                <p class="tour-slide__text">${item.text}</p>

                <div class="tour-slide__controls">
                    <div class="tour-swiper__nav">
                        <div class="swiper-button-prev tour-swiper-prev"></div>
                        <div class="swiper-button-next tour-swiper-next"></div>
                    </div>

                    <a href="../images/IceLaguna.jpg" class="tour-program__download" download>
                    <img src="../images/download.png" alt="Загрузка">
                        <span class="tour-program__download__text">Скачать программу тура</span>
                    </a>
                </div>
            </div>
            
             
                    </div>
    </div>
`).join(''));


const tourSwiper = new Swiper('.tour-swiper', {
    loop: true,
    slidesPerView: 1,
    speed: 600,
    navigation:
        {
            nextEl: '.tour-swiper-next',
            prevEl: '.tour-swiper-prev',
        },
});

//Второй слайдер
const feedbackSlides = [
    {
        name: 'Иван',
        score: '10/10',
        description: 'Хочу сказать организаторам тура огромное спасибо за это шикарное путешествие! Мы с девушкой давно мечтали побывать в Исландии и благодаря ребятам из iceland.travel эта страна оставила невероятные впечатления далёкого, но теперь изведанного края, которые мы запомним надолго!',
        image: '../images/Отзыв1.png',
        alt: 'Фото'
    },
    {
        name: 'Лиза',
        score: '9/10',
        description: 'Хочу сказать организаторам тура огромное СПАСИБО за это шикарное путешествие! Мы с девушкой давно мечтали побывать в Исландии и благодаря ребятам из iceland.travel эта страна оставила невероятные впечатления далёкого, но теперь изведанного края, которые мы запомним надолго!',
        image: '../images/Отзыв1.png',
        alt: 'Фото'
    },
    {
        name: 'Олег',
        score: '15/10',
        description: 'Хочу сказать организаторам тура ОГРОМНОЕ СПАСИБО за это шикарное путешествие! Мы с девушкой давно мечтали побывать в Исландии и благодаря ребятам из iceland.travel эта страна оставила невероятные впечатления далёкого, но теперь изведанного края, которые мы запомним надолго!',
        image: '../images/Отзыв1.png',
        alt: 'Фото'
    }
];
const slidesContainer2 = $('#feedbackSlides');
slidesContainer2.html(feedbackSlides.map(item => `
    <div class="swiper-slide">
        <div class="feedback-slide">
            <div class="feedback-slide__content">
                <span class="feedback-slide__name">${item.name}</span>
                <div class="feedback-slide__score">${item.score}</div>
                <p class="feedback-slide__text">${item.description}</p>
            </div>
                <div class="feedback-slide__image">
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                </div>
        </div>
    </div>
`).join(''));

const feedbackSwiper = new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    speed: 600,
    navigation:
        {
            nextEl: '.feedback-next',
            prevEl: '.feedback-prev',
        },
});

//Третий слайдер
const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    speed: 600,
    autoHeight: true,
    navigation:
        {
            nextEl: '.gallery-next',
            prevEl: '.gallery-prev',
        },
    pagination:
        {
            el: '.gallery-swiper-pagination',
            clickable: true,
        }
});

//Реализация видео в блоке
const videoContent = $('#videoContent');
const videoVideo = $('#videoVideo');
const videoSection = $('#video')
videoContent.click(function () {
    videoContent.hide();
    videoSection.css({backgroundColor: 'var(--black-bg)', backgroundImage: 'none', padding: '0'});
    videoVideo.show();
})

//Реализация валидации

const $form = $('.order__form');

const $radioValidation = $('#radioValidation');
const $nameValidation = $('#nameValidation');
const $phoneValidation = $('#phoneValidation');

const $nameInput = $('#inputName');
const $phoneInput = $('#inputPhone');
const $radioInputs = $('label', '#people');
const $thanks = $('#thanks')
console.log($radioInputs);

$form.on('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    if ($radioInputs.filter(':checked').length === 0) {
        $radioValidation.css('visibility', 'visible');
        $radioInputs.addClass('error')
        isValid = false;
    } else {
        $radioValidation.css('visibility', 'hidden');
    }

    if ($nameInput.val().trim() === '') {
        $nameValidation.css('visibility', 'visible');
        $nameInput.addClass('error');
        isValid = false;
    } else {
        $nameValidation.css('visibility', 'hidden');
        $nameInput.removeClass('error');
    }

    const phoneValue = $phoneInput.val().trim();

    if (phoneValue === '') {
        $phoneValidation.css('visibility', 'visible');
        $phoneInput.addClass('error');
        isValid = false;
    } else {
        $phoneValidation.css('visibility', 'hidden');
        $phoneInput.removeClass('error');
    }

    if (!isValid) return;

    $.ajax({
        url: 'https://testologia.ru/checkout',
        method: 'POST',
        dataType: 'json',
        data: {
            name: $nameInput.val(),
            phone: $phoneInput.val(),
            people: $radioInputs.filter(':checked').val()
        },
        success: function (response) {

            if (response.success === 1) {
                alert('Произошла ошибка. Попробуйте позже.');
            } else {
                $form.hide();
                $thanks.fadeIn();
                $thanks.css('display', 'flex');
            }
        },
        error: function () {
            alert('Ошибка отправки. Проверьте соединение.');
        }
    });

});

$nameInput.on('input', function () {
    $(this).removeClass('error');
    $nameValidation.css('visibility', 'hidden');
});

$phoneInput.on('input', function () {
    $(this).removeClass('error');
    $phoneValidation.css('visibility', 'hidden');
});

$radioInputs.on('change', function () {
    $radioValidation.css('visibility', 'hidden');
});

//попап
$('.gallery-slide').magnificPopup({
    delegate: 'a',
    type: 'image'
});

//анимации
new WOW({
    animateClass: 'animate__animated'
}).init();

//адаптив preview

const previewTitle = $('#previewTitle');
const whiteSpan = $('#whiteSpan')
const gallerySlide = $('.gallerySlide');

window.addEventListener('resize', move);

function move() {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 1249) {
        previewTitle.addClass('white-span')
        whiteSpan.removeClass('white-span');
    } else if (viewport_width >= 1240) {
        previewTitle.removeClass('white-span')
        whiteSpan.addClass('white-span');
    }
}

move();




