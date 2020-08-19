console.log("===BIGGEST NUMBER===");
var num1, num2;
num1 = window.prompt("Masukkan angka pertama", "0");
num2 = window.prompt("Masukkan angka kedua", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("Yang terbesar dari angka " + num1 + " dan " + num2 + " adalah " + num1 + ".");
} else
if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("Yang terbesar dari angka " + num1 + " dan " + num2 + " adalah " + num2 + ".");
} else {
    console.log("Hasil dari " + num1 + " and " + num2 + " sama.");
}


console.log("===Find the sign of product of three numbers===");
var x = 3;
var y = +7;
var z = -2;
if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}

console.log("===Sort three numbers===");
var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    } else {
        console.log(x + ", " + z + ", " + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    } else {
        console.log(y + ", " + z + ", " + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    } else {
        console.log(z + ", " + y + ", " + x);
    }
}

console.log("===Find the Five Biggest Number===");

a = -5;
b = -2;
c = -6;
d = 0;
f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > c && d > b && d > f) {
    console.log(d);
} else {
    console.log(f);
}

console.log("===Odd Even Number===");
var i;
for (i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

console.log("===Average Student Grade===");

var students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68]
];
var avgMark = 0;


for (var i = 0; i < students.length; i++) {
    avgMark += students[i][1];
    var avg = (avgMark / students.length);
}

console.log("Average Students Grade : " + avg);

if (avg < 60) {
    console.log("Grade : F");
} else if (avg < 70) {
    console.log("Grade : D");
} else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

console.log("===FIZZ BUZZ===");
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";
for (i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(fizzbuzz);
    } else if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0) {
            console.log(fizz);
        } else console.log(buzz);
    } else {
        console.log("" + i);
    }
}

console.log("===HAPPY NUMBER===");

function happy_number(num) {
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) {
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");

    num++;
}
console.log('First 5 happy numbers are : ' + f5);


console.log("===ARMSTRONG===");

function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
three_digit_armstrong_number();

console.log("===STARS LOOPING===");
var pagar = "*";
while (pagar.length <= 7) {
    console.log(pagar);
    pagar = pagar + "*";
}

console.log("===GCD===");
var valSatu = 4093;
var valDua = 213;
var gcd;
while (valSatu != valDua) {
    if (valSatu > valDua) {
        valSatu = valSatu - valDua;
    } else {
        valDua = valDua - valSatu;
    }
}
gcd = valSatu;
console.log(gcd);

console.log("=======MULTIPLES 3 AND 5 UNDER 1000=======");
var sum = 0;
for (var m = 0; m < 1000; m++) {
    if (m % 3 === 0 || m % 5 === 0) {
        sum += m;
    }
}
console.log(sum);