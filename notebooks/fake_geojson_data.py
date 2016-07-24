
# coding: utf-8

# In[218]:

from itertools import chain
import logging
import random
import json
import os


# In[219]:

from faker import Faker


# In[220]:

DATA_COUNT = 100


# In[221]:

DEFAULT_ICON = 'star'


# In[222]:

filepath = '/home/dmmmd/Dropbox/fll-hackathon/notebooks/flask-app/coffee/data.coffee'
directory = os.path.dirname(filepath)
assert os.path.exists(directory)


# In[223]:

logger = logging.getLogger(__name__)
# supercedes handler level
# if this level is lower than handler messages don't get through
logger.setLevel(logging.DEBUG)

# seems IPthon adds a stream handler. Might as well use it.
stream_handler = logger.handlers.pop(0)     if logger.handlers else logging.StreamHandler()
stream_handler.setLevel(logging.DEBUG)
logger.addHandler(stream_handler)
logger.debug("The logger is working.")


# In[224]:

(
    CR,
    DELIMITER,
    COMMA,
    SPACE,
    LAST,
    FIRST,
    PENULTIMATE,
) = (
    '\n',
    '||',
    ',',
    ' ',
    -1,
    0,
    -2,
)
COMMA_SPACE = ''.join((COMMA, SPACE))


# # across hemispheres
# 
# I drew a box around US at http://geojson.io to get coordinates.

# In[225]:

# city of Ft. Lauderdale
# drew a box around US at http://geojson.io/#map=3/24.37/-87.89 to get coordinates
# adjust the bounding box to suit
bounding_box = [
    [
      -80.17684936523438,
      26.06110078617974
    ],
    [
      -80.17684936523438,
      26.141569629097454
    ],
    [
      -80.09994506835938,
      26.141569629097454
    ],
    [
      -80.09994506835938,
      26.06110078617974
    ],
    [
      -80.17684936523438,
      26.06110078617974
    ]
]
        

# drew a box around US at http://geojson.io/#map=3/24.37/-87.89 to get coordinates
# adjust the bounding box to change the lng, lat max, min
# THIS FAILS WITH EASTERN HEMISPHERE
boundaries = list(set(chain(*bounding_box)))
min_lng, max_lng, min_lat, max_lat = boundaries
logger.debug(boundaries)


# In[226]:

# floating point range
# built-in range does not accept floats
# use case for numpy! (I now I have reason to try it.)
def frange(minimum, maximum, stp=0.01):
  i = minimum + stp / 2.0
  while i < maximum:
    yield minimum
    minimum += stp
    i += stp


# In[227]:

def get_random_coordinate(max_lng=max_lng, min_lng=min_lng, max_lat=max_lat, min_lat=min_lat):
    # Negative Longitude is West. 
    # Negative Latitude is South.
    coordinates = ([max_lng, min_lng], [max_lat, min_lat],)
    for coordinate in coordinates:
        coordinate.sort()
    longitude, latitude = [
        random.choice(list(frange(low, high)))
        for low, high
        in coordinates
    ]
    return longitude, latitude


# In[228]:

get_random_coordinate()


# In[229]:

fake = Faker()
# add a fake coordinates function to fake instance
fake.coordinates = get_random_coordinate


# In[230]:

fake.coordinates()


# In[231]:

fake_attrs = (
    NAME, 
    COMPANY, 
    ADDRESS, 
    COORDINATES,
) = (
    'name', 
    'company', 
    'address', 
    'coordinates', 
)


# In[232]:

address_keys = (
    ADDRESSEE, 
    _, 
    STREET, 
    CITY, 
    STATE, 
    ZIPCODE, 
    _
) = (
    'addressee', 
    COMPANY, 
    'street', 
    'city', 
    'state', 
    'zipcode', 
    COORDINATES, 
)


# In[233]:

# I know that def is preferred though these lambdas are simple one-liners
handlers = (
    lambda name: name,
    lambda company: company,
    lambda address: DELIMITER.join(getattr(address, 'split')(CR)),
    lambda coordinates: coordinates,
)


# In[234]:

# sanity check to make sure handlers len matches fake_attrs len
assert len(fake_attrs) == len(handlers)


# In[235]:

handlers = dict(zip(fake_attrs, handlers))


# In[236]:

def parse_address(attr):
    faked_item = getattr(fake, attr)()
    return handlers[attr](faked_item)


# In[237]:

def get_address_parts(item):
    try:
        tokens = item.split(DELIMITER)
    except AttributeError:
        return (item, ) # to protect list item from chain, return sequence
    if len(tokens) == 1:
        return (item, )
    address = tokens[FIRST]
    city_state_zip = tokens[LAST].split(SPACE)
    state, zip_code = [city_state_zip[position] for position in (PENULTIMATE, LAST)]
    city = SPACE.join(city_state_zip[:PENULTIMATE]) # city may have more than 1 word so slice all but last 2
    return address, city, state, zip_code


# In[238]:

addresses = [dict(zip(
                      address_keys, 
                      chain(*[get_address_parts(parse_address(attr)) 
                              for attr in fake_attrs])))
             for _ in range(DATA_COUNT)]


# In[239]:

addresses[LAST]


# In[240]:

(
    FEATURECOLLECTION,
    TYPE,
    CRS,
    NAME,
    FEATURE,
    FEATURES,
    EMPLOYEE,
    PROPERTIES,
    GEOMETRY,
    TITLE,
    ICON,
    POINT,
) = (
    'FeatureCollection',
    'type',
    'crs',
    'name',
    'feature'.title(),  # easier to notice, must be title
    'features',
    'employee',
    'properties',
    'geometry',
    'title',
    'icon',
    'Point',
)
# I have no idea what this value means yet.
CRS_DEFAULT = "urn:ogc:def:crs:OGC:1.3:CRS84"


# In[241]:

def get_template(coordinates, company, icon=DEFAULT_ICON):
    root_keys = (TYPE, PROPERTIES, GEOMETRY)
    property_keys, property_values = (
        (TITLE, ICON, ), 
        (company, icon, ), 
    )
    geometry_keys, geometry_values = (
        (COORDINATES, TYPE, ), 
        (coordinates, POINT, ),
    )
    root_values = (
        FEATURE, 
        dict(zip(property_keys, property_values)),
        dict(zip(geometry_keys, geometry_values)),
    )
    return  dict(zip(root_keys, root_values))


# In[242]:

# here for reference
full_geojson_template = {
    TYPE: FEATURECOLLECTION,
    CRS: {
        TYPE: NAME, 
        PROPERTIES: {
            NAME: CRS_DEFAULT,
        }
    },
    FEATURES: [],
}


# In[ ]:

[{'geometry': {'coordinates': (-58.276737496862296, 31.86743706380791),
   'type': 'Point'},
  'properties': {'icon': 'star', 'title': 'White, Nicholson and Boyle'},
  'type': 'Feature'}]


# In[243]:

# example rendered features list of len 1
[
    {
        'geometry': 
         {
            'coordinates': (-58.276737496862296, 31.86743706380791), 
            'type': 'Point'
        }, 
        # the properties value is accessible in certain MapBox GL JS layers
        'properties': {
            'icon': 'star', 
            'title': 'White, Nicholson and Boyle'}, 
            'type': 'Feature'
    },
]


# In[244]:

features_data = [get_template(address[COORDINATES], address[COMPANY])
                 for address in addresses]
data_points = {
    TYPE: FEATURECOLLECTION, 
    FEATURES: features_data,
    CRS: {
            TYPE: NAME, 
            PROPERTIES: {
            NAME: CRS_DEFAULT
        }
    }  
}


# In[245]:

logger.debug(data_points.keys())


# In[246]:

# make it a variable
data = ''.join(('geoJsonData = ', json.dumps(data_points)))


# In[247]:

with open(filepath, 'w') as fh:
    fh.write(data)


# In[248]:

with open(filepath, 'r') as fh:
    data = json.load(fh)


# In[ ]:

logger.debug(data.keys())
logger.debug(data[CRS])
logger.debug(data[FEATURES][FIRST][GEOMETRY])

