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
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1481399536133, 26.1222114562988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1617660522461, 26.1218585968018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1649398803711, 26.1100234985352]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1057739257813, 26.1109409332275]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1403884887695, 26.1191139221191]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1485443115234, 26.2036876678467]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1714019775391, 26.1382884979248]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1684722900391, 26.1469593048096]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1469345092773, 26.1331596374512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1041870117188, 26.1217498779297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1481094360352, 26.1384601593018]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1293716430664, 26.1300506591797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1529159545898, 26.1383323669434]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1259689331055, 26.1426410675049]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1452560424805, 26.1205501556396]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1208801269531, 26.1005535125732]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1387786865234, 26.1261196136475]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1829376220703, 26.1136474609375]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1471481323242, 26.1073799133301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1271591186523, 26.1183547973633]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1059112548828, 26.1192932128906]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415481567383, 26.1422233581543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1927185058594, 26.1047019958496]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1307220458984, 26.1022510528564]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1445465087891, 26.1231498718262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1480484008789, 26.2107448577881]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1088485717773, 26.1705360412598]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1701354980469, 26.1291122436523]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful number person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1375122070313, 26.1316871643066]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1564865112305, 26.1311626434326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1478042602539, 26.131404876709]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1046142578125, 26.1368522644043]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1445465087891, 26.1231498718262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1670837402344, 26.1291828155518]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1058654785156, 26.1209182739258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1421966552734, 26.1138248443604]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1429748535156, 26.1075401306152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1323165893555, 26.1192188262939]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlaw number of person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1777954101563, 26.1084632873535]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful number person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1592636108398, 26.1256332397461]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1474533081055, 26.1204128265381]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1520309448242, 26.1229553222656]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1323165893555, 26.1192188262939]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1009063720703, 26.1521186828613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1192836761475]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1857528686523, 26.1023025512695]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1397247314453, 26.1279106140137]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1406021118164, 26.1250915527344]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1564865112305, 26.1311626434326]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1388320922852, 26.1298942565918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1408157348633, 26.0946273803711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415481567383, 26.1422233581543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1594696044922, 26.1234893798828]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1406173706055, 26.1422595977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1422119140625, 26.085277557373]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.157829284668, 26.2031402587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1484756469727, 26.1203804016113]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1033782958984, 26.1290512084961]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1500396728516, 26.1383972167969]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1388320922852, 26.1298942565918]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.159553527832, 26.1250514984131]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1459579467773, 26.1332168579102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1084823608398, 26.1379127502441]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1268997192383, 26.1426200866699]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1046142578125, 26.1368598937988]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1058731079102, 26.1192836761475]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1530380249023, 26.0962505340576]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1454010009766, 26.1438770294189]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1208801269531, 26.1005535125732]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415023803711, 26.1403999328613]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1318206787109, 26.0681266784668]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1406173706055, 26.1422595977783]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.165168762207, 26.1291885375977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1511001586914, 26.1402034759521]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1380157470703, 26.1334190368652]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1011734008789, 26.1596431732178]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1933975219727, 26.1069469451904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1475219726563, 26.1222324371338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1429748535156, 26.1075401306152]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1472473144531, 26.1145973205566]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1388549804688, 26.1298561096191]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1599578857422, 26.1421375274658]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlaw number of person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1856460571289, 26.0921802520752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1307373046875, 26.1003456115723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1500396728516, 26.1383972167969]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1459579467773, 26.1332168579102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1303329467773, 26.1503086090088]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1445465087891, 26.1231498718262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1556854248047, 26.2032032012939]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.145622253418, 26.1204948425293]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1045608520508, 26.1182098388672]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1526260375977, 26.129467010498]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1547393798828, 26.118745803833]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1367568969727, 26.1002655029297]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.173828125, 26.112756729126]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1229248046875, 26.197546005249]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.2737579345703, 26.1208152770996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1506042480469, 26.1249122619629]
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
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1507797241211, 26.1312808990479]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1450805664063, 26.1349906921387]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1033325195313, 26.1332721710205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1046295166016, 26.1166610717773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415634155273, 26.1421871185303]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1608810424805, 26.1528568267822]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1486358642578, 26.1240062713623]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1446075439453, 26.1231517791748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415100097656, 26.1130027770996]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1556091308594, 26.1329460144043]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1370315551758, 26.1113529205322]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1533813476563, 26.1187801361084]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1715469360352, 26.1466522216797]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.163215637207, 26.118106842041]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1506042480469, 26.1249122619629]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1761856079102, 26.1064739227295]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1537628173828, 26.1347236633301]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1130142211914, 26.1545906066895]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.156120300293, 26.1186904907227]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1741256713867, 26.1424026489258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1416168212891, 26.1439418792725]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.160888671875, 26.0904407501221]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1623611450195, 26.1488094329834]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1370620727539, 26.110034942627]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1278228759766, 26.1067657470703]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1372222900391, 26.1191806793213]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1307220458984, 26.1022510528564]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1360855102539, 26.2036380767822]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1454010009766, 26.1438770294189]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1183319091797, 26.1891613006592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1448287963867, 26.0954532623291]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1363906860352, 26.1261596679688]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1475219726563, 26.1222324371338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1238021850586, 26.1005096435547]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1354827880859, 26.1058158874512]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful number person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1592636108398, 26.1256332397461]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1459579467773, 26.1332168579102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "parent/guardian allow bike violation"
        },
        "type": "Feature",
        "coordinates": [-80.1183319091797, 26.1891613006592]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1953735351563, 26.1043891906738]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1730728149414, 26.1087818145752]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1847991943359, 26.1515998840332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1424102783203, 26.1222820281982]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1030349731445, 26.1368579864502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "parent/guardian allow bike violation"
        },
        "type": "Feature",
        "coordinates": [-80.1480941772461, 26.1384410858154]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1430282592773, 26.1092548370361]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1733779907227, 26.1146602630615]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1435317993164, 26.1231746673584]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1450805664063, 26.1349906921387]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1416931152344, 26.1457099914551]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1599578857422, 26.133602142334]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1196136474609, 26.1497745513916]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1426239013672, 26.0946178436279]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1620864868164, 26.1328277587891]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.182861328125, 26.150857925415]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1245040893555, 26.1005115509033]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1030349731445, 26.1368579864502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1245040893555, 26.1005115509033]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1193008422852, 26.1376399993896]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1398010253906, 26.1298313140869]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1560592651367, 26.1884365081787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "fail to wear bike helmet"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1187362670898, 26.2370052337646]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "slow bike fail ride right curb"
        },
        "type": "Feature",
        "coordinates": [-80.1747360229492, 26.1879978179932]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "unlawful number person on bike"
        },
        "type": "Feature",
        "coordinates": [-80.1288909912109, 26.1446075439453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1389007568359, 26.1300430297852]
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
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1145401000977, 26.100736618042]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1047058105469, 26.1241626739502]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1046371459961, 26.1166667938232]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130504608154]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1159286499023, 26.1655921936035]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1157684326172, 26.1006908416748]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.104606628418, 26.1171474456787]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1150512695313, 26.1377639770508]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1207733154297, 26.2387962341309]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1054000854492, 26.1380348205566]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.1056976318359, 26.1166152954102]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1186752319336, 26.1696796417236]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1024627685547, 26.1423625946045]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1387023925781, 26.1440563201904]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1576614379883, 26.1242961883545]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1057357788086, 26.1176357269287]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1193027496338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1430511474609, 26.1092910766602]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1057739257813, 26.1109409332275]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1415481567383, 26.1422233581543]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1182479858398, 26.1006164550781]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1034927368164, 26.1258182525635]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1127243041992, 26.1007671356201]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1394424438477, 26.1369171142578]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1228485107422, 26.1004867553711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1438064575195, 26.1223030090332]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1574630737305, 26.131103515625]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1228485107422, 26.1004867553711]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1127243041992, 26.1007671356201]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1045532226563, 26.1193008422852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1127243041992, 26.1007671356201]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1193370819092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1445465087891, 26.1231498718262]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056518554688, 26.1119995117188]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1037673950195, 26.1241836547852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1574096679688, 26.1293563842773]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1772689819336, 26.2075500488281]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056671142578, 26.1176471710205]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.103271484375, 26.1332874298096]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.10595703125, 26.1192874908447]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1543579101563, 26.151575088501]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1739349365234, 26.1216316223145]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "stnd/park prohib bike lane"
        },
        "type": "Feature",
        "coordinates": [-80.1058807373047, 26.1193370819092]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1058654785156, 26.1209182739258]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1033401489258, 26.1304626464844]
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
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1056747436523, 26.117639541626]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1170043945313, 26.100643157959]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1145401000977, 26.100736618042]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1389007568359, 26.1300430297852]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1575164794922, 26.1328659057617]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.2166061401367, 26.2434349060059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1056442260742, 26.1251697540283]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1288909912109, 26.1446075439453]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "improper/no bike brake"
        },
        "type": "Feature",
        "coordinates": [-80.1837692260742, 26.1508255004883]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1140213012695, 26.1378421783447]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1024627685547, 26.1423625946045]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "slow bike fail ride right curb"
        },
        "type": "Feature",
        "coordinates": [-80.1444625854492, 26.1428604125977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1046676635742, 26.1166954040527]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1093521118164, 26.1026287078857]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1404876708984, 26.1404552459717]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.116340637207, 26.1612300872803]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1054840087891, 26.1130409240723]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "veh fail use due care-ped/bike"
        },
        "type": "Feature",
        "coordinates": [-80.146858215332, 26.1473503112793]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1861343383789, 26.1181373596191]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1437454223633, 26.1223049163818]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.105842590332, 26.1193027496338]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1033782958984, 26.1311416625977]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1507110595703, 26.1295757293701]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no or improper light"
        },
        "type": "Feature",
        "coordinates": [-80.1556777954102, 26.1514930725098]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1413650512695, 26.136890411377]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "drive on sidewalk/bike path"
        },
        "type": "Feature",
        "coordinates": [-80.1145401000977, 26.100736618042]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "bike regulations violations"
        },
        "type": "Feature",
        "coordinates": [-80.1052703857422, 26.1146430969238]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.2166061401367, 26.2434349060059]
      }
    }, {
      "geometry": {
        "properties": {
          "icon": "star",
          "title": "riding bike with no/imp light"
        },
        "type": "Feature",
        "coordinates": [-80.1395797729492, 26.126106262207]
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
