// Hapus bagian ini jika tidak diperlukan
document.querySelectorAll('.nav-item.dropdown').forEach(item => {
    item.addEventListener('click', function (e) {
        const menu = this.querySelector('.dropdown-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
        // Hapus preventDefault agar navigasi bekerja
        // e.preventDefault(); 
    });
});