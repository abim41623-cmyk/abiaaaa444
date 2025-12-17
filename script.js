// Menunggu seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Fungsi Pencarian Produk
    const searchInput = document.querySelector('#search-box'); // Anda perlu menambah input id="search-box" di HTML
    const products = document.querySelectorAll('.card');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const text = e.target.value.toLowerCase();
            
            products.forEach(product => {
                const itemTitle = product.querySelector('h3').textContent.toLowerCase();
                if (itemTitle.indexOf(text) != -1) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }

    // 2. Efek Klik Tombol Beli (Logika Sederhana)
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.parentElement.querySelector('h3').textContent;
            console.log(`Mengarahkan ke WhatsApp untuk produk: ${productName}`);
            // Anda bisa menambahkan animasi loading di sini jika mau
        });
    });

    // 3. Animasi Muncul Saat Scroll (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    products.forEach(product => {
        product.style.opacity = '0';
        product.style.transform = 'translateY(20px)';
        product.style.transition = 'all 0.5s ease-out';
        observer.observe(product);
    });
});
