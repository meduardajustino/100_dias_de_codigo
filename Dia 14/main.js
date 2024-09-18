const input = document.querySelector('#switcher');

input.addEventListener('change', function () {
    if (input.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light'); 
    }
});
