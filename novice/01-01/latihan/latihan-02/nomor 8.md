# **BAB 01**
Didalam dunia komputer hanya ada data. User dapat CRUD data pada umumnya. Bits merupakan dua jenis angka, biasanya di deskrpsikan dengan 0 dan 1. 
> 0 0 0 0 1 1 0 1 ==> 128 64 32 16 8 4 2 1

## VALUES
Dalam dunia komputer terdapat 30 miliyar bits dalam penyimpanan data. Untuk mencegah adanya tersesat diantara bits yang banyak, maka dalam sebuah nilai hanya perlu memanggil namanya.

Nilai yang merupakan tipe angka adalah nilai numerik. Javascript menggunakan sejumlah bit yang tetap, 64 diantaranya, untuk menyimpan satu nilai bilangan. Dengan N digit desimal, mewakili angka 10N. Demikian pula 64 digit biner mewakili 264 angka berbeda, sekitar 18 triliun. Namun tidak semua bilangan bulat kurang dari 18 triliun cocok dengan nomor Javascript. Bit terebut juga menyimpan bilangan negatif. 

Penulisan bilangan pecahan
>Bilangan Pecahan
>>
> 9.81 
>>
> atau 
>>
> 2.998e8
>>
> 2.988 x 108 = 299.800.00

## ARITMATIKA
Operasi aritmatika seperti penjumlahan atau perkalian mengambil dua nilai bilangan dan menghasilkan bilangan baru darinya. 

Tampilan di javascript
> 100 + 4 * 11
>>
> Simbol + dan * disebut operator dengan baca "tambahkan 4 dan 100, dan kalikan hasilnya dengan 11"
>>
>atau
>>
> (100 + 4) * 11
>>
> Untuk pengurangan, ada operator -, dan pembagian bisa dilakukan dengan operator /.

Ada satu lagi operator aritmatika, yang mungkin tidak langsung Anda kenali. Simbol% ​​digunakan untuk mewakili operasi sisa. X% Y adalah sisa pembagian X dengan Y.

## SPECIAL NUMBER
Ada tiga nilai khusus Javascript yang dianggap angka tetapi tidak berperilaku seperti angka biasa. Dua yang pertama Infinity dan -Infinity, yang mewakili infinitas bilangan positif dan negatif. Jika bilangan tidak matematis maka akan mengarah ke nomor khusus lainnya yaitu : NaN (not a number), meskipun itu jenis nilai dari jenis angka.
>Contoh
>>
> 0 / 0 maka akan menghasilan NaN

## STRING
String digunakan untuk mempresantikan teks. Melampirkan isinya dengan tanda kutip.
> '' , ``, " "

Jika menggunakan garis miring terbalik \, ini menunjukkan bahwa karakter setelahnya memiliki arti khusus. Ketika huruf n dipadukan dengan \ maka akan menghasilkan baris yang baru
>"Ini baris pertama **\n**Ini baris kedua"
>>
>Akan menjadi seperti ini :
>>
>"Ini baris pertama
>>
>Ini baris kedua"

String pada javascript didasarkan pada unicode agar terbaca di komputer, dengan hal ini string dimodelkan sebagai rangkaian bit.

String dapat dilakukan penggabungan "concatenate" :
> "con"+"cat"+"e"+"nate" 
>>
>Output : 
>>
>concatenate

Dalam string juga digabungkan dengan artimatika, contoh : 
> Hasil 10 dibagi 5 adalah ${10/5}
>>
>Output : 
>>
> hasil 10 dibagi 5 adalah 2

## UNARY OPERATOR
Tidak semua operator adalah simbol. Beberapa ditulis dengan kata kata. Seperti Typeof :
> itconsole.log (typeof 4.5)
>>
>Nomor
>>
> console.log(type "x") 
>>
> String
Operator yang digunakan untuk mengambil dua nilai adalah biner operator, melainkan operator untuk mengambil satu nilai adalah typeof.

## BOOLEAN
Boolean merupakan nilai untuk membedakan antara "ya" atau "tidak" dan "aktif" atau "tidak aktif". Javascript memiliki tipe boolean untuk memiliki dua nilai yang berbeda. 

## COMPARISON
Contoh booelan :
> console log (3>2)
>>
> // benar
>>
> console.log(3<2)
>>
> // salah

Cara string pada javascript disusun secara kasar alfabet tetapi tidak benar benar seperti yang diharapkan dalam kamus : huruf besar selalu "lebih kecil" dari huruf kecil, maka 

"Z"<"a"

Seperti contoh : 
> console.log("Itchy"! = "Scratchy")
>>
>Output : benar
>>
> console.log ("Apple" == "Oranye")
>>
>Output : salah

Dalam javascript ada angka yang tidak sama dengan dirinya sendiri, yaitu :
> NaN == NaN
>>
>Output : Salah

## Logical Operator
Ada juga operasi yang dapat diterapkan ke nilai boolean tersebut. Javascript mendukung tiga operator logika : "dan", "atau", "tidak". 
>console.log(true && false) 
>>
>Output : salah
>>
>>console.log(true && true)
>>
>Output : benar

Tidak dituliskan dengan tanda ( ! ). Ini adalah operator unary untuk membalik nilai yang diberikan kepadanya.
>`!True` menghasilkan false
>>
>`!False` menghasilkan true

Operator perbandingan memiliki urutan pada dasarnya, sehingga ekspresi dengan sesedikit kurung pada contoh :
> 1 1 == 2 && 10 * 10> 50
>>
>Atau dituliskan seperti ini
>>
>console.log (benar? 1: 2);
>>
> Output : 1
>>
>console.log (false? 1: 2);
>>
> Output : 2

Contoh diatas disebut operator bersyarat karena ini merupakan operator  hanya pada bahasa tersebut.

## Empty Values
Ada dua nilai kosong pada javascript, dituliskan : null dan undefined, yang menunjukkan tidak ada nilai yang berarti. Perbedaan antara null dan undefined adalah kesalahan desain javascript dan itu tidak masalah sepanjang waktu.

## Automatic Type Conversion
Javascript melakukan untuk meminimalisir kesalahan, hal ini ditunjukkan baik dengan :
> console.log(8 * null)
>>
> Output : 0
>>
> console.log("5" - 1)
>>
> Output : 4
>>
> console.log("five" * 2)
>>
> Output : NaN
>>
> console.log(false == 0)
>>
> Output : true

Ketika sesuatu yang tidak dipetakan ke sebuah angka dengan cara yang jelas maka Javascript dengan sendirinya akan mengubahnya ke NaN. Namun dalam javascript "null" dan "undefined" disatukan maka tidak akan menghasilkan output, maka dari itu di salah satu sisi harus ada satu dari "null" atau "undefined". Seperti contoh :
> console.log (null == undefined);
>>
>Output : benar
>>
> console.log (null == 0);
>>
>Output : salah

## Short-circuiting of logical operators
Operator logika || dan && menangani nilai nilai dari jenis yang berbeda dengan cara yang khas. Seperti || akan mengembalikan nilai ke kirinya ketika itu dapat diubah menjadi benar dan akan mengembalikan nilai. 
>console.log (null || "pengguna")
>>
>Output : pengguna
>>
> console.log ("Agnes" || "pengguna")
>>
> Output : Agnes

# **BAB 02**

## Expressions and statements
Sebuah ekspresi bisa menjadi isi hanya untuk menghasilkan nilai, yang kemudian bisa digunakan oleh kode. Dalam beberapa kasus Javascript mengijinkan untuk membuang titik koma di akhir pernyataan. Aturan tentang ini cukup rawan kesalahan.
## Bindings
Untuk menghasilkan nilai nilai baru nilai nilai lama tidak akan hilang dengan cara 
> let caught = 5 * 5;
kata let menunjukkan bahwa mendefinisikan pengikatan. Selain itu juga dapat digunakan untuk aritmatika : 
> let ten =10;
>>
> console.log (ten*ten)
>>
> Output : 100

Operator = dapat digunakan dimana saja pada binding yang ada untuk memutuskan hubungannya dari nilainya saat ini dan mengarahkan ke nilai yang baru 

> let mood = "light"
>>
> console.log(mood), // Output light
>>
> let mood = "dark"
>>
> console.log(mood), // Output dark

Var merupakan kepanjangan dari Variable dan const adalah konstanta yang didefinisikan pengikatan konstan.
## Binding names
Binding name bisa menjadi kata apa saja, seperti contoh : Catch22 adalah nama yang valid. Namun tidak bisa dimulai dengan digit. Binding name dapat dimulai dengan tanda $ dan _ tetapi tidak ada tanda baca lainnya.
## The environment
Kumpulan binding dan dan nilainya yang ada pada waktu tertentu disebut lingkungan. Pada hal ini dicontohkan dalam browser terdapat fungsi untuk berinteraksi dengan website yang sedang dimuat (onload) dan untuk membaca inputan mouse serta keyboard.
## Functions
Fungsi merupakan bagian dari program yang dibungkus oleh nilai. Seperti contohnya pada browser digunakan untuk menampilkan dialog kotak kecil dengan cara : 
> prompt ("Masukkan kode sandi")

Menjalankan suatu fungsi disebut memanggil atau menerapkan. Suatu dungsi dipanggil dengan meletakkan tanda kurung setelah ekspresi yang menghasilkan nilai fungsi. 
## The console.log function
Sebagian besar sistem Javascript menyediakan console.log untuk menuliskan argumennya untuk keluaran teks. Di browser akan keluar di bagian console javascript. Untuk membuka console di browser dengan menggunakan shortcut sendiri, setiap browser beda beda. Contoh : 
> let x = 30;
>>
> console.log(x);
>>
> Nilai yang keluar di console browser
>>
> Output : 30;
## Return values
Dalam javascript sudah terdapat beberapa bantuan fungsi, seperti contoh :
> console.log (Math.max (2, 4));
>>
> Output : 4;

Lalu masih terdapat fungsi, seperti Math.min untuk mencari bilangan terkecil.
## Control flow
Ketika program lebih dari satu pernyataan, pernyataan tersebut dijalankan dari atas kebawah. Seperti contoh :
>let theNumber = Number (prompt ("Pilih nomor"));
>>
>console.log ("Nomor Anda adalah akar kuadrat dari" +theNumber * theNumber);

Fungsi nomor mengubah nilai menjadi angka, hal ini karena keluaran prompt adalah string.
## Conditional execution
Conditional execution dibuat dengan kata kunci if dalam javascript. Dalam kasus sederhana beberapa kode dieksekusi jika memenuhi syarat yang ditentukan. Misalnya :
>let theNumber = Number (prompt ("Pilih nomor"));
>>
>if (! Number.isNaN (theNumber)) {
>>
>console.log ("Nomor Anda adalah akar kuadrat dari" + theNumber * theNumber);
>>
>}

Dengan modifikasi seperti ini jika mengetikkan "parrot" maka tidak ada keluaran hasil, jika bukan angka. Kondisi if juga dapat dipakai dalam if lagi.
## while and do loops
Menulis program akan lebih sedikit jika menggunakan perulangan untuk menuliskan banyak item. 
>let number = 0;
>>
>while (number <= 12) {
>>
>  console.log(number);
>>
> number = number + 2;
>>
>}
>>
>Output : 
>>
>0
>>
>2
>>
>dan sebagainya
## Indenting Code
Dengan menabahkan spasi diantara kode tidak masalah, komputer akan tetap menerimanya. 
Contoh : 
>if (false != true) {
>>
> console.log("That makes sense.");
>>
>  if (1 < 2) {
>>
>    console.log("No surprise there.");
>>
>  }
>>
>}
## For loops
Peningkatan counter untuk melacak kemajuan loop. Seperti contoh :
>for (let number = 0; number <= 12; number = number + 2) {
>>
>  console.log(number);
>>
>}


Dengan output 

0

2
## Breaking Out of a Loop
Untuk mengagalkan sebuah perulangan, dapat menggunakan break. Maka perulangan akan berhenti dalam melakukan looping. 
>for (let current = 20; ; current = current + 1) {
>>
>  if (current % 7 == 0) {
>>
>    console.log(current);
>>
>    break;
>>
>  }
>>
>}
>>
>Output : 21
## Updating bindings succinctly
Untuk perulangan terkadang program perlu menyimpan hasil dari sebelumnya. Seperti contoh :
>counter = counter + 1;
>>
>Atau
>>
>counter += 1;
## Dispatching on a value with switch
Dalam perulangan juga terdapat seperti saklar jika pernyataan itu benar, seperti contoh :
>switch (prompt("What is the weather like?")) {
>>
>  case "rainy":
>>
>    console.log("Remember to bring an umbrella.");
>>
>    break;
>>
>  case "sunny":
>>
>    console.log("Dress lightly.");
>>
>  case "cloudy":
>>
>    console.log("Go outside.");
>>
>    break;
>>
>  default:
>>
>    console.log("Unknown weather type!");
>>
>    break;
>>
>}

Jika pernyataan benar maka akan melakukan case yang dituju.
## Capitalization
>fuzzylittleturtle
>>
>fuzzy_little_turtle
>>
>FuzzyLittleTurtle
>>
>fuzzyLittleTurtle

Pada contoh tersebut kata pertama sulit untuk dibaca, pada javascript ada gaya penulisan pada kata 2-4. Pembiasaan diri akan berpengaruh sekali terhadap hal tersebut.

## Comments
Komentar seringkali ingin menambahkan notes pada kode, maka dapat dilakukan dengan garis miring ( // ) dengan dilanjutkan ingin mengetikkan komentar
