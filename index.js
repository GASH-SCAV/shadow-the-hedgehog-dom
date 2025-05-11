async function run(){
  const css = await fetch("shadow.css").then(res => res.text())
  const root = document.getElementById("shadow-the-hedgehog")
  const shadow = root.attachShadow({ mode: "open" })
  const grid = document.createElement("div")
  grid.classList.add("grid")
  shadow.appendChild(grid)
  const image1 = await fetch("rgbaValues/shadow-0.json").then(res => res.json())
  const image2 = await fetch("rgbaValues/shadow-1.json").then(res => res.json())
  let footUp = false
  function loop(){
    const image = footUp ? image1 : image2
    footUp = !footUp
    paint(grid, image)
    setTimeout(loop, 500)
  }
  loop()
  
  // StyleSheet
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  shadow.adoptedStyleSheets = [sheet]

}
run()