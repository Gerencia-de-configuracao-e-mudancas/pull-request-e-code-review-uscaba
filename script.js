const tips = document.querySelectorAll('.strategy-tip');

function checkTips() {
    tips.forEach(tip => {
        const top = tip.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            tip.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkTips);
window.addEventListener('load', checkTips);