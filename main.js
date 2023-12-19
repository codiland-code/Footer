const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    dropdown.addEventListener('click', e => {
        const dropdown_Content = e.target.parentElement.querySelector('.dropdownContent').getAttribute('aria-hidden');
        if(dropdown_Content == 'true'){
            const dropdownContent = e.target.parentElement.querySelector('.dropdownContent');
            dropdownContent.setAttribute('aria-hidden', 'false');
        } else {
            const dropdownContent = e.target.parentElement.querySelector('.dropdownContent');
            dropdownContent.setAttribute('aria-hidden', 'true');
        }
        
    });
})
