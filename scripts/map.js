var estaciones = [
	{"Nombre":"Parque estación UIS","latitud":7.1372035,"longitud":-73.1223754},
	{"Nombre":"Estación la Isla","latitud":7.107844,"longitud":-73.116074},
	{"Nombre":"Estación Diamante","latitud":7.095459,"longitud":-73.110635},
	{"Nombre":"Estación Payador","latitud":7.0846673,"longitud":-73.1079612},
	{"Nombre":"Estación Cañaveral","latitud":7.070489,"longitud":-73.104748},
	{"Nombre":"Estación Panamericano","latitud":7.069408,"longitud":-73.103893},
	{"Nombre":"Estación Lagos","latitud":7.0667097,"longitud":-73.0997972}
 ];

var rp11={"Ruta":"P11","Distancia":3500,"coordenadas":
	[{"latitud":7.070489,"longitud":-73.104748},
	 {"latitud":7.070165,"longitud": -73.104443},
	 {"latitud":7.069890,"longitud": -73.104133},
	 {"latitud":7.069604,"longitud": -73.103771},
	 {"latitud":7.069298,"longitud": -73.103398},
	 {"latitud":7.068705,"longitud": -73.102679},
	 {"latitud":7.068347,"longitud": -73.102184},
	 {"latitud":7.067863,"longitud": -73.101510},
	 {"latitud":7.067456,"longitud": -73.100917},
	 {"latitud":7.067154,"longitud": -73.100494},
	 {"latitud":7.066698,"longitud": -73.099877},
	 {"latitud":7.066086,"longitud": -73.099227},
	 {"latitud":7.065606,"longitud": -73.098561},
	 {"latitud":7.065711,"longitud": -73.097956},
	 {"latitud":7.066190,"longitud": -73.098127},
	 {"latitud":7.066464,"longitud": -73.098571},
	 {"latitud":7.066664,"longitud": -73.098878},
	 {"latitud":7.066864,"longitud": -73.099121},
	 {"latitud":7.067043,"longitud": -73.099370},
	 {"latitud":7.067321,"longitud": -73.099624},
	 {"latitud":7.067655,"longitud": -73.099623},
	 {"latitud":7.067968,"longitud": -73.099541},
	 {"latitud":7.068725,"longitud": -73.099130},
	 {"latitud":7.069096,"longitud": -73.098489},
	 {"latitud":7.069419,"longitud": -73.097871},
	 {"latitud":7.069584,"longitud": -73.097677},
	 {"latitud":7.070045,"longitud": -73.097640},
	 {"latitud":7.071008,"longitud": -73.097985},
	 {"latitud":7.071399,"longitud": -73.098533},
	 {"latitud":7.071706,"longitud": -73.098992},
	 {"latitud":7.072024,"longitud": -73.099618},
	 {"latitud":7.072214,"longitud": -73.100714},
	 {"latitud":7.072311,"longitud": -73.101311},
	 {"latitud":7.072398,"longitud": -73.102058},
	 {"latitud":7.072414,"longitud": -73.102798},
	 {"latitud":7.072419,"longitud": -73.103431},
	 {"latitud":7.072414,"longitud": -73.104000},
	 {"latitud":7.072433,"longitud": -73.104770},
	 {"latitud":7.072443,"longitud": -73.105219},
	 {"latitud":7.072497,"longitud": -73.105711},
	 {"latitud":7.072336,"longitud": -73.106492},
	 {"latitud":7.072000,"longitud": -73.106803},
	 {"latitud":7.071729,"longitud": -73.107195},
	 {"latitud":7.072150,"longitud": -73.107373},
	 {"latitud":7.072470,"longitud": -73.107585},
	 {"latitud":7.072606,"longitud": -73.107274},
	 {"latitud":7.072301,"longitud": -73.106925},
	 {"latitud":7.071725,"longitud": -73.106296},
	 {"latitud":7.071347,"longitud": -73.105845},
	 {"latitud":7.071008,"longitud": -73.105481},
	 {"latitud":7.070736,"longitud": -73.105174}

]};


 var recorrido =[{"latitud":7.137554,"longitud":-73.122270},
 							 {"latitud":7.137458,"longitud":-73.122731},
 							 {"latitud":7.137354,"longitud":-73.123179},
 							 {"latitud":7.137277,"longitud":-73.123584},
							 {"latitud":7.137183,"longitud":-73.124052},
 							 {"latitud":7.137121,"longitud":-73.124428},
 							 {"latitud":7.137032,"longitud":-73.124849},
 							 {"latitud":7.136961,"longitud":-73.125278},
 							 {"latitud":7.136908,"longitud":-73.125529},
 							 {"latitud":7.136813,"longitud":-73.125940},
 							 {"latitud":7.136797,"longitud":-73.126133},
							 {"latitud":7.136426,"longitud":-73.126048},
 							 {"latitud":7.135626,"longitud":-73.125911},
 							 {"latitud":7.135231,"longitud":-73.125847},
 							 {"latitud":7.134596,"longitud":-73.125675},
 							 {"latitud":7.134158,"longitud":-73.125604},
 							 {"latitud":7.133766,"longitud":-73.125537},
 							 {"latitud":7.133329,"longitud":-73.125448},
 							 {"latitud":7.132937,"longitud":-73.125359},
 							 {"latitud":7.132909,"longitud":-73.125367},
 							 {"latitud":7.132485,"longitud":-73.125291},
 							 {"latitud":7.132077,"longitud":-73.125196},
 							 {"latitud":7.131727,"longitud":-73.125116},
 							 {"latitud":7.131455,"longitud":-73.125475},
 							 {"latitud":7.131116,"longitud":-73.125530},
 							 {"latitud":7.130773,"longitud":-73.125312},
 							 {"latitud":7.130673,"longitud":-73.124913},
 							 {"latitud":7.130372,"longitud":-73.124862},
 							 {"latitud":7.130380,"longitud":-73.124852},
 							 {"latitud":7.129993,"longitud":-73.124783},
 							 {"latitud":7.129491,"longitud":-73.124697},
 							 {"latitud":7.129111,"longitud":-73.124610},
 							 {"latitud":7.128644,"longitud":-73.124523},
 							 {"latitud":7.128235,"longitud":-73.124433},
 							 {"latitud":7.127797,"longitud":-73.124354},
 							 {"latitud":7.127373,"longitud":-73.124263},
 							 {"latitud":7.126923,"longitud":-73.124173},
 							 {"latitud":7.126556,"longitud":-73.124075},
 							 {"latitud":7.126111,"longitud":-73.123930},
 							 {"latitud":7.125729,"longitud":-73.123810},
 							 {"latitud":7.125315,"longitud":-73.123673},
 							 {"latitud":7.124835,"longitud":-73.123531}
 								];



function initMap() {
	//set your google maps parameters
	var latitude = 7.09,
		longitude = -73.11,
		map_zoom = 13;

	//google map custom marker icon - .png fallback for IE11
	var marker_bus0 = 'img/busmorado.svg';
	var marker_bus1 = 'img/busnaranja.svg';
	var marker_bus2 = 'img/busverde.svg';
	var marker_estacion = 'img/busestacionazul.svg';
	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
	    {	//poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    },
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(latitude, longitude),
      	zoom: map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,

      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('map'), map_options);



	 var estaciones1 = function(lat,lon) {
	 		var marker = new google.maps.Marker({
	 				position: new google.maps.LatLng(lat,lon),
	 				map: map,
	 				visible: true,
	 			icon: marker_estacion,
				zIndex: 2
	 		});
			return marker;
	 	};



		function infoW(texto,marker) {
			var infowindow = new google.maps.InfoWindow({
				content:texto
				});
				google.maps.event.addListener(marker, 'click', function() {

					infowindow.open(map,marker);
			    });
		}




		var infowindow = new google.maps.InfoWindow({
			content:null
			});


	function infoWD(texto,marker) {
	 infowindow.setContent(texto)

		google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	    });
}




		for (var i = 0; i < estaciones.length; i++) {
			infoW(estaciones[i].Nombre,estaciones1(estaciones[i].latitud,estaciones[i].longitud));
		}


		//add a custom marker to the map
		var marker1 = new google.maps.Marker({
		  	position: null,
		    map: map,
		    visible: true,
		 	icon: marker_bus2,
		});
		var marker2 = new google.maps.Marker({
		  	position: null,
		    map: map,
		    visible: true,
		 	icon: marker_bus1,
		});

		var ruta = function(lat,lon,marker) {
			var pos = new google.maps.LatLng(lat,lon);
			marker.setPosition(pos);
			};






 function openInfoWindow(marker10) {
    var markerLatLng = marker10.getPosition();
    infoWindow1.setContent([
        '"latitud":',
        markerLatLng.lat(),
        ',"longitud":',
        markerLatLng.lng(),
        ''
    ].join(''));
    infoWindow1.open(map, marker10);
 }

infoWindow1 = new google.maps.InfoWindow();

 var marker10 = new google.maps.Marker({
 		position: new google.maps.LatLng(7.071729,-73.107195),
 		map: map,
		draggable: true,
 		visible: true,
 });

 google.maps.event.addListener(marker10, 'click', function(){
        openInfoWindow(marker10);
    });






	b=0
 setInterval(function () {
 if(b<recorrido.length)
 {
	 ruta(recorrido[b].latitud,recorrido[b].longitud,marker1);

 }
 if(b<rp11.coordenadas.length)
 {
	 ruta(rp11.coordenadas[b].latitud,rp11.coordenadas[b].longitud,marker2);
	 infoWD("<p>Ruta: "+rp11.Ruta+"<br>latitud: "+rp11.coordenadas[b].latitud+"<br>lontitud: "+rp11.coordenadas[b].longitud+"</p>",marker2);
 }
 else {
 	b=0;
 }
			b++


 },1000);








	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
	  	var controlUIzoomIn= document.getElementById('map-zoom-in'),
	  		controlUIzoomOut= document.getElementById('map-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);

	google.maps.event.addDomListener(window, "resize", function() {
	    var center = map.getCenter();
	    google.maps.event.trigger(map, "resize");
	    map.setCenter(center);
});



}
