//var txt = /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$./;





function validatePlat(platInput) {
    var plat = ['AG', 'AB', 'AA', 'A', 'B', 'D', 'E', 'F', 'G', 'H', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'Z', 'AD', 'AE', 'DH', 'DK', 'DR', 'EA', 'EB', 'ED',
        'DA', 'KB', 'KH', 'KT', 'KU', 'DB', 'DC', 'DD', 'DL', 'DM', 'DN', 'DP', 'DT', 'DE', 'DG', 'PA', 'PB'
    ];

    var platInput = document.getElementById("valPlat").value;
    var pola = /^[a-z]{1,3}\s\d{0,4}\s[a-z]{1,3}$/ig;
    var result = platInput.match(pola);
    var value = ((result[0]).toUpperCase()).substring(0, 2);
    var cekResult = (plat.indexOf(value) > -1);



    if (cekResult == true) {
        document.getElementById("hasilPlat").innerHTML = "INI PLAT INDONESIA";
    } else {
        document.getElementById("hasilPlat").innerHTML = "INI BUKAN PLAT INDONESIA";
    }
}

function validateEmail(emailInput) {
    var emailInput = document.getElementById("valEmail").value;
    var emailPola = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    var result = emailInput.match(emailPola);
    var cek = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i;
    var cekResult = cek.test(emailInput);

    if (cekResult) {
        alert(`Halo, username anda adalah ${result[1]}, domain anda adalah ${result[2]} . ${result[3]}`);
    } else {
        alert("Bukan Alamat Email");
    }
}