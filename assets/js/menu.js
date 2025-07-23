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
    
    // Mobile solutions dropdown toggle
    const mobileSolutionsButton = document.getElementById('mobile-solutions-button');
    const mobileSolutionsMenu = document.getElementById('mobile-solutions-menu');
    const mobileSolutionsArrow = document.getElementById('mobile-solutions-arrow');
    
    mobileSolutionsButton.addEventListener('click', function() {
        const isCollapsed = mobileSolutionsMenu.style.maxHeight === '0px' || !mobileSolutionsMenu.style.maxHeight;
        mobileSolutionsMenu.style.maxHeight = isCollapsed ? mobileSolutionsMenu.scrollHeight + 'px' : '0px';
        mobileSolutionsArrow.classList.toggle('rotate-180');
    });