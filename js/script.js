// ======================== AOS animation Code
AOS.init();
// ------------ service items click drope down part start 
let  click_item  =document.querySelector('.click_item')


let  show_item = document.querySelector('.show_item')

click_item.addEventListener('click',()=>{
    if(show_item.style.display=='block' ){
        show_item.style.display='none'  
    }else{
        show_item.style.display='block' 
    }
})
// =========================================
let  click_item2  =document.querySelector('.click_item2')
console.log(click_item2)

let  show_item2 = document.querySelector('.show_item2')
console.log(show_item2)

click_item2.addEventListener('click',()=>{
    if(show_item2.style.display=='block' ){
        show_item2.style.display='none'  
    }else{
        show_item2.style.display='block' 
    }
    console.log('ok kaj hocce')
})




