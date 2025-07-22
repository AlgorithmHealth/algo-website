 // Card sets data
        const cardSets = [
            {
                title: "Unmatched Medical Expertise",
                cards: [
                    {
                        icon: "clinical-foundation.svg",
                        alt: "Clinical Foundation Icon",
                        text: "Clinical Foundation First",
                        number: "01"
                    },
                    {
                        icon: "evidence-based-innovation.svg",
                        alt: "Evidence-Based Innovation Icon",
                        text: "Evidence-Based Innovation",
                        number: "02"
                    },
                    {
                        icon: "regulatory-knowledge.svg",
                        alt: "Regulatory Knowledge Icon",
                        text: "Regulatory Knowledge",
                        number: "03"
                    }
                ]
            },
            {
                title: "World Class Technology Team",
                cards: [
                    {
                        icon: "elite-ml-engineer-icon.svg",
                        alt: "Elite ML Engineers Icon",
                        text: "Elite ML Engineers",
                        number: "01"
                    },
                    {
                        icon: "specialized-data-scientists-icon.svg",
                        alt: "Specialized Data Scientists Icon",
                        text: "Specialized Data Scientists",
                        number: "02"
                    },
                    {
                        icon: "continuous-innnovation-icon.svg",
                        alt: "Continuous Innovation Icon",
                        text: "Continuous Innovation",
                        number: "03"
                    }
                ]
            },
            {
                title: "State of the Art Solutions",
                cards: [
                    {
                        icon: "precision-engineering-icon.svg",
                        alt: "Precision Engineering Icon",
                        text: "Precision Engineering",
                        number: "01"
                    },
                    {
                        icon: "scalable-architecture-icon.svg",
                        alt: "Scalable Architecture Icon",
                        text: "Scalable Architecture",
                        number: "02"
                    },
                    {
                        icon: "realtime-processing-icon.svg",
                        alt: "Real-Time Processing Icon",
                        text: "Real-Time Processing",
                        number: "03"
                    }
                ]
            },
            {
                title: "Transformative Healthcare Impact",
                cards: [
                    {
                        icon: "improved-patient-outcomes-icon.svg",
                        alt: "Improved Patient Outcomes Icon",
                        text: "Improved Patient Outcomes",
                        number: "01"
                    },
                    {
                        icon: "operational-efficiency-icon.svg",
                        alt: "Operational Efficiency Icon",
                        text: "Operational Efficiency",
                        number: "02"
                    },
                    {
                        icon: "clinical-decision-support-icon.svg",
                        alt: "Clinical Decision Support Icon",
                        text: "Clinical Decision Support",
                        number: "03"
                    }
                ]
            },
            {
                title: "Exceptional Cost-Effectiveness",
                cards: [
                    {
                        icon: "rapid-roi-icon.svg",
                        alt: "Rapid ROI Icon",
                        text: "Rapid ROI",
                        number: "01"
                    },
                    {
                        icon: "flexible-pricing-models.svg",
                        alt: "Flexible Pricing Models Icon",
                        text: "Flexible Pricing Models",
                        number: "02"
                    },
                    {
                        icon: "reduced-infra-cost-icon.svg",
                        alt: "Reduced Infrastructure Costs Icon",
                        text: "Reduced Infrastructure Costs",
                        number: "03"
                    },
                    {
                        icon: "scalable-investment-icon.svg",
                        alt: "Scalable Investment Icon",
                        text: "Scalable Investment",
                        number: "04"
                    }
                ]
            },
            {
                title: "Uncompromising Security & Compliance",
                cards: [
                    {
                        icon: "health-grade-icon.svg",
                        alt: "Healthcare-Grade Security Icon",
                        text: "Healthcare-Grade Security",
                        number: "01"
                    },
                    {
                        icon: "regulatory-compliance-icon.svg",
                        alt: "Regulatory Compliance Icon",
                        text: "Regulatory Compliance",
                        number: "02"
                    },
                    {
                        icon: "data-privacy-icon.svg",
                        alt: "Data Privacy by Design Icon",
                        text: "Data Privacy by Design",
                        number: "03"
                    },
                    {
                        icon: "audit-ready-icon.svg",
                        alt: "Audit-Ready Documentation Icon",
                        text: "Audit-Ready Documentation",
                        number: "04"
                    }
                ]
            },
            {
                title: "Why Organizations Trust Algorithm Health",
                cards: [
                    {
                        icon: "proven-track-record-icon.svg",
                        alt: "Proven Track Record Icon",
                        text: "Proven Track Record",
                        number: "01"
                    },
                    {
                        icon: "partnership-icon.svg",
                        alt: "Partnership Approach Icon",
                        text: "Partnership Approach",
                        number: "02"
                    },
                    {
                        icon: "future-proof-icon.svg",
                        alt: "Future-Proof Technology Icon",
                        text: "Future-Proof Technology",
                        number: "03"
                    }
                ]
            }
        ];

        // Function to create a single card
        function createCard(card) {
            return `
<div class="flex cursor-pointer flex-col bg-[#1C487D] justify-center rounded-2xl items-center px-4 py-6 mb-6 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
  <div class="flex justify-between items-center gap-4 sm:gap-6 mb-4">
    <img src="./assets/images/${card.icon}" alt="${card.alt}" class="w-14 h-14 sm:w-16 sm:h-16">
    <h1 class="text-4xl sm:text-5xl md:text-6xl text-[#275184] font-poppins font-bold number-val">
      ${card.number}
    </h1>
  </div>
  <p class="text-white text-sm sm:text-base text-center font-semibold">
    ${card.text}
  </p>
</div>

            `;
        }

        // Function to create cards layout based on number of cards
        function createCardsLayout(cards) {
            let html = '';
            
            if (cards.length === 3) {
                // First row with cards 1 and 2
                html += `
                    <div class="flex gap-6 max-w-2xl mx-auto">
                        ${createCard(cards[0])}
                        ${createCard(cards[1])}
                    </div>
                `;
                
                // Second row with centered card 3
                html += `
                    <div class="flex justify-center max-w-2xl">
                        ${createCard(cards[2])}
                    </div>
                `;
            } else if (cards.length === 4) {
                // First row with cards 1 and 2
                html += `
                    <div class="flex gap-6 max-w-2xl mx-auto">
                        ${createCard(cards[0])}
                        ${createCard(cards[1])}
                    </div>
                `;
                
                // Second row with cards 3 and 4
                html += `
                    <div class="flex gap-6 max-w-2xl mx-auto">
                        ${createCard(cards[2])}
                        ${createCard(cards[3])}
                    </div>
                `;
            }
            
            return html;
        }

        // Function to create a complete card set
        function createCardSet(cardSet, index) {
            return `
                <div class="card-set ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <h2 class="text-white text-2xl font-poppins mb-4">
                        ${cardSet.title}
                    </h2>
                    <div>
                        ${createCardsLayout(cardSet.cards)}
                    </div>
                </div>
            `;
        }

        // Generate all card sets
        function generateCardSets() {
            const container = document.getElementById('card-sets-container');
            let html = '';
            
            cardSets.forEach((cardSet, index) => {
                html += createCardSet(cardSet, index);
            });
            
            container.innerHTML = html;
        }

        // Function to cycle through card sets
        let currentIndex = 0;
        
        function cycleCardSets() {
            const cardSetElements = document.querySelectorAll('.card-set');
            
            // Remove active class from current card set
            cardSetElements[currentIndex].classList.remove('active');
            
            // Move to next card set
            currentIndex = (currentIndex + 1) % cardSets.length;
            
            // Add active class to new card set
            cardSetElements[currentIndex].classList.add('active');
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            generateCardSets();
            
            // Start automatic cycling every 4 seconds
            setInterval(cycleCardSets, 4000);
        });



    // Testimonials data
        const testimonials = [
            {
                name: "Dr. A. Sharma",
                title: "Chief Medical Officer",
                image: "./assets/images/testimonial-client1.png",
                reviewTitle: "Outstanding Results",
                review: "Algorithm Health Plus's AI tools have transformed our diagnostic processes, leading to improved patient outcomes."
            },
            {
                name: "Dr. M. Johnson",
                title: "Director of Operations",
                image: "./assets/images/testimonial-client2.png",
                reviewTitle: "Game-Changing Technology",
                review: "The predictive analytics have reduced our readmission rates by 35%. Truly revolutionary healthcare technology."
            },
            {
                name: "Dr. S. Patel",
                title: "Head of Cardiology",
                image: "./assets/images/testimonial-client1.png",
                reviewTitle: "Exceptional Accuracy",
                review: "The AI-powered diagnostics have enhanced our clinical decision-making with unprecedented accuracy and speed."
            },
            {
                name: "Dr. R. Williams",
                title: "Chief Technology Officer",
                image: "./assets/images/testimonial-client2.png",
                reviewTitle: "Seamless Integration",
                review: "Implementation was smooth and the ROI was evident within the first quarter. Highly recommend AlgoHealth."
            },
            {
                name: "Dr. K. Chen",
                title: "Medical Director",
                image: "./assets/images/testimonial-client1.png",
                reviewTitle: "Transformative Impact",
                review: "Our patient satisfaction scores have increased significantly since implementing AlgoHealth's solutions."
            }
        ];

        let currentStartIndex = 0;
        let autoScrollInterval;

        // Function to create testimonial card
        function createTestimonialCard(testimonial, index) {
            return `
               <div class="testimonial-carousel-item test-card-bg shadow-lg ${index === 0 ? 'active' : ''}" data-index="${index}">
  <div class="grid grid-cols-1 md:grid-cols-3">
    
    <!-- Image + Name Block -->
    <div class="bg-[#ECF5FB] flex flex-col rounded-t-[20px] md:rounded-tl-[25px] md:rounded-bl-[25px] md:rounded-tr-none md:rounded-br-none">
      <img 
        src="${testimonial.image}" 
        alt="${testimonial.name}" 
        class="testi-img w-full h-auto rounded-t-[20px] md:rounded-tl-[20px] md:rounded-tr-none"
      >
      <div class="w-full flex flex-col items-center justify-center p-3">
        <h3 class="text-sm text-[#031B4E] font-semibold font-poppins drop-shadow-sm text-center">
          ${testimonial.name}
        </h3>
        <p class="text-cyan-500 text-xs italic text-center">${testimonial.title}</p>
      </div>
    </div>

    <!-- Review Text Block -->
    <div class="md:col-span-2 p-4 bg-white md:p-8">
      <h3 class="text-cyan-500 text-md poppins-semibold mb-4 md:mb-6">
        ${testimonial.reviewTitle}
      </h3>
      <p class="text-[#031B4E] text-sm poppins-regular leading-relaxed">
        ${testimonial.review}
      </p>
    </div>

  </div>
</div>

            `;
        }

        // Function to generate all testimonials
        function generateTestimonials() {
            const container = document.getElementById('testimonial-carousel');
            let html = '';
            
            testimonials.forEach((testimonial, index) => {
                html += createTestimonialCard(testimonial, index);
            });
            
            container.innerHTML = html;
        }

        // Function to show specific testimonial
        function showTestimonial(index) {
            const items = document.querySelectorAll('.testimonial-carousel-item');
            
            // Remove active class from all items
            items.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to current item
            items[index].classList.add('active');
            
            currentStartIndex = index;
        }

        // Function to go to next testimonial
        function nextTestimonial() {
            const nextIndex = (currentStartIndex + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }

        // Function to go to previous testimonial
        function prevTestimonial() {
            const prevIndex = (currentStartIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(prevIndex);
        }

        // Function to start auto-scroll
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextTestimonial, 4000);
        }

        // Function to stop auto-scroll
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }

        // Function to restart auto-scroll
        function restartAutoScroll() {
            stopAutoScroll();
            startAutoScroll();
        }

        // Initialize carousel
        function initCarousel() {
            generateTestimonials();
            
            // Add event listeners for navigation buttons
            document.getElementById('nextBtn').addEventListener('click', () => {
                nextTestimonial();
                restartAutoScroll(); // Restart auto-scroll after manual navigation
            });
            
            document.getElementById('prevBtn').addEventListener('click', () => {
                prevTestimonial();
                restartAutoScroll(); // Restart auto-scroll after manual navigation
            });
            
            // Pause auto-scroll on hover
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.addEventListener('mouseenter', stopAutoScroll);
            carouselContainer.addEventListener('mouseleave', startAutoScroll);
            
            // Start auto-scroll
            startAutoScroll();
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initCarousel);


// Copyright year
  document.getElementById("year").textContent = new Date().getFullYear();

// Function to scroll to top
 const btn = document.getElementById("backToTopBtn");

  // Show button after scrolling 100px
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  };

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
