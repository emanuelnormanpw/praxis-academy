console.log("===String Objects===");
const foo = new String('foo');
console.log(foo);
typeof foo;

console.log("-----");
const firstString = '2 + 2'; 
const secondString = new String('2 + 2');
console.log(eval(firstString)); 
console.log(eval(secondString)); 

const hello = 'Hello World';
const helloLength = hello.length;
console.log(hello[0]='L');
console.log(hello[0]); 

console.log("===Multiline template literals===");
const five = 5;
const ten = 10;

console.log('Fifteen is '+(five+ten)+' and not '+(2*five+ten)+'.');
console.log(`Fifteen is ${five+ten} and not ${2*five+ten}.`);


console.log("===Internationalization===");
console.log("-----");
const msPerDay = 24*60*60*1000;
const july172014 = new Date(msPerDay*(44*365+11+197));
const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
};
const americanDateTime = new Intl.DateTimeFormat('en-US',options).format;

console.log(americanDateTime(july172014));
console.log("-----");

const gasPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 3
});

console.log(gasPrice.format(5.289));

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',{
    style: 'currency',
    currency: 'CNY'
});

console.log(hanDecimalRMBInChina.format(1314.6));

console.log("-----");
const names = ['Hochberg', 'Honigswald','Holzman'];
const germanPhoneBook = new Intl.Collator('de-DE-u-co-phonebk');
console.log(names.sort(germanPhoneBook.compare).join(', '));

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
console.log(names.sort(germanDictionary.compare).join(', '));