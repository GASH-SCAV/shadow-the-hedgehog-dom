from PIL import Image
import numpy as np
import json

path = 'pixil-frame-0.png'
image = Image.open(path)
image = np.asarray(image)
output_path = 'output.json'
with open(output_path, 'w') as f:
  json.dump(image.tolist(), f)