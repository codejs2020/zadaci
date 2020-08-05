function sabiranje(a,b){
    return a+b
}

function reverseArray(arr){
    return arr.reverse()
}

function createTable(){

    output = '<table>'
    
    for (let i=0;i<4;i++){
        output += '<tr>'
        for (let j=0;j<4;j++){
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            output+=`<td style="background-color:rgb(${red},${green},${blue});width:100px;height:100px;">${j}</td>`
        }
    }
    output+='</table>'
    document.body.innerHTML = output
 }


function createTableWithFixedColors(){

    output = '<table>'
    for (let i=0;i<4;i++){
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        output += '<tr>'
        for (let j=0;j<4;j++){
           
            output+=`<td style="background-color:rgb(${red},${green},${blue});width:100px;height:100px;">${j}</td>`
        }
    }
    output+='</table>'

    document.body.innerHTML = output
 }

 function getToday(){

    days = {
        1: 'ponedeljak',
        2: 'utorak',
        3: 'sreda',
        4: 'cetvrtak',
        5: 'petak',
        6: 'subota',
        7: 'nedelja'
    }
    d = new Date()
    return `danas je ${days[d.getDay()]}`
 }