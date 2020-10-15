var wms_layers = [];
var format_kecamatanbarabylurahsalin_0 = new ol.format.GeoJSON();
var features_kecamatanbarabylurahsalin_0 = format_kecamatanbarabylurahsalin_0.readFeatures(json_kecamatanbarabylurahsalin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatanbarabylurahsalin_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatanbarabylurahsalin_0.addFeatures(features_kecamatanbarabylurahsalin_0);var lyr_kecamatanbarabylurahsalin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatanbarabylurahsalin_0, 
                style: style_kecamatanbarabylurahsalin_0,
    title: 'kecamatan bara by lurah salin<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_0.png" /> BALANDAI<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_1.png" /> BUNTU DATU<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_2.png" /> RAMPOANG<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_3.png" /> TEMMALEBBA<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_4.png" /> TO\'BULUNG<br />\
    <img src="styles/legend/kecamatanbarabylurahsalin_0_5.png" /> <br />'
        });var format_DAFTARTK_1 = new ol.format.GeoJSON();
var features_DAFTARTK_1 = format_DAFTARTK_1.readFeatures(json_DAFTARTK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAFTARTK_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DAFTARTK_1.addFeatures(features_DAFTARTK_1);var lyr_DAFTARTK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAFTARTK_1, 
                style: style_DAFTARTK_1,
                title: '<img src="styles/legend/DAFTARTK_1.png" /> DAFTAR TK'
            });

lyr_kecamatanbarabylurahsalin_0.setVisible(true);lyr_DAFTARTK_1.setVisible(true);
var layersList = [lyr_kecamatanbarabylurahsalin_0,lyr_DAFTARTK_1];
lyr_kecamatanbarabylurahsalin_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'KABKOT': 'KABKOT', });
lyr_DAFTARTK_1.set('fieldAliases', {'NAMA TK': 'NAMA TK', 'PENGAJAR': 'PENGAJAR', 'RUANGAN': 'RUANGAN', 'SISWA': 'SISWA', });
lyr_kecamatanbarabylurahsalin_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_DAFTARTK_1.set('fieldImages', {'NAMA TK': 'TextEdit', 'PENGAJAR': 'TextEdit', 'RUANGAN': 'TextEdit', 'SISWA': 'TextEdit', });
lyr_kecamatanbarabylurahsalin_0.set('fieldLabels', {'KECAMATAN': 'no label', 'DESA': 'no label', 'KABKOT': 'no label', });
lyr_DAFTARTK_1.set('fieldLabels', {'NAMA TK': 'no label', 'PENGAJAR': 'no label', 'RUANGAN': 'no label', 'SISWA': 'no label', });
lyr_DAFTARTK_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});