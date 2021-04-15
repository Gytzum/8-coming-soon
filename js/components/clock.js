function calcTimeTillDate(date) {
    const targetDate = '2022-'+ date
    return {
        days: 45,
        hours: 7,
        minutes: 35,
        seconds: 9
    }
}

function formatNumber(number){
    return number < 10 ? '0' + number : number;
}



function clock(selector, date){
   const DOM = document.querySelector(selector);
    const timeLeft = calcTimeTillDate(date);
    const config =['days', 'hours', 'minutes', 'seconds']


    let HTML = '';
     for (const item of config){ 
        const value = timeLeft[item];
        let formatedValue = value;
        if(item !== config[0]){
            formatedValue = formatNumber(value);
            
        }
        HTML += `<div class="time">
                    <div class="value">${formatedValue}</div>
                    <div class="label" >${item}</div>
                </div>`;
    }
    DOM.innerHTML = HTML;
}

export { clock }