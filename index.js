let overview=document.getElementById("overview")
let navplan=document.querySelector(".navplan")
let navfeatures=document.querySelector(".navfeatures")
let navgiftcard=document.querySelector(".navgiftcard")
let navcontact =document.querySelector(".navcontact")

window.addEventListener('DOMContentLoaded',()=>{
  overview.classList.add('bg')
})

overview.addEventListener('click',()=>{
  navplan.classList.remove('bg')
  navgiftcard.classList.remove('bg')
  navcontact.classList.remove('bg')
  navfeatures.classList.remove('bg')
  overview.classList.add('bg')

})

navplan.addEventListener('click',()=>{
  overview.classList.remove('bg')
  navgiftcard.classList.remove('bg')
  navcontact.classList.remove('bg')
  navfeatures.classList.remove('bg')
 navplan.classList.add('bg')
    
})
navfeatures.addEventListener('click',()=>{
  navgiftcard.classList.remove('bg')
  navcontact.classList.remove('bg')
  overview.classList.remove('bg')
  navplan.classList.remove('bg')
  navfeatures.classList.add('bg')

})
navgiftcard.addEventListener('click',()=>{
  navcontact.classList.remove('bg')
  overview.classList.remove('bg')
  navplan.classList.remove('bg')
  navfeatures.classList.remove('bg')
  navgiftcard.classList.add('bg')

})
navcontact.addEventListener('click',()=>{
  navfeatures.classList.remove('bg')
  navgiftcard.classList.remove('bg')
  overview.classList.remove('bg')
  navplan.classList.remove('bg')
  navcontact.classList.add('bg')

})



let cross_button=document.querySelector('.cross');
let sidebar=document.getElementById('sidenav')
let toggle=document.querySelector('.toggle')

// -----------------------------------------side nav -----------------------------------
toggle.onclick = function open_sidebar(){
  sidebar.style.display="flex" ; 
  toggle.style.display="none" 
  console.log('cliked')
}
cross_button.onclick = function close_sidebar(){
   sidebar.style.display="none" 
   toggle.style.display="block"  
}


//------------------------------------------transitions---------------------------------------

//section2 transition
let sec2heading=document.querySelector(".sec2_heading");
let sec2subheading=document.querySelector(".sec-2_sub_head");
let sec2description=document.querySelector(".sec-2_description");


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sec2heading.classList.add('sec_2animation')
      sec2subheading.classList.add("sec_2animation");
    sec2description.classList.add("sec_2animation");
      return;
    }
    sec2heading.classList.remove("sec_2animation");
    sec2subheading.classList.remove("sec_2animation");
    sec2description.classList.remove("sec_2animation");
  });
});

observer2.observe(document.querySelector('.sec_2'));

//section 3 transition

let sec3=document.querySelector(".sec3_content");
sec3.classList.remove("sec3animation");


let observer3= new IntersectionObserver(entries=>{
 entries.forEach(entry => {
  if(entry.isIntersecting){
    sec3.classList.add('sec3animation')
    return
  }
  sec3.classList.remove('sec3animation')
 });

})

observer3.observe(document.querySelector('.sec_3'))

// section4 content1 transition

let sec4con1subhead=document.querySelector(".sec-4_sub_head");
sec4con1subhead.classList.remove("fade");
let sec4con1head=document.querySelectorAll(".sec4_head");
sec4con1head[0].classList.remove('fade');
sec4con1head[1].classList.remove('fade');
sec4con1head[2].classList.remove('fade');


const observer4=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      sec4con1subhead.classList.add("fade")
      sec4con1head[0].classList.add('fade')
      sec4con1head[1].classList.add('fade')
      sec4con1head[2].classList.add('fade')
      content3subhead.classList.add('fade')
      content3head[0].classList.add('fade')
      content3head[1].classList.add('fade')
      return
    }
    sec4con1subhead.classList.remove("fade")
    sec4con1head[0].classList.remove('fade')
    sec4con1head[1].classList.remove('fade')
    sec4con1head[2].classList.remove('fade')
    content3subhead.classList.remove('fade')
    content3head[0].classList.remove('fade')
    content3head[1].classList.remove('fade')
  });
})

observer4.observe(document.querySelector('.sec4_content1'));



let content3subhead=document.querySelector('.content3_subhead');
content3subhead.classList.remove('fade_1');
let content3head=document.querySelectorAll('.content3_head');
content3head[0].classList.remove('fade_1');
content3head[1].classList.remove('fade_1');


const observer5=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      content3subhead.classList.add('fade_1')
      content3head[0].classList.add('fade_1')
      content3head[1].classList.add('fade_1')
      return
    }
    content3subhead.classList.remove('fade_1')
    content3head[0].classList.remove('fade_1')
    content3head[1].classList.remove('fade_1')
  });
})

observer5.observe(document.querySelector('.content3_subhead'));



















