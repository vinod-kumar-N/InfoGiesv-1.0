infoGies.controller('contactController', function(){
    if($('body').hasClass('moveMe')){
        $('.menu__handle').trigger('click');
    }
  (function initMap() {
        var uluru = {lat: 12.9083416, lng: 77.6323529};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });



        google.maps.event.addListener(map, 'idle', function(e) {
    
                // Prevents card from being added more than once (i.e. when page is resized and google maps re-renders)
                if ( $( ".place-card" ).length === 0 ) {
                         $(".gm-style").append('<div style="position: absolute; right: 0px; top: 0px;"> <div style="margin: 10px; padding: 1px; -webkit-box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; background-color: white;"> <div> <div class="place-card place-card-large"> <div class="place-desc-large"> <div class="place-name"> infoGies </div><div class="address"> #154, Royal Space 3rd Floor, 5th Main, HSR Layout, 7th Sector, Bengaluru, 560102</div></div><div class="navigate"> <div class="navigate"> <a class="navigate-link" href="https://maps.google.com/maps?amp;z=16&t=m&hl=en-US&gl=PT&mapclient=embed&daddr=154%20Royal%20Space%203rd%20Floor%205th%20Main%20HSR%20Layout%207th%20Sector%20Bengaluru@12.9083416,77.6323529" target="_blank"> <div class="icon navigate-icon"></div><div class="navigate-text"> Directions </div></a> </div></div><div class="review-box"> <div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"></div><div class="" style="display:none"><div class="saved-from-source-link" style="display:none"> </div><div class="maps-links-box-exp"> <div class="time-to-location-info-exp" style="display:none"> <span class="drive-icon-exp experiment-icon"></span><a class="time-to-location-text-exp" style="display:none" target="_blank"></a><a class="time-to-location-text-exp" style="display:none" target="_blank"></a> </div></div><div class="time-to-location-privacy-exp" style="display:none"> <div class="only-visible-to-you-exp"> Visible only to you. </div><a class="learn-more-exp" target="_blank">Learn more</a> </div></div></div></div></div>');
                }
            }); 
      })()
    
})