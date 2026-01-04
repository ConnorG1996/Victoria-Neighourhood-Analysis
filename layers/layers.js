var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Schooldistricts_2 = new ol.format.GeoJSON();
var features_Schooldistricts_2 = format_Schooldistricts_2.readFeatures(json_Schooldistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schooldistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schooldistricts_2.addFeatures(features_Schooldistricts_2);
var lyr_Schooldistricts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schooldistricts_2, 
                style: style_Schooldistricts_2,
                popuplayertitle: 'School districts',
                interactive: true,
                title: '<img src="styles/legend/Schooldistricts_2.png" /> School districts'
            });
var format_Bicycleroutes_3 = new ol.format.GeoJSON();
var features_Bicycleroutes_3 = format_Bicycleroutes_3.readFeatures(json_Bicycleroutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bicycleroutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bicycleroutes_3.addFeatures(features_Bicycleroutes_3);
var lyr_Bicycleroutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bicycleroutes_3, 
                style: style_Bicycleroutes_3,
                popuplayertitle: 'Bicycle routes',
                interactive: true,
                title: '<img src="styles/legend/Bicycleroutes_3.png" /> Bicycle routes'
            });
var format_ElementaryvsSecondary_4 = new ol.format.GeoJSON();
var features_ElementaryvsSecondary_4 = format_ElementaryvsSecondary_4.readFeatures(json_ElementaryvsSecondary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElementaryvsSecondary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElementaryvsSecondary_4.addFeatures(features_ElementaryvsSecondary_4);
var lyr_ElementaryvsSecondary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElementaryvsSecondary_4, 
                style: style_ElementaryvsSecondary_4,
                popuplayertitle: 'Elementary vs. Secondary',
                interactive: true,
    title: 'Elementary vs. Secondary<br />\
    <img src="styles/legend/ElementaryvsSecondary_4_0.png" /> ALL GRADES<br />\
    <img src="styles/legend/ElementaryvsSecondary_4_1.png" /> ELEMENTARY<br />\
    <img src="styles/legend/ElementaryvsSecondary_4_2.png" /> MIDDLE SCHOOL<br />\
    <img src="styles/legend/ElementaryvsSecondary_4_3.png" /> SECONDARY<br />' });
var format_PublicvsPrivate_5 = new ol.format.GeoJSON();
var features_PublicvsPrivate_5 = format_PublicvsPrivate_5.readFeatures(json_PublicvsPrivate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicvsPrivate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicvsPrivate_5.addFeatures(features_PublicvsPrivate_5);
var lyr_PublicvsPrivate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicvsPrivate_5, 
                style: style_PublicvsPrivate_5,
                popuplayertitle: 'Public vs. Private',
                interactive: true,
    title: 'Public vs. Private<br />\
    <img src="styles/legend/PublicvsPrivate_5_0.png" /> Private School<br />\
    <img src="styles/legend/PublicvsPrivate_5_1.png" /> Public School<br />' });
var format_Shopspolygons_6 = new ol.format.GeoJSON();
var features_Shopspolygons_6 = format_Shopspolygons_6.readFeatures(json_Shopspolygons_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shopspolygons_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shopspolygons_6.addFeatures(features_Shopspolygons_6);
var lyr_Shopspolygons_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shopspolygons_6, 
                style: style_Shopspolygons_6,
                popuplayertitle: 'Shops (polygons)',
                interactive: true,
                title: '<img src="styles/legend/Shopspolygons_6.png" /> Shops (polygons)'
            });
var format_Shopspoints_7 = new ol.format.GeoJSON();
var features_Shopspoints_7 = format_Shopspoints_7.readFeatures(json_Shopspoints_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shopspoints_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shopspoints_7.addFeatures(features_Shopspoints_7);
var lyr_Shopspoints_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shopspoints_7, 
                style: style_Shopspoints_7,
                popuplayertitle: 'Shops (points)',
                interactive: true,
                title: '<img src="styles/legend/Shopspoints_7.png" /> Shops (points)'
            });
var format_Libraries_8 = new ol.format.GeoJSON();
var features_Libraries_8 = format_Libraries_8.readFeatures(json_Libraries_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries_8.addFeatures(features_Libraries_8);
var lyr_Libraries_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Libraries_8, 
                style: style_Libraries_8,
                popuplayertitle: 'Libraries',
                interactive: true,
                title: '<img src="styles/legend/Libraries_8.png" /> Libraries'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Schooldistricts_2.setVisible(true);lyr_Bicycleroutes_3.setVisible(true);lyr_ElementaryvsSecondary_4.setVisible(true);lyr_PublicvsPrivate_5.setVisible(true);lyr_Shopspolygons_6.setVisible(true);lyr_Shopspoints_7.setVisible(true);lyr_Libraries_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_Schooldistricts_2,lyr_Bicycleroutes_3,lyr_ElementaryvsSecondary_4,lyr_PublicvsPrivate_5,lyr_Shopspolygons_6,lyr_Shopspoints_7,lyr_Libraries_8];
lyr_Schooldistricts_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ADMIN_AREA_SID': 'ADMIN_AREA_SID', 'SCHOOL_DISTRICT_NAME': 'SCHOOL_DISTRICT_NAME', 'SCHOOL_DISTRICT_NUMBER': 'SCHOOL_DISTRICT_NUMBER', 'FEATURE_CODE': 'FEATURE_CODE', 'FEATURE_AREA_SQM': 'FEATURE_AREA_SQM', 'FEATURE_LENGTH_M': 'FEATURE_LENGTH_M', 'OBJECTID': 'OBJECTID', 'SE_ANNO_CAD_DATA': 'SE_ANNO_CAD_DATA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'fme_feature_type': 'fme_feature_type', });
lyr_Bicycleroutes_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'route': 'route', 'type': 'type', 'to': 'to', 'from': 'from', 'ref': 'ref', 'cycle_network': 'cycle_network', 'website': 'website', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'operator': 'operator', 'name': 'name', 'network': 'network', 'description': 'description', });
lyr_ElementaryvsSecondary_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_DATA_ID': 'SOURCE_DATA_ID', 'OCCUPANT_NAME': 'OCCUPANT_NAME', 'PHYSICAL_ADDRESS': 'PHYSICAL_ADDRESS', 'LOCALITY': 'LOCALITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'DATE_UPDATED': 'DATE_UPDATED', 'CORE_FRENCH_OFFERED': 'CORE_FRENCH_OFFERED', 'DISTRICT_NAME': 'DISTRICT_NAME', 'SCHOOL_CATEGORY': 'SCHOOL_CATEGORY', 'SCHOOL_EDUCATION_LEVEL': 'SCHOOL_EDUCATION_LEVEL', 'SCHOOL_NUMBER': 'SCHOOL_NUMBER', 'SCHOOL_YEAR': 'SCHOOL_YEAR', 'RANKING': 'RANKING', });
lyr_PublicvsPrivate_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOURCE_DATA_ID': 'SOURCE_DATA_ID', 'OCCUPANT_NAME': 'OCCUPANT_NAME', 'PHYSICAL_ADDRESS': 'PHYSICAL_ADDRESS', 'LOCALITY': 'LOCALITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'DATE_UPDATED': 'DATE_UPDATED', 'CORE_FRENCH_OFFERED': 'CORE_FRENCH_OFFERED', 'DISTRICT_NAME': 'DISTRICT_NAME', 'SCHOOL_CATEGORY': 'SCHOOL_CATEGORY', 'SCHOOL_EDUCATION_LEVEL': 'SCHOOL_EDUCATION_LEVEL', 'SCHOOL_NUMBER': 'SCHOOL_NUMBER', 'SCHOOL_YEAR': 'SCHOOL_YEAR', 'RANKING': 'RANKING', });
lyr_Shopspolygons_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'amenity': 'amenity', 'start_date': 'start_date', 'origin': 'origin', 'toilets:access': 'toilets:access', 'payment:cash': 'payment:cash', 'email': 'email', 'contact:instagram': 'contact:instagram', 'drive_through': 'drive_through', 'contact:twitter': 'contact:twitter', 'contact:facebook': 'contact:facebook', 'opening_hours:pharmacy': 'opening_hours:pharmacy', 'payment:debit_cards': 'payment:debit_cards', 'payment:credit_cards': 'payment:credit_cards', 'addr:floor': 'addr:floor', 'ref': 'ref', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:ko': 'name:ko', 'level': 'level', 'cuisine': 'cuisine', 'alt_name:ko': 'alt_name:ko', 'opening_hours:url': 'opening_hours:url', 'addr:unit': 'addr:unit', 'branch': 'branch', 'check_date:opening_hours': 'check_date:opening_hours', 'wikipedia': 'wikipedia', 'internet_access': 'internet_access', 'survey:date': 'survey:date', 'image': 'image', 'fax': 'fax', 'addr:country': 'addr:country', 'payment:interac': 'payment:interac', 'gst_number': 'gst_number', 'dispensing': 'dispensing', 'building:cladding': 'building:cladding', 'wheelchair': 'wheelchair', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'building:levels': 'building:levels', 'website:fr': 'website:fr', 'website:en': 'website:en', 'toilets': 'toilets', 'operator': 'operator', 'not:brand:wikidata': 'not:brand:wikidata', 'opening_hours': 'opening_hours', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'addr:province': 'addr:province', 'addr:city': 'addr:city', 'website': 'website', 'phone': 'phone', 'layer': 'layer', 'smoking': 'smoking', 'wikidata': 'wikidata', 'name:en': 'name:en', 'addr:postcode': 'addr:postcode', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'landuse': 'landuse', 'type': 'type', 'name': 'name', 'check_date': 'check_date', });
lyr_Shopspoints_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'shop': 'shop', 'amenity': 'amenity', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'instagram': 'instagram', 'facebook': 'facebook', 'bulk_purchase': 'bulk_purchase', 'surveillance:zone': 'surveillance:zone', 'surveillance:type': 'surveillance:type', 'surveillance': 'surveillance', 'man_made': 'man_made', 'height': 'height', 'camera:type': 'camera:type', 'camera:mount': 'camera:mount', 'camera:direction': 'camera:direction', 'camera:angle': 'camera:angle', 'diet:vegan': 'diet:vegan', 'diet:gluten_free': 'diet:gluten_free', 'outdoor_seating': 'outdoor_seating', 'payment:electronic_purses': 'payment:electronic_purses', 'payment:cryptocurrencies': 'payment:cryptocurrencies', 'addr:country': 'addr:country', 'contact:facebook': 'contact:facebook', 'foot': 'foot', 'contact:instagram': 'contact:instagram', 'barrier': 'barrier', 'website:fr': 'website:fr', 'website:en': 'website:en', 'name:en': 'name:en', 'description': 'description', 'opening_hours:url': 'opening_hours:url', 'payment:visa': 'payment:visa', 'payment:mastercard': 'payment:mastercard', 'payment:debit_cards': 'payment:debit_cards', 'payment:credit_cards': 'payment:credit_cards', 'payment:cash': 'payment:cash', 'cuisine': 'cuisine', 'not:brand:wikidata': 'not:brand:wikidata', 'check_date:opening_hours': 'check_date:opening_hours', 'fax': 'fax', 'entrance': 'entrance', 'access': 'access', 'email': 'email', 'drive_through': 'drive_through', 'check_date': 'check_date', 'organic': 'organic', 'toilets:wheelchair': 'toilets:wheelchair', 'brand:wikipedia': 'brand:wikipedia', 'survey:date': 'survey:date', 'image': 'image', 'atm': 'atm', 'addr:province': 'addr:province', 'addr:city': 'addr:city', 'addr:unit': 'addr:unit', 'healthcare': 'healthcare', 'brand:wikidata': 'brand:wikidata', 'wheelchair': 'wheelchair', 'ref': 'ref', 'operator': 'operator', 'level': 'level', 'website': 'website', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name': 'name', 'brand': 'brand', 'branch': 'branch', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', });
lyr_Libraries_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SERVICE_POINT_ID': 'SERVICE_POINT_ID', 'SERVICE_POINT_NAME': 'SERVICE_POINT_NAME', 'LIBRARY_SYSTEM_NAME': 'LIBRARY_SYSTEM_NAME', 'STREET_ADDRESS': 'STREET_ADDRESS', 'LOCALITY': 'LOCALITY', 'POSTAL_CODE': 'POSTAL_CODE', 'WEBSITE_URL': 'WEBSITE_URL', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'COMPUTERS': 'COMPUTERS', 'PRINTERS_COPIERS': 'PRINTERS_COPIERS', 'CARD_SERVICES_IND': 'CARD_SERVICES_IND', 'CHECKOUT_IND': 'CHECKOUT_IND', 'WIFI_IND': 'WIFI_IND', 'OUTREACH_IND': 'OUTREACH_IND', 'ACCESSIBILITY_IND': 'ACCESSIBILITY_IND', 'THINGS_IND': 'THINGS_IND', 'MAKERSPACE_IND': 'MAKERSPACE_IND', 'CUSTODIAN_ORG_DESCRIPTION': 'CUSTODIAN_ORG_DESCRIPTION', 'BUSINESS_CATEGORY_CLASS': 'BUSINESS_CATEGORY_CLASS', 'BUSINESS_CATEGORY_DESCRIPTION': 'BUSINESS_CATEGORY_DESCRIPTION', 'OCCUPANT_TYPE_DESCRIPTION': 'OCCUPANT_TYPE_DESCRIPTION', 'DATE_UPDATED': 'DATE_UPDATED', 'OBJECTID': 'OBJECTID', 'SE_ANNO_CAD_DATA': 'SE_ANNO_CAD_DATA', 'fme_feature_type': 'fme_feature_type', });
lyr_Schooldistricts_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ADMIN_AREA_SID': 'Range', 'SCHOOL_DISTRICT_NAME': 'TextEdit', 'SCHOOL_DISTRICT_NUMBER': 'Range', 'FEATURE_CODE': 'TextEdit', 'FEATURE_AREA_SQM': 'TextEdit', 'FEATURE_LENGTH_M': 'TextEdit', 'OBJECTID': 'Range', 'SE_ANNO_CAD_DATA': 'Binary', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'fme_feature_type': 'TextEdit', });
lyr_Bicycleroutes_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'route': 'TextEdit', 'type': 'TextEdit', 'to': 'TextEdit', 'from': 'TextEdit', 'ref': 'TextEdit', 'cycle_network': 'TextEdit', 'website': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'network': 'TextEdit', 'description': 'TextEdit', });
lyr_ElementaryvsSecondary_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_DATA_ID': 'TextEdit', 'OCCUPANT_NAME': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'LOCALITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'DATE_UPDATED': 'DateTime', 'CORE_FRENCH_OFFERED': 'TextEdit', 'DISTRICT_NAME': 'TextEdit', 'SCHOOL_CATEGORY': 'TextEdit', 'SCHOOL_EDUCATION_LEVEL': 'TextEdit', 'SCHOOL_NUMBER': 'TextEdit', 'SCHOOL_YEAR': 'TextEdit', 'RANKING': 'TextEdit', });
lyr_PublicvsPrivate_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOURCE_DATA_ID': 'TextEdit', 'OCCUPANT_NAME': 'TextEdit', 'PHYSICAL_ADDRESS': 'TextEdit', 'LOCALITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'DATE_UPDATED': 'DateTime', 'CORE_FRENCH_OFFERED': 'TextEdit', 'DISTRICT_NAME': 'TextEdit', 'SCHOOL_CATEGORY': 'TextEdit', 'SCHOOL_EDUCATION_LEVEL': 'TextEdit', 'SCHOOL_NUMBER': 'TextEdit', 'SCHOOL_YEAR': 'TextEdit', 'RANKING': 'TextEdit', });
lyr_Shopspolygons_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'amenity': '', 'start_date': '', 'origin': '', 'toilets:access': '', 'payment:cash': '', 'email': '', 'contact:instagram': '', 'drive_through': '', 'contact:twitter': '', 'contact:facebook': '', 'opening_hours:pharmacy': '', 'payment:debit_cards': '', 'payment:credit_cards': '', 'addr:floor': '', 'ref': '', 'name:zh-Hant': '', 'name:zh-Hans': '', 'name:ko': '', 'level': '', 'cuisine': '', 'alt_name:ko': '', 'opening_hours:url': '', 'addr:unit': '', 'branch': '', 'check_date:opening_hours': '', 'wikipedia': '', 'internet_access': '', 'survey:date': '', 'image': '', 'fax': '', 'addr:country': '', 'payment:interac': '', 'gst_number': '', 'dispensing': '', 'building:cladding': '', 'wheelchair': '', 'roof:shape': '', 'roof:levels': '', 'building:levels': '', 'website:fr': '', 'website:en': '', 'toilets': '', 'operator': '', 'not:brand:wikidata': '', 'opening_hours': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'addr:province': '', 'addr:city': '', 'website': '', 'phone': '', 'layer': '', 'smoking': '', 'wikidata': '', 'name:en': '', 'addr:postcode': '', 'building': '', 'addr:street': '', 'addr:housenumber': '', 'landuse': '', 'type': '', 'name': '', 'check_date': '', });
lyr_Shopspoints_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'shop': '', 'amenity': '', 'highway': '', 'crossing:markings': '', 'crossing': '', 'instagram': '', 'facebook': '', 'bulk_purchase': '', 'surveillance:zone': '', 'surveillance:type': '', 'surveillance': '', 'man_made': '', 'height': '', 'camera:type': '', 'camera:mount': '', 'camera:direction': '', 'camera:angle': '', 'diet:vegan': '', 'diet:gluten_free': '', 'outdoor_seating': '', 'payment:electronic_purses': '', 'payment:cryptocurrencies': '', 'addr:country': '', 'contact:facebook': '', 'foot': '', 'contact:instagram': '', 'barrier': '', 'website:fr': '', 'website:en': '', 'name:en': '', 'description': '', 'opening_hours:url': '', 'payment:visa': '', 'payment:mastercard': '', 'payment:debit_cards': '', 'payment:credit_cards': '', 'payment:cash': '', 'cuisine': '', 'not:brand:wikidata': '', 'check_date:opening_hours': '', 'fax': '', 'entrance': '', 'access': '', 'email': '', 'drive_through': '', 'check_date': '', 'organic': '', 'toilets:wheelchair': '', 'brand:wikipedia': '', 'survey:date': '', 'image': '', 'atm': '', 'addr:province': '', 'addr:city': '', 'addr:unit': '', 'healthcare': '', 'brand:wikidata': '', 'wheelchair': '', 'ref': '', 'operator': '', 'level': '', 'website': '', 'phone': '', 'opening_hours': '', 'name': '', 'brand': '', 'branch': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', });
lyr_Libraries_8.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SERVICE_POINT_ID': 'TextEdit', 'SERVICE_POINT_NAME': 'TextEdit', 'LIBRARY_SYSTEM_NAME': 'TextEdit', 'STREET_ADDRESS': 'TextEdit', 'LOCALITY': 'TextEdit', 'POSTAL_CODE': 'TextEdit', 'WEBSITE_URL': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'COMPUTERS': 'Range', 'PRINTERS_COPIERS': 'Range', 'CARD_SERVICES_IND': 'TextEdit', 'CHECKOUT_IND': 'TextEdit', 'WIFI_IND': 'TextEdit', 'OUTREACH_IND': 'TextEdit', 'ACCESSIBILITY_IND': 'TextEdit', 'THINGS_IND': 'TextEdit', 'MAKERSPACE_IND': 'TextEdit', 'CUSTODIAN_ORG_DESCRIPTION': 'TextEdit', 'BUSINESS_CATEGORY_CLASS': 'TextEdit', 'BUSINESS_CATEGORY_DESCRIPTION': 'TextEdit', 'OCCUPANT_TYPE_DESCRIPTION': 'TextEdit', 'DATE_UPDATED': 'DateTime', 'OBJECTID': 'Range', 'SE_ANNO_CAD_DATA': 'Binary', 'fme_feature_type': 'TextEdit', });
lyr_Schooldistricts_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'ADMIN_AREA_SID': 'hidden field', 'SCHOOL_DISTRICT_NAME': 'inline label - always visible', 'SCHOOL_DISTRICT_NUMBER': 'hidden field', 'FEATURE_CODE': 'hidden field', 'FEATURE_AREA_SQM': 'hidden field', 'FEATURE_LENGTH_M': 'hidden field', 'OBJECTID': 'hidden field', 'SE_ANNO_CAD_DATA': 'hidden field', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'fme_feature_type': 'hidden field', });
lyr_Bicycleroutes_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'inline label - always visible', 'route': 'inline label - always visible', 'type': 'inline label - always visible', 'to': 'hidden field', 'from': 'hidden field', 'ref': 'hidden field', 'cycle_network': 'inline label - always visible', 'website': 'inline label - always visible', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'operator': 'hidden field', 'name': 'inline label - always visible', 'network': 'inline label - always visible', 'description': 'hidden field', });
lyr_ElementaryvsSecondary_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'SOURCE_DATA_ID': 'hidden field', 'OCCUPANT_NAME': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'inline label - always visible', 'LOCALITY': 'inline label - always visible', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'DATE_UPDATED': 'hidden field', 'CORE_FRENCH_OFFERED': 'inline label - always visible', 'DISTRICT_NAME': 'inline label - always visible', 'SCHOOL_CATEGORY': 'inline label - always visible', 'SCHOOL_EDUCATION_LEVEL': 'inline label - always visible', 'SCHOOL_NUMBER': 'hidden field', 'SCHOOL_YEAR': 'hidden field', 'RANKING': 'inline label - always visible', });
lyr_PublicvsPrivate_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'SOURCE_DATA_ID': 'hidden field', 'OCCUPANT_NAME': 'inline label - always visible', 'PHYSICAL_ADDRESS': 'hidden field', 'LOCALITY': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'DATE_UPDATED': 'hidden field', 'CORE_FRENCH_OFFERED': 'hidden field', 'DISTRICT_NAME': 'hidden field', 'SCHOOL_CATEGORY': 'inline label - always visible', 'SCHOOL_EDUCATION_LEVEL': 'hidden field', 'SCHOOL_NUMBER': 'hidden field', 'SCHOOL_YEAR': 'hidden field', 'RANKING': 'hidden field', });
lyr_Shopspolygons_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'inline label - always visible', 'shop': 'inline label - always visible', 'amenity': 'inline label - always visible', 'start_date': 'hidden field', 'origin': 'hidden field', 'toilets:access': 'hidden field', 'payment:cash': 'hidden field', 'email': 'hidden field', 'contact:instagram': 'hidden field', 'drive_through': 'hidden field', 'contact:twitter': 'hidden field', 'contact:facebook': 'hidden field', 'opening_hours:pharmacy': 'hidden field', 'payment:debit_cards': 'hidden field', 'payment:credit_cards': 'hidden field', 'addr:floor': 'hidden field', 'ref': 'hidden field', 'name:zh-Hant': 'hidden field', 'name:zh-Hans': 'hidden field', 'name:ko': 'hidden field', 'level': 'hidden field', 'cuisine': 'hidden field', 'alt_name:ko': 'hidden field', 'opening_hours:url': 'hidden field', 'addr:unit': 'hidden field', 'branch': 'hidden field', 'check_date:opening_hours': 'hidden field', 'wikipedia': 'hidden field', 'internet_access': 'hidden field', 'survey:date': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'addr:country': 'hidden field', 'payment:interac': 'hidden field', 'gst_number': 'hidden field', 'dispensing': 'hidden field', 'building:cladding': 'hidden field', 'wheelchair': 'hidden field', 'roof:shape': 'hidden field', 'roof:levels': 'hidden field', 'building:levels': 'hidden field', 'website:fr': 'hidden field', 'website:en': 'hidden field', 'toilets': 'hidden field', 'operator': 'hidden field', 'not:brand:wikidata': 'hidden field', 'opening_hours': 'hidden field', 'brand:wikipedia': 'hidden field', 'brand:wikidata': 'hidden field', 'brand': 'hidden field', 'addr:province': 'hidden field', 'addr:city': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'layer': 'hidden field', 'smoking': 'hidden field', 'wikidata': 'hidden field', 'name:en': 'hidden field', 'addr:postcode': 'hidden field', 'building': 'hidden field', 'addr:street': 'hidden field', 'addr:housenumber': 'hidden field', 'landuse': 'hidden field', 'type': 'hidden field', 'name': 'hidden field', 'check_date': 'hidden field', });
lyr_Shopspoints_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'inline label - always visible', 'shop': 'inline label - always visible', 'amenity': 'inline label - always visible', 'highway': 'hidden field', 'crossing:markings': 'hidden field', 'crossing': 'hidden field', 'instagram': 'hidden field', 'facebook': 'hidden field', 'bulk_purchase': 'hidden field', 'surveillance:zone': 'hidden field', 'surveillance:type': 'hidden field', 'surveillance': 'hidden field', 'man_made': 'hidden field', 'height': 'hidden field', 'camera:type': 'hidden field', 'camera:mount': 'hidden field', 'camera:direction': 'hidden field', 'camera:angle': 'hidden field', 'diet:vegan': 'hidden field', 'diet:gluten_free': 'hidden field', 'outdoor_seating': 'hidden field', 'payment:electronic_purses': 'hidden field', 'payment:cryptocurrencies': 'hidden field', 'addr:country': 'hidden field', 'contact:facebook': 'hidden field', 'foot': 'hidden field', 'contact:instagram': 'hidden field', 'barrier': 'hidden field', 'website:fr': 'hidden field', 'website:en': 'hidden field', 'name:en': 'hidden field', 'description': 'hidden field', 'opening_hours:url': 'hidden field', 'payment:visa': 'hidden field', 'payment:mastercard': 'hidden field', 'payment:debit_cards': 'hidden field', 'payment:credit_cards': 'hidden field', 'payment:cash': 'hidden field', 'cuisine': 'hidden field', 'not:brand:wikidata': 'hidden field', 'check_date:opening_hours': 'hidden field', 'fax': 'hidden field', 'entrance': 'hidden field', 'access': 'hidden field', 'email': 'hidden field', 'drive_through': 'hidden field', 'check_date': 'hidden field', 'organic': 'hidden field', 'toilets:wheelchair': 'hidden field', 'brand:wikipedia': 'hidden field', 'survey:date': 'hidden field', 'image': 'hidden field', 'atm': 'hidden field', 'addr:province': 'hidden field', 'addr:city': 'hidden field', 'addr:unit': 'hidden field', 'healthcare': 'hidden field', 'brand:wikidata': 'hidden field', 'wheelchair': 'hidden field', 'ref': 'hidden field', 'operator': 'hidden field', 'level': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_hours': 'hidden field', 'name': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'addr:street': 'hidden field', 'addr:postcode': 'hidden field', 'addr:housenumber': 'hidden field', });
lyr_Libraries_8.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'SERVICE_POINT_ID': 'hidden field', 'SERVICE_POINT_NAME': 'inline label - always visible', 'LIBRARY_SYSTEM_NAME': 'hidden field', 'STREET_ADDRESS': 'hidden field', 'LOCALITY': 'inline label - always visible', 'POSTAL_CODE': 'hidden field', 'WEBSITE_URL': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'COMPUTERS': 'hidden field', 'PRINTERS_COPIERS': 'hidden field', 'CARD_SERVICES_IND': 'hidden field', 'CHECKOUT_IND': 'hidden field', 'WIFI_IND': 'hidden field', 'OUTREACH_IND': 'hidden field', 'ACCESSIBILITY_IND': 'hidden field', 'THINGS_IND': 'hidden field', 'MAKERSPACE_IND': 'hidden field', 'CUSTODIAN_ORG_DESCRIPTION': 'hidden field', 'BUSINESS_CATEGORY_CLASS': 'hidden field', 'BUSINESS_CATEGORY_DESCRIPTION': 'hidden field', 'OCCUPANT_TYPE_DESCRIPTION': 'hidden field', 'DATE_UPDATED': 'hidden field', 'OBJECTID': 'hidden field', 'SE_ANNO_CAD_DATA': 'hidden field', 'fme_feature_type': 'hidden field', });
lyr_Libraries_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});