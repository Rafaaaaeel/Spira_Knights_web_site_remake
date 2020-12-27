let item = document.querySelector(".items")

item.addEventListener('wheel', event => {
    if(event.deltaY > 0){
        console.log('Scroll Up')
        event.target.scrollBy(300, 0)
    }else{
        console.log('Scroll down')
        event.target.scrollBy(-300, 0)
    }
});

let button_next = document.querySelector('.next_button')

button_next.addEventListener('click', next => {
    console.log(next)
    next.target.scr
})