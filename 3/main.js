function htmlToCsv(html){

    let elements = html.split('<td>')
    let csv = ''
    for (el of elements){
        if(el.includes('</td>')){
            el.replace('</td>',' ')
        }
        csv+=el
    }
    return csv

}

function csvToHtml(csvString){

    let html = '<table>'
    let csvArray = csvString.split(',')
    for(let el of csvArray){
        html+=`<td>${el}</td>`
    }
    html+='</table>'
    return html 
}