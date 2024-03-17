const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'scale(0.9)';
    });

    item.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});