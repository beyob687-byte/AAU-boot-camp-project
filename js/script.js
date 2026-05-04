document.getElementById('night').addEventListener('click', function(event) {
    event.preventDefault();
    let theme = document.getElementById('theme');
    theme.href =(theme.href.includes('style.css')) ? '/css/style-night.css' : '/css/style.css';
}); 

document.getElementById('login').addEventListener('click', function() {
    alert('Login functionality is not implemented yet.');
});
document.getElementById(`sign`).addEventListener(`click`, function() {
    alert(`Sign up functionality is not implemented yet.`);});
document.getElementById(`get-start`).addEventListener(`click`, function() {
    alert(`Get started functionality is not implemented yet.`);});
document.getElementById(`explor`).addEventListener(`click`, function() {
    alert(`Explore services functionality is not implemented yet.`);});
document.getElementById(`blog`).addEventListener(`click`, function() {
    alert(`Blog functionality is not implemented yet.`);});
document.getElementById(`pro`).addEventListener(`click`, function() {
    alert(`Projects functionality is not implemented yet.`);});
document.getElementById(`ser`).addEventListener(`click`, function() {
    alert(`Services functionality is not implemented yet.`);}); 
document.getElementById(`a-us`).addEventListener(`click`, function() { 
    alert(`About Us functionality is not implemented yet.`);});
document.getElementById(`home`).addEventListener(`click`, function() {
    alert(`Home functionality is not implemented yet.`);});