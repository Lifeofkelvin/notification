let mark = document.getElementById('read');

mark.addEventListener('click', () => {
    document.querySelectorAll('.single-box').forEach(e => {
        e.classList.remove('unseen');
    });
    document.querySelectorAll('.dot').forEach(e => {
        e.classList.remove('dot');
    });
    document.getElementById('number').innerText = '0';
})