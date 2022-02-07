    require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {

     var url = "https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%202%20-%20ArcGIS%20JavaScript%20API/stl_crime_wgs_84.csv";
     esriConfig.request.corsEnabledServers.push('https://rawgit.com');

        const template = {
          title: "Crime Info",
          content: "Street: {ILEADSStreet}; Crime Code: {Crime}."
        };

        const csvLayer = new CSVLayer({
          url: url,
          popupTemplate: template
        });

        var symbol = {
          type: "simple-marker", 
          color: "red"
        };

      csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: symbol
      };

      var map = new Map({
        basemap: "gray",
        layers: [csvLayer]
      });

      var view = new MapView({
        container: "viewDiv",
        center: [-90.19973698105836, 38.625784113754406],
        zoom: 10,
        map: map
      });

    });
