// NFT Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Countdown Timer for Featured NFT
    function updateCountdown() {
        const countdownElement = document.querySelector('.time-left');
        if (!countdownElement) return;
        
        // Set target date (24 hours from now)
        const targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 18);
        targetDate.setMinutes(targetDate.getMinutes() + 57);
        targetDate.setSeconds(targetDate.getSeconds() + 14);
        
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            // Update elements
            const hourElement = document.querySelector('.hour .time-number');
            const minuteElement = document.querySelector('.minutes .time-number');
            const secondElement = document.querySelector('.seconds .time-number');
            
            if (hourElement) hourElement.textContent = hours.toString().padStart(2, '0');
            if (minuteElement) minuteElement.textContent = minutes.toString().padStart(2, '0');
            if (secondElement) secondElement.textContent = seconds.toString().padStart(2, '0');
        }
    }
    
    // Initialize countdown and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Button Hover Effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Show alert for demo purposes
            if (this.textContent.includes('Connect') || this.textContent.includes('Join')) {
                alert('Connecting to marketplace... (Demo)');
            } else if (this.textContent.includes('Explore')) {
                alert('Exploring NFTs... (Demo)');
            }
        });
    });
    
    // Navigation Links Hover Effect
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to section
            const linkText = this.textContent.trim().toLowerCase();
            let targetSection;
            
            switch(linkText) {
                case 'about us':
                    targetSection = document.querySelector('.featured-nft');
                    break;
                case 'store':
                    targetSection = document.querySelector('.trending');
                    break;
                case 'games':
                    targetSection = document.querySelector('.popular-artists');
                    break;
                default:
                    targetSection = document.querySelector('.hero');
            }
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // NFT Card Hover Effects
    const nftCards = document.querySelectorAll('.trending-item, .artist');
    nftCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(221, 36, 225, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Social Media Icons Hover Effect
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const ellipse = this.querySelector('.ellipse-11');
            if (ellipse) {
                ellipse.style.background = 'linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            const ellipse = this.querySelector('.ellipse-11');
            if (ellipse) {
                ellipse.style.background = '#FFFFFF';
            }
        });
        
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('ig') ? 'Instagram' :
                           this.classList.contains('fb') ? 'Facebook' : 'Twitter';
            alert(`Opening ${platform}... (Demo)`);
        });
    });
    
    // Animated Gradient Backgrounds
    function animateGradients() {
        const gradients = document.querySelectorAll('.gradient');
        let angle = 0;
        
        function rotateGradients() {
            angle = (angle + 0.5) % 360;
            gradients.forEach(gradient => {
                gradient.style.background = `linear-gradient(${angle}deg, #DD24E1 0%, #5117F4 100%)`;
            });
        }
        
        setInterval(rotateGradients, 50);
    }
    
    // Initialize gradient animation
    animateGradients();
    
    // Stats Counter Animation
    function animateStats() {
        const stats = [
            { element: '.stat-1 h3', target: 32000, duration: 2000 },
            { element: '.stat-2 h3', target: 20000, duration: 2000 },
            { element: '.stat-3 h3', target: 10000, duration: 2000 }
        ];
        
        stats.forEach(stat => {
            const element = document.querySelector(stat.element);
            if (!element) return;
            
            const start = 0;
            const increment = stat.target / (stat.duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                    current = stat.target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString() + '+';
            }, 16);
        });
    }
    
    // Initialize stats animation on scroll
    let statsAnimated = false;
    window.addEventListener('scroll', function() {
        const statsSection = document.querySelector('.stats');
        if (statsSection && !statsAnimated) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                animateStats();
                statsAnimated = true;
            }
        }
    });
    
    // Rotating NFT Images
    function rotateNFTImages() {
        const nftImages = document.querySelectorAll('.img');
        nftImages.forEach((img, index) => {
            // Add slight rotation animation
            img.style.transition = 'transform 0.5s ease';
            
            // On hover, add more rotation
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'rotate(-5deg) scale(1.05)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'rotate(-15deg)';
            });
        });
    }
    
    // Initialize image rotations
    rotateNFTImages();
    
    // Footer Copyright Year Update
    function updateCopyrightYear() {
        const copyrightElement = document.querySelector('.copyright');
        if (copyrightElement) {
            const currentYear = new Date().getFullYear();
            copyrightElement.textContent = `Copyright @ Kartik Bansal ${currentYear}. All Rights Reserved.`;
        }
    }
    
    // Initialize copyright year
    updateCopyrightYear();
    
    // Responsive Adjustments
    function checkResponsive() {
        const width = window.innerWidth;
        if (width < 1440) {
            // Scale down for smaller screens
            const scale = width / 1440;
            document.body.style.transform = `scale(${scale})`;
            document.body.style.transformOrigin = 'top left';
        } else {
            document.body.style.transform = 'none';
        }
    }
    
    // Check responsive on load and resize
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    // Preload Hover Effects
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
