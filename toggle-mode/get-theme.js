// console.log(localStorage.getItem('theme'), sessionStorage.getItem('theme'));
// console.log(localStorage.getItem('color'), sessionStorage.getItem('color'));

if (localStorage.getItem('theme') === 'dark' || sessionStorage.getItem('theme') === 'dark') {
    Object.entries(darkThemeBlue).forEach(entry => $(':root').css(entry[0], entry[1]));
    
    if (localStorage.getItem('color') === 'blue' || sessionStorage.getItem('color') === 'blue') {
        Object.entries(darkBlue).forEach(entry => $(':root').css(entry[0], entry[1]));
    } else if (localStorage.getItem('color') === 'green' || sessionStorage.getItem('color') === 'green') {
        Object.entries(darkGreen).forEach(entry => $(':root').css(entry[0], entry[1]));
    } else if (localStorage.getItem('color') === 'red' || sessionStorage.getItem('color') === 'red') {
        Object.entries(darkRed).forEach(entry => $(':root').css(entry[0], entry[1]));    
    }
} else {
    if (localStorage.getItem('color') === 'blue' || sessionStorage.getItem('color') === 'blue') {
        Object.entries(lightBlue).forEach(entry => $(':root').css(entry[0], entry[1]));
    } else if (localStorage.getItem('color') === 'green' || sessionStorage.getItem('color') === 'green') {
        Object.entries(lightGreen).forEach(entry => $(':root').css(entry[0], entry[1]));
    } else if (localStorage.getItem('color') === 'red' || sessionStorage.getItem('color') === 'red') {
        Object.entries(lightRed).forEach(entry => $(':root').css(entry[0], entry[1]));    
    }
}


