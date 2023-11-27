"use strict";

const BtnServices = document.querySelector(".menu-list a");
const SectionServices = document.querySelector(".seção-serviços");

BtnServices.addEventListener("click", function () {
    SectionServices.scrollIntoView({
        behavior: "smooth",
    });
});

// carousel

const slides = document.querySelectorAll(".slider");
const btnLeft = document.querySelector(".button-arrow-left");
const btnRight = document.querySelector(".button-arrow-right");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
    slides.forEach(function (e, i) {
        e.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
};

const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide);
};

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
};

const init = function () {
    goToSlide(0);
};
init();

const TimerSlide = setInterval(function () {
    nextSlide();
}, 8000);

btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);

// reveal scroll

const seções = document.querySelectorAll(".section");

const settings = {
    root: null,
    threshold: 0,
};

const func = function (entry) {
    const [all] = entry;

    if (!all.isIntersecting) return;

    all.target.classList.remove("hidden");
    observar.unobserve(all.target);
};

const observar = new IntersectionObserver(func, settings);
seções.forEach(function (el) {
    observar.observe(el);
});

// modal

const TextBox = document.querySelector(".review-container").lastElementChild;
const PersonsButton = document.querySelectorAll(".person-container");
const FirstPerson = document.querySelectorAll(".person-container")[0];

const feedbacks = {
    Gustavo:
        "Minha experiência na DenteBrilho Odontologia foi incrível! Desde a primeira consulta até o término do tratamento, fui recebido com profissionalismo e atenção excepcionais. A Dra. Juliana Santos, minha especialista em ortodontia, foi extremamente cuidadosa em explicar cada etapa do meu tratamento de alinhamento dental.",
    Jéssica:
        "Minha experiência na DenteBrilho Odontologia foi verdadeiramente excepcional. Como paciente da Dra. Larissa, especialista em Endodontia, fui tratada com cuidado e profissionalismo desde o primeiro dia.",
    Jean: "Minha jornada na DenteBrilho Odontologia foi incrível! Como      paciente do Dr. Marcos, especialista em Clínica Geral, encontrei não apenas um dentista, mas um verdadeiro parceiro em minha jornada odontológica. Desde o primeiro check-up até os procedimentos de restauração, o Dr. Marcos demonstrou um profundo compromisso com a minha saúde bucal. Sua abordagem atenciosa e explicativa me fez sentir confortável e confiante em cada passo do tratamento.",
};

const Avaliações = Array.from(Object.values(feedbacks));

function OverAll(indice) {
    TextBox.style.opacity = 0;
    setTimeout(() => {
        TextBox.innerHTML = Avaliações[indice];
        TextBox.style.opacity = 1;
    }, 400);
}

for (let i = 0; i < PersonsButton.length; i++) {
    PersonsButton[i].addEventListener("click", function (e) {
        const GetPersonAttribute = e.target.getAttribute(`data-indice`);
        OverAll(GetPersonAttribute);
    });
}

// hidden menu

const BtnIcon = document.querySelector(".btn-icon");
const BtnClose = document.querySelector(".btn-close");
const MenuBox = document.querySelector(".menu-box");
const overlay = document.querySelector(".overlay");
const MenuLinks = document.querySelectorAll(".menu-box ul li a");

function AbrirMenu() {
    MenuBox.classList.add("topHidden");
    overlay.classList.remove("remove");
}

function FecharMenu() {
    MenuBox.classList.remove("topHidden");
    overlay.classList.add("remove");
}

BtnIcon.addEventListener("click", AbrirMenu);
BtnClose.addEventListener("click", FecharMenu);
overlay.addEventListener("click", FecharMenu);
MenuLinks.forEach(function (e) {
    e.addEventListener("click", FecharMenu);
});

// client slider

const AllClients = document.querySelectorAll(".client-slider");
const ClientBtnLeft = document.querySelector(".client-btn-left");
const ClientBtnRight = document.querySelector(".client-btn-right");

const ClientSlide = function (next) {
    AllClients.forEach(function (e, i) {
        e.style.transform = `translateX(${100 * (i - next)}%)`;
    });
};

let currentSlide = 0;
const SlideExtend = AllClients.length;

const Próximo = function () {
    if (currentSlide === SlideExtend - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    ClientSlide(currentSlide);
};

const Anterior = function () {
    if (currentSlide === 0) {
        currentSlide = SlideExtend - 1;
    } else {
        currentSlide--;
    }
    ClientSlide(currentSlide);
};

const começar = function () {
    ClientSlide(0);
};
começar();

ClientBtnRight.addEventListener("click", Próximo);
ClientBtnLeft.addEventListener("click", Anterior);
