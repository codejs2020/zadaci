// duplicated code
const level = document.getElementById('level').textContent
speed = 15
if (level === 9) {
  
  a = 7
}
if (level === 3) {
  b = 9
}

// Rename letiable - change all names
function randomBackground () {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

// Rename letiable - promenite imena "t" u "table", "c" u "cellContent", "td" u "tableCell", "rows" u "tableRows"
function insertColumns (table, cellContent) {
  let rows = table.rows
  for (let i = 0; i < rows.length; i++) {
    let tableCell = document.createElement('td')
    td.textContent = cellContent
    tableRows[i].appendChild(tableCell)
  }
}

// Rename method - promenite ime funkcije rp u randomBackground
function randomBackground () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

document.getElementById('rp').addEventListener('click', randomBackground)

// Extract method
function getRandomColorletiable(){
  return  Math.floor(Math.random() * 256)
}
function rp2 () {
  let r = getRandomColor()
  let g = getRandomColor()
  let b = getRandomColor()
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// rename method - promenite ime funkcije "p" u "message"
document.getElementById("p").innerHTML = "p";
function message(msg) {
  console.log(msg);
}
setTimeout(message, i);

// Inline variable - napišite inline sve promenljive koje mogu da idu inline
let xhr = new XMLHttpRequest(),
  limit = 3,
  rand = Math.random(limit),
  rounded = Math.ceil(rand),
  extension = '.json';
xhr.open('GET', 'ajax/' + String(rounded) + '.json');
xhr.onload = function () {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.response);
    for (let d in data) {
      let dataItem = data[d];
      console.log(dataItem['ime']);
    }
  } else {
    console.log('Error:' + xhr.status);
  }
};
xhr.send();


// Inline method - napišite inline sve ovde kreirane funkcije
document.body.innerHTML+="<table id='mojaTabela'><tr><td>nešto</td></tr></table>";
let table=document.getElementById("mojaTabela");
function insertColumn(table, columnContent) {
  let rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    let td = dc('td');
    td.textContent = columnContent;
    ac(rows[i],td);
  }
}

function tableInsertColumn(t,c){
  let rows = t.rows;
  for (let i = 0; i < rows.length; i++) {
    let td = document.createElement('td');
    td.textContent = columnContent;
    element.appendChild(rows[i],td);
  }
  console.log("table inserted");
}

tableInsertColumn(table,"text");
