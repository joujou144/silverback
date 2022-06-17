const nav = document.querySelector("nav")
const hero = document.querySelector(".hero")
const hamburger = document.querySelector(".nav-container .navbar .nav-menu .hamburger")
const mobileMenu = document.querySelector(".nav-container .navbar .nav-menu ul")
const menuLinks = document.querySelectorAll(".nav-container .navbar .nav-menu ul li a")
const faders = document.querySelectorAll(".fade-in")
const modalBtn = document.querySelector(".modal-btn")
const modalBg = document.querySelector(".modal-bg")
const modalClose = document.querySelector(".modal-close")

// Navbar Sticky
const heroOptions = {
  rootMargin: "-100px 0px 0px"
}

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("sticky")
    } else {
      nav.classList.remove("sticky")
    }
  })
}, 
heroOptions)

heroObserver.observe(hero)

// Hamburger Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Menu link Toggle 
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  
  })
})

const revealOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
}

// Fade in reveal
const revealOnScroll = new IntersectionObserver(
  (entries, revealOnScroll) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("reveal", entry.isIntersecting)
  })
}, revealOptions)

faders.forEach(fader => {
  revealOnScroll.observe(fader)
})

// Contact modal popup
modalBtn.addEventListener("click", () => {
  modalBg.classList.add("modal-active")
})

modalClose.addEventListener("click", () => {
  modalBg.classList.remove("modal-active")
})