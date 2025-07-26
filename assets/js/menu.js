// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.style.maxHeight = isHidden ? mobileMenu.scrollHeight + 'px' : '0px';
    
    // Animate hamburger icon
    this.classList.toggle('active');
});

// Mobile About Us dropdown toggle
const mobileAboutButton = document.getElementById('mobile-about-button');
const mobileAboutMenu = document.getElementById('mobile-about-menu');
const mobileAboutArrow = document.getElementById('mobile-about-arrow');

mobileAboutButton.addEventListener('click', function() {
    const isCollapsed = mobileAboutMenu.style.maxHeight === '0px' || !mobileAboutMenu.style.maxHeight;
    mobileAboutMenu.style.maxHeight = isCollapsed ? mobileAboutMenu.scrollHeight + 'px' : '0px';
    mobileAboutArrow.classList.toggle('rotate-180');
});

// Mobile Solutions dropdown toggle
const mobileSolutionsButton = document.getElementById('mobile-solutions-button');
const mobileSolutionsMenu = document.getElementById('mobile-solutions-menu');
const mobileSolutionsArrow = document.getElementById('mobile-solutions-arrow');

mobileSolutionsButton.addEventListener('click', function() {
    const isCollapsed = mobileSolutionsMenu.style.maxHeight === '0px' || !mobileSolutionsMenu.style.maxHeight;
    mobileSolutionsMenu.style.maxHeight = isCollapsed ? mobileSolutionsMenu.scrollHeight + 'px' : '0px';
    mobileSolutionsArrow.classList.toggle('rotate-180');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnMenuButton = mobileMenuButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnMenuButton && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.style.maxHeight = '0px';
        mobileMenuButton.classList.remove('active');
    }
});

// Close dropdowns when clicking on menu items (for better UX)
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Close the main mobile menu
        mobileMenu.classList.add('hidden');
        mobileMenu.style.maxHeight = '0px';
        mobileMenuButton.classList.remove('active');
        
        // Close any open dropdowns
        mobileAboutMenu.style.maxHeight = '0px';
        mobileAboutArrow.classList.remove('rotate-180');
        mobileSolutionsMenu.style.maxHeight = '0px';
        mobileSolutionsArrow.classList.remove('rotate-180');
    });
});