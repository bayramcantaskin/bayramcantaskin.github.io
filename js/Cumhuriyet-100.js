var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Her 2 saniyede bir otomatik olarak çağrılır
}

// Otomatik ses çalma
var audio = document.getElementById("myAudio");
audio.volume = 0.5; // Ses seviyesi ayarı (0.0 - 1.0)