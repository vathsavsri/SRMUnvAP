var wms_layers = [];

var format_SBlock_0 = new ol.format.GeoJSON();
var features_SBlock_0 = format_SBlock_0.readFeatures(json_SBlock_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBlock_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBlock_0.addFeatures(features_SBlock_0);
var lyr_SBlock_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBlock_0, 
                style: style_SBlock_0,
                popuplayertitle: 'S Block',
                interactive: true,
                title: '<img src="styles/legend/SBlock_0.png" /> S Block'
            });
var format_GangaHostel_1 = new ol.format.GeoJSON();
var features_GangaHostel_1 = format_GangaHostel_1.readFeatures(json_GangaHostel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GangaHostel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GangaHostel_1.addFeatures(features_GangaHostel_1);
var lyr_GangaHostel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GangaHostel_1, 
                style: style_GangaHostel_1,
                popuplayertitle: 'Ganga Hostel',
                interactive: true,
                title: '<img src="styles/legend/GangaHostel_1.png" /> Ganga Hostel'
            });
var format_Vedavathi_2 = new ol.format.GeoJSON();
var features_Vedavathi_2 = format_Vedavathi_2.readFeatures(json_Vedavathi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vedavathi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vedavathi_2.addFeatures(features_Vedavathi_2);
var lyr_Vedavathi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vedavathi_2, 
                style: style_Vedavathi_2,
                popuplayertitle: 'Vedavathi',
                interactive: true,
                title: '<img src="styles/legend/Vedavathi_2.png" /> Vedavathi'
            });
var format_AdminBlock_3 = new ol.format.GeoJSON();
var features_AdminBlock_3 = format_AdminBlock_3.readFeatures(json_AdminBlock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdminBlock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdminBlock_3.addFeatures(features_AdminBlock_3);
var lyr_AdminBlock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdminBlock_3, 
                style: style_AdminBlock_3,
                popuplayertitle: 'Admin Block',
                interactive: true,
                title: '<img src="styles/legend/AdminBlock_3.png" /> Admin Block'
            });
var format_Tower1_4 = new ol.format.GeoJSON();
var features_Tower1_4 = format_Tower1_4.readFeatures(json_Tower1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower1_4.addFeatures(features_Tower1_4);
var lyr_Tower1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower1_4, 
                style: style_Tower1_4,
                popuplayertitle: 'Tower 1',
                interactive: true,
                title: '<img src="styles/legend/Tower1_4.png" /> Tower 1'
            });
var format_Tower2_5 = new ol.format.GeoJSON();
var features_Tower2_5 = format_Tower2_5.readFeatures(json_Tower2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower2_5.addFeatures(features_Tower2_5);
var lyr_Tower2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower2_5, 
                style: style_Tower2_5,
                popuplayertitle: 'Tower 2',
                interactive: true,
                title: '<img src="styles/legend/Tower2_5.png" /> Tower 2'
            });
var format_Tower3_6 = new ol.format.GeoJSON();
var features_Tower3_6 = format_Tower3_6.readFeatures(json_Tower3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower3_6.addFeatures(features_Tower3_6);
var lyr_Tower3_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower3_6, 
                style: style_Tower3_6,
                popuplayertitle: 'Tower 3',
                interactive: true,
                title: '<img src="styles/legend/Tower3_6.png" /> Tower 3'
            });
var format_Tower4_7 = new ol.format.GeoJSON();
var features_Tower4_7 = format_Tower4_7.readFeatures(json_Tower4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower4_7.addFeatures(features_Tower4_7);
var lyr_Tower4_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower4_7, 
                style: style_Tower4_7,
                popuplayertitle: 'Tower 4',
                interactive: true,
                title: '<img src="styles/legend/Tower4_7.png" /> Tower 4'
            });
var format_Tower5_8 = new ol.format.GeoJSON();
var features_Tower5_8 = format_Tower5_8.readFeatures(json_Tower5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower5_8.addFeatures(features_Tower5_8);
var lyr_Tower5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tower5_8, 
                style: style_Tower5_8,
                popuplayertitle: 'Tower 5',
                interactive: true,
                title: '<img src="styles/legend/Tower5_8.png" /> Tower 5'
            });
var format_AnapurnaMess_9 = new ol.format.GeoJSON();
var features_AnapurnaMess_9 = format_AnapurnaMess_9.readFeatures(json_AnapurnaMess_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnapurnaMess_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnapurnaMess_9.addFeatures(features_AnapurnaMess_9);
var lyr_AnapurnaMess_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnapurnaMess_9, 
                style: style_AnapurnaMess_9,
                popuplayertitle: 'Anapurna Mess',
                interactive: true,
                title: '<img src="styles/legend/AnapurnaMess_9.png" /> Anapurna Mess'
            });
var format_Hotwatergenerator_10 = new ol.format.GeoJSON();
var features_Hotwatergenerator_10 = format_Hotwatergenerator_10.readFeatures(json_Hotwatergenerator_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotwatergenerator_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotwatergenerator_10.addFeatures(features_Hotwatergenerator_10);
var lyr_Hotwatergenerator_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotwatergenerator_10, 
                style: style_Hotwatergenerator_10,
                popuplayertitle: 'Hot water generator',
                interactive: true,
                title: '<img src="styles/legend/Hotwatergenerator_10.png" /> Hot water generator'
            });
var format_SBR_11 = new ol.format.GeoJSON();
var features_SBR_11 = format_SBR_11.readFeatures(json_SBR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBR_11.addFeatures(features_SBR_11);
var lyr_SBR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBR_11, 
                style: style_SBR_11,
                popuplayertitle: 'SBR',
                interactive: true,
                title: '<img src="styles/legend/SBR_11.png" /> SBR'
            });
var format_JCBoseResearchblock_12 = new ol.format.GeoJSON();
var features_JCBoseResearchblock_12 = format_JCBoseResearchblock_12.readFeatures(json_JCBoseResearchblock_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JCBoseResearchblock_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JCBoseResearchblock_12.addFeatures(features_JCBoseResearchblock_12);
var lyr_JCBoseResearchblock_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JCBoseResearchblock_12, 
                style: style_JCBoseResearchblock_12,
                popuplayertitle: 'J C Bose Research block',
                interactive: true,
                title: '<img src="styles/legend/JCBoseResearchblock_12.png" /> J C Bose Research block'
            });
var format_XLab_13 = new ol.format.GeoJSON();
var features_XLab_13 = format_XLab_13.readFeatures(json_XLab_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XLab_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XLab_13.addFeatures(features_XLab_13);
var lyr_XLab_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XLab_13, 
                style: style_XLab_13,
                popuplayertitle: 'X Lab',
                interactive: true,
                title: '<img src="styles/legend/XLab_13.png" /> X Lab'
            });
var format_CBlock_14 = new ol.format.GeoJSON();
var features_CBlock_14 = format_CBlock_14.readFeatures(json_CBlock_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBlock_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBlock_14.addFeatures(features_CBlock_14);
var lyr_CBlock_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBlock_14, 
                style: style_CBlock_14,
                popuplayertitle: 'C Block',
                interactive: true,
                title: '<img src="styles/legend/CBlock_14.png" /> C Block'
            });
var format_FoodCourt_15 = new ol.format.GeoJSON();
var features_FoodCourt_15 = format_FoodCourt_15.readFeatures(json_FoodCourt_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoodCourt_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoodCourt_15.addFeatures(features_FoodCourt_15);
var lyr_FoodCourt_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FoodCourt_15, 
                style: style_FoodCourt_15,
                popuplayertitle: 'Food Court',
                interactive: true,
                title: '<img src="styles/legend/FoodCourt_15.png" /> Food Court'
            });
var format_TennisCourt_16 = new ol.format.GeoJSON();
var features_TennisCourt_16 = format_TennisCourt_16.readFeatures(json_TennisCourt_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TennisCourt_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TennisCourt_16.addFeatures(features_TennisCourt_16);
var lyr_TennisCourt_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TennisCourt_16, 
                style: style_TennisCourt_16,
                popuplayertitle: 'Tennis Court',
                interactive: true,
                title: '<img src="styles/legend/TennisCourt_16.png" /> Tennis Court'
            });
var format_BasketballCourt_17 = new ol.format.GeoJSON();
var features_BasketballCourt_17 = format_BasketballCourt_17.readFeatures(json_BasketballCourt_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasketballCourt_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasketballCourt_17.addFeatures(features_BasketballCourt_17);
var lyr_BasketballCourt_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasketballCourt_17, 
                style: style_BasketballCourt_17,
                popuplayertitle: 'Basketball Court',
                interactive: true,
                title: '<img src="styles/legend/BasketballCourt_17.png" /> Basketball Court'
            });
var format_CricketGround_18 = new ol.format.GeoJSON();
var features_CricketGround_18 = format_CricketGround_18.readFeatures(json_CricketGround_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CricketGround_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CricketGround_18.addFeatures(features_CricketGround_18);
var lyr_CricketGround_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CricketGround_18, 
                style: style_CricketGround_18,
                popuplayertitle: 'Cricket Ground',
                interactive: true,
                title: '<img src="styles/legend/CricketGround_18.png" /> Cricket Ground'
            });
var format_FootballGround_19 = new ol.format.GeoJSON();
var features_FootballGround_19 = format_FootballGround_19.readFeatures(json_FootballGround_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FootballGround_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FootballGround_19.addFeatures(features_FootballGround_19);
var lyr_FootballGround_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FootballGround_19, 
                style: style_FootballGround_19,
                popuplayertitle: 'Football Ground',
                interactive: true,
                title: '<img src="styles/legend/FootballGround_19.png" /> Football Ground'
            });

lyr_SBlock_0.setVisible(true);lyr_GangaHostel_1.setVisible(true);lyr_Vedavathi_2.setVisible(true);lyr_AdminBlock_3.setVisible(true);lyr_Tower1_4.setVisible(true);lyr_Tower2_5.setVisible(true);lyr_Tower3_6.setVisible(true);lyr_Tower4_7.setVisible(true);lyr_Tower5_8.setVisible(true);lyr_AnapurnaMess_9.setVisible(true);lyr_Hotwatergenerator_10.setVisible(true);lyr_SBR_11.setVisible(true);lyr_JCBoseResearchblock_12.setVisible(true);lyr_XLab_13.setVisible(true);lyr_CBlock_14.setVisible(true);lyr_FoodCourt_15.setVisible(true);lyr_TennisCourt_16.setVisible(true);lyr_BasketballCourt_17.setVisible(true);lyr_CricketGround_18.setVisible(true);lyr_FootballGround_19.setVisible(true);
var layersList = [lyr_SBlock_0,lyr_GangaHostel_1,lyr_Vedavathi_2,lyr_AdminBlock_3,lyr_Tower1_4,lyr_Tower2_5,lyr_Tower3_6,lyr_Tower4_7,lyr_Tower5_8,lyr_AnapurnaMess_9,lyr_Hotwatergenerator_10,lyr_SBR_11,lyr_JCBoseResearchblock_12,lyr_XLab_13,lyr_CBlock_14,lyr_FoodCourt_15,lyr_TennisCourt_16,lyr_BasketballCourt_17,lyr_CricketGround_18,lyr_FootballGround_19];
lyr_SBlock_0.set('fieldAliases', {'id': 'id', });
lyr_GangaHostel_1.set('fieldAliases', {'id': 'id', });
lyr_Vedavathi_2.set('fieldAliases', {'id': 'id', });
lyr_AdminBlock_3.set('fieldAliases', {'id': 'id', });
lyr_Tower1_4.set('fieldAliases', {'id': 'id', });
lyr_Tower2_5.set('fieldAliases', {'id': 'id', });
lyr_Tower3_6.set('fieldAliases', {'id': 'id', });
lyr_Tower4_7.set('fieldAliases', {'id': 'id', });
lyr_Tower5_8.set('fieldAliases', {'id': 'id', });
lyr_AnapurnaMess_9.set('fieldAliases', {'id': 'id', });
lyr_Hotwatergenerator_10.set('fieldAliases', {'id': 'id', });
lyr_SBR_11.set('fieldAliases', {'id': 'id', });
lyr_JCBoseResearchblock_12.set('fieldAliases', {'id': 'id', });
lyr_XLab_13.set('fieldAliases', {'id': 'id', });
lyr_CBlock_14.set('fieldAliases', {'id': 'id', });
lyr_FoodCourt_15.set('fieldAliases', {'id': 'id', });
lyr_TennisCourt_16.set('fieldAliases', {'id': 'id', });
lyr_BasketballCourt_17.set('fieldAliases', {'id': 'id', });
lyr_CricketGround_18.set('fieldAliases', {'id': 'id', });
lyr_FootballGround_19.set('fieldAliases', {'id': 'id', });
lyr_SBlock_0.set('fieldImages', {'id': '', });
lyr_GangaHostel_1.set('fieldImages', {'id': '', });
lyr_Vedavathi_2.set('fieldImages', {'id': '', });
lyr_AdminBlock_3.set('fieldImages', {'id': '', });
lyr_Tower1_4.set('fieldImages', {'id': '', });
lyr_Tower2_5.set('fieldImages', {'id': '', });
lyr_Tower3_6.set('fieldImages', {'id': '', });
lyr_Tower4_7.set('fieldImages', {'id': '', });
lyr_Tower5_8.set('fieldImages', {'id': '', });
lyr_AnapurnaMess_9.set('fieldImages', {'id': '', });
lyr_Hotwatergenerator_10.set('fieldImages', {'id': '', });
lyr_SBR_11.set('fieldImages', {'id': '', });
lyr_JCBoseResearchblock_12.set('fieldImages', {'id': '', });
lyr_XLab_13.set('fieldImages', {'id': '', });
lyr_CBlock_14.set('fieldImages', {'id': '', });
lyr_FoodCourt_15.set('fieldImages', {'id': '', });
lyr_TennisCourt_16.set('fieldImages', {'id': '', });
lyr_BasketballCourt_17.set('fieldImages', {'id': '', });
lyr_CricketGround_18.set('fieldImages', {'id': '', });
lyr_FootballGround_19.set('fieldImages', {'id': '', });
lyr_SBlock_0.set('fieldLabels', {'id': 'no label', });
lyr_GangaHostel_1.set('fieldLabels', {'id': 'no label', });
lyr_Vedavathi_2.set('fieldLabels', {'id': 'no label', });
lyr_AdminBlock_3.set('fieldLabels', {'id': 'no label', });
lyr_Tower1_4.set('fieldLabels', {'id': 'no label', });
lyr_Tower2_5.set('fieldLabels', {'id': 'no label', });
lyr_Tower3_6.set('fieldLabels', {'id': 'no label', });
lyr_Tower4_7.set('fieldLabels', {'id': 'no label', });
lyr_Tower5_8.set('fieldLabels', {'id': 'no label', });
lyr_AnapurnaMess_9.set('fieldLabels', {'id': 'no label', });
lyr_Hotwatergenerator_10.set('fieldLabels', {'id': 'no label', });
lyr_SBR_11.set('fieldLabels', {'id': 'no label', });
lyr_JCBoseResearchblock_12.set('fieldLabels', {'id': 'no label', });
lyr_XLab_13.set('fieldLabels', {'id': 'no label', });
lyr_CBlock_14.set('fieldLabels', {'id': 'no label', });
lyr_FoodCourt_15.set('fieldLabels', {'id': 'no label', });
lyr_TennisCourt_16.set('fieldLabels', {'id': 'no label', });
lyr_BasketballCourt_17.set('fieldLabels', {'id': 'no label', });
lyr_CricketGround_18.set('fieldLabels', {'id': 'no label', });
lyr_FootballGround_19.set('fieldLabels', {'id': 'no label', });
lyr_FootballGround_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});