(function() {
    "use strict";
    let myVariable= "Bob";

    const myHeading = document.querySelector('h1');
    myHeading.textContent = "Hello World!";

    
    myVariable;
    console.log("02. Variable : " + myVariable);
    
    console.log("03. Hasil 9+6 : "+(9+6));
    console.log("03. "+(myVariable==="Jane"));

    let iceCream = 'Chocolate';
    if(iceCream === 'Chocolate'){
        console.log('04. '+'Yay, I Love Chocolate Ice Cream');
    } else{
        console.log('Aww, but chocolate is my favorite');
    }

    let myVar= document.querySelector('h3');
    alert("05.  Hello");

    function multiply(num1, num2){
        let result = num1 * num2;
        return result;
    }
    console.log("05. 5 x 5 = "+ multiply(5,5));

    let myHtml = document.querySelector('h6');
    myHtml.onclick = function() {
        alert('06. Ouch! Stop poking me!');
    };

    let myImage = document.querySelector('img');
    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'img/icon.png') {
          myImage.setAttribute('src','img/icon-2.png');
        } else {
          myImage.setAttribute('src','images/icon.png');
        }
    }

    let myButton = document.querySelector('button');
    let title = document.querySelector('h5');
    
    function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          title.innerHTML = 'Mozilla is cool, ' + myName;
        }
      }

      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        let storedName = localStorage.getItem('name');
        title.textContent = 'Mozilla is cool, ' + storedName;
      }

      myButton.onclick = function() {
        setUserName();
      }


   

})();