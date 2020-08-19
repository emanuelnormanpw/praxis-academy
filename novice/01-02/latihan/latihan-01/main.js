console.log("== Block Statement ===");
var x=0;
while (x < 10){
    console.log(x);
    x++;
}

console.log("== Conditional Statement ===");
var b = false;
if (b==true){
    console.log("It's True");
}else{
    console.log("It's False");
}
var fruittype = "Bananas";
switch(fruittype){
    case 'Oranges':
        console.log("Oranges are $0.59 a pound.");
        break;
    case 'Apples':
        console.log("Apples are $0.32 a pound.");
        break;
    case 'Cherries':
        console.log("Cherries are $3.00 a pound.");
    case 'Mangoes':
        console.log("Mangoes are $0.56 a pound.");
    default:
        console.log(`Sorry, we are out of ${fruittype}.`);
}
console.log("Is there anything else you'd like?");
