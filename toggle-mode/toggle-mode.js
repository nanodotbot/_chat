let light = true;
const save = document.getElementById('save-theme');
const theme = document.getElementById('toggle-theme');

const setTheme = () => {
    if (save.checked && theme.checked) {
        localStorage.setItem('theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
        light = false;
        // console.log(localStorage.getItem('theme'), sessionStorage.getItem('theme'));
    }
    if (save.checked && !theme.checked) {
        localStorage.setItem('theme', 'light');
        sessionStorage.setItem('theme', 'light');
        light = true;
        // console.log(localStorage.getItem('theme'), sessionStorage.getItem('theme'));
    }
    if (!save.checked && theme.checked) {
        localStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'dark');
        light = false;
        // console.log(localStorage.getItem('theme'), sessionStorage.getItem('theme'));
    }
    if (!save.checked && !theme.checked) {
        localStorage.removeItem('theme');
        sessionStorage.setItem('theme', 'light');
        light = true;
        // console.log(localStorage.getItem('theme'), sessionStorage.getItem('theme'));
    }

    if (!light && blueTheme) {
        Object.entries(darkThemeBlue).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
    if (light && blueTheme) {
        Object.entries(lightThemeBlue).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
    if (!light && greenTheme) {
        Object.entries(darkThemeGreen).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
    if (light && greenTheme) {
        Object.entries(lightThemeGreen).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
    if (!light && redTheme) {
        Object.entries(darkThemeRed).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
    if (light && redTheme) {
        Object.entries(lightThemeRed).forEach(entry => $(':root').css(entry[0], entry[1]));
    }
}

save.onchange = setTheme;
theme.onchange = setTheme;
