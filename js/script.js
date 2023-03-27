
function togglefunction(){
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("navbarlinks")[0];
toggleButton.addEventListener('click', () => {
navbarlinks.classList.toggle('active');
});
}
