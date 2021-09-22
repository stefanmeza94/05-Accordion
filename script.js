const accordions = document.querySelectorAll('.accordion_content');

accordions.forEach(item => {
  const accordionHeader = item.querySelector('.accordion_header');

  accordionHeader.addEventListener('click', function() {
    const openAccordion = document.querySelector('.active');
    toggleAccordion(item);

    if (openAccordion && openAccordion !== item) {
      toggleAccordion(openAccordion);
    }
  });
});

const toggleAccordion = item => {
  const accordionText = item.querySelector('.accordion_text');

  if (item.classList.contains('active')) {
    accordionText.removeAttribute('style');
    item.classList.remove('active');
  } else {
    accordionText.style.height = accordionText.scrollHeight + 'px';
    item.classList.add('active');
  }
};