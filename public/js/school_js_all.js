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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1209526062012]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1874847412109, 26.1900787353516]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1136016845703, 26.2370796203613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.135498046875, 26.129955291748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1136016845703, 26.2370796203613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.135498046875, 26.129955291748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.135498046875, 26.129955291748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.135498046875, 26.129955291748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1716079711914, 26.2027702331543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "opn contnr on in/stop/prk veh"
        },
        "type": "Feature",
        "coordinates": [-80.1050872802734, 26.114315032959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334609985352, 26.1300430297852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1575622558594, 26.1346893310547]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.171028137207, 26.1319351196289]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involving serious injry"
        },
        "type": "Feature",
        "coordinates": [-80.2443389892578, 26.1208305358887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1518325805664, 26.1330966949463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1052551269531, 26.1233139038086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1277008056641, 26.1357822418213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.127555847168, 26.100414276123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.103759765625, 26.1246280670166]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1857833862305, 26.1045455932617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1803131103516, 26.119140625]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "mcycle w/o / imp stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.153694152832, 26.1294784545898]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1804809570313, 26.1184902191162]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1547164916992, 26.1346969604492]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1843643188477, 26.150806427002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1501617431641, 26.1419639587402]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1087875366211, 26.1887550354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1475982666016, 26.1473579406738]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1554794311523, 26.1959342956543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510391235352, 26.10085105896]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.142951965332, 26.1045532226563]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.157844543457, 26.2030849456787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1369781494141, 26.1095008850098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1282730102539, 26.1276054382324]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1482315063477, 26.1420307159424]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448287963867, 26.0944976806641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1953659057617, 26.1045761108398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1501541137695, 26.1420192718506]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130905151367, 26.1905422210693]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1063499450684]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1415710449219, 26.1035213470459]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1546401977539, 26.1311779022217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930847167969, 26.100622177124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1908359527588]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408309936523, 26.0946559906006]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1798324584961, 26.1061992645264]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1858978271484, 26.1070899963379]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1381683349609, 26.1191711425781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1561431884766, 26.1187229156494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286468505859, 26.1372928619385]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1456527709961, 26.1204738616943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1401596069336, 26.111270904541]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1633605957031, 26.1292839050293]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1784896850586, 26.1363925933838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1548080444336, 26.1365127563477]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1789093017578, 26.152135848999]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involving serious injry"
        },
        "type": "Feature",
        "coordinates": [-80.1366119384766, 26.094654083252]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1624526977539, 26.1218433380127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1477203369141, 26.1288890838623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408462524414, 26.0946559906006]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1616363525391, 26.1108722686768]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "sudden stop without signal"
        },
        "type": "Feature",
        "coordinates": [-80.1618881225586, 26.0906600952148]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448516845703, 26.0945320129395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1443099975586, 26.1147060394287]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop roadway/xsection"
        },
        "type": "Feature",
        "coordinates": [-80.1041870117188, 26.1217498779297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1561431884766, 26.1187229156494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059265136719, 26.1311111450195]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1938247680664, 26.116605758667]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.173942565918, 26.1216297149658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1169815063477, 26.1863708496094]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1447219848633, 26.0916976928711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1436233520508, 26.1260280609131]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.187629699707, 26.121223449707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1761856079102, 26.1064739227295]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.177848815918, 26.1080093383789]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1467971801758, 26.0945224761963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1295318603516, 26.1336498260498]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068115234375, 26.1937637329102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.0957336425781, 26.3165512084961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1542129516602, 26.1471385955811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1117553710938, 26.1684074401855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466903686523, 26.0908012390137]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1020736694336, 26.1674709320068]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.143424987793, 26.1222553253174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1575775146484, 26.1346340179443]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608581542969, 26.0925464630127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1121292114258, 26.2040348052979]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1302795410156, 26.1244106292725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1575393676758, 26.134672164917]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608200073242, 26.0925674438477]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1182479858398, 26.1884651184082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1801528930664, 26.1530227661133]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1557235717773, 26.2031669616699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1620712280273, 26.1365547180176]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568298339844, 26.09157371521]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1446380615234, 26.0889205932617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1640930175781, 26.129358291626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.146354675293, 26.1205177307129]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1554794311523, 26.1959342956543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1804275512695, 26.1171245574951]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741790771484, 26.1459312438965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1661682128906, 26.1327533721924]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12744140625, 26.1319751739502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "sudden stop without signal"
        },
        "type": "Feature",
        "coordinates": [-80.1594467163086, 26.1219005584717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1390151977539, 26.1351699829102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285629272461, 26.1208171844482]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.15625, 26.1228523254395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1453399658203, 26.1421184539795]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342620849609, 26.1475887298584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1306686401367, 26.1003284454346]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1458358764648, 26.1296920776367]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1464538574219, 26.1222553253174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1590957641602, 26.1413917541504]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1404724121094, 26.121524810791]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1889953613281, 26.091947555542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1488952636719, 26.2025356292725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423492431641, 26.1205997467041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.165168762207, 26.130838394165]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1618347167969, 26.1273708343506]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1868591308594, 26.1507625579834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1088180541992, 26.1684799194336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1471481323242, 26.1073799133301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1544494628906, 26.1561489105225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1445083618164, 26.1205368041992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1534957885742, 26.1229572296143]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1256332397461, 26.1338367462158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1445083618164, 26.1205368041992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1293716430664, 26.1300506591797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1586990356445, 26.1499824523926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1463088989258, 26.1420593261719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568298339844, 26.09157371521]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778335571289, 26.1104354858398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130447387695, 26.1886692047119]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1503982543945, 26.1188163757324]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.136474609375, 26.1299228668213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1539459228516, 26.1388378143311]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1369400024414, 26.1076068878174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1591339111328, 26.13112449646]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1201629638672, 26.1464672088623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1914825439453, 26.116060256958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568298339844, 26.09157371521]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1326675415039, 26.1424617767334]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1506195068359, 26.1276359558105]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1485595703125, 26.1221981048584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1760330200195, 26.0957489013672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.187744140625, 26.1052150726318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1678085327148, 26.1512813568115]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.187126159668, 26.118522644043]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1877059936523, 26.1037788391113]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1628723144531, 26.1310291290283]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1434326171875, 26.1421318054199]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.136474609375, 26.1299228668213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1591186523438, 26.1311016082764]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1020736694336, 26.1674709320068]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1519927978516, 26.1229934692383]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
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
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1935577392578, 26.110782623291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1313781738281, 26.1262645721436]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1364135742188, 26.1279735565186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.143196105957, 26.1111526489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285629272461, 26.1217308044434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1387786865234, 26.0983905792236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608581542969, 26.0940284729004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.2003707885742, 26.1089172363281]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778411865234, 26.1112632751465]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778869628906, 26.1112442016602]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225814819336, 26.1891040802002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1200866699219, 26.1891670227051]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1621551513672, 26.1336479187012]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1642913818359, 26.1482009887695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738510131836, 26.1175689697266]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1943359375, 26.0998706817627]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1622161865234, 26.1417369842529]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1883850097656, 26.1139183044434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.161735534668, 26.1249828338623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1411819458008, 26.0964260101318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1088485717773, 26.1043109893799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1884231567383, 26.1029605865479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608581542969, 26.0940284729004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1481094360352, 26.1384601593018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1370315551758, 26.1113529205322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059875488281, 26.1310920715332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1506881713867, 26.1295547485352]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1659088134766, 26.1254405975342]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1811141967773, 26.1552410125732]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1244735717773, 26.1008586883545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1546401977539, 26.1311779022217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1593170166016, 26.1274471282959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1666946411133, 26.1273136138916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1378936767578, 26.129919052124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1447906494141, 26.1074752807617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741790771484, 26.1459312438965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1049270629883, 26.1318473815918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.180305480957, 26.1177673339844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1931457519531, 26.1006374359131]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1431427001953, 26.1111965179443]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741409301758, 26.1327056884766]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1030349731445, 26.1368579864502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1196136474609, 26.1497745513916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1371078491211, 26.0872325897217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1859741210938, 26.1103687286377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1458129882813, 26.0926933288574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1445541381836, 26.1474494934082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527938842773, 26.0888614654541]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1284561157227, 26.1267566680908]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1045608520508, 26.1182098388672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285629272461, 26.1208171844482]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.162109375, 26.1365203857422]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1173095703125, 26.1677951812744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068344116211, 26.1208972930908]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1374282836914, 26.095588684082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130447387695, 26.1886692047119]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1475219726563, 26.1222324371338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1928024291992, 26.0918731689453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389770507813, 26.1333656311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1306610107422, 26.0991344451904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1427154541016, 26.1032867431641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1069717407227, 26.1908550262451]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576309204102, 26.1141777038574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1575775146484, 26.1346340179443]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.187629699707, 26.121223449707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1912384033203, 26.1862907409668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1504058837891, 26.148983001709]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1713714599609, 26.1383247375488]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614303588867, 26.1371650695801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1504974365234, 26.1221446990967]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426620483398, 26.1032829284668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1487579345703, 26.1295757293701]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.14013671875, 26.111291885376]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.131462097168, 26.1300373077393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1337814331055, 26.1081371307373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1892395019531, 26.1049537658691]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1531982421875, 26.1045188903809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1090927124023, 26.1665477752686]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1876754760742, 26.1948661804199]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1552200317383, 26.0919742584229]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1363677978516, 26.1261959075928]
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
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1155014038086, 26.1200771331787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1404724121094, 26.121524810791]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1880035400391, 26.20676612854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1985931396484, 26.1136837005615]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1876754760742, 26.1962280273438]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1111526489258, 26.1348934173584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416625976563, 26.1439876556396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1622161865234, 26.1417369842529]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1326599121094, 26.1003227233887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1537170410156, 26.1329612731934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1516494750977, 26.1295318603516]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1220245361328, 26.1356029510498]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1386260986328, 26.1166210174561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1784591674805, 26.1349105834961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1534271240234, 26.1196022033691]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1088027954102, 26.1673774719238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1907119750977, 26.1211643218994]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.187629699707, 26.121223449707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609420776367, 26.0961532592773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1908359527588]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1402282714844, 26.113941192627]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1107711791992, 26.1012554168701]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1880722045898, 26.1203861236572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1200561523438, 26.1427764892578]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491622924805, 26.107349395752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930847167969, 26.100622177124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389770507813, 26.1333656311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1747283935547, 26.1522693634033]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.159538269043, 26.1114387512207]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1639556884766, 26.2102546691895]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1549377441406, 26.1809768676758]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416015625, 26.1422061920166]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.0951309204102, 26.2916278839111]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1493606567383, 26.1472663879395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1713562011719, 26.1370239257813]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527099609375, 26.1330337524414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.160888671875, 26.0899486541748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1519546508789, 26.1384105682373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423721313477, 26.1205806732178]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1931686401367, 26.1027183532715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1555252075195, 26.0918388366699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576538085938, 26.1149654388428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1464385986328, 26.1222381591797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423721313477, 26.1215324401855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1381683349609, 26.1191711425781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1366195678711, 26.1076278686523]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1903915405273, 26.1203098297119]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1192722320557]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.165168762207, 26.1291885375977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1995849609375, 26.1059494018555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776962280273, 26.1032257080078]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1272659301758, 26.1208686828613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1517639160156, 26.1330547332764]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1447906494141, 26.1074752807617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1504669189453, 26.1203556060791]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286926269531, 26.1390571594238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1111831665039, 26.1348609924316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.0909767150879]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1475982666016, 26.1473579406738]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1637573242188, 26.2054347991943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.099308013916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1468734741211, 26.0963115692139]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1945953369141, 26.0965461730957]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1574478149414, 26.1311588287354]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1420593261719, 26.1006412506104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1621322631836, 26.1328010559082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491470336914, 26.1420249938965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.139289855957, 26.0889987945557]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "opn contnr on in/stop/prk veh"
        },
        "type": "Feature",
        "coordinates": [-80.1711883544922, 26.1880970001221]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1525650024414, 26.1275596618652]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1570510864258, 26.091516494751]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1513595581055, 26.1472187042236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1405792236328, 26.1422157287598]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1225757598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1595458984375, 26.1256465911865]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.105712890625, 26.1983432769775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1252212524414, 26.1479187011719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423721313477, 26.1205806732178]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1714553833008, 26.1410541534424]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1445922851563, 26.1240940093994]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1079788208008, 26.2067604064941]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930847167969, 26.100622177124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1844100952148, 26.1516208648682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.108039855957, 26.2067756652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491622924805, 26.107349395752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1269226074219, 26.1930179595947]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1512985229492, 26.1472358703613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1467819213867, 26.0926170349121]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1454544067383, 26.1146068572998]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1622772216797, 26.1424770355225]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.174072265625, 26.1422939300537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.187744140625, 26.1052150726318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285018920898, 26.1319370269775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442947387695, 26.1385803222656]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1857528686523, 26.1055583953857]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1272659301758, 26.1208686828613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1986770629883, 26.1044902801514]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1747131347656, 26.1511669158936]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.193000793457, 26.0984363555908]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778030395508, 26.1096343994141]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1560745239258, 26.1293869018555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1265869140625, 26.1319465637207]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1896591186523, 26.1048793792725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1259841918945, 26.1426048278809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1966857910156, 26.0925197601318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286544799805, 26.1354312896729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1513137817383, 26.1472568511963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1534271240234, 26.1196022033691]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1472091674805, 26.1128616333008]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1931686401367, 26.1027183532715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1598129272461, 26.2055320739746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1182479858398, 26.1884651184082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.18798828125, 26.2067489624023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.1509132385254]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.153190612793, 26.1036167144775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1428756713867, 26.1005363464355]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486740112305, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1531982421875, 26.1045188903809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1660385131836, 26.1513156890869]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.179557800293, 26.1096096038818]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1667785644531, 26.1291542053223]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1537628173828, 26.1347236633301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1651992797852, 26.1327457427979]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1492767333984, 26.1456756591797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1607284545898, 26.1425914764404]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.140998840332, 26.0955448150635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1876220703125, 26.1946640014648]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532211303711, 26.1471920013428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741485595703, 26.1326522827148]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.122184753418, 26.1409969329834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1828842163086, 26.1552352905273]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1163787841797, 26.1873188018799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778335571289, 26.1096725463867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609420776367, 26.0947647094727]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426849365234, 26.1474628448486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1649703979492, 26.0882587432861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1402130126953, 26.1148300170898]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1477737426758, 26.129602432251]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1490097045898, 26.0999660491943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532745361328, 26.1109504699707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1274948120117, 26.1004219055176]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1483306884766, 26.2042465209961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1637115478516, 26.2029132843018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1127700805664, 26.2068881988525]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.197021484375, 26.1137390136719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involving serious injry"
        },
        "type": "Feature",
        "coordinates": [-80.1016159057617, 26.1691036224365]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.160888671875, 26.0899486541748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1510314941406, 26.1384124755859]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1503524780273, 26.1472320556641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1462478637695, 26.1402759552002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1515960693359, 26.1276092529297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1780548095703, 26.1214962005615]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1369018554688, 26.1057720184326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1804275512695, 26.1171245574951]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1787414550781, 26.1458644866943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609649658203, 26.0954494476318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1333389282227, 26.1262493133545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1503143310547, 26.1472682952881]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1509094238281, 26.1347846984863]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1363220214844, 26.1243114471436]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.161735534668, 26.1242160797119]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1632461547852, 26.146411895752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "opn contnr on in/stop/prk veh"
        },
        "type": "Feature",
        "coordinates": [-80.1557464599609, 26.1884460449219]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.143684387207, 26.1278095245361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.18798828125, 26.2067489624023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1944198608398, 26.2018394470215]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1507415771484, 26.1313152313232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.099308013916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285018920898, 26.1319370269775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.17578125, 26.1113815307617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1624755859375, 26.1910915374756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1435852050781, 26.1241474151611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426620483398, 26.1032829284668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1469497680664, 26.1000194549561]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1445465087891, 26.122407913208]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.156852722168, 26.0915679931641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1327590942383, 26.1012897491455]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1558837890625, 26.2088069915771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1858520507813, 26.1071090698242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614532470703, 26.1078987121582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1542510986328, 26.0922241210938]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1302642822266, 26.1225509643555]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1656951904297, 26.120849609375]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1578369140625, 26.091251373291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1879119873047, 26.2043514251709]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1272048950195, 26.1208553314209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1637115478516, 26.2029132843018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1323699951172, 26.1496810913086]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.143196105957, 26.1129512786865]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1940002441406, 26.1202392578125]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.128532409668, 26.1336650848389]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527786254883, 26.0880851745605]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1454544067383, 26.1146068572998]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1501617431641, 26.1419639587402]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1069641113281, 26.1888046264648]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1196136474609, 26.1497745513916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491851806641, 26.1419868469238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1446762084961, 26.0917167663574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.159309387207, 26.1255950927734]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stoplight/turn ind"
        },
        "type": "Feature",
        "coordinates": [-80.1463775634766, 26.1204624176025]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.1365413665771]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1407623291016, 26.0993728637695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.14013671875, 26.111291885376]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1918182373047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "opn contnr on in/stop/prk veh"
        },
        "type": "Feature",
        "coordinates": [-80.1852264404297, 26.1862716674805]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1470336914063, 26.1028137207031]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1651458740234, 26.1302070617676]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1333923339844, 26.1030788421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1413192749023, 26.0926628112793]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1622161865234, 26.1417369842529]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.099308013916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608200073242, 26.0925674438477]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1519165039063, 26.1366119384766]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1512985229492, 26.1472358703613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1529159545898, 26.0924472808838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.128532409668, 26.1336650848389]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1504974365234, 26.1230297088623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1531982421875, 26.1045188903809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533432006836, 26.1127262115479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1788635253906, 26.1510314941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1210250854492, 26.189094543457]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1984100341797, 26.096981048584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389007568359, 26.111349105835]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.142219543457, 26.0926551818848]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342849731445, 26.1003150939941]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1430435180664, 26.1103534698486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.132682800293, 26.1003036499023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1424102783203, 26.1206130981445]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1363296508789, 26.0890808105469]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.145751953125, 26.122200012207]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1650772094727, 26.1273612976074]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1908359527588]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527099609375, 26.1330337524414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1573791503906, 26.1211585998535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.139762878418, 26.1009578704834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1437377929688, 26.129768371582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930389404297, 26.0991687774658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1522827148438, 26.1472034454346]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1785354614258, 26.1382904052734]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1842651367188, 26.2067527770996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1173095703125, 26.1677951812744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1908340454102, 26.113920211792]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1631622314453, 26.1425113677979]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.14013671875, 26.111291885376]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.130744934082, 26.1031761169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1603393554688, 26.1883411407471]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1935882568359, 26.110107421875]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1284942626953, 26.1300601959229]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448516845703, 26.0945320129395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.174430847168, 26.1382789611816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568298339844, 26.09157371521]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1173095703125, 26.1677951812744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1468124389648, 26.0926494598389]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1586303710938, 26.1473236083984]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1997680664063, 26.1059455871582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1343612670898, 26.1262493133545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1282577514648, 26.1267948150635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1530838012695, 26.099910736084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1547164916992, 26.1346969604492]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1395492553711, 26.1206035614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1379470825195, 26.1316776275635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1478576660156, 26.1331691741943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389007568359, 26.1316547393799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1585006713867, 26.121919631958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1184005737305, 26.1481800079346]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1862182617188, 26.1212520599365]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1778869628906, 26.1137104034424]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1811370849609, 26.1039924621582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.196907043457, 26.0990333557129]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1928329467773, 26.1146640777588]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1432266235352, 26.112096786499]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342926025391, 26.0993785858154]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342239379883, 26.1002941131592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1545791625977, 26.1294078826904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1406936645508, 26.1279296875]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1116943359375, 26.1499118804932]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1278839111328, 26.1425609588623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.131721496582, 26.196231842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.131721496582, 26.196231842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.0979690551758, 26.1790981292725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466979980469, 26.0889225006104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1573715209961, 26.1194820404053]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "sudden stop without signal"
        },
        "type": "Feature",
        "coordinates": [-80.1528701782227, 26.0932159423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1430130004883, 26.1045627593994]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1385269165039, 26.1148490905762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930236816406, 26.0984687805176]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930389404297, 26.0991687774658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226425170898, 26.1908264160156]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.120080947876]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1380844116211, 26.1334018707275]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510314941406, 26.1384124755859]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1624755859375, 26.1910915374756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1461791992188, 26.1384830474854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1660919189453, 26.1292037963867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.142951965332, 26.1045532226563]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1613998413086, 26.1063480377197]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389694213867, 26.1075534820557]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1467819213867, 26.0926170349121]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1258392333984, 26.1391334533691]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1386184692383, 26.1206207275391]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1411819458008, 26.0964260101318]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1623001098633, 26.1448307037354]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1860885620117, 26.1152687072754]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1372375488281, 26.1191787719727]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1093826293945, 26.1658535003662]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1543502807617, 26.1506633758545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1510314941406, 26.1384124755859]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1620788574219, 26.1310081481934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776962280273, 26.1032257080078]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1845779418945, 26.1078681945801]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.16015625, 26.1528167724609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1242599487305, 26.1479625701904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609878540039, 26.096134185791]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389007568359, 26.111349105835]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1057815551758, 26.1217842102051]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1732635498047, 26.1216526031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1936340332031, 26.1111240386963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1279602050781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1594848632813, 26.12428855896]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1506195068359, 26.1276359558105]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1366806030273, 26.1406097412109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1537628173828, 26.1347236633301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1390609741211, 26.1351890563965]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1508636474609, 26.1330699920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1405181884766, 26.1232738494873]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1456527709961, 26.1204738616943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1774749755859, 26.1372756958008]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1569137573242, 26.1372375488281]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1087875366211, 26.1887550354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1597366333008, 26.1419467926025]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1843719482422, 26.1531734466553]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1621322631836, 26.1386814117432]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.192985534668, 26.0962696075439]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "mcycle w/o / imp stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1477737426758, 26.129602432251]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448135375977, 26.0945529937744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.155876159668, 26.2070369720459]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1427612304688, 26.1297836303711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1381759643555, 26.1192283630371]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1302947998047, 26.1263008117676]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1655387878418]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1413803100586, 26.1368598937988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.18994140625, 26.113883972168]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426620483398, 26.1032829284668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1621704101563, 26.1402225494385]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1396179199219, 26.1422462463379]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930389404297, 26.0991687774658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1918182373047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1623001098633, 26.1424961090088]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1857528686523, 26.1055583953857]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1470947265625, 26.1028308868408]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1386413574219, 26.1191959381104]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1917037963867, 26.1158313751221]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738357543945, 26.1139945983887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1528015136719, 26.0903358459473]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609191894531, 26.0954704284668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1958770751953, 26.1166858673096]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1649780273438, 26.1107501983643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1105270385742, 26.1897258758545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.174446105957, 26.1364555358887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527099609375, 26.1330337524414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1458129882813, 26.0926933288574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1354598999023, 26.1208038330078]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1343612670898, 26.1262493133545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1402130126953, 26.1148300170898]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1373062133789, 26.1224536895752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1274566650391, 26.1319389343262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1737442016602, 26.1096439361572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1150131225586, 26.1895523071289]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp/no rear stop/lamps"
        },
        "type": "Feature",
        "coordinates": [-80.1534271240234, 26.1196022033691]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1284942626953, 26.1300601959229]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1510009765625, 26.0999279022217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1504440307617, 26.1203212738037]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1483917236328, 26.1472988128662]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1621170043945, 26.1328563690186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1300277709961, 26.1962738037109]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927642822266, 26.0918922424316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.146858215332, 26.0963687896729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1520767211914, 26.1419525146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.19189453125, 26.1054248809814]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1390380859375, 26.1351356506348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1829452514648, 26.1119823455811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1934127807617, 26.1193084716797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527786254883, 26.1347541809082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491470336914, 26.1420249938965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796264648438, 26.2076187133789]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.158088684082, 26.2129745483398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1718139648438, 26.2084655761719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1307220458984, 26.1022510528564]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1750946044922, 26.1031951904297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334228515625, 26.137134552002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1424102783203, 26.1222820281982]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1590728759766, 26.1293563842773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1557235717773, 26.2031669616699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1621322631836, 26.1328010559082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1371078491211, 26.0872325897217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423416137695, 26.1019325256348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1363372802734, 26.1252288818359]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1795425415039, 26.1070995330811]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1926956176758, 26.1949443817139]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1509246826172, 26.134801864624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426620483398, 26.1032829284668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1113739013672, 26.134069442749]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1874008178711, 26.1862945556641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1931686401367, 26.1027183532715]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1969604492188, 26.1137256622314]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930847167969, 26.100622177124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1706619262695, 26.1198120117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576309204102, 26.1141777038574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1463088989258, 26.1420593261719]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1043167114258, 26.1209659576416]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1623001098633, 26.1424961090088]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1306610107422, 26.0991344451904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1443634033203, 26.1259727478027]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1585006713867, 26.121919631958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1831359863281, 26.2024517059326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.099308013916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.123046875, 26.2079200744629]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1400451660156, 26.1061172485352]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1367111206055, 26.1392574310303]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1775512695313, 26.1382350921631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1298980712891, 26.1442756652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1705093383789, 26.0897102355957]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1385269165039, 26.1148490905762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609115600586, 26.0899829864502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1462097167969, 26.1145935058594]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1491622924805, 26.107349395752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1509017944336, 26.0990524291992]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1271896362305, 26.1193370819092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.177131652832, 26.1106338500977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1292343139648, 26.120059967041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.14013671875, 26.111291885376]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1914825439453, 26.116060256958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1274948120117, 26.1004219055176]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1428756713867, 26.1004791259766]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1410064697266, 26.1008071899414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1938934326172, 26.1172504425049]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1385269165039, 26.1148490905762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1536178588867, 26.1312465667725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1591567993164, 26.1310691833496]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1604843139648, 26.1514129638672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.122428894043, 26.1850833892822]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1624755859375, 26.1910915374756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1540832519531, 26.1436347961426]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334457397461, 26.1299896240234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1043167114258, 26.1209659576416]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1530075073242, 26.0962734222412]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741561889648, 26.1459865570068]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1053848266602, 26.1379776000977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1933364868164, 26.1046295166016]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1772308349609, 26.1581726074219]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1467208862305, 26.0917282104492]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1107482910156, 26.1980495452881]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1299209594727, 26.1208171844482]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1542282104492, 26.0921745300293]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448287963867, 26.0944976806641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1399993896484, 26.1046810150146]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1468811035156, 26.1313934326172]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1660919189453, 26.1292037963867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1714935302734, 26.1438007354736]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.151496887207, 26.2032470703125]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1421737670898, 26.112964630127]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.0909767150879]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1857147216797, 26.0993499755859]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1789016723633, 26.1509952545166]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448135375977, 26.0945529937744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1623611450195, 26.1488094329834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1284942626953, 26.1300601959229]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1880264282227, 26.2067108154297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.162109375, 26.1365203857422]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1574172973633, 26.1211395263672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.130744934082, 26.1031761169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1934585571289, 26.1069622039795]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1145248413086, 26.100736618042]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1349029541016, 26.104907989502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1389694213867, 26.1075534820557]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576309204102, 26.1256771087646]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510696411133, 26.1383743286133]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1340713500977, 26.1021385192871]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.160888671875, 26.0899486541748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.151496887207, 26.2032470703125]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1951751708984, 26.0970706939697]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1113739013672, 26.134069442749]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1513137817383, 26.1480102539063]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0889434814453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1119995117188, 26.1019973754883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286926269531, 26.1390571594238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1569976806641, 26.0970916748047]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1624755859375, 26.1910915374756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1379852294922, 26.1094608306885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510467529297, 26.1384315490723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1340408325195, 26.1031284332275]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1581726074219, 26.1432914733887]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.174430847168, 26.1382789611816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1088180541992, 26.1684799194336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1105346679688, 26.1896705627441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1609191894531, 26.0881443023682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1789093017578, 26.152135848999]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442489624023, 26.1385631561279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334457397461, 26.1299896240234]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1326923370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1592636108398, 26.1256332397461]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1266021728516, 26.133846282959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1285934448242, 26.1354484558105]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1660919189453, 26.1292037963867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1445770263672, 26.1222267150879]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1284942626953, 26.1300601959229]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1573791503906, 26.1211585998535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576309204102, 26.1141777038574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416015625, 26.1439781188965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1482772827148, 26.1145782470703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568145751953, 26.0888156890869]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1507263183594, 26.1295185089111]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1909790039063, 26.1028690338135]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1520767211914, 26.1419525146484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1430053710938, 26.0889129638672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.149299621582, 26.1455020904541]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1082992553711, 26.205451965332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1843643188477, 26.150806427002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.165168762207, 26.1321601867676]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1445999145508, 26.1222629547119]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1388320922852, 26.1298942565918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1063499450684]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1417846679688, 26.099308013916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068420410156, 26.1937274932861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "flee/elude police-fail to obey leo order to stop"
        },
        "type": "Feature",
        "coordinates": [-80.1528015136719, 26.0903358459473]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1435317993164, 26.1231746673584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1446380615234, 26.0889205932617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058120727539, 26.2013931274414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1747512817383, 26.1522903442383]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014083862305]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914653778076]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416015625, 26.1439781188965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.143196105957, 26.1111850738525]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1529159545898, 26.0924472808838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1247634887695, 26.1901149749756]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1714706420898, 26.1445331573486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1565780639648, 26.1346950531006]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1512985229492, 26.1472358703613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1567077636719, 26.1365127563477]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1701354980469, 26.1291122436523]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510314941406, 26.1384124755859]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.128532409668, 26.1336650848389]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.156135559082, 26.1203517913818]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1566162109375, 26.1346569061279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285018920898, 26.1319370269775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp/no rear stop/lamps"
        },
        "type": "Feature",
        "coordinates": [-80.1525802612305, 26.1295051574707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1560211181641, 26.1168746948242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1054763793945, 26.1233711242676]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1424942016602, 26.1421928405762]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.0909767150879]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.2003707885742, 26.1089172363281]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1439590454102, 26.1075172424316]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1268997192383, 26.1426200866699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796264648438, 26.2076187133789]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889091491699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1605224609375, 26.1143341064453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1041870117188, 26.1217498779297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568374633789, 26.0915145874023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1631546020508, 26.1432571411133]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1487731933594, 26.1313781738281]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1430969238281, 26.0626125335693]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1633071899414, 26.1882743835449]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416625976563, 26.1457481384277]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1498794555664, 26.13307762146]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1503448486328, 26.1472873687744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1508026123047, 26.2032699584961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1113739013672, 26.134069442749]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776733398438, 26.1031970977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1458969116211, 26.1314563751221]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286468505859, 26.1372928619385]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1399536132813, 26.1046466827393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1399536132813, 26.1046466827393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1531982421875, 26.1045188903809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.146858215332, 26.0945358276367]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1493225097656, 26.1473045349121]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1514205932617, 26.1507549285889]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1882247924805, 26.1022300720215]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1659927368164, 26.12917137146]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.17919921875, 26.103157043457]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1339797973633, 26.117317199707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1208381652832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1543426513672, 26.1515216827393]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1846160888672, 26.1104164123535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1738128662109, 26.1139736175537]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1930847167969, 26.100622177124]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.138916015625, 26.1316184997559]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1327438354492, 26.1013126373291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1545486450195, 26.0124816894531]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1516952514648, 26.121166229248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1466674804688, 26.0898876190186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1522216796875, 26.1454524993896]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1430130004883, 26.1045627593994]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1215667724609, 26.2035675048828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1313323974609, 26.1262474060059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1430435180664, 26.106071472168]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop remain accdnt involv non-ser injry"
        },
        "type": "Feature",
        "coordinates": [-80.1243667602539, 26.1355247497559]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1594696044922, 26.1234893798828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046752929688, 26.1368446350098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1822128295898, 26.1012096405029]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1946258544922, 26.0917835235596]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1519165039063, 26.1195583343506]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.153678894043, 26.1329975128174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1244812011719, 26.1005325317383]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.139030456543, 26.1130352020264]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1510162353516, 26.1366519927979]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1469268798828, 26.0991439819336]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1405563354492, 25.992338180542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1274948120117, 26.126350402832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1928024291992, 26.0918731689453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1055374145508, 26.1130523681641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1572036743164, 26.1884117126465]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068115234375, 26.1937637329102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1173706054688, 26.1523513793945]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1344451904297, 26.1388988494873]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1714706420898, 26.1459617614746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1293334960938, 26.1244583129883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1530456542969, 26.1418914794922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1069564819336, 26.1201686859131]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1556091308594, 26.1329383850098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1354293823242, 26.0937976837158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1667404174805, 26.1217021942139]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1206436157227, 26.179178237915]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1525650024414, 26.2032356262207]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1061630249023, 26.1310710906982]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1057815551758, 26.1217842102051]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532287597656, 26.1462116241455]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1305541992188, 26.0183658599854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1984100341797, 26.0969867706299]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1416931152344, 26.1279048919678]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1030349731445, 26.1368579864502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1546783447266, 26.133508682251]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1327285766602, 26.1031169891357]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1280364990234, 26.1478595733643]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1528167724609, 26.0888996124268]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail give turn/stop signal"
        },
        "type": "Feature",
        "coordinates": [-80.1471405029297, 26.1073818206787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1870193481445, 26.1140003204346]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533203125, 26.1127815246582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914730072021]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1531982421875, 26.1045188903809]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532669067383, 26.1489372253418]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1780014038086, 26.1184768676758]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1293334960938, 26.1244583129883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1331787109375, 26.1300315856934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1984024047852, 26.0970191955566]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533203125, 26.1127815246582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1273880004883, 26.1301002502441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1063842773438, 26.1217670440674]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314849853516, 26.1300563812256]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342086791992, 26.1465282440186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1343002319336, 26.1225490570068]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1616744995117, 26.1242256164551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1034317016602, 26.1265163421631]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1796035766602, 26.2076740264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1045532226563, 26.1193008422852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail give turn/stop signal"
        },
        "type": "Feature",
        "coordinates": [-80.1201095581055, 26.1445465087891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1490936279297, 26.1036605834961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1403884887695, 26.1378078460693]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1446990966797, 26.0889320373535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1385345458984, 25.9924030303955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1431198120117, 26.1332263946533]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1757202148438, 26.2077465057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1034393310547, 26.1280155181885]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1591415405273, 26.129711151123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408538818359, 26.094575881958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1413345336914, 26.2509479522705]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1272506713867, 26.1208896636963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.120002746582, 26.1406593322754]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914730072021]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1477203369141, 26.1288890838623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1046371459961, 26.1166667938232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1548309326172, 26.1365337371826]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1144790649414, 26.100793838501]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130294799805, 26.1552753448486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1645965576172, 26.1345443725586]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1785202026367, 26.140926361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1617736816406, 26.125545501709]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1057357788086, 26.1176357269287]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1446990966797, 26.0889205932617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1442794799805, 26.1385803222656]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286544799805, 26.1354312896729]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1521911621094, 26.2032260894775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.2098541259766, 26.0980587005615]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614837646484, 26.1108226776123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1219711303711, 26.1198482513428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1292953491211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1313552856445, 26.1962966918945]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1544952392578, 26.2071800231934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1220397949219, 26.1426963806152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.146842956543, 26.0972423553467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.124870300293, 26.1235370635986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1597366333008, 26.1419467926025]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1539001464844, 26.1368846893311]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1933364868164, 26.1046295166016]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1663208007813, 26.1365146636963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1516723632813, 26.1295490264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1322708129883, 26.1243934631348]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614227294922, 26.1063823699951]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop/shift at rr crossing"
        },
        "type": "Feature",
        "coordinates": [-80.1511459350586, 26.2032585144043]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1429595947266, 26.1045608520508]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1501617431641, 26.1419639587402]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1111831665039, 26.1349182128906]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614837646484, 26.1108226776123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1342468261719, 26.1234378814697]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1399459838867, 26.133337020874]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1524276733398, 26.112735748291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1050872802734, 26.114315032959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197357177734, 26.1335849761963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1946182250977, 26.0917854309082]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533203125, 26.1127815246582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1057662963867, 26.1217823028564]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.193603515625, 26.1110916137695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1651992797852, 26.1327457427979]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1426239013672, 26.1231727600098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1445007324219, 26.1205387115479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1405563354492, 25.992338180542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1299819946289, 26.1217365264893]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1037750244141, 26.124174118042]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1331787109375, 26.1300315856934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1173095703125, 26.1677951812744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1275177001953, 26.1267528533936]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.135498046875, 26.129955291748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1744155883789, 26.1364364624023]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.14013671875, 26.1112995147705]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.177864074707, 26.1106739044189]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1350936889648, 26.1299991607666]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1529083251953, 26.0924491882324]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1951904296875, 26.0970306396484]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1299438476563, 26.1442947387695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1957931518555, 26.1068687438965]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1307220458984, 26.1022129058838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1293334960938, 26.1244506835938]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1287307739258, 26.1390743255615]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1575622558594, 26.1346893310547]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197509765625, 26.1335506439209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1477203369141, 26.1288890838623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.2101135253906, 26.2140808105469]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033782958984, 26.1290512084961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533355712891, 26.1109676361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1065540313721]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1372222900391, 26.1191806793213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1780166625977, 26.1214046478271]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345443725586, 26.140661239624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1313781738281, 26.196268081665]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1867446899414, 26.1416206359863]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1210861206055, 26.1515636444092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1441345214844, 26.1350193023682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1295852661133, 26.1354217529297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "opn contnr on in/stop/prk veh"
        },
        "type": "Feature",
        "coordinates": [-80.1463470458984, 26.1198883056641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576309204102, 26.1141777038574]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1105346679688, 26.1896705627441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466979980469, 26.0889167785645]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1408767700195, 26.1317138671875]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1678009033203, 26.1447162628174]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1435317993164, 26.1231651306152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1576232910156, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1349716186523, 26.159460067749]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1503524780273, 26.1472320556641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1554794311523, 26.1959342956543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1467666625977, 26.0926704406738]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533279418945, 26.1489276885986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1331787109375, 26.1300315856934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1652603149414, 26.1345481872559]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014007568359]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058959960938, 26.1289539337158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235046386719, 26.1283893585205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197509765625, 26.1335506439209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235580444336, 26.1283836364746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1832046508789, 26.1012115478516]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068344116211, 26.193733215332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245956420898, 26.1259708404541]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1230163574219, 26.130126953125]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1037673950195, 26.1241836547852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059265136719, 26.1209316253662]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1536331176758, 26.2300281524658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235580444336, 26.1283836364746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1679000854492, 26.1067314147949]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1535797119141, 26.1238479614258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130981445313, 26.1896228790283]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1461715698242, 26.1384830474854]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.132682800293, 26.1208515167236]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1555023193359, 26.1301364898682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314849853516, 26.1300563812256]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1454467773438, 26.1146621704102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.0905914306641, 26.2349090576172]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1387481689453, 26.0992851257324]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1529159545898, 26.0924472808838]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.146842956543, 26.0972423553467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416625976563, 26.1439609527588]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1435623168945, 26.1231937408447]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1527709960938, 26.0873146057129]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1367263793945, 26.1406269073486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776657104492, 26.1032028198242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1523208618164, 26.1472225189209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1034927368164, 26.1258182525635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1170883178711, 26.1958637237549]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1307067871094, 26.1407489776611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1159820556641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345443725586, 26.140661239624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1847839355469, 26.1413402557373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1288375854492, 26.1425399780273]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1416931152344, 26.1279048919678]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1591796875, 26.1310863494873]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1561431884766, 26.1195125579834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608581542969, 26.0940284729004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1536560058594, 26.1320514678955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914882659912]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1984100341797, 26.0969867706299]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1331787109375, 26.1300315856934]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314849853516, 26.1300563812256]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533355712891, 26.1109676361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.167106628418, 26.02760887146]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1148529052734, 26.1378040313721]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1685409545898, 26.1291160583496]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1561431884766, 26.1187229156494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1741180419922, 26.1364402770996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1057815551758, 26.1217842102051]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345443725586, 26.140661239624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1244735717773, 26.0995273590088]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1939010620117, 26.1174850463867]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1370010375977, 26.1085586547852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1276168823242, 26.1338424682617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1209106445313, 26.1320495605469]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776657104492, 26.1032028198242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1497650146484, 26.1313362121582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1862182617188, 26.1212520599365]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1623458862305, 26.1465682983398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1293334960938, 26.1244583129883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197357177734, 26.1335849761963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1046371459961, 26.1166667938232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1245727539063, 26.1260013580322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059722900391, 26.1311283111572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1538314819336, 26.1347141265869]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1914825439453, 26.116060256958]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235580444336, 26.1283836364746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1675872802734, 26.1291313171387]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1565475463867, 26.1293754577637]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.121940612793, 26.1340103149414]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1504974365234, 26.1230297088623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1209716796875, 26.1320323944092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345138549805, 26.1406421661377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1535568237305, 26.1229553222656]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1448516845703, 26.0945320129395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1528778076172, 26.136568069458]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1591339111328, 26.13112449646]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1657409667969, 26.1199245452881]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.193359375, 26.105447769165]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1044616699219, 26.1202754974365]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1722259521484, 26.1308784484863]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "mcycle w/o / imp stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1866912841797, 26.1416320800781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1418609619141, 26.1205902099609]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12841796875, 26.1309852600098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1030578613281, 26.1683483123779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1597747802734, 26.1293029785156]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054916381836, 26.1155185699463]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285018920898, 26.1319370269775]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1342849731445, 26.0993843078613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1050872802734, 26.114315032959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1617889404297, 26.1274070739746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1508636474609, 26.1348190307617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1678009033203, 26.1512813568115]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285095214844, 26.1318798065186]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1269607543945, 26.1426010131836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1275634765625, 26.1267719268799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1443099975586, 26.1162300109863]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263961791992, 26.1914978027344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1488037109375, 26.0925998687744]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1556854248047, 26.2031936645508]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197357177734, 26.1335849761963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1739349365234, 26.1216316223145]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1567687988281, 26.0881958007813]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1852416992188, 26.1862716674805]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130294799805, 26.1552753448486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533355712891, 26.1109676361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1057434082031, 26.1217403411865]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1264495849609, 26.1914730072021]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1742935180664, 26.1337909698486]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1130905151367, 26.1905422210693]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235580444336, 26.1283836364746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1407470703125, 26.1475448608398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1386108398438, 26.092752456665]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.137077331543, 26.0871925354004]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1359405517578, 26.1002578735352]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1210403442383, 26.1497478485107]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1340637207031, 26.1031074523926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057815551758, 26.1265354156494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533203125, 26.1127815246582]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobey stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1150512695313, 26.1377639770508]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1293334960938, 26.1244583129883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1828536987305, 26.108715057373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1041412353516, 26.1224060058594]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fty/stop at sidewalk from alley/bldg/priv rd/drive way"
        },
        "type": "Feature",
        "coordinates": [-80.1843643188477, 26.1508045196533]
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
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059265136719, 26.1311111450195]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197509765625, 26.1335506439209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1116638183594, 26.1673049926758]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046447753906, 26.1368236541748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334609985352, 26.1300430297852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1275177001953, 26.1267528533936]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1595001220703, 26.111457824707]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1415710449219, 26.1421852111816]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927032470703, 26.1034088134766]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop on bike path"
        },
        "type": "Feature",
        "coordinates": [-80.0995407104492, 26.1746883392334]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345443725586, 26.140661239624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1498641967773, 26.1321754455566]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no/improper turn/stop signal given"
        },
        "type": "Feature",
        "coordinates": [-80.1675872802734, 26.1291313171387]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1532974243164, 26.1109886169434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285171508789, 26.1300239562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1587753295898, 26.1293811798096]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1288375854492, 26.1425399780273]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334609985352, 26.1300430297852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059646606445, 26.1310749053955]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.2019348144531, 26.1209983825684]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286315917969, 26.1354656219482]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.146842956543, 26.0972423553467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776657104492, 26.1032028198242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1050872802734, 26.114315032959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033782958984, 26.1290512084961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1565475463867, 26.1293754577637]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1423492431641, 26.1206073760986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1296539306641, 26.1354064941406]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1508636474609, 26.1348190307617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.140998840332, 26.1007823944092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1535797119141, 26.1238422393799]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1291885375977, 26.1520748138428]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1050872802734, 26.114315032959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1046295166016, 26.1166610717773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314239501953, 26.128059387207]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1569976806641, 26.0962657928467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1828842163086, 26.1552352905273]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.2789306640625, 25.9858837127686]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1432571411133, 26.1129608154297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1382293701172, 26.1369609832764]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776657104492, 26.1032028198242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1698684692383, 26.1066627502441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197509765625, 26.1335506439209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.15625, 26.1228523254395]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230392456055, 26.1283092498779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1370010375977, 26.1085586547852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1292724609375, 26.1244621276855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1811599731445, 26.1012439727783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1283340454102, 26.1300449371338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057510375977, 26.2014007568359]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614837646484, 26.1108226776123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1928024291992, 26.0918731689453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1614227294922, 26.1063823699951]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197357177734, 26.1335849761963]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1405563354492, 25.992338180542]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1368637084961, 26.1030406951904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.156867980957, 26.0915508270264]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1750640869141, 26.1037788391113]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1840667724609, 26.1057872772217]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1927795410156, 26.0918369293213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1045532226563, 26.1193008422852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.0947494506836]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1292724609375, 26.1244621276855]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1226119995117, 26.132007598877]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1047286987305, 26.1290092468262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208457946777]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1498031616211, 26.1322326660156]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1210861206055, 26.1515636444092]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp start from park/stop posit"
        },
        "type": "Feature",
        "coordinates": [-80.1451721191406, 26.1367492675781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1984100341797, 26.0969867706299]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1417465209961, 26.0816993713379]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.124870300293, 26.1235370635986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1150512695313, 26.1377639770508]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.124870300293, 26.1235370635986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235580444336, 26.1283836364746]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.105712890625, 26.1258373260498]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1620712280273, 26.1365489959717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1931457519531, 26.1020126342773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1588592529297, 26.0910339355469]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1286010742188, 26.1208515167236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to stop steady red indication"
        },
        "type": "Feature",
        "coordinates": [-80.1562118530273, 26.1220760345459]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1535263061523, 26.1229190826416]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/rr track"
        },
        "type": "Feature",
        "coordinates": [-80.1486663818359, 26.2033824920654]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.10693359375, 26.1918106079102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1388320922852, 26.1298942565918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1263885498047, 26.1914901733398]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1034927368164, 26.1258182525635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1776657104492, 26.1032028198242]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1068344116211, 26.193733215332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1204833984375, 26.1523246765137]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1568298339844, 26.0915184020996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1041259765625, 26.1224384307861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1842651367188, 26.2067527770996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1274948120117, 26.126350402832]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1043853759766, 26.1209850311279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533279418945, 26.1489276885986]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper stop/stand/park"
        },
        "type": "Feature",
        "coordinates": [-80.1045532226563, 26.1193008422852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345443725586, 26.140661239624]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1197509765625, 26.1335506439209]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937389373779]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.1493740081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1427001953125, 26.1474647521973]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1485443115234, 26.2036781311035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1123580932617, 26.159854888916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield/stop at a yield intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1323318481445, 26.1252899169922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1099243164063, 26.1042766571045]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1080627441406, 26.1291465759277]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059722900391, 26.1311283111572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1147766113281, 26.1330814361572]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1380615234375, 26.1334400177002]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1425170898438, 26.1429672241211]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1249237060547, 26.1235179901123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop on sidewalk"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1772155761719, 26.1581726074219]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1046371459961, 26.1380519866943]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1466369628906, 26.0889148712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1507415771484, 26.1313152313232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1055297851563, 26.1130676269531]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1249237060547, 26.1235179901123]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1639099121094, 26.1331024169922]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1067733764648, 26.1937313079834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314849853516, 26.1300563812256]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.132682800293, 26.1425151824951]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1283340454102, 26.1300449371338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1279773712158]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1314849853516, 26.1300563812256]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1057968139648, 26.2014255523682]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1059265136719, 26.1209316253662]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "no stop lamp"
        },
        "type": "Feature",
        "coordinates": [-80.1033096313477, 26.1333045959473]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1230621337891, 26.1301536560059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1340408325195, 26.1031284332275]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1056289672852, 26.1166534423828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.12353515625, 26.1284160614014]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225509643555, 26.1320171356201]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop roadway/xsection"
        },
        "type": "Feature",
        "coordinates": [-80.1195449829102, 26.1200332641602]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1517715454102, 26.1330184936523]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1388549804688, 26.1298561096191]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1705932617188, 26.1512851715088]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "failed to yield at a four-way stop-intersection"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
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
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.156135559082, 26.1203575134277]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1533584594727, 26.1127605438232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1852416992188, 26.1862716674805]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1153564453125, 26.145092010498]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1285400390625, 26.1300792694092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1071701049805, 26.1083698272705]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1225891113281, 26.1320362091064]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1463470458984, 26.1198883056641]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1345062255859, 26.1406402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1340637207031, 26.1031074523926]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1357421875, 26.1406326293945]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1658782958984, 26.1273212432861]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279411315918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1488800048828, 26.1239776611328]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1148529052734, 26.1378040313721]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1059036254883, 26.1279468536377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1272964477539, 26.1217708587646]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1334838867188, 26.1300086975098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1537628173828, 26.1347236633301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "ran stop sign"
        },
        "type": "Feature",
        "coordinates": [-80.1112060546875, 26.1348896026611]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1138401031494]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "imp stop un/load pasg limt acs"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "disobeyed stop/yield sign"
        },
        "type": "Feature",
        "coordinates": [-80.1235046386719, 26.1283893585205]
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
  layers = [[0, 'green'], [2, 'orange'], [5, 'red']];
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
