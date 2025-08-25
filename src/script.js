
// Typing animation - menggunakan approach dari code asli Anda yang sudah bagus
const text = "Like science and technologyy";
const typingElement = document.getElementById("typing");
let i = 0;
let deleting = false;

function typeEffect() {
    if (!deleting && i <= text.length) {
typingElement.textContent = text.substring(0, i);
i++;
  } else if (deleting && i >= 0) {
typingElement.textContent = text.substring(0, i);
i--;
  }
    
    if (i === text.length) {
deleting = true;
setTimeout(typeEffect, 1500); // pause sebelum hapus
return;
  } else if (i === 0) {
deleting = false;
  }
    
    setTimeout(typeEffect, deleting ? 50 : 100);
}

// Profile image slideshow - menggunakan code asli Anda
const images = [
"./img/image2.jpeg",
    "./img/image1.jpeg"
];
let imageIndex = 0;
const imgElement = document.getElementById("profileImage");

function rotateProfileImages() {
    setInterval(() => {
imageIndex = (imageIndex + 1) % images.length;
imgElement.style.opacity = '0.5';
setTimeout(() => {
    imgElement.src = images[imageIndex];
    imgElement.style.opacity = '1';
}, 300);
  }, 3000);
}

// Enhanced interests with your original structure but improved styling
function populateInterests() {
    const interests = [
{ 
    img: "./img/IMG_interest1.png", 
    text: "COMPUTER VISION",
    color: "from-blue-500 to-blue-700"
},
{ 
    img: "./img/IMG_interest2.png", 
    text: "ALGORITMA DAN DATA STRUCTURE",
    color: "from-green-500 to-green-700"
},
{ 
    img: "./img/IMG_interest3.png", 
    text: "MACHINE LEARNING DAN DEEP LEARNING",
    color: "from-purple-500 to-purple-700"
},
{ 
    img: "./img/IMG_interest4.png", 
    text: "PENGEMBANGAN PERANGKAT LUNAK",
    color: "from-yellow-500 to-orange-600"
}
    ];
    
    const listContainer = document.getElementById("interestList");
    
    interests.forEach((item, index) => {
const li = document.createElement("li");
li.className = "flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-105";
li.innerHTML = `
    <div class="relative overflow-hidden rounded-xl shadow-lg mb-3">
<img src="${item.img}" alt="${item.text}"
     class="w-28 h-28 object-cover transition-transform duration-300 group-hover:scale-110">
<div class="absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
    <p class="text-xs font-medium text-center px-2 group-hover:text-blue-400 transition-colors duration-300 leading-tight">${item.text}</p>
`;

// Staggered animation on load
li.style.opacity = '0';
li.style.transform = 'translateY(30px)';
setTimeout(() => {
    li.style.transition = 'all 0.6s ease';
    li.style.opacity = '1';
    li.style.transform = 'translateY(0)';
}, index * 150);

listContainer.appendChild(li);
  });
}

// Enhanced page load animations
document.addEventListener('DOMContentLoaded', function() {
    // Start typing effect
    setTimeout(typeEffect, 800);
    
    // Start image rotation
    rotateProfileImages();
    
    // Populate interests with animation
    setTimeout(populateInterests, 1000);
    
    // Fade in main sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
section.style.opacity = '0';
section.style.transform = 'translateY(50px)';
setTimeout(() => {
    section.style.transition = 'all 0.8s ease';
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
}, index * 300);
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    target.scrollIntoView({
behavior: 'smooth',
block: 'start'
  });
}
  });
});

// Parallax scroll effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.gradient-card');
    if (parallax) {
const speed = scrolled * 0.2;
parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Enhanced profile image error handling
imgElement.addEventListener('error', function() {
    this.src = 'https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=YG';
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.classList.add('animate-fade-in');
}
  });
}, observerOptions);

// Observe all major elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.bg-gray-800\\/50');
    elementsToObserve.forEach(el => observer.observe(el));
});
