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
const homePageLink = document.getElementById('homePage-link');


const trimiteBtn = document.getElementById('send-btn');

contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    contentSection.style.display = 'none';
    contactSection.style.display = 'block';
});


homePageLink.addEventListener('click', function (event) {
    event.preventDefault();
    contactSection.style.display = 'none';
    contentSection.style.display = 'block';
    
});

(function(){
  const fonts = ["cursive", 'sans-serif', 'serif', 'monospace'];
  let captchaValue = "";
  function generateCatcha(){
    let value = btoa(Math.random()*99999);
    value = value.substring(0, 7);
    captchaValue = value;
  }
  function setCatcha() {
    let html = captchaValue.split("").map((char) => {
      const rotate = -60 + Math.trunc(Math.random() * 120); // Adjust the rotation range here
      const font = Math.trunc(Math.random() * fonts.length);
      const fontSize = char.toLowerCase() === char ? 'small' : 'large'; // Check if the character is lowercase or uppercase
      return `<span 
        style="
        transform: rotate(${rotate}deg);
        font-family: ${fonts[font]};
        font-size: ${fontSize};
        "
      >${char}</span>`;
    }).join("");
    document.querySelector(".captcha .preview").innerHTML = html;
  }
  function initCaptcha(){
    document.querySelector(".captcha .captcha-refresh").addEventListener("click", function(){
      generateCatcha();
      setCatcha();
    });
    generateCatcha();
      setCatcha();
  }
  initCaptcha();

  document.querySelector(".Contact #send-btn").addEventListener("click", function(){
    let inputCaptchaValue = document.querySelector(".Contact .captcha input").value;
    if(inputCaptchaValue === captchaValue){
      swal("", "Mesaj trimis!");
    sendEmail();
    } else {
      swal("Invalid captcha");
    };
  });
})();



function sendEmail(){
  const numePrenume = document.getElementById('nume-prenume').value;
const telefon = document.getElementById('telefon').value;
const email = document.getElementById('email').value;
const mesaj = document.getElementById('mesaj').value;
  const formInput = "Nume Prenume: " + numePrenume + "<br/> Telefon: " + telefon + "<br/> Email: " + email + "<br/> Mesaj: " + mesaj;
  console.log(formInput);
    Email.send({
        SecureToken: 'fa5c05bc-aee8-40d3-a67f-ad97e4d7a90b',
To : 'byteon4@gmail.com',
From : 'byteon4@gmail.com',
Subject : "Mesaj primit de pe Technical-Design website",
Body : formInput
}).then(
message => alert(message),
console.log('message')
);
}