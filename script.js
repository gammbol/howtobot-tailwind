let switchMode = document.getElementById('switcher');

switchMode.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') === 'style.css') {
        theme.href = 'style-dark.css';
    } else {
        theme.href = 'style.css';
    }
}