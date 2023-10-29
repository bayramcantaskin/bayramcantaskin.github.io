/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function paylas() {
    // Paylaşma işlemi için gerekli kodu buraya ekleyin
    alert("Paylaşma işlemi başladı.");
  }

  document.getElementById("whatsappPaylasButton").addEventListener("click", function() {
    var paylasLink = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Merhaba, bu harika bir web sitesi! İncelemelisiniz: [https://bayramcantaskin.github.io/]");
    window.open(paylasLink, "_blank");
  })