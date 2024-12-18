const body_tag = document.getElementsByTagName("body")[0];
const title_tag = document.getElementsByTagName("h1")[0];
function fillColor(R, G, B, flag) {
  if (flag != "random") {
    title_tag.style.color = "rgb(255, 255, 255)";
    body_tag.style.backgroundColor = `rgb(${R},${G},${B})`;
  } else {
    title_tag.style.color = "rgb(255, 255, 255)";
    R = Math.random() * 255;
    G = Math.random() * 255;
    B = Math.random() * 255;
    body_tag.style.backgroundColor = `rgb(${R},${G},${B})`;
  }
}

function reset() {
  title_tag.style.color = "initial";
  body_tag.style.backgroundColor = "initial";
}
