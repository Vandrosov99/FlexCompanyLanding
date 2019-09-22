// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('.map'), {
//     center: {
//       lat: -34.397,
//       lng: 150.644
//     },
//     zoom: 8
//   });
// }

function initMap() {
  const loc = {
    lat: 42.361145,
    lng: -71.057083
  }
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  })
}
// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});