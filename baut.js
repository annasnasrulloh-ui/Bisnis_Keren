// ================= EMAIL JS =================
(function () {
  emailjs.init("Hf6DvZwI2y3LrbcBq");
})();

function sendEmail(event) {
  event.preventDefault();

  let button = document.getElementById("sendBtn");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name.length < 3) {
    alert("Nama terlalu pendek");
    return;
  }

  if (message.length < 5) {
    alert("Pesan terlalu pendek");
    return;
  }

  button.innerHTML = "Sending...";
  button.disabled = true;

  emailjs
    .send("service_xw0ai8b", "template_sovt7fa", {
      name: name,
      email: email,
      message: message,
    })

    .then(
      function () {
        alert("✅ Pesan berhasil dikirim");

        document.getElementById("contact-form").reset();

        button.innerHTML = "Send Message";
        button.disabled = false;
      },

      function () {
        alert("❌ Pesan gagal dikirim");

        button.innerHTML = "Send Message";
        button.disabled = false;
      },
    );
}

// ================= HEADER SCROLL =================
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

// ================= POPUP GALLERY =================
let images = document.querySelectorAll(".gallery img");
let popup = document.getElementById("imagePopup");
let popupImg = document.getElementById("popupImg");
let close = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", function () {
    popup.style.display = "flex";
    popupImg.src = this.src;
  });
});

close.onclick = function () {
  popup.style.display = "none";
};

// ================= FILTER PROJECT =================
function filterSelection(category) {
  let projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (category === "all") {
      project.style.display = "block";
    } else if (project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// ================= REVEAL ANIMATION =================
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ================= CUSTOM CURSOR =================
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ================= START =================
filterSelection("all");
reveal();

window.addEventListener("load", function () {
  let loader = document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
