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
                 <div class= "progress" style="width:${bar.value}%;"></div>
            </div>
        </div>`
    }       
    return DOM.innerHTML += HTML
}

export { progressBar}