
document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('.container div');
    let currentIndex = 0;

    function showNextDiv() {
     
        divs.forEach(div => div.classList.remove('show'));

       
        divs[currentIndex].classList.add('show');

        
        currentIndex = (currentIndex + 1) %divs.length;
    }
showNextDiv();
setInterval(showNextDiv, 10000);
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (!nav) return; // Ensure the nav element exists
    if (window.innerWidth > 700) {
        nav.classList.toggle("sticky", window.scrollY > 0);
    } else {
        nav.classList.remove("sticky");
    }
});
