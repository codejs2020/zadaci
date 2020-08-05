// duplicated code
const level = document.getElementById('level').textContent
if (level === 9) {
  speed = 15
  a = 7
}
if (level === 3) {
  speed = 15
  b = 9
}

// Rename variable - change all names
function randomBackground () {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// Rename variable - promenite imena "t" u "table", "c" u "cellContent", "td" u "tableCell", "rows" u "tableRows"
function insertColumns (t, c) {
  let rows = t.rows
  for (let i = 0; i < rows.length; i++) {
    let td = document.createElement('td')
    td.textContent = c
    rows[i].appendChild(td)
  }
}

// Rename method - promenite ime funkcije rp u randomBackground
function rp () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

document.getElementById('rp').addEventListener('click', rp)

// Extract method
function rp2 () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// rename method - promenite ime funkcije "p" u "message"
document.getElementById("p").innerHTML = "p";
function p(msg) {
  console.log(msg);
}
setTimeout(p, i);

// Inline variable - napišite inline sve promenljive koje mogu da idu inline
var xhr = new XMLHttpRequest(),
  method = 'GET',
  prefix = 'ajax/',
  limit = 3,
  rand = Math.random(limit),
  rounded = Math.ceil(rand),
  extension = '.json';
xhr.open(method, prefix + rounded + extension);
xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.response);
    for (var d in data) {
      var dataItem = data[d];
      var item = 'ime';
      console.log(dataItem[item]);
    }
  } else {
    var errorPrefix = 'Errror: ';
    console.log(errorPrefix + xhr.status);
  }
};
xhr.send();


// Inline method - napišite inline sve ovde kreirane funkcije
document.body.innerHTML+="<table id='mojaTabela'><tr><td>nešto</td></tr></table>";
var table=document.getElementById("mojaTabela");
function insertColumn(table, columnContent) {
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var td = dc('td');
    td.textContent = columnContent;
    ac(rows[i],td);
  }
}

function tableInsertColumn(t,c){
  insertColumn(t, c);
  console.log("table inserted");
}

function ac(element,contentToAppend){
  element.appendChild(contentToAppend);
}
function dc(el){
  return document.createElement(el);
}
tableInsertColumn(table,"text");
