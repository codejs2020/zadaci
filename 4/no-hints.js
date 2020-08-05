// 1
 hidden ? document.getElementById('second').className = 'show' : document.getElementById('second').className = ''

// 2
const names = ['Petar', 'Ivan', 'Milica', 'Jovana']
for(let i of names){
  saveInDatabase(i)
}


// 3
function isAdult (age) {
  return age > 17 ? true : false 
}

// 4
const cookieExpiration = 864000000

// 5
i % 2 === 0 ? addColor('#ffffff') : addColor('#111111') // black

// 6
if (pass) html += 20 // WAT


// 7
function setToLS(storage,data){
  localStorage.setItem(storage,JSON.stringify(data))
}
if (localStorage.getItem('grades') === null) { // ne briši ako već postoji nešto
  setToLS('grades', storageData.grades)
  setToLS('students',storageData.students)
  setToLS('subjects',storageData.subjects)
  setToLS('teachers',storageData.teachers)
  setToLS('parents',storageData.parents)
  setToLS('users', [...storageData.teachers, ...storageData.parents])
  setToLS('persons',[...storageData.students, ...storageData.teachers])
}

// 8
let figure = {color , size , shape }
  
