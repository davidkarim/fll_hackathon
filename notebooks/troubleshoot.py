
# coding: utf-8

# In[9]:

import json


# In[10]:

filepath = '/home/dmmmd/Dropbox/fll-hackathon/notebooks/flask-app/coffee/citations.coffee'
with open(filepath, 'r') as fh:
    bad_data = json.load(fh)


# In[11]:

bad_data['features'][0]


# In[12]:

filepath = '/home/dmmmd/Dropbox/fll-hackathon/notebooks/flask-app/coffee/fake_data.coffee'
with open(filepath, 'r') as fh:
    good_data = json.load(fh)


# In[13]:

good_data['features'][0]


# In[15]:

assert good_data['features'][0].keys() == bad_data['features'][0].keys()


# In[ ]:



