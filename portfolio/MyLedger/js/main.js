    //   function initMap() {
    //     var loc = {lat: 35.227085, lng: -80.843124}; //latlong.net

    //     var map = new google.maps.Map(document.getElementsByClassName('map'), {
    //       center: loc, 
    //       zoom: 14
    //     });

    //     var marker = new google.maps.Marker({ position: loc, map: map });
    //   }

////////////////////////////////////////////////////////////////////////////////

    // function initMap() {
    //     const loc = {lat: 35.227085, lng: -80.843124};

    //     const map = new google.maps.Map(document.querySelector('.map')
    //     , {
    //         zoom: 14,
    //         center: loc
    //     });
    //     const marker = new google.maps.Marker({ position: loc, map: map });
    // }
////////////////////////////////////////////////////////////////////////////////
    var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 35.227085, lng: -80.843124},
          zoom: 14
        });
      }

//////////////////////////////////////////////////////////////////////////////

//Sticky Menu Background (makes the sticky menu transparent once scrolled 150px down)
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

//////////////////////////////////////////////////////////////////////////////

      //Smooth Scrolling
      $('#navbar a').on('click', function(event) {
          if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top - 100
              },
              800
          );
         }
      });
