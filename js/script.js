    
    
    
    
    
function clicar(){
    let newsContent = document.querySelector('.news_content')
    let readMore = document.querySelector('#read_more')
    let newsTittle = document.querySelector('#news_tittle')
    let LineAjust = document.querySelector("#line_ajust")
    LineAjust.style.bottom = "-81px" //Ajust line 
    newsTittle.style.marginBottom = "-10%"
    readMore.style.display = "none"
    LineAjust.style.transition = '0.4s'
    newsTittle.innerHTML = "News"
    newsContent.style.height = "500px"
    let arrow = document.querySelector(".arrow_box")
    arrow.style.display = "initial"
    
}


function close_news(){
    let newsTittle = document.querySelector('#news_tittle')
    newsTittle.style.marginBottom = "2%"
    let newsContent = document.querySelector('.news_content')
    newsContent.style.height = "230px"
    let LineAjust = document.querySelector("#line_ajust")
    LineAjust.style.bottom = "190px" //Ajust line
    LineAjust.style.transition = '0.1s'
    let readMore = document.querySelector('#read_more')
    readMore.style.display = 'initial'
    let arrow = document.querySelector(".arrow_box")
    arrow.style.display = "none"
}