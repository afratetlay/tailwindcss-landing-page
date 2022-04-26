const accordionTitles = document.querySelectorAll(".js-accordion");

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const height = accordionTitle.nextElementSibling.scrollHeight;
        console.log(height);
        accordionTitle.classList.toggle("active-header");
        if (accordionTitle.classList.contains('active-header')){
            
        }
    })
})