window.onload = function () {
    var newsContent = document.querySelector('.news_content')
    var readMore = document.querySelector('#read_more')
    var newsTittle = document.querySelector('#news_tittle')
    var LineAjust = document.querySelector("#line_ajust")
    var arrow = document.querySelector(".arrow_box")

    readMore.addEventListener('click', () =>{
        
        LineAjust.style.bottom = "-81px"
        newsTittle.style.marginBottom = "-10%"
        readMore.style.display = "none"
        LineAjust.style.transition = '0.4s'
        newsTittle.innerHTML = "News"
        newsContent.style.height = "500px"
        arrow.style.display = "initial"
        
    })


    arrow.addEventListener('click', () =>{
        
        newsTittle.style.marginBottom = "1.2%"
        newsTittle.innerHTML = "News -"
        newsContent.style.height = "230px"
        LineAjust.style.bottom = "190px" 
        LineAjust.style.transition = '0.1s'
        readMore.style.display = 'initial'
        arrow.style.display = "none"
    }) 

    var mode_1 = document.querySelector('#mode1')
    var mode_2 = document.querySelector('#mode2')
    var mode_3 = document.querySelector('#mode3')

    mode_1.addEventListener('mouseenter', ()=>{

        mode_2.style.opacity = "30%"
        mode_3.style.opacity = "30%"
        mode_1.style.marginRight = "230px"
        document.querySelector('.modes_box').style.marginLeft = "10%"
        
        
    })

    mode_1.addEventListener('mouseout', () =>{
        mode_2.style.opacity = "100%"
        mode_3.style.opacity = "100%"
        mode_1.style.marginRight = "2px"
        document.querySelector('.modes_box').style.marginLeft = "20%"
    })

    mode_2.addEventListener('mouseenter', () =>{
        mode_2.style
    })


}