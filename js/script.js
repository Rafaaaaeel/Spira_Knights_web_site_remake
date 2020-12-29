window.onload()

function clicar(){
    let newsContent = document.querySelector('.news_content')
    let readMore = document.querySelector('#read_more')
    let newsTittle = document.querySelector('#news_tittle')
    let gambiarra = document.querySelector("#line_ajust")
    gambiarra.style.bottom = "-81px" //Ajust line 
    newsTittle.style.marginBottom = "-10%"
    readMore.style.bottom = "40%"
    newsTittle.innerHTML = "News"
    readMore.innerHTML = "Read more"
    newsContent.style.height = "500px"
    let test;
    test = 1
}
function over(){
    readMore.style.bottom ="20%"
}
function clicarF(){
    
    if(test == 1){
        readMore.style.height = "230px"
        test--
    }
}