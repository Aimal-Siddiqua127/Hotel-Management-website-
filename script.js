document.addEventListener("DOMContentLoaded", () => {
  // Declare the flatpickr variable
  const flatpickr = window.flatpickr

  // Initialize date pickers if they exist
  if (document.querySelectorAll(".datepicker").length > 0) {
    flatpickr(".datepicker", {
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }

  // Handle booking form submission
  const bookingForm = document.getElementById("bookingForm")
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const checkIn = document.getElementById("checkIn").value
      const checkOut = document.getElementById("checkOut").value
      const adults = document.getElementById("adults").value
      const children = document.getElementById("children").value
      const roomType = document.getElementById("roomType").value
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value

      // Simple validation
      if (!checkIn || !checkOut || !roomType || !name || !email) {
        alert("Please fill in all required fields.")
        return
      }

      // In a real application, you would send this data to a server
      // For this demo, we'll just show a success message
      alert(
        `Thank you, ${name}! Your booking request has been received. We will contact you at ${email} to confirm your reservation.`,
      )
      bookingForm.reset()
    })
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.")
        return
      }

      // In a real application, you would send this data to a server
      // For this demo, we'll just show a success message
      alert(`Thank you, ${name}! Your message has been sent. We will contact you at ${email} as soon as possible.`)
      contactForm.reset()
    })
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(94, 38, 18, 0.95)"
        navbar.style.padding = "0.5rem 1rem"
      } else {
        navbar.style.backgroundColor = "rgba(139, 69, 19, 0.9)"
        navbar.style.padding = "1rem"
      }
    })
  }

  // Room type selection from URL parameter
  const urlParams = new URLSearchParams(window.location.search)
  const roomParam = urlParams.get("room")
  if (roomParam && document.getElementById("roomType")) {
    document.getElementById("roomType").value = roomParam
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate__animated", "animate__fadeInUp")
      }
    })
  }

  // Add animate-on-scroll class to elements
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    const headings = section.querySelectorAll("h2, h3")
    headings.forEach((heading) => {
      if (!heading.classList.contains("animate__animated")) {
        heading.classList.add("animate-on-scroll")
      }
    })
  })

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Run once on page load
})
