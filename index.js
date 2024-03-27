let navOpen = document.querySelector('.fa-bars')
navOpen.addEventListener('click', ()=>{
    let open = document.querySelector('.bar-list') ;
    open.style.display ='block'
})
let navClose = document.querySelector('.fa-xmark')
navClose.addEventListener('click', ()=>{
    let open = document.querySelector('.bar-list') ;
    open.style.display ='none'
})



function counting(){
    let count = 0

    function increment(){
        count++
    }
    function decrement(){
        count--
    }
    function get(){
        return count
    }

    let minus = document.querySelector('.minus')
    let plus = document.querySelector('.plus')
    let num = document.querySelector('#num')
    let nu = document.querySelector('#nu')
    let add = document.querySelector('#add')
    let you = document.querySelector('.multiply')

    plus.addEventListener('click', ()=>{
        increment()
        num.value= get()
        nu.value= get()
        add.value= get()
        you.textContent = get() * 125
    })
    minus.addEventListener('click', ()=>{
        if(num.value > 0 && nu.value > 0 && add.value > 0){
            decrement()
        }
        num.value= get()
        nu.value= get()
        add.value= get()
        you.textContent =+ get() * 125
    });
    let trashBtn= document.querySelector('.trashBtn')
    trashBtn.addEventListener('click', ()=>{
    checkout.style.display ='none' 
    nu.value= 0
})
}counting()


function slideSneakers(){
    let slideIndex = 1
    showSlides(slideIndex);

    function plusSlide(n){
        showSlides(slideIndex += n)
    }
    let prev =document.querySelector('.prev')
    prev.addEventListener('click', ()=>{
        plusSlide(-1)
    })
    let next = document.querySelector('.next')
    next.addEventListener('click', ()=>{
        plusSlide(1)
    })

    function currentSlide(n){
        showSlides(slideIndex = n)
    }
    document.querySelector('#dot1').addEventListener('click', ()=>{
        currentSlide(1)
    })
    document.querySelector('#dot2').addEventListener('click', ()=>{
        currentSlide(2)
    })
    document.querySelector('#dot3').addEventListener('click', ()=>{
        currentSlide(3)
    })
    document.querySelector('#dot4').addEventListener('click', ()=>{
        currentSlide(4)
    })


    document.querySelector('#do1').addEventListener('click', ()=>{
        currentSlide(1)
    })
    document.querySelector('#do2').addEventListener('click', ()=>{
        currentSlide(2)
    })
    document.querySelector('#do3').addEventListener('click', ()=>{
        currentSlide(3)
    })
    document.querySelector('#do4').addEventListener('click', ()=>{
        currentSlide(4)
    })
    function showSlides(n){
        let slides = document.querySelectorAll('.mySlides')
        let dots = document.querySelectorAll('.dot')
        if(n > slides){slideIndex= 1}
        if(n < slides){slideIndex =slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
    }
}slideSneakers()


checkout = document.querySelector('.clickClear');
let check = document.querySelector('.btnCart')
check.addEventListener('click', ()=>{
    checkout.style.display='block'
})


