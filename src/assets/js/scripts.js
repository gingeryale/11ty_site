console.log("READ dev dev dev dev dev dev dev dev dev dev dev !!!!!!!!!!!!!!");

const list = document.querySelector('.listing');
const faders = document.querySelectorAll('.fade-in');


const options = {
    root: null, // viewport
    threshold: 1, // how much is not the page
    rootMargin: "0px 0px -50px 0px" // works like margin
};
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
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

