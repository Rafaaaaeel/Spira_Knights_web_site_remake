window.onload = function () {

    var newsContent, readMore, newsTittle, LineAjust, arrow


    newsContent = document.querySelector('.news_content')
    readMore = document.querySelector('#read_more')
    newsTittle = document.querySelector('#news_tittle')
    LineAjust = document.querySelector("#line_ajust")
    arrow = document.querySelector(".arrow_box")
    

    //Open More news in section 2 'News'
    readMore.addEventListener('click', () =>{
        
        LineAjust.style.bottom = "-81px"
        newsTittle.style.marginBottom = "-10%"
        readMore.style.display = "none"
        LineAjust.style.transition = '0.4s'
        newsTittle.innerHTML = "News"
        newsContent.style.height = "500px"
        arrow.style.display = "initial" 
    })
    //Close the Section 2 'News'
    arrow.addEventListener('click', ()=>{
        
        newsTittle.style.marginBottom = "1.2%"
        newsTittle.innerHTML = "News -"
        newsContent.style.height = "230px"
        LineAjust.style.bottom = "190px" 
        LineAjust.style.transition = '0.1s'
        readMore.style.display = 'initial'
        arrow.style.display = "none"

    }) 
    
    var mode_1, mode_2, mode_3;

    mode_1 = document.querySelector('#mode1')
    mode_2 = document.querySelector('#mode2')
    mode_3 = document.querySelector('#mode3')

    position_x = 0;

    mode_2.addEventListener('click', function (){
        mode_1.style.marginLeft ="4%"
        this.style.zIndex = '1'
        this.style.marginLeft ="8%"
        position_x = 1
        this.style.opacity = '100%'
        mode_1.style.opacity = '60%'
        document.querySelector('#mode_tittle').innerHTML = 'Lockdown'
        document.querySelector('#mode_p').innerHTML = "All weapons are available in this head-to-head brawl, in which Knights are divided into two teams to score points by taking over capture points or attack opposing team players. However, the shield function is replaced by unique class modification abilities: Strikers get a speed bonus, Guardians an area shield, and Recons invisibility. Each class receives bonuses and penalties relating to their role. <br><br> The entry fee is 200 crowns, and players must wait in queue until there are both enough knights for the next match, and space in the available instances. If a player chooses to drop out of the queue, the entry fee will be refunded."
    })
    
    mode_1.addEventListener('click', function(){
        mode_2.style.zIndex ='0'
        mode_2.style.marginLeft ="4%"
        this.style.marginLeft ="8%"
        position_x = 0
        mode_2.style.opacity = '60%'
        this.style.opacity = '100%'
        document.querySelector('#mode_tittle').innerHTML = 'Blast Network'
        document.querySelector('#mode_p').innerHTML = "<strong>Blast Network </strong> is an explosive event in <a href='https://wiki.spiralknights.com/King_Krogmo%27s_Coliseum' target='_blank'> King Krogmo's Coliseum </a> where Knights try to eliminate their opponents by blowing them up. All of your personal equipment is ignored in Blast Network and you instead have use of a single weapon, a <a target='_blank' href='https://wiki.spiralknights.com/Blast_Network_Bomb'> bomb </a>that explodes in a cross formation. Bombs do not require charging and can be placed immediately. A bomb will kill any Knight caught in its explosion, including the Knight who placed it, so be careful! In each game you earn points for having your bombs eliminate your opponents. The player or team with the most points at the end of the match wins <br><br>The cumulative weekly scores for the leaderboard are reset on Sunday"
        

    })
    var close_x_button = document.querySelector('#xbt')
    var modes_tittle = document.querySelector('#modes_t')

    mode_3.addEventListener('click', function () {

        if(position_x == 1){
            mode_2.style.zIndex = '-1' 
        }
        
        document.querySelector('#btest').style.opacity = '100%'
        document.querySelector('#modes_t').style.color = 'white'
        document.querySelector('#mode_p').innerHTML = "<iframe width='660' height='415' style='position: absolute; top:-55px;' src='https://www.youtube.com/embed/0dYfMPYhPvQ' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        
        
        close_x_button.style.display = 'initial'
        close_x_button.style.zIndex = '1'
        modes_tittle.style.color = 'rgb(24, 24, 24)'
        modes_tittle.style.textShadow = 'none'
        mode_2.style.marginLeft ='8%'
        mode_1.style.marginLeft = '8%'
        this.style.marginLeft = "8%"
        this.style.zIndex = '1'
        this.style.opacity = '100%'
        this.style.transform = 'scale(1.2)'
        document.querySelector('#kromo').style.display = 'none'
    })
    close_x_button.addEventListener('click', ()=>{
        document.querySelector('#btest').style.opacity = '0%'
        mode_3.style.transform = 'scale(1.0)'
        document.querySelector('#mode_p').innerHTML = "<strong>Blast Network </strong> is an explosive event in <a href='https://wiki.spiralknights.com/King_Krogmo%27s_Coliseum' target='_blank'> King Krogmo's Coliseum </a> where Knights try to eliminate their opponents by blowing them up. All of your personal equipment is ignored in Blast Network and you instead have use of a single weapon, a <a target='_blank' href='https://wiki.spiralknights.com/Blast_Network_Bomb'> bomb </a>that explodes in a cross formation. Bombs do not require charging and can be placed immediately. A bomb will kill any Knight caught in its explosion, including the Knight who placed it, so be careful! In each game you earn points for having your bombs eliminate your opponents. The player or team with the most points at the end of the match wins <br><br>The cumulative weekly scores for the leaderboard are reset on Sunday"
        modes_tittle.style.color = 'white'
        mode_3.style.zIndex = '0'
        mode_3.style.marginLeft ='0%'
        mode_1.style.marginLeft = '8%'
        mode_2.style.marginLeft = '4%'
        mode_3.style.opacity = '30%'
        close_x_button.style.display = 'none'
        modes_tittle.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.712)'
        document.querySelector('#kromo').style.display = 'initial'
        
    })
    
    const list = document.querySelector('#list')
    let test;
    list.addEventListener('change', function getSelectValue(){
         test = list.value;
        
    })
    console.log(test);


    document.querySelector('#kromo_link').addEventListener('mouseenter', function(){
        document.querySelector('#kromo').style.opacity = '100%'
    })
    document.querySelector('#kromo_link').addEventListener('mouseout', function(){
        document.querySelector('#kromo').style.opacity = '60%'
    })
}