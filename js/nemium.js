function applyNemiumStyles (letter) {
    let styles = document.querySelector('#nemiumStyles');

    switch (letter) {
        case 'A':
            styles.setAttribute('href','css/styles-physical-nemium-a.css');
            break;
        case 'B':
            styles.setAttribute('href','css/styles-logical-nemium-b.css');
            break;
        case 'C':
            styles.setAttribute('href','css/styles-logical-nemium-c.css');
            break;
        case 'D':
            styles.setAttribute('href','css/styles-logical-nemium-d.css');
            break;
        case 'E':
            styles.setAttribute('href','css/styles-logical-nemium-e.css');
            break;
        default:
            styles.setAttribute('href','css/styles-physical-nemium-a.css');
            break;
    }
}