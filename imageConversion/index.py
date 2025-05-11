# https://stackoverflow.com/questions/70149734/how-to-convert-an-image-into-an-array-of-its-raw-pixel-data
from PIL import Image
import numpy as np
import json

path = 'pixil-frame-0.png'
image = Image.open(path)
image = np.asarray(image)
output_path = 'output.json'
with open(output_path, 'w') as f:
  json.dump(image.tolist(), f)