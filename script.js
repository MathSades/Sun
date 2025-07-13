// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add smooth scrolling to all nav links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Story category filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  const storyCards = document.querySelectorAll('.story-card');
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      
      storyCards.forEach(card => {
        if (category === 'todas' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Message sending functionality
  const sendBtn = document.querySelector('.send-btn');
  const messageTextarea = document.querySelector('.message-box textarea');
  
  if (sendBtn && messageTextarea) {
    sendBtn.addEventListener('click', function() {
      const message = messageTextarea.value.trim();
      
      if (message === '') {
        alert('Por favor, escreva uma mensagem antes de enviar! 😊');
        return;
      }
      
      // Simulate message sending
      this.textContent = 'Enviando...';
      this.disabled = true;
      
      setTimeout(() => {
        alert('Mensagem enviada com sucesso! 🍓 Obrigado pelo carinho!');
        messageTextarea.value = '';
        this.textContent = 'Enviar Mensagem';
        this.disabled = false;
      }, 1500);
    });
  }

  // Read more button functionality
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const storyTitle = this.parentElement.querySelector('h3').textContent;
      alert(`Em breve você poderá ler "${storyTitle}" completa! 📖✨`);
    });
  });

  // Smooth reveal animation for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for smooth reveal
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Add navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
});

// Add CSS animation for fade in effect
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .nav-menu.active {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    padding: 1rem 0;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
document.head.appendChild(style);
