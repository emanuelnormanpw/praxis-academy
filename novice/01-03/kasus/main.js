function convertCal(){
    var valSatu = document.getElementById("valSatu").value;
    var jenisSatu = document.getElementById("pilVal").value;
    var result="";
    let status="";

    if (jenisSatu=="CtoF"){
        result = ((parseInt(valSatu)*1.8)+32);
        result = result.toFixed(2);
        status = "Celcius";
    }else{
        result = ((parseInt(valSatu)-32)*0.56);
        parseInt(result);
        result = result.toFixed(2);
        status = "Farenheit";
    }
    
    document.getElementById("hasilConvert").innerHTML = result+" "+status;
}



function calLifetime(nilaiUsia, nilaiItem){
    var nilaiUsia = document.getElementById("valLifeSatu").value;
var nilaiItem = document.getElementById("valLifeDua").value;
    const maxAge = 80;
    var result = "";
    var txt = "";

    var itemTahun = nilaiItem*365;
    var sisaUmur = maxAge - nilaiUsia;

    result = Math.floor(itemTahun)*sisaUmur;

    
    txt = "You will need "+result+" to last you until the ripe old age of "+sisaUmur;

    document.getElementById("hasilCalLifetime").innerHTML = txt;
}