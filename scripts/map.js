//google map custom marker icon - .png fallback for IE11
var marker_bus0 = 'img/busmorado.svg';
var marker_bus1 = 'img/busnaranja.svg';
var marker_bus2 = 'img/busverde.svg';
var marker_estacion = 'img/busestacionazul.svg';

//codigo encargado de crear la grafica

 $('#container').highcharts({
     chart: {
         type: 'bar'
     },
     title: {
         text: 'Contraste de hipóstesis ideal'
     },
     xAxis: {
         categories: ['Hipótesis ideal', 'Simulación 1<br>Hora salida: 6:00', 'Simulación 2<br>Hora salida: 6:10']
     },
     yAxis: {
         min: 0,
         title: {
             text: 'Tiempo total de recorrido [s]'
         }
     },
     legend: {
         reversed: true
     },
     plotOptions: {
         series: {
             stacking: 'normal'
         }
     },
     series: [{
         name: 'Hacia estación cañaveral',
         data: [39,0,0]
       },{
           name: 'Estación lagos',
           data: [10, 0,0]
       },{
           name: 'Hacia estación lagos',
           data: [10, 0,0]
       },{
           name: 'Estación cañaveral',
           data: [10, 0, 0]
       }]
 });

var chart = $('#container').highcharts();

//Patron factory implementado para crear los marker en el mapa
function markerFactory(){
    this.crearMarker = function(type,map){
				this.map=map;
        switch (type) {
        	case "estacion":
						console.log("Se creo un marker para una estacion");
						return markerEstacion(this.map);
					case "R1":
						console.log("Se creo un recorrido de la ruta R1");
						return markerR1(this.map);
        		break;
					case "R1":
						console.log("Se creo un recorrido de la ruta R2");
						return markerR2(this.map);
        		break;
					case "R1":
						console.log("Se creo un recorrido de la ruta R3");
						return markerR3(this.map);
        		break;
        	default:
        		console.log("Marker no valido");
        }
    }

    function markerEstacion(map){
			this.map=map;
			return new google.maps.Marker({
					position: null,
					visible: true,
					map: this.map,
					icon: marker_estacion,
					zIndex: 2
					});
    }
		function R1() {
			new google.maps.Marker({
			  	position: null,
			    map: this.map,
			    visible: true,
			 	icon: marker_bus0,
			});
		}
		function R2() {
			new google.maps.Marker({
			  	position: null,
			    map: this.map,
			    visible: true,
			 	icon: marker_bus1,
			});
		}
		function R3() {
			new google.maps.Marker({
			  	position: null,
			    map: this.map,
			    visible: true,
			 	icon: marker_bus2,
			});
		}
};
 // fin del Patron factory

 var linksp = $(".tabs_links");
 var links = linksp.find('a');
 var items = $('.items');
 links.eq(0).add(items.eq(0)).addClass("active");
 linksp.on('click','a',function() {
   var t =$(this);
   var i = t.index();
   t.add(items.eq(i)).addClass('active').siblings().removeClass('active');
 });





function initMap() {
	//set your google maps parameters
	var latitude = 7.09,
		longitude = -73.11,
		map_zoom = 13;


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



 //creando una instancia de factory, para crear a partir de ella indefinidos marker de estaciones y rutas
var factory = new markerFactory();

function graficarEstaciones(arrayEstaciones) {
		for (var i = 0; i < arrayEstaciones.length; i++) {
				//infoW(arrayEstaciones[i].Nombre,marker.setPosition(new google.maps.LatLng(arrayEstaciones[i].latitud,arrayEstaciones[i].longitud)));
				var m=factory.crearMarker("estacion",map);
				infoW(arrayEstaciones[i].Nombre,m);
				m.setPosition(new google.maps.LatLng(arrayEstaciones[i].latitud,arrayEstaciones[i].longitud));

		}
}

$.getJSON("http://localhost:8001/data/coordenadas.json", function(datos) {
		$.coordenadas=datos;
		graficarEstaciones(datos);
      })

//agrega un mensaje al
function infoW(texto,marker) {
	var infowindow = new google.maps.InfoWindow({
		content:texto
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
			});
}

	//cuadro de informacion al hacer click en el marcado, para informacion dinamica con un solo cuadro
	var infowindow = new google.maps.InfoWindow({
			content:null
			});
	function infoWD(texto,marker) {
	 infowindow.setContent(texto)

		google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	    });
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
			marker.setPosition(new google.maps.LatLng(lat,lon));
			};



/*
//marcador para capturar coordenadas
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
*/
//codigo encargado de la gestion de las coordenadas
var b=0, g=-20;
timer=setInterval(asi,1000)

function asi() {
		$.getJSON("http://localhost:8001/data/ruta2.json", function(datos) {
				$.coordenadas=datos;
				recorridos(datos[0],marker1);
				recorridos(datos[1],marker2);
				//restriccion: todos los arreglos internos (coordenadas) deben tener el mismo tamaño en la simulacion
		//		for (var i = 0; i < datos.length; i++) {

			//		datos[i].coordenadas[b];
			//	}
})}



function recorridos(rutas,marker) {
	switch (rutas.HoraS) {
		case 0:
		if(b<rutas.coordenadas.length)
	  {//volteamos el indice para que pueda ser usado como referencia al crear la grafica
			var c =-rutas.coordenadas[b].id+4;
			var t=b-10*(rutas.coordenadas[b].id-1)+1;
			//console.log(t);
			chart.series[c].data[1].update(t);

	 	 ruta(rutas.coordenadas[b].latitud,rutas.coordenadas[b].longitud,marker);
		}
	  else {
	  	b=0;
			for (var i = 0; i < chart.series.length; i++) {
				chart.series[i].data[1].update(b);

			}
	  }
	 			b++
			break;
			case 20:
			if(g<rutas.coordenadas.length && g>=0)
			{var c =-rutas.coordenadas[g].id+4;
				t=g-10*(rutas.coordenadas[g].id-1)+1;

				chart.series[c].data[2].update(t);

		 	 ruta(rutas.coordenadas[g].latitud,rutas.coordenadas[g].longitud,marker);
			}
		  else {
		  	if (0>=g) {
						g++
		  	}
					else {
						g=0;
						for (var i = 0; i < chart.series.length; i++) {
							chart.series[i].data[2].update(g);
					}
				}
		  }
		 			g++
				break;
		default:

	}
	}


//esperamos a que se modifique el valor seleccionado de la lista desplegable y lo capturamos
var select=$("#lista").change(function() {
	//detenemos el Intervalo de tiempo de la funcion setInterval
	clearInterval(timer);
	//tomamos el valor obtenido de la lista desplegable y modificamos el intervalo de tiempo de actualizacion
	switch (select.val()) {
		case "1":
			//actualizacion de 1/5 de segundo
			timer = setInterval(asi, 200);
			break;
		case "2":
			//actualizacion de 1 segundo
			timer = setInterval(asi, 1000);
			break;
		case "3":
			//actualizacion de 5 segundos
			timer = setInterval(asi, 5000);
			break;
		default:
			//por defecto el valor es 1 segundo
			timer = setInterval(asi, 1000);
	}

});







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
