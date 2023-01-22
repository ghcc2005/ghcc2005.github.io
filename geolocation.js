
const findMyState = () => {

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

    const status = document.querySelector('.status');


    const success = (position) => {
        console.log(position);

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;



        console.log(latitude + ' ' + longitude);


        var location = {lat: latitude, lng: longitude};
        initMap(location);
        
        

        
    };

    const error = () => {
        status.textContent = 'Unable to retrieve location';
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    

}

document.querySelector('.find-loc').addEventListener('click', findMyState);

function addMarker(property) {
    const marker = new google.maps.Marker({
        position: property.location,
        map: map
    });

    if (property.content) {
        const detailWindow = new google.maps.InfoWindow({
            content: property.content
        });


        marker.addListener("mouseover", () => {
            detailWindow.open(map, marker);
        });
    
        marker.addListener("mouseout", () => {
            detailWindow.close(map, marker);
        });
    }
}

function initMap(location) {

    if (!location) {
        var location = {lat: 55.911328751879964, lng: -3.321574542053874};
    };
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });

    function addMarker(property) {
        const marker = new google.maps.Marker({
            position: property.location,
            map: map
        });

        if (property.content) {
            const detailWindow = new google.maps.InfoWindow({
                content: property.content
            });


            marker.addListener("mouseover", () => {
                detailWindow.open(map, marker);
            });
        
            marker.addListener("mouseout", () => {
                detailWindow.close(map, marker);
            });
        }
    }

    addMarker({location: location});
    console.log(location);

    
    
    /* addMarker({location:{lat: 55.91, lng: -3.32}});
    addMarker({location:location, content: '<h2>Heriot watt campus</h2>'}); */
    
}