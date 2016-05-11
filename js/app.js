$(document).foundation()

var swiper = new Swiper('.swiper-container', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 0
});

var map;
function initialize() {

	var mapOptions = {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoom: 14,
		zoomControl: false,
		panControl: false,
		streetViewControl: false,
		scaleControl: false,
		scrollwheel: false,
		overviewMapControl: false,
		center: new google.maps.LatLng(44.835342, -0.5671389999999974)
	};
	
	map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	
	var mapStyles = [
		{
			"featureType": "landscape",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "water",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "administrative",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "poi",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "road",
			"stylers": [
				{ "visibility": "on" }
			]
		},{
			"featureType": "transit",
			"stylers": [
				{ "visibility": "on" }
			]
		}
	];
	
	map.setOptions({styles: mapStyles});
	
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(44.835342, -0.5671389999999974),
		map: map,
		icon: 'img/marker.png',
		title: 'Posturalia'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);