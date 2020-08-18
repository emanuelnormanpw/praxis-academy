var pagar= "#";
console.log("===== PERTAMA =====");
    while(pagar.length <= 7){
        console.log(pagar); 
        pagar = pagar + "#";
    }
var fizz = "Fizz";
var buzz = "Buzz";
var fizzbuzz = "FizzBuzz";
console.log("===== KEDUA =====");
for (i=0;i<=100;i++){
    if(i%3 == 0 && i%5 ==0){
        console.log(fizzbuzz);
    }else if(i%3==0 || i%5==0){
        if (i%3==0){
            console.log(fizz);
        } else console.log(buzz);
    }else{
        console.log(""+i);
    }
}
console.log("===== KETIGA =====");
var board = "";
var size = prompt("Input Size : ");
for (i=0;i<size;i++){
    for(a=0;a<size;a++){
        if((i+a)%2==0){
            board += " ";
        }else{
            board += "#"
        }
    }
    board += "\n";
}
console.log(board);

