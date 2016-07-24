
# coding: utf-8

# In[1020]:

import os
import json
import logging
import random
from datetime import datetime
from itertools import chain


# In[1021]:

logger = logging.getLogger(__name__)
# supercedes handler level
# if this level is lower than handler messages don't get through
logger.setLevel(logging.DEBUG)

# seems IPthon adds a stream handler. Might as well use it.
stream_handler = logger.handlers.pop(0)     if logger.handlers else logging.StreamHandler()
stream_handler.setLevel(logging.DEBUG)
logger.addHandler(stream_handler)
logger.debug("The logger is working.")


# In[1022]:

DEFAULT_ICON = 'star'


# In[1023]:

# data did not have headers so was replaced
read_filepath = "./city-data/Citation-rows.json"


# In[1024]:

read_filepath = "./city-data/CitationData.json"
assert os.path.exists(read_filepath)


# In[1025]:

with open(read_filepath, 'r') as fh:
    data = json.load(fh)


# In[1063]:

(
    FIRST,
    LAST,
    GEO,
    LAT,
    LNG,
    CITATION,
    DATETIME,
) = (
    0,
    -1,
    -3,
    'geox',
    'geoy',
    11,
    12,
)


# In[1064]:

(
    META, 
    DATA,
    VIEW,
    COLUMNS,
    NAME,
) = (
    'meta', 
    'data', 
    'view',
    'columns',
    'name',
)


# In[1065]:

data_rows = data[DATA]
meta = data[META]


# In[1066]:

one_sample = data_rows[FIRST:1]


# In[1067]:

one_sample


# In[1068]:

columns = [item[NAME] for item in meta[VIEW][COLUMNS]]


# In[1112]:

# make dicts
data_rows = [dict(zip(columns, data_row)) for data_row in data_rows]


# In[1069]:

logger.debug(columns)


# In[1070]:

assert len(one_sample[FIRST]) == len(columns)
one_sample = [dict(zip(columns, datum)) for datum in one_sample]
logger.debug(one_sample)


# In[1101]:

(
    DATEOCCURRED,
    CITATIONCHARGE,
    AGE,
) = (
    'Date Occurred',
    'Citation Charge',
    'age',
)


# In[1102]:

logger.debug(LNG)


# In[1103]:

lngs_lats = [tuple(float(num) for num in (datum[LNG], datum[LAT])) for datum in one_sample]
logger.debug(lngs_lats)


# In[1104]:

times = [datum[DATEOCCURRED] for datum in one_sample]
logger.debug(times)


# In[1113]:

citations = [datum[CITATIONCHARGE] for datum in one_sample]
logger.debug(citations)


# In[1140]:

ages = [int(datum[AGE]) for datum in data_rows 
                  if all((
                            all((datum[AGE] != item for item in ['BB', 'NB'])), 
                            datum[AGE]
                        ))
       ]
correct_ages = [datum for datum in data_rows 
                  if all((
                            all((datum[AGE] != item for item in ['BB', 'NB'])), 
                            datum[AGE],
                    ))
               ]
minimal = min(ages)
logger.debug(minimal)


# In[1139]:

len([datum for datum in correct_ages if int(datum[AGE]) == minimal])


# In[ ]:

needle_list = (
     SCHOOL,
     STOP,
     CROSSWALK,
     BIKE,
) = (
    'school',
    'stop',
    'crosswalk',
    'bike',
)


# In[ ]:

features = [
    {
        'geometry': {
            'coordinates': [
            float(lng), 
            float(lat)], 
            'type': 'Point', 
        'properties': {
            'icon': DEFAULT_ICON, 
            'title': str(citation.lower())}, 
            'type': 'Feature'}
    }
    for citation, (lng, lat) in zip(citations, lngs_lats) 
    if all ((
            lng, 
            lat, 
            citation,
            all((
              BIKE in str(citation).lower(),
            ))
        ))]


# In[ ]:

DEFAULT_ICON = 'star'


# In[ ]:

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


# In[ ]:

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


# In[ ]:

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


# In[ ]:

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

data_points = {
    TYPE: FEATURECOLLECTION, 
    FEATURES: features,
    CRS: {
            TYPE: NAME, 
            PROPERTIES: {
            NAME: CRS_DEFAULT
        }
    }  
}


# In[ ]:

data_points[FEATURES][FIRST]


# In[ ]:

# make it a variable
data = ''.join(('geoJsonData = ', json.dumps(data_points)))


# In[ ]:

filepath = '/home/dmmmd/Dropbox/fll-hackathon/notebooks/flask-app/coffee/citations.coffee'
with open(filepath, 'w') as fh:
    fh.write(data)


# In[ ]:

filepath = '/home/dmmmd/Dropbox/fll-hackathon/notebooks/flask-app/coffee/citations_data.coffee'
with open(filepath, 'w') as fh:
    fh.write(data)

