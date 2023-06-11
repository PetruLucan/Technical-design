// const servicii = document.getElementById('dropdown-toggle');
// const list = document.getElementById('dropdown-options');

// list.style.display = "none";

// servicii.addEventListener("click", (event) => {
//   event.stopPropagation();
//   if (list.style.display === "none") {
//     list.style.display = "flex";
//     servicii.classList.add("clicked");
//   } else {
//     list.style.display = "none";
//     servicii.classList.remove("clicked");
//   }
// });

// document.addEventListener("click", (event) => {
//   if (event.target !== servicii) {
//     list.style.display = "none";
//     servicii.classList.remove("clicked");
//   }
// });


const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownOptions = document.getElementById('dropdown-options');
const dropdownParent = dropdownToggle.closest('.dropdown');

dropdownToggle.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  dropdownParent.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  if (!dropdownParent.contains(event.target)) {
    dropdownParent.classList.remove('show');
  }
});


const contentSection = document.getElementById('content-section');
const contactSection = document.getElementById('contact-section');
const contactLink = document.getElementById('contact-link');

contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    contentSection.style.display = 'none';
    contactSection.style.display = 'block';
});
