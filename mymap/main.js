function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 9.072264, lng: 7.491302 }
  }

  //New Map
  let map = new google.maps.Map(document.getElementById('map'), options);

  //  //Marker
  //  let marker = new google.maps.Marker({ 
  //     position: { lat: 8.9868, lng: 7.3626},
  //     map: map,
  //     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // });

  // let infoWindow = new google.maps.infoWindow({
  //   content: '<h1>The capital of Nigeria</h1>'
  // })

  // marker.addListener(click, () => {
  //   infoWindow.open(map, marker);
  // })

  let markers = [
    {
      coords: { lat: 8.9868, lng: 7.3626 },
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    },
    { coords: { lat: 9.0882, lng: 7.4934 } },
    { coords: { lat: 9.0479, lng: 7.5155 }, content: '<p>Asokoro</p>' }
  ]

  //loop through markers
  markers.forEach(marker => {
    addMarker(marker);
  })

  //Add marker
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      //icon: props.iconImage
    })

    //check for custom image
    if (props.iconImage) {

      //set custom Image
      marker.setIcon(props.iconImage);
    }

    //check content
    if (props.content) {
      let infoWindow = new google.maps.infoWindow({
        content: props.content
      })

      marker.addListener(click, () => {
        infoWindow.open(map, marker);
      })
    }

  }

}
