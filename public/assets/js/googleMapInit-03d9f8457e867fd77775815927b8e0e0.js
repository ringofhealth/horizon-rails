function initialize(){var e=document.getElementById("googleMap"),t={center:new google.maps.LatLng(43.775429,-79.509408),zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,draggable:!1},l=new google.maps.Map(e,t),o=(new google.maps.Marker({position:new google.maps.LatLng(43.775429,-79.509408),map:l,title:"Horizon HeadQuater"}),[{featureType:"landscape",stylers:[{visibility:"on"},{color:"#282828"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{color:"#383838"}]},{elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"on"},{weight:8},{hue:"#ff0000"},{color:"#ffffff"}]},{featureType:"landscape",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"},{color:"#ffffff"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"water",stylers:[{color:"#004044"}]},{}]);l.setOptions({styles:o})}google.maps.event.addDomListener(window,"load",initialize);