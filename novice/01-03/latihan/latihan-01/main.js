function callName(inputSatu) {
    var inputSatu = document.getElementById("valInput").value;
    document.getElementById("hasil").innerHTML = inputSatu;
}


function tumbasMobil() {
    var selectDua = document.getElementById("mobil").value;
    var inputDua = document.getElementById("valInputDua").value;

    var mobil = {
        brand: selectDua
    };
    var promo = document.getElementById("valInputDua").value;
    var txt = "Anda membeli mobil " + mobil.brand + " dengan kode promo " + promo;
    document.getElementById("hasilDua").innerHTML = txt;

}

function upgradeMobil() {
    const namaToko = "PT Mobil Maju Jaya";
    var selectUpMobil = document.getElementById("upMobil").value;
    var selectBgMobil = document.getElementById("bgMobil").value;
    let txt = "Anda membeli mobil " + selectUpMobil + " dengan bagian yang ingin diupgrade : " + selectBgMobil;

    if (selectUpMobil == "Honda") {
        if (selectBgMobil == "Knalpot") {
            document.getElementById("hasilTiga").innerHTML = txt;
        } else if (selectBgMobil == "Mesin") {
            document.getElementById("hasilTiga").innerHTML = "Stock habis </br> Atas nama " + namaToko + " minta maaf.";
        } else {
            document.getElementById("hasilTiga").innerHTML = txt;
        }
    } else if (selectUpMobil == "Astrea") {
        document.getElementById("hasilTiga").innerHTML = "Keluaran lama, kami sudah tidak menyetok lagi </br> Atas nama " + namaToko + " minta maaf.";
    } else {
        if (selectBgMobil == "Knalpot") {
            document.getElementById("hasilTiga").innerHTML = "Stock habis </br> Atas nama " + namaToko + " minta maaf.";
        } else if (selectBgMobil == "Mesin") {
            document.getElementById("hasilTiga").innerHTML = "Stock habis </br> Atas nama " + namaToko + " minta maaf.";
        } else {
            document.getElementById("hasilTiga").innerHTML = txt;
        }
    }
}

function callBack() {
    var inputEmpatSatu = document.getElementById("valInputTiga01").value;
    var inputEmpatDua = document.getElementById("valInputTiga02").value;

    (function () {
        document.getElementById("hasilEmpat").innerHTML = "<p>Keluhan Anda :</p><ul><li>1. " + inputEmpatSatu + "</li><li>2. " + inputEmpatDua + "</li></ul>";
    })();
}

function HitungItem() {
    let count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new HitungItem();

function add() {
    document.getElementById("hasilLima").innerHTML = counter.up();
}

function min() {
    document.getElementById("hasilLima").innerHTML = counter.down();
}

let Booking = function (status, waktu) {
    this.status = status;
    this.waktu = waktu;
    this.info = function () {
        document.write(this);

        setTimeout(() => {
            document.write("<h1>Status Booking : " + this.status + " akan datang pukul " + this.waktu + "</h1>");
        }, 10000);
    }
}

let book1 = new Booking('On The Way', '13:00');

book1.info();


namaToko = "PT Mobil Maju Jaya";
console.log(namaToko);

var namaToko;