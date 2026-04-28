// Toggle icon and navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Sticky header
let header = document.querySelector(".header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

<script>
const counters = document.querySelectorAll('.percentage');

const speed = 200; // lower = faster

const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
        const increment = target / speed;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + "%";
            requestAnimationFrame(update);
        } else {
            counter.innerText = target + "%";
        }
    };

    update();
};

// Run when visible (scroll trigger)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target); // run once
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => {
    observer.observe(counter);
});
</script>


<script>
const radialBars = document.querySelectorAll('.radial-bar');

const animateRadial = (bar) => {
    const circle = bar.querySelector('.path');
    const text = bar.querySelector('.percentage');
    const target = +bar.getAttribute('data-target');

    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    let progress = 0;

    const animate = () => {
        progress++;

        if (progress <= target) {
            // Update number
            text.innerText = progress + "%";

            // Update circle
            let offset = circumference - (progress / 100) * circumference;
            circle.style.strokeDashoffset = offset;

            requestAnimationFrame(animate);
        }
    };

    animate();
};

// Scroll trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateRadial(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

radialBars.forEach(bar => {
    observer.observe(bar);
});
</script>



<script>
function openPopup(img, title, desc) {
    document.getElementById("projectPopup").style.display = "block";
    document.getElementById("popup-img").src = img;
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-desc").innerText = desc;
}

// Close popup
document.querySelector(".close-btn").onclick = function() {
    document.getElementById("projectPopup").style.display = "none";
};

// Close when clicking outside
window.onclick = function(e) {
    if (e.target == document.getElementById("projectPopup")) {
        document.getElementById("projectPopup").style.display = "none";
    }
};
</script>
