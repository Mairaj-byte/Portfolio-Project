// ============================= TOGGLE ICON NAVBAR =================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

















let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // start point (with little margin)
        let height = sec.offsetHeight;   // correct height of section
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });


                            //   Scroll Section Active Links 

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);

    // ============================= REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK =======
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



  // Get the header element
  const header = document.querySelector('.header');
  
  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('translucent');
    } else {
      header.classList.remove('translucent');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);


const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Problem solver', 'Debater', 'Gold Medalist',' '],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



