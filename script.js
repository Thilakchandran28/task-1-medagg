
function toggleFaq(id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    const faqItem = answer.closest('.faq-item');

    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        icon.textContent = "+";
    } else {
        faqItem.classList.add('active');
        icon.textContent = "-";
    }
}
