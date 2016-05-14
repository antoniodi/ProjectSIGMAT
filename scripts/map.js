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

$.getJSON("http://localhost:8001/data/coordenadas.json", function(datos) {
		$.coordenadas=datos;
		graficarEstaciones(datos);
      })

	function graficarEstaciones(arrayEstaciones) {
			for (var i = 0; i < arrayEstaciones.length; i++) {
				  infoW(arrayEstaciones[i].Nombre,estaciones1(arrayEstaciones[i].latitud,arrayEstaciones[i].longitud));
			}
	}

		//add a custom marker to the map
		var marker1 = new google.maps.Marker({
		  	position: null,
		    map: map,
		    visible: true,
		 	icon: marker_bus1,
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


		$.getJSON("http://localhost:8001/data/ruta2.json", function(datos) {
				$.coordenadas=datos;


					recorridos(datos.info[0],marker1);
					recorridos(datos.info[1],marker2);

		      })

	b=0
function recorridos(rutas,marker1,marker2) {
	setInterval(function () {

  if(b<rutas.coordenadas.length)
  {var c =-rutas.coordenadas[b].id+4;
		t=b-10*(rutas.coordenadas[b].id-1)+1;
		//console.log(t);
		console.log(b);
		chart.series[c].data[2].update(t);

 	 ruta(rutas.coordenadas[b].latitud,rutas.coordenadas[b].longitud,marker1);
 	 infoWD("<p>Ruta: "+rutas.Ruta+"<br>latitud: "+rutas.coordenadas[b].latitud+"<br>lontitud: "+rutas.coordenadas[b].longitud+"<br>id: "+rutas.coordenadas[b].id+"<br>Hora salida: "+rutas.HoraS+"</p>",marker1);
  }
  else {
  	b=0;
		for (var i = 0; i < chart.series.length; i++) {
			chart.series[i].data[1].update(b);
			console.log("hola");
		}
  }
 			b++

  },200);

}









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
