function excerpt(text,length){
    let p = document.createElement('p')
    if(text.length < length){
       p.textContent = text
        
    }
    else{
        p.innerHTML = `${text.slice(0,length)}  <a href=#> Read more... </a>` 
    }
    document.body.appendChild(p)
}