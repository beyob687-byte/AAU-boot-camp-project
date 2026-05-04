document.getElementById('login').addEventListener('click', function() {
    alert('Login functionality is not implemented yet.');
});
document.getElementById(`sign`).addEventListener(`click`, function() {
    alert(`Sign up functionality is not implemented yet.`);});
document.getElementById('night').addEventListener('click', function(event) {
    event.preventDefault();
    let theme = document.getElementById('theme');
    theme.href =(theme.href.includes('style.css')) ? '/css/style-night.css' : '/css/style.css';
}); 