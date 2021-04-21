function socials (selector, data) {
    const DOM = document.querySelector(selector);
    if(!DOM) {console.error('ERROR: nerasta norima vieta')
return false}
    

    let HTML = '';
    for ( const {href,icon} of data) {
        HTML += `<a href ="${social.href}" target="_blank" class="fa fa-${socials.icon}></a>`;
    }
    DOM.innerHTML = HTML
}

export { socials }