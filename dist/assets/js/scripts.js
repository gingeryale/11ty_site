const themeButton = document.querySelector('.footer-button');
const localStorage = window.localStorage;
if (localStorage.getItem("checkboxTheme")) {
    setNight();
}

document.querySelector('#themeSwitch').addEventListener('click', function (e) {
    (e.target.checked) ? setNight() : setDay();
});

function setNight() {
    document.body.setAttribute('data-theme', 'dark');
    themeButton.innerHTML = "Switch to Day Mode";
    localStorage.setItem("checkboxTheme", "dark");
}

function setDay() {
    document.body.removeAttribute('data-theme');
    themeButton.innerHTML = "Switch to Night Mode";
    localStorage.removeItem("checkboxTheme");
}





const list = document.querySelector('.listing');
const faders = document.querySelectorAll('.fade-in');


const options = {
    root: null, // viewport
    threshold: 1, // how much is not the page
    rootMargin: "0px 0px 240px 0px" // works like margin
};
const appearOnScroll = new IntersectionObserver(function (entries, options) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        console.log(entry.target);
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, options);

faders.forEach(fade => {
    appearOnScroll.observe(fade);
});

appearOnScroll.observe(list);

