const css = fetch("index.css").then(res => res.text()).then(css => {
  const root = document.getElementById("shadow-the-hedgehog")
  const shadow = root.attachShadow({ mode: "open" })
  const grid = document.createElement("div")
  grid.classList.add("grid")
  shadow.appendChild(grid)
  fetch("rgbaValues/shadow.json").then(res => res.json()).then(rgbaArrays => {
    const hexes = rgbaArrays.map(rgbaArray => rgbaArray.map(RGBAToHexA))
    paint(grid, hexes)
  })

  // StyleSheet
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  shadow.adoptedStyleSheets = [sheet]
})

