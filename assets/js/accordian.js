function toggleAccordion(index) {
            const content = document.getElementById(`content-${index}`);
            const button = content.previousElementSibling;
            
            // Close all other accordion items and show their buttons
            for (let i = 1; i <= 7; i++) {
                if (i !== index) {
                    const otherContent = document.getElementById(`content-${i}`);
                    const otherButton = otherContent.previousElementSibling;
                    otherContent.classList.remove('active');
                    otherButton.style.display = 'flex';
                }
            }
            
            // Toggle current item
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                button.style.display = 'flex';
            } else {
                content.classList.add('active');
                button.style.display = 'none';
            }
        }