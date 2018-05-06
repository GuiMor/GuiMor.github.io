var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_BoucledeSaussignac_1 = new ol.format.GeoJSON();
var features_BoucledeSaussignac_1 = format_BoucledeSaussignac_1.readFeatures(json_BoucledeSaussignac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeSaussignac_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeSaussignac_1.addFeatures(features_BoucledeSaussignac_1);var lyr_BoucledeSaussignac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeSaussignac_1, 
                style: style_BoucledeSaussignac_1,
                title: '<img src="styles/legend/BoucledeSaussignac_1.png" /> Boucle de Saussignac'
            });var format_BoucledeRazacdeSaussignac3_2 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac3_2 = format_BoucledeRazacdeSaussignac3_2.readFeatures(json_BoucledeRazacdeSaussignac3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac3_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac3_2.addFeatures(features_BoucledeRazacdeSaussignac3_2);var lyr_BoucledeRazacdeSaussignac3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac3_2, 
                style: style_BoucledeRazacdeSaussignac3_2,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac3_2.png" /> Boucle de Razac-de-Saussignac 3'
            });var format_BoucledeRazacdeSaussignac2_3 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac2_3 = format_BoucledeRazacdeSaussignac2_3.readFeatures(json_BoucledeRazacdeSaussignac2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac2_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac2_3.addFeatures(features_BoucledeRazacdeSaussignac2_3);var lyr_BoucledeRazacdeSaussignac2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac2_3, 
                style: style_BoucledeRazacdeSaussignac2_3,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac2_3.png" /> Boucle de Razac-de-Saussignac 2'
            });var format_BoucledeRazacdeSaussignac_4 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac_4 = format_BoucledeRazacdeSaussignac_4.readFeatures(json_BoucledeRazacdeSaussignac_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac_4.addFeatures(features_BoucledeRazacdeSaussignac_4);var lyr_BoucledeRazacdeSaussignac_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac_4, 
                style: style_BoucledeRazacdeSaussignac_4,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac_4.png" /> Boucle de Razac-de-Saussignac'
            });var format_BoucledeGageacRouillac_5 = new ol.format.GeoJSON();
var features_BoucledeGageacRouillac_5 = format_BoucledeGageacRouillac_5.readFeatures(json_BoucledeGageacRouillac_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeGageacRouillac_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeGageacRouillac_5.addFeatures(features_BoucledeGageacRouillac_5);var lyr_BoucledeGageacRouillac_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeGageacRouillac_5, 
                style: style_BoucledeGageacRouillac_5,
                title: '<img src="styles/legend/BoucledeGageacRouillac_5.png" /> Boucle de Gageac-Rouillac'
            });var format_BoucledeMonestier_6 = new ol.format.GeoJSON();
var features_BoucledeMonestier_6 = format_BoucledeMonestier_6.readFeatures(json_BoucledeMonestier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeMonestier_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeMonestier_6.addFeatures(features_BoucledeMonestier_6);var lyr_BoucledeMonestier_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeMonestier_6, 
                style: style_BoucledeMonestier_6,
                title: '<img src="styles/legend/BoucledeMonestier_6.png" /> Boucle de Monestier'
            });var format_BoucledeLaBastide_7 = new ol.format.GeoJSON();
var features_BoucledeLaBastide_7 = format_BoucledeLaBastide_7.readFeatures(json_BoucledeLaBastide_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeLaBastide_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeLaBastide_7.addFeatures(features_BoucledeLaBastide_7);var lyr_BoucledeLaBastide_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeLaBastide_7, 
                style: style_BoucledeLaBastide_7,
                title: '<img src="styles/legend/BoucledeLaBastide_7.png" /> Boucle de La Bastide'
            });var format_BoucledeCouture_8 = new ol.format.GeoJSON();
var features_BoucledeCouture_8 = format_BoucledeCouture_8.readFeatures(json_BoucledeCouture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeCouture_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeCouture_8.addFeatures(features_BoucledeCouture_8);var lyr_BoucledeCouture_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeCouture_8, 
                style: style_BoucledeCouture_8,
                title: '<img src="styles/legend/BoucledeCouture_8.png" /> Boucle de Couture'
            });var format_ChateauxViticoles_9 = new ol.format.GeoJSON();
var features_ChateauxViticoles_9 = format_ChateauxViticoles_9.readFeatures(json_ChateauxViticoles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChateauxViticoles_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ChateauxViticoles_9.addFeatures(features_ChateauxViticoles_9);var lyr_ChateauxViticoles_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChateauxViticoles_9, 
                style: style_ChateauxViticoles_9,
                title: '<img src="styles/legend/ChateauxViticoles_9.png" /> Chateaux Viticoles'
            });var format_Pointsdevue_10 = new ol.format.GeoJSON();
var features_Pointsdevue_10 = format_Pointsdevue_10.readFeatures(json_Pointsdevue_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdevue_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointsdevue_10.addFeatures(features_Pointsdevue_10);var lyr_Pointsdevue_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointsdevue_10, 
                style: style_Pointsdevue_10,
                title: '<img src="styles/legend/Pointsdevue_10.png" /> Points de vue'
            });var format_Pointdarrive_11 = new ol.format.GeoJSON();
var features_Pointdarrive_11 = format_Pointdarrive_11.readFeatures(json_Pointdarrive_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdarrive_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdarrive_11.addFeatures(features_Pointdarrive_11);var lyr_Pointdarrive_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdarrive_11, 
                style: style_Pointdarrive_11,
                title: '<img src="styles/legend/Pointdarrive_11.png" /> Point d\'arrivée'
            });var format_Pointdedpart_12 = new ol.format.GeoJSON();
var features_Pointdedpart_12 = format_Pointdedpart_12.readFeatures(json_Pointdedpart_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdedpart_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdedpart_12.addFeatures(features_Pointdedpart_12);var lyr_Pointdedpart_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdedpart_12, 
                style: style_Pointdedpart_12,
                title: '<img src="styles/legend/Pointdedpart_12.png" /> Point de départ'
            });

lyr_BoucledeSaussignac_1.setVisible(true);lyr_BoucledeRazacdeSaussignac3_2.setVisible(true);lyr_BoucledeRazacdeSaussignac2_3.setVisible(true);lyr_BoucledeRazacdeSaussignac_4.setVisible(true);lyr_BoucledeGageacRouillac_5.setVisible(true);lyr_BoucledeMonestier_6.setVisible(true);lyr_BoucledeLaBastide_7.setVisible(true);lyr_BoucledeCouture_8.setVisible(true);lyr_ChateauxViticoles_9.setVisible(true);lyr_Pointsdevue_10.setVisible(true);lyr_Pointdarrive_11.setVisible(true);lyr_Pointdedpart_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BoucledeSaussignac_1,lyr_BoucledeRazacdeSaussignac3_2,lyr_BoucledeRazacdeSaussignac2_3,lyr_BoucledeRazacdeSaussignac_4,lyr_BoucledeGageacRouillac_5,lyr_BoucledeMonestier_6,lyr_BoucledeLaBastide_7,lyr_BoucledeCouture_8,lyr_ChateauxViticoles_9,lyr_Pointsdevue_10,lyr_Pointdarrive_11,lyr_Pointdedpart_12];
lyr_BoucledeSaussignac_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_BoucledeRazacdeSaussignac3_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac2_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac_4.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeGageacRouillac_5.set('fieldAliases', {'id': 'id', 'Revetement': 'Revetement', 'Nom': 'Nom', });
lyr_BoucledeMonestier_6.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeLaBastide_7.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeCouture_8.set('fieldAliases', {'FID': 'FID', 'nom': 'nom', });
lyr_ChateauxViticoles_9.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Pointsdevue_10.set('fieldAliases', {'id': 'id', });
lyr_Pointdarrive_11.set('fieldAliases', {'id': 'id', 'Arrivee': 'Arrivee', });
lyr_Pointdedpart_12.set('fieldAliases', {'id': 'id', 'Depart': 'Depart', });
lyr_BoucledeSaussignac_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac3_2.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac2_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac_4.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeGageacRouillac_5.set('fieldImages', {'id': 'TextEdit', 'Revetement': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeMonestier_6.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeLaBastide_7.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeCouture_8.set('fieldImages', {'FID': 'TextEdit', 'nom': 'TextEdit', });
lyr_ChateauxViticoles_9.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Pointsdevue_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Pointdarrive_11.set('fieldImages', {'id': 'TextEdit', 'Arrivee': 'TextEdit', });
lyr_Pointdedpart_12.set('fieldImages', {'id': 'TextEdit', 'Depart': 'TextEdit', });
lyr_BoucledeSaussignac_1.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_BoucledeRazacdeSaussignac3_2.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac2_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac_4.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeGageacRouillac_5.set('fieldLabels', {'id': 'no label', 'Revetement': 'no label', 'Nom': 'no label', });
lyr_BoucledeMonestier_6.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeLaBastide_7.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeCouture_8.set('fieldLabels', {'FID': 'no label', 'nom': 'no label', });
lyr_ChateauxViticoles_9.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Pointsdevue_10.set('fieldLabels', {'id': 'no label', });
lyr_Pointdarrive_11.set('fieldLabels', {'id': 'no label', 'Arrivee': 'no label', });
lyr_Pointdedpart_12.set('fieldLabels', {'id': 'no label', 'Depart': 'no label', });
lyr_Pointdedpart_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});