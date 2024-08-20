document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

document
  .getElementById("mobile-nav-close")
  .addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  });

// window.addEventListener("load", adjustImageSizes);
// window.addEventListener("resize", adjustImageSizes);

// function isLandscape(width, height) {
//   return width > height;
// }

// function getAspectRatio(img) {
//   if (!img || !img.naturalHeight || !img.naturalWidth) {
//     return 3;
//   }

//   return img.naturalWidth / img.naturalHeight;
// }

// function adjustImageSizes() {
//   const gridItems = document.querySelectorAll(".grid-item");
//   // loop, check next

//   gridItems.forEach((item, index) => {
//     const img = item.querySelector("img");

//     // var c = isLandscape(img.naturalWidth, img.naturalHeight);

//     const aspectRatio = getAspectRatio(img);

//     item.style.flex = `1 1 ${200 * aspectRatio}px`;
//   });
//   var grids = Array.from(document.getElementsByClassName("grid"));
//   grids.forEach((grid) => {
//     grid.classList.add("visible");
//   });
// }

// var images = document.querySelectorAll(".grid-item");

// images.forEach((item) => {
//   item.addEventListener("click", function () {
//     if (!item.classList.contains("enlarged")) {
//       item.classList.add("enlarged");
//     } else {
//       item.classList.remove("enlarged");
//     }
//   });
// });

// function createSlideShow(currentItem) {
//   const images = Array.from(currentItem.parentNode.children);
//   const index = images.indexOf(currentItem);

//   const prevButton = document.createElement("button");
//   prevButton.classList.add("prev");
//   prevButton.innerHTML = "&#10094;";
//   prevButton.onclick = function () {
//     showImage(index - 1);
//   };
//   document.body.appendChild(prevButton);

//   const nextButton = document.createElement("button");
//   nextButton.classList.add("next");
//   nextButton.innerHTML = "&#10095;";
//   nextButton.onclick = function () {
//     showImage(index + 1);
//   };
//   document.body.appendChild(nextButton);

//   document.addEventListener("keydown", handleKeyPress);

//   function handleKeyPress(event) {
//     if (event.key === "ArrowLeft") {
//       showImage(index - 1);
//     } else if (event.key === "ArrowRight") {
//       showImage(index + 1);
//     } else if (event.key === "Escape") {
//       closeSlideShow();
//     }
//   }

//   function showImage(newIndex) {
//     if (newIndex < 0) {
//       newIndex = images.length - 1;
//     } else if (newIndex >= images.length) {
//       newIndex = 0;
//     }
//     currentItem.classList.remove("enlarged");
//     currentItem = images[newIndex];
//     currentItem.classList.add("enlarged");
//     index = newIndex;
//   }

//   function closeSlideShow() {
//     currentItem.classList.remove("enlarged");
//     prevButton.remove();
//     nextButton.remove();
//     document.removeEventListener("keydown", handleKeyPress);
//   }
// }

// createSlideShow();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    fetch("https://base-api-ts.herokuapp.com/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  });

// var headShotImages = [
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0df9aa8b583850f1643a.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0df3aa8b583850f16439.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0e71c444babeedbe6784.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0e75c444babeedbe6785.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0e78c444babeedbe6788.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c36edb4259af8fa94ad7f5.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3b04fa45bc8f8b82a7fea.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66ac0e77c444babeedbe6787.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3b11ca45bc8f8b82a7feb.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a03a7dde9ad9c0f0576d.jpeg",
// ];

// var creatorsGallery = [
//   // "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a03a7dde9ad9c0f0576d.jpeg",

//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a12f7dde9ad9c0f05770.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a1477dde9ad9c0f05771.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a1b07dde9ad9c0f05773.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a08b7dde9ad9c0f0576f.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a1d17dde9ad9c0f05774.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a3c07dde9ad9c0f05775.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3a0707dde9ad9c0f0576e.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3b042a45bc8f8b82a7fe9.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c4024b3416266a800cb604.jpeg",
//   "https://magiccityfilmmakers.s3.us-east-2.amazonaws.com/galleries/66ac0d64aa8b583850f16438/images/l/66c3ae16a45bc8f8b82a7fe7.jpeg",
// ];
// function buildGallery(galleryImages, targetId) {
//   var gallery = document.getElementById(targetId);
//   var frag = document.createDocumentFragment();
//   galleryImages.forEach((url) => {
//     var div = document.createElement("div");
//     div.classList.add("grid-item");
//     var img = document.createElement("img");
//     img.src = url;
//     div.appendChild(img);
//     frag.appendChild(div);
//   });
//   gallery.appendChild(frag);
// }

// (function () {
//   buildGallery(headShotImages, "headshots");
//   buildGallery(creatorsGallery, "creators");
// })();
