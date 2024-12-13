document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Submission
  const contactForm = document.querySelector("#contact form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const message = formData.get("message").trim();

      if (name && email && message) {
        animateThankYouMessage("Thank you for submitting the form!");
        contactForm.reset();
      } else {
        alert("Please fill out all required fields.");
      }
    });
  }

  // Newsletter Subscribe Form Submission
  const subscribeForm = document.querySelector(".footer-newsletter form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = subscribeForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value.trim() !== "") {
        animateThankYouMessage("Thank you for subscribing!");
        subscribeForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }

  // Add animation on successful form submission
  function animateThankYouMessage(message) {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    Object.assign(messageBox.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "20px",
      backgroundColor: "rgba(0, 128, 0, 0.9)",
      color: "gold",
      fontSize: "1.5em",
      borderRadius: "8px",
      zIndex: "1005",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      animation: "fadeOut 3s forwards",
    });

    document.body.appendChild(messageBox);
    setTimeout(() => messageBox.remove(), 3000);
  }

  // Apply fade-out animation for message box
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.textContent = `
    @keyframes fadeOut {
      0% { opacity: 1; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);

  // Subscribe Button Animation
  const subscribeButton = document.querySelector(".footer-newsletter button");
  if (subscribeButton) {
    subscribeButton.addEventListener("mouseover", () => {
      subscribeButton.style.transform = "scale(1.1)";
      subscribeButton.style.transition = "transform 0.3s ease-in-out";
    });
    subscribeButton.addEventListener("mouseout", () => {
      subscribeButton.style.transform = "scale(1)";
    });
  }

  // Social Media Links Rotation Effect
  const socialMediaLinks = document.querySelectorAll(".social-media a");
  if (socialMediaLinks) {
    socialMediaLinks.forEach(link => {
      link.addEventListener("click", () => {
        link.style.transition = "transform 0.5s ease-in-out";
        link.style.transform = "rotate(360deg)";
        setTimeout(() => {
          link.style.transform = "rotate(0deg)";
        }, 500);
      });
    });
  }
});
AOS.init();



function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b},${a})`;
}

function updateGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();
  const angle = Math.floor(Math.random() * 360); // Random angle for the gradient

  document.body.style.backgroundImage = `linear-gradient(${angle}deg, ${color1}, ${color2},${color3},${color4})`;
}

// Update gradient every 5 seconds
setInterval(updateGradient, 5000);

// Initial gradient setup
updateGradient();
let inactivityTime = function() {
  let time;
 
  // Reset the timer when user performs any of these events
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  document.onclick = resetTimer;
  document.onscroll = resetTimer;
  document.onwheel = resetTimer;
  document.ontouchstart = resetTimer;
  document.ontouchmove = resetTimer;
  document.ontouchend = resetTimer;
  document.onfocus = resetTimer;
  
  function resetTimer() {
    clearTimeout(time);
    // Set the timer to 10 seconds (10000 milliseconds)
    time = setTimeout(autoScroll, 10000);
  }
 };
 
 function autoScroll() {
  // Scroll the window by a certain amount or to a specific element
  window.scrollBy({
    top: window.innerHeight, // Scroll by one viewport height
    behavior: 'smooth' // Smooth scrolling
  });
 }
 
 // Initialize the inactivity timer function
 inactivityTime();

document.addEventListener('keydown', function(event) {
 if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'x' || event.key === 'v')) {
   event.preventDefault();
 }
});

// Disable right-click context menu to prevent copying
document.addEventListener('contextmenu', function(event) {
 event.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(event) {
 event.preventDefault();
});

// Disable drag and drop to prevent image saving
document.addEventListener('dragstart', function(event) {
 event.preventDefault();
});

// Disable copying via clipboard API
document.addEventListener('copy', function(event) {
 event.preventDefault();
});
document.addEventListener('cut', function(event) {
 event.preventDefault();
});
document.addEventListener('paste', function(event) {
 event.preventDefault();
});

// Disable saving images by dragging them to the desktop
document.addEventListener('mousedown', function(event) {
 if (event.target.tagName === 'IMG') {
   event.preventDefault();
 }
});

// Disable saving images by right-clicking and selecting "Save image as"
document.addEventListener('contextmenu', function(event) {
 if (event.target.tagName === 'IMG') {
   event.preventDefault();
 }
});

// Disable viewing source code (not foolproof)
window.addEventListener('keydown', function(event) {
 if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
   event.preventDefault();
 }
});
// Disable viewing source code (not foolproof)
window.addEventListener('keydown', function(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === 'i') {
    event.preventDefault();
  }
 });

//--fromspee from submission //
window.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('form[action^="https://formspree.io"]');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      var formAction = form.getAttribute('action');
      fetch(formAction, {
          method: 'POST',
          body: new FormData(form),
          headers: {
              'Accept': 'application/json'
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              window.location.href = form.querySelector('input[name="_next"]').value;
          } else {
              alert('Error: ' + data.error);
          }
      })
      .catch(error => {
          alert('Error: ' + error);
      });
  });
});