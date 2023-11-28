// hero
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".type", {
    strings: ["Frontend Developer"],
    speed: 250,
    loop: true,
  })
    .pause(1000)
    .delete(18)
    .type("Network Administrator")
    .go();
});

// portfolio image
var modal = document.getElementById("modal-image");
var images = document.querySelectorAll(".card-img-top");
images.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.src = image.src;
  });
});

// contact
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      Swal.fire("Terimakasih!", "Pesan Anda berhasil dikirim", "success");
      document.getElementById("my-form").reset();
    });
  });
});

// AOS
AOS.init({
  duration: 1000,
});
