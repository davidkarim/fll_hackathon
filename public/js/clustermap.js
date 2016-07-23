var ACCESS_TOKEN, CONTAINER_ID, DARK, DATA, DEFAULT_LOCATION, DEFAULT_ZOOM, LIGHT, MAPSTYLE, TEXT_FONT, TEXT_SIZE, TYPE, _, blue, clusterMaxZoom, clusterOption, clusterRadius, clusterSource, cluster_keys, continental_us, dataPoints, dataURI, geoJsonData, high, locations, low, map, map_keys, map_kwargs, map_styles, map_values, mapsourceType, medium, pink, pointsSource, points_keys, rangeHigh, rangeLow, rangeMedium, ref1, ref2, ref3, ref4, sourceName, south_florida, toObject, yellow;

geoJsonData = {
  "features": [
    {
      "geometry": {
        "type": "Point",
        "coordinates": [-93.63343749998334, 45.52134610238481]
      },
      "type": "Feature",
      "properties": {
        "title": "Lyons-Moore",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-107.6134374999905, 45.48134610238482]
      },
      "type": "Feature",
      "properties": {
        "title": "Morris and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.82343749998753, 42.10134610238549]
      },
      "type": "Feature",
      "properties": {
        "title": "Payne and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-73.04343749997281, 32.681346102387366]
      },
      "type": "Feature",
      "properties": {
        "title": "Wilkerson-Guerra",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.33343749996989, 41.97134610238552]
      },
      "type": "Feature",
      "properties": {
        "title": "Adkins, Hernandez and Hoffman",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-102.41343749998784, 42.62134610238539]
      },
      "type": "Feature",
      "properties": {
        "title": "Fields, Morgan and Powell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.42343749998733, 34.451346102387014]
      },
      "type": "Feature",
      "properties": {
        "title": "White-Swanson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.17343749996981, 47.28134610238446]
      },
      "type": "Feature",
      "properties": {
        "title": "Davis and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.86343749998397, 25.52134610238649]
      },
      "type": "Feature",
      "properties": {
        "title": "Burch-Montgomery",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.37343749997042, 23.681346102386204]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith, Ponce and Sanchez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-110.45343749999195, 42.70134610238537]
      },
      "type": "Feature",
      "properties": {
        "title": "Davis-Taylor",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.25343749997138, 32.71134610238736]
      },
      "type": "Feature",
      "properties": {
        "title": "Jackson, Nunez and Espinoza",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-92.10343749998256, 29.331346102387087]
      },
      "type": "Feature",
      "properties": {
        "title": "Young PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.03343749997946, 43.10134610238529]
      },
      "type": "Feature",
      "properties": {
        "title": "Salinas, Pitts and Wilson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-90.68343749998184, 27.661346102386826]
      },
      "type": "Feature",
      "properties": {
        "title": "Johnson and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.59343749998384, 25.06134610238642]
      },
      "type": "Feature",
      "properties": {
        "title": "Stark LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.83343749997168, 29.53134610238712]
      },
      "type": "Feature",
      "properties": {
        "title": "Tran Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-81.6234374999772, 41.30134610238565]
      },
      "type": "Feature",
      "properties": {
        "title": "Hernandez-Hinton",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.05343749996975, 30.851346102387325]
      },
      "type": "Feature",
      "properties": {
        "title": "Williams, Santiago and Reyes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-91.95343749998248, 41.41134610238563]
      },
      "type": "Feature",
      "properties": {
        "title": "Parker LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-100.22343749998672, 38.59134610238619]
      },
      "type": "Feature",
      "properties": {
        "title": "Hernandez PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-74.32343749997347, 47.54134610238441]
      },
      "type": "Feature",
      "properties": {
        "title": "Elliott Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-99.11343749998615, 40.00134610238591]
      },
      "type": "Feature",
      "properties": {
        "title": "Rojas, Dyer and Guzman",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.93343749998759, 44.28134610238506]
      },
      "type": "Feature",
      "properties": {
        "title": "Allen, Reilly and Christensen",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.75343749997113, 29.831346102387165]
      },
      "type": "Feature",
      "properties": {
        "title": "Clarke Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-90.12343749998155, 45.0813461023849]
      },
      "type": "Feature",
      "properties": {
        "title": "Ray, Moore and Long",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-81.11343749997694, 44.82134610238495]
      },
      "type": "Feature",
      "properties": {
        "title": "Lopez-Kemp",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-114.62343749999408, 47.30134610238446]
      },
      "type": "Feature",
      "properties": {
        "title": "Carlson, Butler and Bryant",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-78.5034374999756, 43.41134610238523]
      },
      "type": "Feature",
      "properties": {
        "title": "Perez Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-108.63343749999102, 34.27134610238705]
      },
      "type": "Feature",
      "properties": {
        "title": "Adkins-Fields",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-90.36343749998167, 40.0513461023859]
      },
      "type": "Feature",
      "properties": {
        "title": "Bonilla, Wallace and Barker",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-65.77343749996909, 42.76134610238536]
      },
      "type": "Feature",
      "properties": {
        "title": "Roth-Garrett",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.22343749997034, 41.49134610238561]
      },
      "type": "Feature",
      "properties": {
        "title": "Jones-White",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-81.92343749997735, 33.43134610238722]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith-Smith",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-73.04343749997281, 47.32134610238445]
      },
      "type": "Feature",
      "properties": {
        "title": "Mitchell Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.1134374999928, 27.531346102386806]
      },
      "type": "Feature",
      "properties": {
        "title": "Hill-Garcia",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-124.37343749999907, 46.04134610238471]
      },
      "type": "Feature",
      "properties": {
        "title": "Peck, Terrell and Powell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-113.95343749999374, 34.17134610238707]
      },
      "type": "Feature",
      "properties": {
        "title": "Strong-Rhodes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-128.41343750000055, 31.891346102387487]
      },
      "type": "Feature",
      "properties": {
        "title": "Fitzpatrick LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.21343749996983, 40.94134610238572]
      },
      "type": "Feature",
      "properties": {
        "title": "Simmons-Duran",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.95343749997123, 24.501346102386332]
      },
      "type": "Feature",
      "properties": {
        "title": "Morgan-Bell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-100.55343749998688, 48.611346102384196]
      },
      "type": "Feature",
      "properties": {
        "title": "Garcia-Smith",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-125.39343749999959, 32.85134610238733]
      },
      "type": "Feature",
      "properties": {
        "title": "Wilson and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-105.6634374999895, 37.37134610238643]
      },
      "type": "Feature",
      "properties": {
        "title": "Mcdonald, Kelley and Yates",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-72.55343749997256, 44.81134610238495]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith, Newman and Foster",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.95343749997072, 26.41134610238663]
      },
      "type": "Feature",
      "properties": {
        "title": "Sanchez-Mitchell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.863437499985, 39.26134610238606]
      },
      "type": "Feature",
      "properties": {
        "title": "Reese LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-104.4934374999889, 48.20134610238428]
      },
      "type": "Feature",
      "properties": {
        "title": "Nunez LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-78.99343749997585, 46.361346102384644]
      },
      "type": "Feature",
      "properties": {
        "title": "Hall, Barnett and Prince",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-87.36343749998014, 26.91134610238671]
      },
      "type": "Feature",
      "properties": {
        "title": "Hernandez, Gardner and Reed",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.40343749998374, 36.43134610238662]
      },
      "type": "Feature",
      "properties": {
        "title": "Burns, Fuentes and Porter",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.99343749997176, 41.42134610238563]
      },
      "type": "Feature",
      "properties": {
        "title": "Perez Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.95343749997174, 32.681346102387366]
      },
      "type": "Feature",
      "properties": {
        "title": "Potter-Burke",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-99.27343749998623, 27.911346102386865]
      },
      "type": "Feature",
      "properties": {
        "title": "Barrett, Walton and Johnston",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-66.70343749996957, 39.00134610238611]
      },
      "type": "Feature",
      "properties": {
        "title": "Williams-Thomas",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-64.00343749996819, 37.25134610238646]
      },
      "type": "Feature",
      "properties": {
        "title": "Elliott, Vaughn and Joseph",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-71.44343749997199, 47.04134610238451]
      },
      "type": "Feature",
      "properties": {
        "title": "Johnson, Bradley and Norton",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-81.58343749997718, 26.901346102386707]
      },
      "type": "Feature",
      "properties": {
        "title": "Rice-Hayes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.55343749999763, 31.39134610238741]
      },
      "type": "Feature",
      "properties": {
        "title": "Reyes, Russell and Jones",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-125.04343749999941, 25.471346102386484]
      },
      "type": "Feature",
      "properties": {
        "title": "Wallace-Blevins",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-127.1734375000005, 38.94134610238612]
      },
      "type": "Feature",
      "properties": {
        "title": "Yu-Lynch",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-122.30343749999801, 40.0313461023859]
      },
      "type": "Feature",
      "properties": {
        "title": "Ray-Campbell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.18343749998363, 34.23134610238706]
      },
      "type": "Feature",
      "properties": {
        "title": "Lewis, Melton and Reynolds",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-88.0634374999805, 35.07134610238689]
      },
      "type": "Feature",
      "properties": {
        "title": "Brown PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-66.12343749996927, 23.97134610238625]
      },
      "type": "Feature",
      "properties": {
        "title": "Delgado, Gomez and Olsen",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-122.11343749999791, 38.07134610238629]
      },
      "type": "Feature",
      "properties": {
        "title": "Petty, Owens and Haynes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.65343749999256, 32.11134610238748]
      },
      "type": "Feature",
      "properties": {
        "title": "Franklin and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-82.15343749997747, 28.631346102386978]
      },
      "type": "Feature",
      "properties": {
        "title": "Ross-Herrera",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.37343749999754, 38.43134610238622]
      },
      "type": "Feature",
      "properties": {
        "title": "Thompson-Moore",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-118.82343749999623, 43.991346102385116]
      },
      "type": "Feature",
      "properties": {
        "title": "Franklin and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-75.81343749997423, 34.451346102387014]
      },
      "type": "Feature",
      "properties": {
        "title": "Villarreal-Harmon",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.87343749999319, 23.681346102386204]
      },
      "type": "Feature",
      "properties": {
        "title": "Knight-Johnson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-84.70343749997878, 26.80134610238669]
      },
      "type": "Feature",
      "properties": {
        "title": "Fisher Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-73.06343749997282, 27.131346102386743]
      },
      "type": "Feature",
      "properties": {
        "title": "Rivera, Lloyd and Davis",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-90.8034374999819, 24.35134610238631]
      },
      "type": "Feature",
      "properties": {
        "title": "Jackson, Clark and Briggs",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-108.34343749999087, 34.741346102386956]
      },
      "type": "Feature",
      "properties": {
        "title": "Neal and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-80.66343749997671, 33.57134610238719]
      },
      "type": "Feature",
      "properties": {
        "title": "Massey, Myers and Gordon",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.51343749996998, 43.991346102385116]
      },
      "type": "Feature",
      "properties": {
        "title": "Anderson Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-107.2234374999903, 44.37134610238504]
      },
      "type": "Feature",
      "properties": {
        "title": "Jensen, Hall and Stewart",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-100.72343749998697, 26.611346102386662]
      },
      "type": "Feature",
      "properties": {
        "title": "Spencer-Oconnor",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.05343749998356, 31.751346102387465]
      },
      "type": "Feature",
      "properties": {
        "title": "Anderson-Bailey",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-88.98343749998097, 31.181346102387376]
      },
      "type": "Feature",
      "properties": {
        "title": "Simmons-Davis",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-119.36343749999651, 44.92134610238493]
      },
      "type": "Feature",
      "properties": {
        "title": "Suarez and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-93.97343749998352, 46.94134610238453]
      },
      "type": "Feature",
      "properties": {
        "title": "Hayes-Miller",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-79.04343749997588, 43.891346102385135]
      },
      "type": "Feature",
      "properties": {
        "title": "Banks-Mendoza",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-92.92343749998298, 29.86134610238717]
      },
      "type": "Feature",
      "properties": {
        "title": "Barnes-Martin",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.81343749998497, 31.811346102387475]
      },
      "type": "Feature",
      "properties": {
        "title": "Grimes LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-124.88343749999933, 32.07134610238749]
      },
      "type": "Feature",
      "properties": {
        "title": "White, Rubio and Jackson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-99.56343749998638, 38.64134610238618]
      },
      "type": "Feature",
      "properties": {
        "title": "Vasquez, Gentry and Mcdonald",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-118.09343749999586, 46.90134610238454]
      },
      "type": "Feature",
      "properties": {
        "title": "Santiago, Aguirre and Johns",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.04343749998714, 33.26134610238725]
      },
      "type": "Feature",
      "properties": {
        "title": "Walker LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-97.4434374999853, 38.68134610238617]
      },
      "type": "Feature",
      "properties": {
        "title": "Short, Rosales and Gutierrez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-109.84343749999164, 48.95134610238413]
      },
      "type": "Feature",
      "properties": {
        "title": "Silva-Shepard",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-81.70343749997724, 36.57134610238659]
      },
      "type": "Feature",
      "properties": {
        "title": "Ward-Hernandez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.85343749997169, 35.901346102386725]
      },
      "type": "Feature",
      "properties": {
        "title": "Bentley Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.31343749997039, 40.96134610238572]
      },
      "type": "Feature",
      "properties": {
        "title": "Mejia-Andersen",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-123.24343749999849, 24.921346102386398]
      },
      "type": "Feature",
      "properties": {
        "title": "Turner, Parker and Taylor",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.31343749997141, 27.94134610238687]
      },
      "type": "Feature",
      "properties": {
        "title": "Sanders LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-62.36343749996851, 38.19134610238627]
      },
      "type": "Feature",
      "properties": {
        "title": "Alvarez-Benjamin",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-106.51343749998993, 38.98134610238611]
      },
      "type": "Feature",
      "properties": {
        "title": "Pittman-Miller",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.01343749997075, 47.211346102384475]
      },
      "type": "Feature",
      "properties": {
        "title": "Herrera, Bishop and Lowe",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.81343749997014, 34.32134610238704]
      },
      "type": "Feature",
      "properties": {
        "title": "White, Flynn and Key",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.95343749999783, 46.48134610238462]
      },
      "type": "Feature",
      "properties": {
        "title": "Pope Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.13343749998718, 33.341346102387234]
      },
      "type": "Feature",
      "properties": {
        "title": "Blevins, Harvey and Ramirez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.75343749997164, 47.43134610238443]
      },
      "type": "Feature",
      "properties": {
        "title": "Vega, Khan and Gibson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-108.77343749999109, 27.12134610238674]
      },
      "type": "Feature",
      "properties": {
        "title": "Hall-Jackson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-106.65343749999, 32.40134610238742]
      },
      "type": "Feature",
      "properties": {
        "title": "Terry-Anderson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-66.61343749996952, 24.54134610238634]
      },
      "type": "Feature",
      "properties": {
        "title": "Sims-Ho",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.96343749999272, 31.221346102387383]
      },
      "type": "Feature",
      "properties": {
        "title": "Harris-Munoz",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-63.453437499968295, 24.951346102386402]
      },
      "type": "Feature",
      "properties": {
        "title": "Coleman-Montgomery",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.47343749997098, 28.791346102387003]
      },
      "type": "Feature",
      "properties": {
        "title": "Pierce Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-62.23343749996854, 39.18134610238607]
      },
      "type": "Feature",
      "properties": {
        "title": "Thornton-Robinson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-104.40343749998885, 24.711346102386365]
      },
      "type": "Feature",
      "properties": {
        "title": "Wiley-James",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.45343749996995, 37.90134610238633]
      },
      "type": "Feature",
      "properties": {
        "title": "Diaz PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-75.58343749997411, 45.68134610238478]
      },
      "type": "Feature",
      "properties": {
        "title": "Lee, Gamble and Ruiz",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-87.73343749998033, 40.581346102385794]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-113.62343749999357, 36.74134610238656]
      },
      "type": "Feature",
      "properties": {
        "title": "Farmer-Silva",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.3234374999796, 40.70134610238577]
      },
      "type": "Feature",
      "properties": {
        "title": "Castro, Peters and Willis",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-67.26343749996985, 26.08134610238658]
      },
      "type": "Feature",
      "properties": {
        "title": "Elliott-Williams",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-75.50343749997407, 30.921346102387336]
      },
      "type": "Feature",
      "properties": {
        "title": "Martinez, Black and Everett",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.3234374999924, 27.141346102386745]
      },
      "type": "Feature",
      "properties": {
        "title": "Davidson, Miller and Price",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.76343749997983, 49.16134610238409]
      },
      "type": "Feature",
      "properties": {
        "title": "Coleman-Barrera",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-77.89343749997529, 36.351346102386636]
      },
      "type": "Feature",
      "properties": {
        "title": "Chambers-Fleming",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.84343749999266, 49.221346102384075]
      },
      "type": "Feature",
      "properties": {
        "title": "Fernandez-Allen",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-103.3334374999883, 47.111346102384495]
      },
      "type": "Feature",
      "properties": {
        "title": "Morgan-Barrett",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-116.2334374999949, 25.12134610238643]
      },
      "type": "Feature",
      "properties": {
        "title": "Landry Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.6934374999798, 31.421346102387414]
      },
      "type": "Feature",
      "properties": {
        "title": "Wheeler LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-127.49343750000067, 31.921346102387492]
      },
      "type": "Feature",
      "properties": {
        "title": "Thomas and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-124.4334374999991, 38.471346102386214]
      },
      "type": "Feature",
      "properties": {
        "title": "Gomez LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.07343749998459, 40.96134610238572]
      },
      "type": "Feature",
      "properties": {
        "title": "Thompson PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-103.60343749998844, 42.491346102385414]
      },
      "type": "Feature",
      "properties": {
        "title": "Dorsey-Chase",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.3734374999873, 47.361346102384445]
      },
      "type": "Feature",
      "properties": {
        "title": "Martinez, Mosley and Thomas",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-106.17343749998976, 40.81134610238575]
      },
      "type": "Feature",
      "properties": {
        "title": "Price-Kelly",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-85.64343749997926, 25.89134610238655]
      },
      "type": "Feature",
      "properties": {
        "title": "Buchanan Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-80.70343749997673, 45.67134610238478]
      },
      "type": "Feature",
      "properties": {
        "title": "Reed, Ferguson and Hall",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-89.11343749998103, 41.5413461023856]
      },
      "type": "Feature",
      "properties": {
        "title": "Green and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-107.39343749999038, 43.32134610238525]
      },
      "type": "Feature",
      "properties": {
        "title": "Cox-Patton",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-99.92343749998656, 47.78134610238436]
      },
      "type": "Feature",
      "properties": {
        "title": "Gardner, Silva and Long",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-84.5434374999787, 31.291346102387394]
      },
      "type": "Feature",
      "properties": {
        "title": "Christensen PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.25343749999747, 38.23134610238626]
      },
      "type": "Feature",
      "properties": {
        "title": "Martin, Simpson and Lyons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-123.14343749999844, 43.32134610238525]
      },
      "type": "Feature",
      "properties": {
        "title": "Bell-Rivera",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-76.19343749997442, 45.72134610238477]
      },
      "type": "Feature",
      "properties": {
        "title": "Ross Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-103.00343749998814, 41.19134610238567]
      },
      "type": "Feature",
      "properties": {
        "title": "Brown-Hernandez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-115.81343749999469, 42.091346102385494]
      },
      "type": "Feature",
      "properties": {
        "title": "Rhodes, Walker and Russell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.1134374999974, 39.10134610238609]
      },
      "type": "Feature",
      "properties": {
        "title": "Fisher Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-88.95343749998095, 34.05134610238709]
      },
      "type": "Feature",
      "properties": {
        "title": "Miller-Smith",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-104.71343749998901, 30.411346102387256]
      },
      "type": "Feature",
      "properties": {
        "title": "Mendez, Perry and Hernandez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-64.88343749996864, 44.27134610238506]
      },
      "type": "Feature",
      "properties": {
        "title": "Salazar-Nichols",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-82.92343749997787, 39.0413461023861]
      },
      "type": "Feature",
      "properties": {
        "title": "Sanchez Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-90.33343749998166, 38.5413461023862]
      },
      "type": "Feature",
      "properties": {
        "title": "Ferguson PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-104.73343749998902, 38.40134610238623]
      },
      "type": "Feature",
      "properties": {
        "title": "Vega, Reid and Vargas",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-80.6334374999767, 40.34134610238584]
      },
      "type": "Feature",
      "properties": {
        "title": "Parker Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-117.0034374999953, 37.82134610238634]
      },
      "type": "Feature",
      "properties": {
        "title": "Hill-Torres",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-71.55343749997205, 35.28134610238685]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-79.30343749997601, 31.9613461023875]
      },
      "type": "Feature",
      "properties": {
        "title": "Arellano PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-87.03343749997997, 31.631346102387447]
      },
      "type": "Feature",
      "properties": {
        "title": "Martin, Willis and Walker",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-65.75343749996908, 27.69134610238683]
      },
      "type": "Feature",
      "properties": {
        "title": "Hudson-Lane",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-84.10343749997847, 35.59134610238679]
      },
      "type": "Feature",
      "properties": {
        "title": "Sparks Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-115.4334374999945, 35.26134610238685]
      },
      "type": "Feature",
      "properties": {
        "title": "Shaw, Myers and Munoz",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-119.97343749999682, 25.341346102386463]
      },
      "type": "Feature",
      "properties": {
        "title": "Garrett, Davis and Chang",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.81343749997116, 37.011346102386504]
      },
      "type": "Feature",
      "properties": {
        "title": "Rivas, Greene and Daniel",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-93.37343749998321, 28.041346102386886]
      },
      "type": "Feature",
      "properties": {
        "title": "Wilson-Mcconnell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-62.343437499968516, 24.35134610238631]
      },
      "type": "Feature",
      "properties": {
        "title": "Santiago Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-88.04343749998048, 42.52134610238541]
      },
      "type": "Feature",
      "properties": {
        "title": "Pierce-Monroe",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-108.09343749999074, 38.43134610238622]
      },
      "type": "Feature",
      "properties": {
        "title": "Phillips, Murray and Miranda",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-114.71343749999413, 32.09134610238748]
      },
      "type": "Feature",
      "properties": {
        "title": "Nichols, Woodward and Morales",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-91.72343749998237, 23.491346102386174]
      },
      "type": "Feature",
      "properties": {
        "title": "Oconnor, Nichols and Barrett",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-105.52343749998943, 43.13134610238529]
      },
      "type": "Feature",
      "properties": {
        "title": "Hunt-Fitzpatrick",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-71.39343749997197, 24.151346102386277]
      },
      "type": "Feature",
      "properties": {
        "title": "Kelly PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.57343749999252, 35.49134610238681]
      },
      "type": "Feature",
      "properties": {
        "title": "Glass PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-76.80343749997473, 37.77134610238635]
      },
      "type": "Feature",
      "properties": {
        "title": "Griffin, Parker and Sanders",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-92.27343749998265, 43.28134610238526]
      },
      "type": "Feature",
      "properties": {
        "title": "Benton-Ryan",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-127.46343750000065, 48.85134610238415]
      },
      "type": "Feature",
      "properties": {
        "title": "Greene Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-97.08343749998511, 41.881346102385535]
      },
      "type": "Feature",
      "properties": {
        "title": "Lang-Gutierrez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-63.23343749996834, 31.121346102387367]
      },
      "type": "Feature",
      "properties": {
        "title": "Brown PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-72.70343749997264, 26.98134610238672]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith, Powell and Kennedy",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-93.88343749998347, 36.16134610238667]
      },
      "type": "Feature",
      "properties": {
        "title": "Stevens, Collins and Case",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-106.50343749998993, 26.14134610238659]
      },
      "type": "Feature",
      "properties": {
        "title": "Gonzalez, Odom and Gutierrez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-120.44343749999706, 35.38134610238683]
      },
      "type": "Feature",
      "properties": {
        "title": "Compton-Fisher",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-76.69343749997468, 48.611346102384196]
      },
      "type": "Feature",
      "properties": {
        "title": "Kennedy Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.69343749998491, 42.00134610238551]
      },
      "type": "Feature",
      "properties": {
        "title": "Hensley, Petersen and Nguyen",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-109.16343749999129, 33.10134610238728]
      },
      "type": "Feature",
      "properties": {
        "title": "Harris Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-125.12343749999945, 33.181346102387266]
      },
      "type": "Feature",
      "properties": {
        "title": "Delgado-Berger",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-83.60343749997821, 42.5613461023854]
      },
      "type": "Feature",
      "properties": {
        "title": "Williams Ltd",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.95343749997072, 39.61134610238599]
      },
      "type": "Feature",
      "properties": {
        "title": "Gilmore, Johnson and Thomas",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.36343749999753, 26.901346102386707]
      },
      "type": "Feature",
      "properties": {
        "title": "Atkinson-Tucker",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-124.56343749999917, 25.991346102386565]
      },
      "type": "Feature",
      "properties": {
        "title": "Delgado, Delacruz and Dalton",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-111.3334374999924, 36.14134610238668]
      },
      "type": "Feature",
      "properties": {
        "title": "Burns, Mendoza and Castillo",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-97.39343749998527, 41.52134610238561]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith, Ward and Arellano",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-95.1134374999841, 31.861346102387483]
      },
      "type": "Feature",
      "properties": {
        "title": "Lane-Shannon",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-114.73343749999414, 33.591346102387185]
      },
      "type": "Feature",
      "properties": {
        "title": "Moreno Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.7134374999798, 43.91134610238513]
      },
      "type": "Feature",
      "properties": {
        "title": "Parks-Mckee",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.71343749997162, 43.641346102385185]
      },
      "type": "Feature",
      "properties": {
        "title": "Medina, Taylor and Sanchez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-91.49343749998225, 23.511346102386177]
      },
      "type": "Feature",
      "properties": {
        "title": "Carson PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-119.33343749999649, 30.321346102387242]
      },
      "type": "Feature",
      "properties": {
        "title": "Olson-Valdez",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.63343749999306, 23.78134610238622]
      },
      "type": "Feature",
      "properties": {
        "title": "Shaffer, Clark and Stone",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.12343749998462, 44.451346102385024]
      },
      "type": "Feature",
      "properties": {
        "title": "Johnson, Bell and Banks",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-126.27343750000004, 24.911346102386396]
      },
      "type": "Feature",
      "properties": {
        "title": "Reid-Kennedy",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-84.46343749997865, 32.21134610238746]
      },
      "type": "Feature",
      "properties": {
        "title": "Chapman, Villanueva and Sullivan",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-64.4234374999684, 33.0013461023873]
      },
      "type": "Feature",
      "properties": {
        "title": "Clark, Cox and Mclaughlin",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.19343749999284, 30.841346102387323]
      },
      "type": "Feature",
      "properties": {
        "title": "Ross-Collins",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.5134374999797, 37.62134610238638]
      },
      "type": "Feature",
      "properties": {
        "title": "Wallace and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-104.08343749998869, 40.24134610238586]
      },
      "type": "Feature",
      "properties": {
        "title": "Rios Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-82.52343749997766, 35.83134610238674]
      },
      "type": "Feature",
      "properties": {
        "title": "Wallace, Wilson and Medina",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-75.69343749997417, 30.31134610238724]
      },
      "type": "Feature",
      "properties": {
        "title": "Wright PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-86.76343749997983, 44.21134610238507]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith-Nelson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-122.41343749999807, 31.891346102387487]
      },
      "type": "Feature",
      "properties": {
        "title": "King-Long",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-126.82343750000032, 25.38134610238647]
      },
      "type": "Feature",
      "properties": {
        "title": "Landry-Buck",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-116.55343749999507, 39.31134610238605]
      },
      "type": "Feature",
      "properties": {
        "title": "Campos Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-96.20343749998466, 46.62134610238459]
      },
      "type": "Feature",
      "properties": {
        "title": "Green, Hardin and Reyes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-123.41343749999858, 43.13134610238529]
      },
      "type": "Feature",
      "properties": {
        "title": "Durham Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-108.46343749999093, 29.841346102387167]
      },
      "type": "Feature",
      "properties": {
        "title": "Bryant-Smith",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-117.54343749999558, 24.091346102386268]
      },
      "type": "Feature",
      "properties": {
        "title": "Robinson and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-69.45343749997097, 45.501346102384815]
      },
      "type": "Feature",
      "properties": {
        "title": "Davis-Bray",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-93.61343749998333, 45.301346102384855]
      },
      "type": "Feature",
      "properties": {
        "title": "Nelson-Bernard",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-119.29343749999647, 38.48134610238621]
      },
      "type": "Feature",
      "properties": {
        "title": "Brown Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-92.65343749998284, 44.62134610238499]
      },
      "type": "Feature",
      "properties": {
        "title": "Scott PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.55343749997051, 39.921346102385925]
      },
      "type": "Feature",
      "properties": {
        "title": "James Group",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-118.363437499996, 45.251346102384865]
      },
      "type": "Feature",
      "properties": {
        "title": "Schmitt-Knight",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-128.16343750000078, 47.62134610238439]
      },
      "type": "Feature",
      "properties": {
        "title": "Bryant, Ewing and Ellis",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-113.2934374999934, 39.38134610238603]
      },
      "type": "Feature",
      "properties": {
        "title": "Conley, Brown and Thomas",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-63.49343749996829, 48.0813461023843]
      },
      "type": "Feature",
      "properties": {
        "title": "Brown-Mcdaniel",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-101.40343749998732, 32.04134610238749]
      },
      "type": "Feature",
      "properties": {
        "title": "Howard PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-110.81343749999213, 43.25134610238526]
      },
      "type": "Feature",
      "properties": {
        "title": "Foster, Fuentes and Shaffer",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-115.8334374999947, 39.89134610238593]
      },
      "type": "Feature",
      "properties": {
        "title": "Mullins, Suarez and Mcconnell",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-73.48343749997304, 43.891346102385135]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-110.553437499992, 27.521346102386804]
      },
      "type": "Feature",
      "properties": {
        "title": "Johnson, Chavez and Hendricks",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-98.90343749998604, 29.591346102387128]
      },
      "type": "Feature",
      "properties": {
        "title": "Chandler LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-116.97343749999528, 38.921346102386124]
      },
      "type": "Feature",
      "properties": {
        "title": "Calhoun, Johnson and Collins",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-89.4434374999812, 26.931346102386712]
      },
      "type": "Feature",
      "properties": {
        "title": "Osborne PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.42343749999296, 40.35134610238584]
      },
      "type": "Feature",
      "properties": {
        "title": "Wood, Yates and Wallace",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-88.57343749998076, 42.96134610238532]
      },
      "type": "Feature",
      "properties": {
        "title": "Murphy and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-68.26343749997037, 46.911346102384535]
      },
      "type": "Feature",
      "properties": {
        "title": "Williams-Swanson",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-121.65343749999768, 35.96134610238671]
      },
      "type": "Feature",
      "properties": {
        "title": "Jones-Combs",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-64.56343749996847, 49.29134610238406]
      },
      "type": "Feature",
      "properties": {
        "title": "Reyes PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-84.1734374999785, 30.94134610238734]
      },
      "type": "Feature",
      "properties": {
        "title": "Schmitt LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-70.8834374999717, 26.80134610238669]
      },
      "type": "Feature",
      "properties": {
        "title": "Smith and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-87.04343749997997, 29.80134610238716]
      },
      "type": "Feature",
      "properties": {
        "title": "Campbell PLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-114.79343749999417, 30.861346102387326]
      },
      "type": "Feature",
      "properties": {
        "title": "Lowe, Smith and Jones",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-112.85343749999318, 39.38134610238603]
      },
      "type": "Feature",
      "properties": {
        "title": "Sanders, Martinez and Clark",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-74.88343749997375, 35.39134610238683]
      },
      "type": "Feature",
      "properties": {
        "title": "Phillips and Sons",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-73.07343749997283, 28.361346102386936]
      },
      "type": "Feature",
      "properties": {
        "title": "Le, Snow and Rocha",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-85.99343749997944, 31.361346102387404]
      },
      "type": "Feature",
      "properties": {
        "title": "Owens, Thompson and Reyes",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-77.19343749997493, 35.34134610238684]
      },
      "type": "Feature",
      "properties": {
        "title": "Holden, Gray and Thornton",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-63.303437499968325, 34.11134610238708]
      },
      "type": "Feature",
      "properties": {
        "title": "Martin, Wells and Lambert",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-79.45343749997609, 42.541346102385404]
      },
      "type": "Feature",
      "properties": {
        "title": "Gray Inc",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-126.99343750000041, 34.451346102387014]
      },
      "type": "Feature",
      "properties": {
        "title": "Dunn LLC",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-94.18343749998363, 27.12134610238674]
      },
      "type": "Feature",
      "properties": {
        "title": "Rodriguez, Long and Smith",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-124.56343749999917, 35.951346102386715]
      },
      "type": "Feature",
      "properties": {
        "title": "Johnson, Thornton and Kaiser",
        "icon": "star"
      }
    }, {
      "geometry": {
        "type": "Point",
        "coordinates": [-106.2434374999898, 23.761346102386216]
      },
      "type": "Feature",
      "properties": {
        "title": "Garcia PLC",
        "icon": "star"
      }
    }
  ],
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "type": "FeatureCollection"
};

ACCESS_TOKEN = 'pk.eyJ1IjoiZG1tZmxsIiwiYSI6ImNpcW9uZmFlMzAxczNmb25uOTRubGUyc2wifQ.gUi6L8yTfyuo_wFE0qHyog';

CONTAINER_ID = 'map';

LIGHT = 'light';

DARK = 'dark';

map_styles = {
  'light': 'mapbox://styles/mapbox/light-v9',
  'dark': 'mapbox://styles/mapbox/dark-v9'
};

MAPSTYLE = LIGHT;

locations = {
  south_florida: [-80.1177978515625, 26.49515679244404],
  continental_us: [-99.140625, 39.36827914916011]
};

ref1 = ['south_florida', 'continental_us'], south_florida = ref1[0], continental_us = ref1[1];

DEFAULT_LOCATION = continental_us;

DEFAULT_ZOOM = 4;

sourceName = 'hiredwyncoders';

dataPoints = 'dataPoints';

mapsourceType = 'geojson';

dataURI = geoJsonData;

clusterOption = true;

clusterMaxZoom = 14;

clusterRadius = 50;

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
  var i, j, k, keys, layer, layerKeys, layers, len, len1, name, range, ref5, ref6, ref7, values;
  ref5 = [[sourceName, [cluster_keys, clusterSource]], [dataPoints, [points_keys, pointsSource]]];
  for (j = 0, len = ref5.length; j < len; j++) {
    ref6 = ref5[j], name = ref6[0], values = ref6[1];
    ref7 = values, keys = ref7[0], values = ref7[1];
    map.addSource(name, toObject(keys, values));
  }
  map.addLayer({
    'id': 'unclustered-points',
    'type': 'circle',
    'source': sourceName,
    'paint': {
      'circle-color': blue,
      'circle-radius': 18
    }
  });
  map.addLayer({
    'id': 'unclustered-points-count',
    'type': 'symbol',
    'source': sourceName,
    'layout': {
      'text-field': '1',
      'text-font': TEXT_FONT,
      'text-size': TEXT_SIZE
    }
  });
  map.addLayer({
    'id': dataPoints,
    'type': 'symbol',
    'source': dataPoints,
    'layout': {
      'icon-image': "{icon}-15",
      'icon-text-fit': 'none',
      'icon-offset': [10, 10],
      'text-size': 24,
      'text-field': "{title}",
      'text-font': ["Open Sans Semibold", "Arial Unicode MS Bold"],
      'text-offset': [0, 0.6],
      'text-anchor': "top"
    }
  });
  layerKeys = ['value', 'color'];
  layers = [
    (function() {
      var k, len1, ref8, results;
      ref8 = [rangeHigh, rangeMedium, rangeLow];
      results = [];
      for (k = 0, len1 = ref8.length; k < len1; k++) {
        range = ref8[k];
        results.push(toObject(layerKeys, range));
      }
      return results;
    })()
  ][0];
  for (i = k = 0, len1 = layers.length; k < len1; i = ++k) {
    layer = layers[i];
    map.addLayer({
      'id': 'cluster-' + i,
      'type': 'circle',
      'source': sourceName,
      'paint': {
        'circle-color': layer.color,
        'circle-radius': 18
      },
      'filter': i === 0 ? ['>=', 'point_count', layer.value] : ['all', ['>=', 'point_count', layer.value], ['<', 'point_count', layers[i - 1].value]]
    });
  }
  return map.addLayer({
    'id': 'cluster-count',
    'type': 'symbol',
    'source': sourceName,
    'layout': {
      'text-field': '{point_count}',
      'text-font': TEXT_FONT,
      'text-size': TEXT_SIZE
    }
  });
});
