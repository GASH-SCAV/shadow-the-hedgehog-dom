# Hi Judge Gabi!

This is the "If I Did It: Confessions of a Killer" for the repo. These are the steps I took to complete the item.

1. Learned what the Shadow DOM is. I didn't know about this and I taught Javascript.
2. Took a Sprite of Sonic the Hedgehog from Sonic 1 and painted over it in Pixilart to make it look like Shadow, in the tradition of reskinned sprites, and exported it as [pixil-frame-0.png](imageConversion/pixil-frame-0.png)
3. From there, [I stole a Python script from Stack Overflow](imageConversion/index.py) (link to stack overflow commented in file) to convert an image into an array of arrays of RGBA strings, slightly modified it, and created [pixels.json](imageConversion/pixels.json)
4. Then I stole another script from a blog to convert that into [hex codes in JS](rgbatohex.js).
5. Finally, we attach a shadow dom root element, make it a flexbox, and churn out a bunch of rows of cells. Pixel art!
6. I enjoyed this item, thank you!