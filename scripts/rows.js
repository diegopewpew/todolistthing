let currentRows = 0;

document.getElementById("addRow").onclick = function() {
  currentRows++;

  // save and create elements
  let table = document.querySelector('table tbody'),
      row = document.createElement('tr'),
      cell = document.createElement('td'),
      text = document.createTextNode(`This is row number ${currentRows}`);

  // start appending
  cell.appendChild(text);
  row.appendChild(cell);
  table.appendChild(row);
}

document.getElementById("reset").onclick = function() {
  currentRows = 0;
  document.querySelector('table tbody').innerHTML = '';
}