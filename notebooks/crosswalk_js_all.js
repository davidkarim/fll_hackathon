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
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.104377746582, 26.1209907531738]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1413192749023, 26.0926628112793]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1244659423828, 26.1004753112793]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1545791625977, 26.1294078826904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1692276000977, 26.1364994049072]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1299133300781, 26.1192951202393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1372375488281, 26.1191787719727]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1429748535156, 26.1075401306152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1046676635742, 26.1241207122803]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1420593261719, 26.1006412506104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1299133300781, 26.1192951202393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1424255371094, 26.1385936737061]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.143424987793, 26.1222553253174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1475448608398, 26.1222515106201]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1467819213867, 26.0926170349121]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1749725341797, 26.1215972900391]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1621322631836, 26.1328010559082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.146842956543, 26.0972709655762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1299514770508, 26.1193313598633]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.144775390625, 26.0926570892334]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1434860229492, 26.1222057342529]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1415100097656, 26.097993850708]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1403884887695, 26.1191673278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1299133300781, 26.1192951202393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1170501708984, 26.1377429962158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1539459228516, 26.1388378143311]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1435241699219, 26.1223106384277]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1434326171875, 26.1205806732178]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.1222991943359]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1340637207031, 26.1192302703857]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1393203735352, 26.119140625]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1430053710938, 26.1074981689453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1193199157715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1685028076172, 26.1067333221436]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1471710205078, 26.1074180603027]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1258163452148, 26.1193561553955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1690826416016, 26.1067352294922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1679382324219, 26.1217880249023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1435623168945, 26.1222877502441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1692581176758, 26.1365337371826]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1785659790039, 26.1429996490479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1651077270508, 26.1068096160889]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1322860717773, 26.1225624084473]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1688842773438, 26.1365375518799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1393203735352, 26.119140625]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1667327880859, 26.1217555999756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1463623046875, 26.1213798522949]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1667327880859, 26.1217555999756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1680450439453, 26.0904483795166]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1312866210938, 26.1192436218262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1691131591797, 26.1067180633545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.150764465332, 26.1300983428955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1041870117188, 26.1217498779297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1685028076172, 26.1067333221436]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1034393310547, 26.1280155181885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1368026733398, 26.1003017425537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1486358642578, 26.2033424377441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1686401367188, 26.12180519104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1045150756836, 26.1192665100098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1299133300781, 26.1192951202393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1686401367188, 26.12180519104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1692581176758, 26.1365337371826]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1690826416016, 26.1067352294922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1651077270508, 26.1068096160889]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1045608520508, 26.1182098388672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1045532226563, 26.1193008422852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1070098876953, 26.1897735595703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1471710205078, 26.1074180603027]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1651077270508, 26.1068096160889]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1692581176758, 26.1365337371826]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1474380493164, 26.1204147338867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ftyrow to ped at crosswalk with signage"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1193370819092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.0910797119141, 26.2301177978516]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "block intersection/crosswalk"
        },
        "type": "Feature",
        "coordinates": [-80.1693344116211, 26.1217975616455]
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
