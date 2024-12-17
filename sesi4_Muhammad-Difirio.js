const readline = require('readline');

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk melakukan operasi kalkulator
function kalkulator(angka1, angka2, operasi) {
    switch (operasi) {
        case '1': // Penjumlahan
            return angka1 + angka2;
        case '2': // Pengurangan
            return angka1 - angka2;
        default:
            return null; // Operasi tidak valid
    }
}

// Mengambil input dari pengguna
rl.question('Masukkan angka pertama: ', (input1) => {
    const angka1 = parseFloat(input1);

    rl.question('Masukkan angka kedua: ', (input2) => {
        const angka2 = parseFloat(input2);

        rl.question('Pilih operasi (1: Penjumlahan, 2: Pengurangan): ', (operasi) => {
            const hasil = kalkulator(angka1, angka2, operasi);

            if (hasil !== null) {
                if (operasi === '1') {
                    console.log(`Hasil penjumlahan: ${angka1} + ${angka2} = ${hasil}`);
                } else if (operasi === '2') {
                    console.log(`Hasil pengurangan: ${angka1} - ${angka2} = ${hasil}`);
                }
            } else {
                console.log('Operasi tidak valid. Silakan pilih 1 atau 2.');
            }

            rl.close(); // Menutup interface readline
        });
    });
});