const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

textElement.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", () => {
  textElement.style.fontSize = `${fontSizeControl.value}px`;

  // fontSizeControl.addEventListener("input", () => {
  //   const fontSizeValue = fontSizeControl.value;
  //   textElement.style.fontSize = `${fontSizeValue}px`;
});
