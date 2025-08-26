// Mobile Menu Functions
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    
    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        menu.classList.add('translate-x-full');
        backdrop.classList.add('hidden');
    }
}

function toggleSubmenu(menuId) {
    const submenu = document.getElementById(menuId + '-submenu');
    const arrow = document.getElementById(menuId + '-arrow');
    
    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        arrow.classList.add('rotate-180');
    } else {
        submenu.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
}

// Page-specific content updates
function updatePageContent(pageType, locationName) {
    // Update page subtitle in header
    const pageSubtitle = document.getElementById('page-subtitle');
    if (pageSubtitle && locationName) {
        pageSubtitle.textContent = locationName + ' Nakliye';
    }
    
    // Update footer description
    const footerDescription = document.getElementById('footer-description');
    if (footerDescription && locationName) {
        footerDescription.textContent = locationName + "'de güvenilir nakliye hizmetleri";
    }
}

// Include loader function
function loadInclude(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading include:', error);
        });
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get page type from URL or page title
    const currentPage = window.location.pathname.split('/').pop();
    
    // Update content based on current page
    if (currentPage.includes('basaksehir')) {
        updatePageContent('location', 'Başakşehir');
    } else if (currentPage.includes('gebze')) {
        updatePageContent('location', 'Gebze');
    } else if (currentPage.includes('tuzla')) {
        updatePageContent('location', 'Tuzla');
    } else if (currentPage.includes('ikitelli')) {
        updatePageContent('location', 'İkitelli');
    } else if (currentPage.includes('hadimkoy')) {
        updatePageContent('location', 'Hadımköy');
    } else if (currentPage.includes('esenyurt')) {
        updatePageContent('location', 'Esenyurt');
    } else if (currentPage.includes('avcilar')) {
        updatePageContent('location', 'Avcılar');
    } else if (currentPage.includes('bagcilar')) {
        updatePageContent('location', 'Bağcılar');
    } else if (currentPage.includes('kucukcekmece')) {
        updatePageContent('location', 'Küçükçekmece');
    } else if (currentPage.includes('buyukcekmece')) {
        updatePageContent('location', 'Büyükçekmece');
    } else if (currentPage.includes('silivri')) {
        updatePageContent('location', 'Silivri');
    } else if (currentPage.includes('beylikduzu')) {
        updatePageContent('location', 'Beylikdüzü');
    }
});