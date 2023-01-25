
am5.ready(function() {

  // Create root and chart
  var root = am5.Root.new("chartdiv"); 
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoNaturalEarth1()
    })
  );
  
  // Create polygon series
  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_continentsLow,
      exclude: ["antarctica"]
    })
  );
  var rate=6.3;
  polygonSeries.mapPolygons.template.setAll({
    
  tooltipText:"{name}",
    interactive: true,
    templateField: "settings"
  });
  
  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color(0x677935),
    

  });

  /*function dataLoaded(result) {
    // Set data on all series of the chart
    var data = am5.JSONParser.parse(result.response);
    result.target.series.each(function(series) {
      series.data.setAll(data);
    });
  }*/
  
  //am5.net.load("/yearTwentyOne.json", chart).then(dataLoaded);
  var colors = am5.ColorSet.new(root, {});
  
  polygonSeries.data.setAll([{
    id: "europe",
    
    settings: {
      
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff),
        rotation: 45,
        strokeWidth: 1
      })
    }
  }, {
    id: "asia",
    settings: {
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff),
        checkered: true
      })
    }
  }, {
    id: "africa",
    settings: {
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff),
        checkered: true
      })
    }
  }, {
    id: "northAmerica",
    settings: {
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff)
      })
    }
  }, {
    id: "southAmerica",
    settings: {
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff),
        rotation: 90,
        strokeWidth: 2
      })
    }
  }, {
    id: "oceania",
    settings: {
      fill: colors.next(),
      fillPattern: am5.new(root, {
        color: am5.color(0xffffff),
      })
    }
  }])
});