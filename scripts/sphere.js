let pi = Math.PI;

let calc = document.getElementById('calc');

calc.onclick = function() {
  let volume, 
      input = document.getElementById('rad'),
      rad = Math.abs(input.value), 
      size;

  if(rad < 6) {
    size = 7;
  } else if (rad >= 39) {
    size = 38;
  } else {
    size = rad;
  }

  document.querySelector('.radius span').innerHTML = rad;

  document.querySelector('.circle').setAttribute("style", `width: ${size}rem; height: ${size}rem;`);

  volume = (4/3) * pi * Math.pow(rad, 3);

  document.querySelector('#volume span').innerHTML = volume.toFixed(2);
}