document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen counter
    var counterElement = document.getElementById('counter');

    // Set awal nilai counter
    var counterValue = 0;

    // Fungsi untuk memperbarui tampilan counter dan warna
    function updateCounter() {
        counterElement.textContent = counterValue;

        // Tambahkan atau hapus kelas berdasarkan nilai positif atau negatif
        if (counterValue > 0) {
            counterElement.classList.remove('negative', 'neutral');
            counterElement.classList.add('positive');
        } else if (counterValue < 0) {
            counterElement.classList.remove('positive', 'neutral');
            counterElement.classList.add('negative');
        } else {
            // Jika nilai nol, hapus kedua kelas
            counterElement.classList.remove('positive', 'negative');
            counterElement.classList.add('neutral');
        }
    }

    // Tambahkan event listener untuk penambahan
    document.getElementById('plusBtn').addEventListener('click', function () {
        counterValue++;
        updateCounter();
    });

    // Tambahkan event listener untuk pengurangan
    document.getElementById('minusBtn').addEventListener('click', function () {
        counterValue--;
        updateCounter();
    });

    // Tambahkan event listener untuk reset
    document.getElementById('resetBtn').addEventListener('click', function () {
        counterValue = 0;
        updateCounter();
    });

    // Panggil fungsi awal untuk menginisialisasi tampilan
    updateCounter();
});
