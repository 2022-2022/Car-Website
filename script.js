





// filter




let gallerybtn=document.querySelectorAll(".gallery-btn");
let commongallery=document.querySelectorAll(".common-gallery");

gallerybtn.forEach((e)=>{
  e.addEventListener("click",(e)=>{
    let target=e.target.innerHTML;
    if(target == "Show All"){
       commongallery.forEach((e)=>{
         e.style.display="block";
       })
    }else{
       commongallery.forEach((e)=>{
         e.style.display="none";
       })     
       document.querySelectorAll(`.${target}`).forEach((e)=>{
        e.style.display="block";
      })
  
    }
  })
})
