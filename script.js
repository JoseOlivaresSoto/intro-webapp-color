document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorPicker = document.getElementById('colorPicker');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');
    const colorBox = document.getElementById('colorBox');
  
    function updateColor() {
      const color = colorPicker.value;
      const red = parseInt(color.substring(1, 3), 16);
      const green = parseInt(color.substring(3, 5), 16);
      const blue = parseInt(color.substring(5, 7), 16);
  
      redInput.value = red;
      greenInput.value = green;
      blueInput.value = blue;
      redRange.value = red;
      greenRange.value = green;
      blueRange.value = blue;
  
      const rgbString = `rgb(${red}, ${green}, ${blue})`;
      const hexString = color;
      rgbValue.textContent = rgbString;
      hexValue.textContent = hexString;
      colorBox.style.backgroundColor = rgbString;
    }
  
    function rgbToHex(r, g, b) {
      const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      };
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
  
    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);
    colorPicker.addEventListener('input', updateColor);
  
    updateColor(); // Inicializar con los valores predeterminados
  });
  