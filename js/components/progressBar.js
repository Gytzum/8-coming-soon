/*
1. sugeneruoti HTML
2. stebeti kada ivyksta scrollas
    -gal jau pamatomas kazkuris is progress-bar
         -jei taip animuojam jo loading.
            -bet jei jau buvo suanimuotas tai daugiau to paties 
        nebekartojame.
         -jei ne tai nieko.. laukiam.
*/


//1. generuojamas HTML
function progressBar(selector,data) {
    const DOM = document.querySelector(selector)

    let HTML = '';

    for ( let i = 0; i<data.length; i ++) {
        const bar = data[i];
        HTML += `<div class="progress-bar">  
                    <div class = "top" >
                    <div class= " label " >${bar.label} </div>
                    <div class= " label " > ${bar.value}%</div>
                 </div>
                 <div class="bottom">  
                 <div class= "progress" style="width:${bar.value}%;">
                 <div class="bar"></div>
                 </div>
            </div>
        </div>`
    }       
    DOM.innerHTML += HTML

    //2. stebime scrolla.
    addEventListener ('scroll', ()=> {
        console.log(scrollY);

    })
}

export { progressBar}