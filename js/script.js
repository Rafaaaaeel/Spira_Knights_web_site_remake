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
    var position_x = 0;
    mode_2.addEventListener('click', ()=>{
        mode_1.style.marginLeft ="4%"
        mode_2.style.zIndex = '1'
        mode_2.style.marginLeft ="8%"
        position_x++
        console.log(position_x)
        if(position_x > 1){
            position_x = 1
            mode_1.style.position = 'absolute'
            mode_1.style.zIndex = '-1'

        }
    })
    
    mode_1.addEventListener('click', () =>{
        if(position_x == 1){
            mode_1.style.position = 'relative'
            mode_2.style.marginLeft ="4%"
            mode_1.style.zIndex = '1'
            mode_1.style.marginLeft ="8%"
            position_x++
            console.log(position_x)
        }
    })

    mode_3.addEventListener('click', () => {
        mode_3.style.zIndex = '1'
        mode_3.style.marginLeft = "8%"
        mode_1.style.marginLeft = '8%'
        mode_3.style.zIndex = '1'
        
    })
}