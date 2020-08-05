// 1
if (hidden) {
  document.getElementById('second').className = 'show'
} else {
  document.getElementById('second').className = ''
}

// 2
const names = ['Petar', 'Ivan', 'Milica', 'Jovana']
saveInDatabase(names[0])
saveInDatabase(names[1])
saveInDatabase(names[2])
saveInDatabase(names[3])

// 3
function isAdult (age) {
  if (age && age > 17) {
    return true
  } else {
    return false
  }
}

// 4
const cookieExpiration = 10 * 1000 * 60 * 60 * 24

// 5
if (i % 2 === 0) {
  addColor('#ffffff') // white
} else {
  addColor('#111111') // black
}

// 6
if (pass) {
  html += 20 // WAT
}

// 7
if (localStorage.getItem('grades') === null) { // ne briši ako već postoji nešto
  localStorage.setItem('grades', JSON.stringify(storageData.grades))
  localStorage.setItem('students', JSON.stringify(storageData.students))
  localStorage.setItem('subjects', JSON.stringify(storageData.subjects))
  localStorage.setItem('teachers', JSON.stringify(storageData.teachers))
  localStorage.setItem('parents', JSON.stringify(storageData.parents))
  localStorage.setItem('users', JSON.stringify([...storageData.teachers, ...storageData.parents]))
  localStorage.setItem('persons', JSON.stringify([...storageData.students, ...storageData.teachers]))
}

// 8
let figure = {
  color: color,
  size: size,
  shape: shape
}
