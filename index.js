
window.onload = () => {
    document.getElementById('showw').classList.add('show');
    document.getElementById('logo').classList.add('logoo');
    document.getElementById('navlist').classList.add('navv');
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('load1');
        }
    });
});


document.querySelectorAll('.load').forEach((element) => {
    observer.observe(element);
});
