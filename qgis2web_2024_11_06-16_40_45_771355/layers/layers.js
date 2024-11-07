var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buffered_1 = new ol.format.GeoJSON();
var features_Buffered_1 = format_Buffered_1.readFeatures(json_Buffered_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_1.addFeatures(features_Buffered_1);
var lyr_Buffered_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_1, 
                style: style_Buffered_1,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_1.png" /> Buffered'
            });
var format_spatialanalysis2_2 = new ol.format.GeoJSON();
var features_spatialanalysis2_2 = format_spatialanalysis2_2.readFeatures(json_spatialanalysis2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spatialanalysis2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spatialanalysis2_2.addFeatures(features_spatialanalysis2_2);
var lyr_spatialanalysis2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spatialanalysis2_2, 
                style: style_spatialanalysis2_2,
                popuplayertitle: "spatial analysis 2",
                interactive: true,
    title: 'spatial analysis 2<br />\
    <img src="styles/legend/spatialanalysis2_2_0.png" /> Above Moderate Income<br />\
    <img src="styles/legend/spatialanalysis2_2_1.png" /> Low Income<br />\
    <img src="styles/legend/spatialanalysis2_2_2.png" /> Very Low Income<br />\
    <img src="styles/legend/spatialanalysis2_2_3.png" /> Extremely Low Income<br />\
    <img src="styles/legend/spatialanalysis2_2_4.png" /> <br />'
        });
var format_spatialanalysis_3 = new ol.format.GeoJSON();
var features_spatialanalysis_3 = format_spatialanalysis_3.readFeatures(json_spatialanalysis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spatialanalysis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spatialanalysis_3.addFeatures(features_spatialanalysis_3);
var lyr_spatialanalysis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spatialanalysis_3, 
                style: style_spatialanalysis_3,
                popuplayertitle: "spatial analysis",
                interactive: true,
                title: 'spatial analysis'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Buffered_1.setVisible(true);lyr_spatialanalysis2_2.setVisible(true);lyr_spatialanalysis_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Buffered_1,lyr_spatialanalysis2_2,lyr_spatialanalysis_3];
lyr_Buffered_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'addrln1': 'addrln1', 'city': 'city', 'state': 'state', });
lyr_spatialanalysis2_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'addrln1': 'addrln1', 'city': 'city', 'state': 'state', 'tract': 'tract', 'med_hh_inc': 'med_hh_inc', 'med_hh_i_1': 'med_hh_i_1', 'ami_catego': 'ami_catego', 'below_med_': 'below_med_', 'below_60pc': 'below_60pc', 'below_mode': 'below_mode', 'sup_dist': 'sup_dist', 'csa': 'csa', 'spa': 'spa', 'ESRI_OID': 'ESRI_OID', });
lyr_spatialanalysis_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'addrln1': 'addrln1', 'city': 'city', 'state': 'state', 'tract': 'tract', 'income_per': 'income_per', 'sup_dist': 'sup_dist', 'csa': 'csa', 'spa': 'spa', 'ESRI_OID': 'ESRI_OID', });
lyr_Buffered_1.set('fieldImages', {'X': '', 'Y': '', 'Name': '', 'addrln1': '', 'city': '', 'state': '', });
lyr_spatialanalysis2_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'addrln1': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'tract': 'TextEdit', 'med_hh_inc': 'Range', 'med_hh_i_1': 'Range', 'ami_catego': 'TextEdit', 'below_med_': 'TextEdit', 'below_60pc': 'TextEdit', 'below_mode': 'TextEdit', 'sup_dist': 'TextEdit', 'csa': 'TextEdit', 'spa': 'TextEdit', 'ESRI_OID': 'Range', });
lyr_spatialanalysis_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'addrln1': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'tract': 'TextEdit', 'income_per': 'Range', 'sup_dist': 'TextEdit', 'csa': 'TextEdit', 'spa': 'TextEdit', 'ESRI_OID': 'Range', });
lyr_Buffered_1.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Name': 'no label', 'addrln1': 'no label', 'city': 'no label', 'state': 'no label', });
lyr_spatialanalysis2_2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Name': 'no label', 'addrln1': 'no label', 'city': 'no label', 'state': 'no label', 'tract': 'no label', 'med_hh_inc': 'no label', 'med_hh_i_1': 'no label', 'ami_catego': 'no label', 'below_med_': 'no label', 'below_60pc': 'no label', 'below_mode': 'no label', 'sup_dist': 'no label', 'csa': 'no label', 'spa': 'no label', 'ESRI_OID': 'no label', });
lyr_spatialanalysis_3.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Name': 'no label', 'addrln1': 'no label', 'city': 'no label', 'state': 'no label', 'tract': 'no label', 'income_per': 'no label', 'sup_dist': 'no label', 'csa': 'no label', 'spa': 'no label', 'ESRI_OID': 'no label', });
lyr_spatialanalysis_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});