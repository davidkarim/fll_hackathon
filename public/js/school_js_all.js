var ACCESS_TOKEN, CONTAINER_ID, DARK, DATA, DEFAULT_LOCATION, DEFAULT_ZOOM, LIGHT, MAPSTYLE, TEXT_FONT, TEXT_SIZE, TYPE, _, blue, citations, clusterMaxZoom, clusterOption, clusterRadius, clusterSource, cluster_keys, continental_us, dataPoints, dataURI, fort_lauderdale, geoJsonData, high, locations, low, map, map_keys, map_kwargs, map_styles, map_values, mapsourceType, medium, pink, pointsSource, points_keys, rangeHigh, rangeLow, rangeMedium, ref1, ref2, ref3, ref4, south_florida, toObject, yellow;

geoJsonData = {
  "type": "FeatureCollection",
  "crs": {
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    },
    "type": "name"
  },
  "features": [
    {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.0907020568848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1963806152344, 26.1022567749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1546478271484, 26.1275215148926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1963806152344, 26.1022567749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1137619018555, 26.1966400146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070938110352, 26.1819076538086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.0907020568848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1370086669922, 26.1075820922852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.0907020568848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1340713500977, 26.1021385192871]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1705932617188, 26.1512298583984]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760406494141, 26.1423587799072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1534805297852, 26.1220836639404]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1229858398438, 26.2036781311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.090648651123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1280136108398, 26.2054481506348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1278839111328, 26.1425609588623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1280136108398, 26.2054481506348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1278839111328, 26.1425609588623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1963806152344, 26.1022567749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785049438477, 26.1363925933838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1705932617188, 26.1512298583984]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1773223876953, 26.1423301696777]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927642822266, 26.0918922424316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1711044311523, 26.1480236053467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1657333374023, 26.1217155456543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.162467956543, 26.1218452453613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1105346679688, 26.1896705627441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1940078735352, 26.1210975646973]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.146842956543, 26.0972709655762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1969223022461, 26.1005172729492]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1280136108398, 26.2054481506348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274356842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714706420898, 26.1423683166504]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.174430847168, 26.1382789611816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1530609130859, 26.0990009307861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1546478271484, 26.1275215148926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1635437011719, 26.1218013763428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511306762695, 26.1419773101807]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1546478271484, 26.1275215148926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.107048034668, 26.1838512420654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1285934448242, 26.1354484558105]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.174430847168, 26.1382789611816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848545074463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1773223876953, 26.1423301696777]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1729431152344, 26.1623363494873]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1541519165039, 26.1453971862793]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274356842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1560287475586, 26.127462387085]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1539688110352, 26.1388759613037]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1016540527344, 26.1465682983398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1585006713867, 26.121919631958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1676940917969, 26.1165866851807]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274356842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1747512817383, 26.1511306762695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1794662475586, 26.1520938873291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848545074463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1657333374023, 26.1217155456543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1137619018555, 26.1966400146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649398803711, 26.1107692718506]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511306762695, 26.1419773101807]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1796264648438, 26.1120204925537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1635437011719, 26.1218013763428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778335571289, 26.1104354858398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1404266357422, 26.1386852264404]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848545074463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760406494141, 26.1423587799072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1570434570313, 26.1256942749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1278839111328, 26.1425609588623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1137619018555, 26.1966400146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1747512817383, 26.1511306762695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.107048034668, 26.1838512420654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1858978271484, 26.1086673736572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0861682891846]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1773223876953, 26.1423301696777]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.0907020568848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1868591308594, 26.149658203125]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1430282592773, 26.1092548370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1148376464844, 26.1358013153076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1363372802734, 26.1242752075195]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1229858398438, 26.2036781311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1470031738281, 26.1018600463867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0861682891846]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1404266357422, 26.1386852264404]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1635437011719, 26.1218013763428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1570434570313, 26.1256942749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785049438477, 26.1363925933838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "speeding/schoolbus res/busn/in"
        },
        "type": "Feature",
        "coordinates": [-80.1469955444336, 26.1000003814697]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070785522461, 26.1826286315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1152954101563, 26.196605682373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1229858398438, 26.2036781311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848545074463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1835327148438, 26.0924777984619]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511306762695, 26.1419773101807]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1705932617188, 26.1512298583984]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1295928955078, 26.1055927276611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.162467956543, 26.1218452453613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1705932617188, 26.1512298583984]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1530456542969, 26.1418914794922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1594467163086, 26.1219005584717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.174430847168, 26.1382789611816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1642456054688, 26.1327857971191]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760406494141, 26.1423587799072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848545074463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1697692871094, 26.1512451171875]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1278839111328, 26.1425609588623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785049438477, 26.1363925933838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1137619018555, 26.1966400146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1548385620117, 26.1220550537109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.0907020568848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1784973144531, 26.1382427215576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1915130615234, 26.1211471557617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1340255737305, 26.1030731201172]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760406494141, 26.1423587799072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1530838012695, 26.099910736084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1280136108398, 26.2054481506348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1560287475586, 26.127462387085]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "speeding/schoolbus res/busn/in"
        },
        "type": "Feature",
        "coordinates": [-80.1033096313477, 26.1318874359131]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1449508666992, 26.1000823974609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1342544555664, 26.1002445220947]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1606674194336, 26.1365299224854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475448608398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1254501342773, 26.203649520874]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539535522461, 26.1401023864746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1315307617188, 26.2035713195801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475448608398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1364898681641, 26.2049522399902]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441345214844, 26.1350193023682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1588439941406, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1546325683594, 26.1275215148926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539535522461, 26.1401023864746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441345214844, 26.1350193023682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991535186768]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875381469727, 26.09202003479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1560287475586, 26.127462387085]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828460693359, 26.109525680542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1686401367188, 26.12180519104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1570434570313, 26.1256847381592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1140670776367, 26.30322265625]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1339950561523, 26.1030902862549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1172180175781, 26.2036571502686]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1915130615234, 26.1211471557617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760330200195, 26.0957489013672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1719818115234, 26.151195526123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760330200195, 26.0957489013672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576385498047, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1686401367188, 26.12180519104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385536193848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.114860534668, 26.139986038208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385536193848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875381469727, 26.09202003479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1315460205078, 26.2035713195801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333084106445, 26.1243419647217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "speeding/schoolbus res/busn/in"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576385498047, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1405639648438, 26.1241779327393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1760330200195, 26.0957489013672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1588439941406, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1529083251953, 26.1392478942871]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991535186768]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385536193848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1759185791016, 26.1079845428467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1606674194336, 26.1365299224854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1315307617188, 26.2035713195801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274337768555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1449508666992, 26.1000823974609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1339950561523, 26.1030902862549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1339950561523, 26.1030902862549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828842163086, 26.1086959838867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1747512817383, 26.1511306762695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274337768555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.179573059082, 26.1095542907715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1865997314453, 26.1379737854004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828460693359, 26.109525680542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539535522461, 26.1401023864746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540603637695, 26.1418685913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.090648651123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1403732299805, 26.1369323730469]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1915130615234, 26.1211471557617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576385498047, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475391387939]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1667327880859, 26.1217555999756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1315460205078, 26.2035713195801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1554107666016, 26.2438926696777]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443176269531, 26.1403617858887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828460693359, 26.109525680542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1262512207031, 26.1496429443359]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266632080078, 26.2055358886719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778335571289, 26.1104354858398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475448608398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576385498047, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1606674194336, 26.1365299224854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1570434570313, 26.1256942749023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1528549194336, 26.090648651123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828460693359, 26.109525680542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274337768555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441345214844, 26.1350193023682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368045806885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1831512451172, 26.1063442230225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1254501342773, 26.203649520874]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1570434570313, 26.1256847381592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1639175415039, 26.1107711791992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.134407043457, 26.1224594116211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1507415771484, 26.2107181549072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778259277344, 26.1079730987549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828842163086, 26.1086959838867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.1418972015381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1835327148438, 26.0924777984619]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.13427734375, 26.1243228912354]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576385498047, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1404266357422, 26.1386852264404]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1588439941406, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1443099975586, 26.1403522491455]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333694458008, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576232910156, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1137619018555, 26.1966400146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1905059814453, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852642059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383495330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1511688232422, 26.141939163208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1435317993164, 26.1232624053955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259994506836, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1423110961914, 26.1500091552734]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475448608398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1539611816406, 26.1401081085205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1424102783203, 26.1222820281982]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322631835938, 26.1235103607178]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540222167969, 26.141902923584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1588439941406, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1449508666992, 26.1000823974609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385536193848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1538848876953, 26.1383399963379]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1266708374023, 26.2036323547363]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.154052734375, 26.14186668396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1225090026855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1576232910156, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1102066040039, 26.2114639282227]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1577301025391, 26.1274337768555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "pass stopped school bus"
        },
        "type": "Feature",
        "coordinates": [-80.1396179199219, 26.1422462463379]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1466217041016, 26.0852565765381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1646347045898, 26.1217594146729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1828460693359, 26.109525680542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1449508666992, 26.1000823974609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1777725219727, 26.1071300506592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1733703613281, 26.1511631011963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1441879272461, 26.1368141174316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991535186768]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333618164063, 26.1224822998047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1856231689453, 26.0921440124512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1070327758789, 26.1848487854004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful speed school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1904678344727, 26.0919036865234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unl/speed in school zone"
        },
        "type": "Feature",
        "coordinates": [-80.1875457763672, 26.0919990539551]
      }
    }
  ]
};

ACCESS_TOKEN = 'pk.eyJ1IjoiZG1tZmxsIiwiYSI6ImNpcW9uZmFlMzAxczNmb25uOTRubGUyc2wifQ.gUi6L8yTfyuo_wFE0qHyog';

CONTAINER_ID = 'map';

LIGHT = 'light';

DARK = 'dark';

map_styles = {
  'light': 'mapbox://styles/mapbox/light-v9',
  'dark': 'mapbox://styles/mapbox/dark-v9'
};

MAPSTYLE = DARK;

locations = {
  fort_lauderdale: [-80.17684936523438, 26.06110078617974],
  south_florida: [-80.1177978515625, 26.49515679244404],
  continental_us: [-99.140625, 39.36827914916011]
};

ref1 = ['fort_lauderdale', 'south_florida', 'continental_us'], fort_lauderdale = ref1[0], south_florida = ref1[1], continental_us = ref1[2];

DEFAULT_LOCATION = fort_lauderdale;

DEFAULT_ZOOM = 10;

citations = 'citations';

dataPoints = 'dataPoints';

mapsourceType = 'geojson';

dataURI = geoJsonData;

clusterOption = true;

clusterMaxZoom = 15;

clusterRadius = 20;

pink = '#f28cb1';

yellow = '#f1f075';

blue = '#51bbd6';

high = 10;

medium = 5;

low = 0;

rangeHigh = [high, blue];

rangeMedium = [medium, yellow];

rangeLow = [low, pink];

TEXT_SIZE = 12;

TEXT_FONT = ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'];

mapboxgl.accessToken = ACCESS_TOKEN;

toObject = function(keys, vals, ref) {
  if (keys.length === vals.length) {
    return keys.reduce((function(obj, key, index) {
      obj[key] = vals[index];
      return obj;
    }), ref || {});
  } else {
    return null;
  }
};

ref2 = [["container", "style", "center", "zoom"], [CONTAINER_ID, map_styles[MAPSTYLE], locations[DEFAULT_LOCATION], DEFAULT_ZOOM]], map_keys = ref2[0], map_values = ref2[1];

map_kwargs = toObject(map_keys, map_values);

map = new mapboxgl.Map(map_kwargs);

cluster_keys = (ref3 = ['type', 'data', 'cluster', 'clusterMaxZoom', 'clusterRadius'], TYPE = ref3[0], DATA = ref3[1], _ = ref3[2], _ = ref3[3], _ = ref3[4], ref3);

points_keys = [TYPE, DATA];

ref4 = [[mapsourceType, dataURI, clusterOption, clusterMaxZoom, clusterRadius], [mapsourceType, dataURI]], clusterSource = ref4[0], pointsSource = ref4[1];

map.on('load', function() {
  var layers;
  map.addSource(citations, {
    type: 'geojson',
    data: geoJsonData,
    cluster: true,
    clusterMaxZoom: 15,
    clusterRadius: 20
  });
  layers = [[0, 'green'], [20, 'orange'], [40, 'red']];
  layers.forEach(function(layer, i) {
    map.addLayer({
      'id': 'cluster-' + i,
      'type': 'circle',
      'source': citations,
      'paint': {
        'circle-color': layer[1],
        'circle-radius': 70,
        'circle-blur': 1
      },
      'filter': i === layers.length - 1 ? ['>=', 'point_count', layer[0]] : ['all', ['>=', 'point_count', layer[0]], ['<', 'point_count', layers[i + 1][0]]]
    }, 'waterway-label');
  });
  return map.addLayer({
    'id': 'unclustered-points',
    'type': 'circle',
    'source': citations,
    'paint': {
      'circle-color': 'rgba(0,255,0,0.5)',
      'circle-radius': 20,
      'circle-blur': 1
    },
    'filter': ['!=', 'cluster', true]
  }, 'waterway-label');
});
