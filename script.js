document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Link clicked: ' + link.textContent);
    });
});
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('bg-black')) {
        body.classList.remove('bg-black');
        body.classList.add('bg-white');
        body.style.color = 'black'; // Adjust text color for visibility
    } else {
        body.classList.remove('bg-white');
        body.classList.add('bg-black');
        body.style.color = 'white'; // Adjust text color for visibility
    }
}
