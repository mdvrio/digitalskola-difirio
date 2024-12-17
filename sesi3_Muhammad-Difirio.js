const readline = require('readline');

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk mencetak segitiga bintang
function cetakSegitiga(baris) {
    for (let i = 1; i <= baris; i++) {
        let kalimat = '';

        for (let z = 0; z < i; z++) {
            kalimat += '*';
        }

        console.log(kalimat);
    }
}

// Mengambil input dari pengguna
rl.question('Masukkan jumlah baris segitiga: ', (input) => {
    const jumlahBaris = parseInt(input);

    if (!isNaN(jumlahBaris) && jumlahBaris > 0) {
        cetakSegitiga(jumlahBaris);
    } else {
        console.log('Silakan masukkan angka yang valid.');
    }

    rl.close(); // Menutup interface readline
});