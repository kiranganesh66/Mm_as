document.addEventListener("DOMContentLoaded", function () {
  var colorInputs = document.querySelectorAll(".color-choose input");

  colorInputs.forEach(function (input) {
    input.addEventListener("click", function () {
      var headphonesColor = input.getAttribute("data-image");
      var activeImages = document.querySelectorAll(".left-column img.active");

      activeImages.forEach(function (image) {
        image.style.opacity = 0;
        image.classList.remove("active");
        setTimeout(function () {
          image.style.display = "none";
        }, 500);
      });

      var targetImage = document.querySelector(
        '.left-column img[data-image="' + headphonesColor + '"]'
      );
      targetImage.style.display = "block";
      setTimeout(function () {
        targetImage.style.opacity = 1;
        targetImage.classList.add("active");
      }, 250);

      input.classList.add("active");
    });
  });
});

const selectColr = document.getElementById("img_box");

function search(event) {
  let url =
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json";
  let options = {
    method: "GET",
  };

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      let { search_results } = jsonData;
      console.log(search_results);
    });
}
