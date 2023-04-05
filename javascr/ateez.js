const mijnEersteAPIrequest = 'https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup?id=gem-0b2a8b92856b27f86fbd67ab35808ebf&wt=json&fl=*'

fetch(mijnEersteAPIrequest,{})
.then (response => response.json())
.then (data =>{
    console.log(data)
    console.log(data.response.doc[0].geometrie_ll)
    let geojsonFeature = Terraformer.wktToGeoJSON(data.response.docs[0].geometrie_ll);

})




//esrimap//
		            require([

                    "esri/config",
                
             "esri/WebMap",
                
             "esri/views/MapView",
                
                    "esri/widgets/Legend",
                
                    "esri/widgets/Legend"
                
                  ], function(esriConfig, WebMap, MapView, Legend) {
                
                
                
                
                  esriConfig.apiKey = "AAPK583b168130e14429ba151a85e0a81faeaVEmBAP5AAuoAKJt4GQ5NovhomKXtGIroMsAVDi8Q6eRDvhPhiMUIGeHF8L2oNdf";
                
                
                
                
                  const esrimap = new WebMap({
                
                    portalItem: {
                
                      id: "f5cafb017fcf4161af0b0cdcb596fab6"
                
                    }
                
                  });
                
                
                
                
                    const view = new MapView({
                
                      container: "esrimap",
                
                      map: esrimap,
                
                      minZoom: 0,
                      maxZoom: 6,

                
                    });
                
                
                
                
                  // Maak een nieuwe instantie van de legenda-widget
                
                  const legend = new Legend({
                
                    view: view
                
                  });
                
                
                
                
                  // Voeg de legenda-widget toe aan de kaartweergave
                
                  view.ui.add(legend, "top-right");
                
                });


//leaflet//

const map = L.map('map').setView([35.9078, 127.7669], 6);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
    minZoom: 6,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


    let KoreanGrensBestand = L.geoJSON().addTo(map);
    fetch('./data/southkorea.geojson')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        KoreanGrensBestand.addData(data)
    });


//openlayermap//

const openLayersMap = new ol.Map
				({
					target: 'openlayersmap1', layers: [
						new ol.layer.Tile({
							source: new ol.source.OSM()
						})
					],
					view: new ol.View({
						center: ol.proj.fromLonLat([ 4.9393, 52.3142]), zoom: 16
					})



				});


//maplibre//

var maplibre = new maplibregl.Map({
    container: 'maplibre',
    style: './data/toner.json', // stylesheet location
    center: [126.920570, 37.558746], // starting position [lng, lat]
    minZoom: 5, // starting zoom
    

    

    });

    const marker = new maplibregl.Marker({
        color: '#9BCFFD'
    })
        .setLngLat([126.920570, 37.558746])
        .addTo(maplibre)

    

