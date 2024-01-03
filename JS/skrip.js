function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Input Angka Dengan Benar!');
        return;
    }

    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilluas').innerText = 'Luas : ' + luas;
}

function hitungKeliling() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Input Angka Dengan Benar!');
        return;
    }

    const keliling = alas + tinggi + Math.sqrt(alas * alas + tinggi * tinggi);
    document.getElementById('hasilkeliling').innerText = 'Keliling : ' + keliling;
}