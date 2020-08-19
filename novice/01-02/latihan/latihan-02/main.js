console.log("=====");
for (let step = 0; step < 5; step++) {
  console.log("walking east one step");
}

console.log("===for statement===");

function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn = document.getElementById('btn');
btn.addEventListener("click", function () {
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});

console.log("===do while statement===");
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5)

console.log("===while statement===");
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n
  console.log("N: " + n + " X: " + x);
}

console.log("===break statement===");
var a = ["aaa", "bbb", "ccc", "ddd", "eee", "bbb", "ccc", "ddd", "eee"];
var theValue = "eee";
for (let i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
  console.log(i);
}
console.log("======");
let p = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer Loop: " + p);
  p += 1;
  z = 1;
  while (true) {
    console.log("Inner Loops: " + z);
    z += 1;
    if (z === 10 && p === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
console.log("===continue statement===");

let u = 0;
let o = 0;
while (u < 5) {
  u++;
  if (u === 3) {
    continue;
  }
  o += u;
  console.log(o);
}

console.log("======");

let g = 0;
let h = 10;
checkgandh:
  while (g < 4) {
    console.log(g);
    g += 1;
    checkh:
      while (h > 4) {
        console.log(h);
        h -= 1;
        if (h % 2 === 0) {
          continue checkh;
        }
        console.log(h + ' is odd.');
      }
    console.log('g = ' + g);
    console.log('h = ' + h);
  }

console.log("===for in===");
var car = {
  make: "Ford",
  model: "Mustang"
};

function dump_props(obj, obj_name) {
  let result = '';
  for (let i in obj) {
    result += obj_name + '.' + i + ' = ' + obj[i] + ' || ';
  }

  console.log(result);
}

dump_props(car, "Car");


console.log("===for of===");
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
console.log("=====");
for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}