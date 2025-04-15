function scrollToElement(selector) {
    const element = document.querySelector(selector);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
    });
});



