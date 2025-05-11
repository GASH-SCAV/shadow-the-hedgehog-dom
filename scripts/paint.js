function paint(gridEl, rgbaArrays){
  const hexes = rgbaArrays.map(rgbaArray => rgbaArray.map(RGBAToHexA))
  gridEl.innerHTML = ""
  hexes.map(hexArray => {
    const row = document.createElement("div")
    row.classList.add("row")
    row.innerHTML = hexArray.map(hex => `<div style="background-color: ${hex}" class="cell"></div>`).join("")
    gridEl.appendChild(row)
  })
}