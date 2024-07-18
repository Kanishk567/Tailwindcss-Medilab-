const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

// const uptoggle = document.getElementById("uptoggle");//this function created for Frequently asked Question 
// uptoggle.addEventListener('click',show);

// function show(){
//         uptoggle.classList.toggle("hidden");
//         // uptoggle="<i class="fa-solid fa-chevron-up text-sky-600"></i>";
// }

//this function created for image change in doctor departments

// const cardio = document.getElementById('cardio');
// const neuro = document.getElementById('neuro');
// const hepato = document.getElementById('hepato');
// const pedia = document.getElementById('pedia');
// const eye = document.getElementById('eye');

// const a = [cardio,neuro,hepato,pedia,eye];

// for(let i = 0; i<a.lenght;i++){

//     i.addEventListener("click",bgSky);
//     function bgSky(){
//         i.classList.add("bg-sky-600","text-white");
//         i.classList.remove("hover:text-sky-600");
    
//     }

// }



// cardio.addEventListener("dblclick",bgSky(cardio));
// // neuro.addEventListener("click",bgSky(neuro),remove(neuro));
// // hepato.addEventListener("click",bgSky(hepato),remove(hepato));
// // pedia.addEventListener("click",bgSky(pedia),remove(pedia));
// // eye.addEventListener("click",bgSky(eye),remove(eye));


// function bgSky(i){
//     i.classList.toggle("bg-sky-600","text-white");
//     i.classList.remove("hover:text-sky-600");
// }

// // function remove(re){
// //     if (re.classList.contains("bg-sky-600","text-white")){
// //         re.classList.toggle("bg-sky-600","text-white");
// //     }
// // }