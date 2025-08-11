// Add hover effects and animations for Services 
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.service-card');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Button hover effect
            const buttons = document.querySelectorAll('.cta-button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                    this.style.boxShadow = '0 6px 20px rgba(67, 97, 238, 0.4)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 4px 15px rgba(67, 97, 238, 0.3)';
                });
                
                button.addEventListener('click', function() {
                    this.innerHTML = 'Loading...';
                    setTimeout(() => {
                        this.innerHTML = 'Service Selected!';
                        this.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
                    }, 800);
                });
            });
        });

        

