import "ol/ol.css";
import Map from "ol/Map";
import Overlay from "ol/Overlay";
import View from "ol/View";
import { toStringHDMS } from "ol/coordinate";
import TileLayer from "ol/layer/Tile";
import { fromLonLat, toLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import {getCenter} from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import { relative } from "path";




var extent = [0, 0, 3000, 1500];
var projection = new Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent
  
});

//base map layer
var baseimg = new ImageLayer({
    source: new Static({
      attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
      url: "https://live.staticflickr.com/65535/49767450983_44af91cee3_h.jpg",
      projection: projection,
      imageExtent: extent
      
    })
  });
//imageExtent: [left, bottom, right, top]
var img1 =new ImageLayer({
    //opacity: 0.3, 
    source: new Static({
      attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
      url: "https://live.staticflickr.com/65535/49768954702_d35145d251_n.jpg",
      projection: projection,  
      imageExtent:[0,250,3000,1250]
      
      
    })
   });
   //black layer
  var img2 =new ImageLayer({
    //opacity: 0.3, 
    source: new Static({
      attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
      url: "https://live.staticflickr.com/65535/49768403478_f9297c5a54_n.jpg",
      projection: projection,
      imageExtent:[0,0,3000,1500]
      
      
    })
  });
  
  //
  var img3 =new ImageLayer({
    //opacity: 0.3, 
    source: new Static({
      attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
      url: "https://live.staticflickr.com/65535/49767446158_6b4aaf30df_b.jpg" ,
      projection: projection,
      imageExtent:[0,250,3000,1250]
      
      
    })
  });

  

var map = new Map({
  
  layers: [baseimg],
  target: "map",
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 2,
    maxZoom: 4,

    
  }),
  
});





var img = new Image();
var div = document.getElementById('logoxx');
 

window.setVisibility1 = function() {
    if (document.getElementById('bt1').value == 'LRO Diviner CF Mosaic 128ppd') {
        document.getElementById('bt1').value = 'Hide Layer';
        map.addLayer(img1);
        img.onload = function() {
          div.appendChild(img);
        };
        img.src ='https://live.staticflickr.com/65535/49769422797_78c920bdd0_t.jpg';
        
         
    } else {
      document.getElementById('bt1').value = 'LRO Diviner CF Mosaic 128ppd';
      map.removeLayer(img1);
      img.onload = function() {
        div.removeChild(img);
      };
      img.src = 'https://live.staticflickr.com/65535/49769422797_78c920bdd0_t.jpg';
      
    }
}
window.setOpacity1 = function() {
  if (document.getElementById('bt11').value == 'Lower Opacity') {
    document.getElementById('bt11').value = 'Reset Opacity';
    map.removeLayer(img1);
    img1.setOpacity(0.3);
    map.addLayer(img1);
   
        img.onload = function() {
          div.appendChild(img);
        };
        img.src ='https://live.staticflickr.com/65535/49769422797_78c920bdd0_t.jpg';
        
  } else {
    document.getElementById('bt11').value = 'Lower Opacity';
    map.removeLayer(img1);
    img1.setOpacity(1.0);
    
    img.onload = function() {
      div.removeChild(img);
    };
    img.src = 'https://live.staticflickr.com/65535/49769422797_78c920bdd0_t.jpg';
    
  }
}




//src="//live.staticflickr.com/65535/49768586653_28d722380b_t.jpg"
window.setVisibility2 = function() {
  if (document.getElementById('bt2').value == 'Kaguya Multi band Imager, FeO Weight Percent Colorized Global') {
      document.getElementById('bt2').value = 'Hide Layer';
       img.src ='https://live.staticflickr.com/65535/49768586653_28d722380b_t.jpg';
      map.addLayer(img2);
      img.onload = function() {
        div.appendChild(img);
      };
     
      
  } else {
    document.getElementById('bt2').value = 'Kaguya Multi band Imager, FeO Weight Percent Colorized Global';
    map.removeLayer(img2);
    img.onload = function() {
      div.removeChild(img);
    };
    img.src = 'https://live.staticflickr.com/65535/49768586653_28d722380b_t.jpg';
    
  }
  
}
window.setOpacity2 = function() {
  if (document.getElementById('bt22').value == 'Lower Opacity') {
    document.getElementById('bt22').value = 'Reset Opacity';
    map.removeLayer(img2);
    img2.setOpacity(0.3);
    map.addLayer(img2);
    img.onload = function() {
      div.appendChild(img);
    };
    img.src ='https://live.staticflickr.com/65535/49768586653_28d722380b_t.jpg';
    
    
  } else {
    document.getElementById('bt22').value = 'Lower Opacity';
    map.removeLayer(img2);
    img2.setOpacity(1.0);
    img.onload = function() {
      div.removeChild(img);
    };
    img.src = 'https://live.staticflickr.com/65535/49768586653_28d722380b_t.jpg';
    
    
  }
}





window.setVisibility3 = function() {
  if (document.getElementById('bt3').value == 'FeO Weight Percent Colorized Global') {
      document.getElementById('bt3').value = 'Hide Layer';
      map.addLayer(img3);
        
  } else {
    document.getElementById('bt3').value = 'FeO Weight Percent Colorized Global';
    map.removeLayer(img3);
    
  }
}
window.setOpacity3 = function() {
  if (document.getElementById('bt33').value == 'Lower Opacity') {
    document.getElementById('bt33').value = 'Reset Opacity';
    map.removeLayer(img3);
    img3.setOpacity(0.3);
    
    map.addLayer(img3);
      
  } else {
    document.getElementById('bt33').value = 'Lower Opacity';
    map.removeLayer(img3);
    img3.setOpacity(1.0);
   // map.addLayer(img3);
  }
}





      
var tychoCrater = new Overlay({
  
  position: [1400.,400.],
  positioning: "center-center",
  element: document.getElementById("tychoCrater"),
  stopEvent: false
});
map.addOverlay(tychoCrater); 

var tc = new Overlay({
  position: [1420.,432.],
  element: document.getElementById("tc")
});
map.addOverlay(tc);

// Montes Apenninus Mountain Range
var montesA = new Overlay({
  
  position: [1500.,950.],
  positioning: "center-center",
  element: document.getElementById("montesA"),
  stopEvent: false
});
map.addOverlay(montesA);

var ma = new Overlay({
  position: [1523.,979.],
  element: document.getElementById("ma")
});
map.addOverlay(ma);

// Luna 17 Rover
var luna17 = new Overlay({
  
  position: [1070.,1170.],
  positioning: "center-center",
  element: document.getElementById("luna17"),
  stopEvent: false
});
map.addOverlay(luna17);

var l17 = new Overlay({
  position: [1100.,1200.],
  element: document.getElementById("l17")
});
map.addOverlay(l17);

// Copernicus Crater Range
var copernicusC = new Overlay({
  
  position: [1330.,830.],
  positioning: "center-center",
  element: document.getElementById("copernicusC"),
  stopEvent: false
});
map.addOverlay(copernicusC);

var cc = new Overlay({
  position: [950.,870.],
  element: document.getElementById("cc")
});
map.addOverlay(cc);

var soc = new Overlay({
  position: [1300.,600.],
  element: document.getElementById("soc")
});
map.addOverlay(soc);

// Frigid Sea
var fc = new Overlay({
  position: [1300.,1280.],
  element: document.getElementById("fc")
});
map.addOverlay(fc);

// apolle14 marker
var marker = new Overlay({
  
  position: [1344.1658650051859,769.9918661807524],
  positioning: "center-center",
  element: document.getElementById("marker"),
  stopEvent: false
});
map.addOverlay(marker);

// apolle14 label
var apolle14 = new Overlay({
  position: [1370,800.],
  element: document.getElementById("apolle14")
});
map.addOverlay(apolle14);

// Popup showing the position the user clicked
var popup = new Overlay({
  element: document.getElementById("popup")
});
map.addOverlay(popup);

// Sea Of Rains Start 

var seaOfRains = new Overlay({
  
  position: [1344.1658650051859,769.9918661807524],
  positioning: "center-center",
  element: document.getElementById("seaOfRains"),
  stopEvent: false
});
map.addOverlay(seaOfRains);

var sor = new Overlay({
  position: [1250,1050.],
  element: document.getElementById("sor")
});
map.addOverlay(sor);

// Sea Of Rains End


// Apollo 11 Information 
var apolle11Marker = new Overlay({ 
    position: [1863.5442236373988,635.7560942154257],
    positioning: "center-center",
    element: document.getElementById("apolle11Marker"),
    stopEvent: false
  });
map.addOverlay(apolle11Marker);
  
  // Apollo 11 label
var apolle11 = new Overlay({
    position: [1890.,675.],
    element: document.getElementById("apolle11")
  });
map.addOverlay(apolle11);
 



  // Popup showing the position the user clicked
  
map.on("click", function(evt) {
  var element = popup.getElement();
  var coordinate = evt.coordinate;
  var hdms = toStringHDMS(coordinate);

  $(element).popover("destroy");
  popup.setPosition(coordinate);
  $(element).popover({
    placement: "top",
    animation: false,
    html: true,
    content: "<p>hemisphere, degrees, minutes, seconds</p><code>" + hdms + "</code>"
  });
  $(element).popover("show");
});
