let sharebtn = document.querySelector('.share');
let socialIcons = document.querySelector('.hidden');

let svgShare = document.querySelector('.btn')



sharebtn.addEventListener('click', () => {
    //console.log(socialIcons.classList)
    socialIcons.classList.toggle('hidden');
    sharebtn.classList.toggle('active');

   
})




/***
 
alexDiv.classList.remove("turnred")
alexDiv.classList.add("turnblue")
alexDiv.classList.toggle("turnblue")



 */
