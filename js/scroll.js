const copyRightIcon = document.querySelector('.copy-right-icon');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        copyRightIcon.classList.remove('fade-out');
        copyRightIcon.classList.add('fade-in');
    } else {
        copyRightIcon.classList.remove('fade-in');
        copyRightIcon.classList.add('fade-out');
    }
});

// Optional: Initially hide the icon
window.addEventListener('load', () => {
    copyRightIcon.classList.add('fade-out');
});