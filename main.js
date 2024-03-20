// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
// const numberToString = (num) => {
//   return num.toString();
// }

const numberToString = (num) => {
  const outputString = num.value.toString()
  document.getElementById("stringOutput").innerHTML = "Datatype is " + typeof outputString + " and value is " + outputString;
}

// Write a JavaScript program to convert a string to the number.
// const stringToNumber = (string) => {
//   return parseInt(string);
// }

const stringToNumber = (string) => {
  const outputNumber = parseInt(string.value);
  document.getElementById("numberOutput").innerHTML = "Datatype is " + typeof outputNumber + " and value is " + outputNumber;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
// * String
  
const dataType = (data) => {
  if (typeof data === "boolean") {
    return "Boolean";
  } else if (data === null) {
    return "Null";
  } else if (typeof data === "undefined") {
    return "Undefined";
  } else if (typeof data === "number") {
    return "Number";
  } else if (isNaN(data)) {
    return "NaN";
  } else if (typeof data === "string") {
    return "String";
  }
}

// const dataType = (data) => {
//   if (typeof data === "boolean") {
//     document.getElementById("datatypeOutput").innerHTML = "Boolean";
//   } else if (data === null) {
//     document.getElementById("datatypeOutput").innerHTML = "Null";
//   } else if (typeof data === "undefined") {
//     document.getElementById("datatypeOutput").innerHTML = "Undefined";
//   } else if (typeof data === "number") {
//     document.getElementById("datatypeOutput").innerHTML = "Number";
//   } else if (isNaN(data)) {
//     document.getElementById("datatypeOutput").innerHTML = "NaN";
//   } else if (typeof data === "string") {
//     document.getElementById("datatypeOutput").innerHTML = "String";
//   }
// }

// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = () => {
  let number1 = parseInt(document.getElementById("num1").value)
  let number2 = parseInt(document.getElementById("num2").value)
  console.log('Number 1 is: ' + number1)


  let result = number1 + number2

  document.getElementById("additionResult").innerHTML = result
}

// Write a JavaScript program that runs only when 2 things are true.
const twoThingsTrue = (thing1, thing2) => {
  if (thing1 && thing2) {
    return "Both things are true";
  } else {
    return "One or both things are not true";
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneOfTwoTrue = (thing1, thing2) => {
  if (thing1 || thing2) {
    return "One of the things is true";
  } else {
    return "Neither thing is true";
  }
}


// Write a JavaScript program that runs when both things are not true.
const bothThingsNotTrue = (thing1, thing2) => {
  if (!thing1 && !thing2) {
    return "Both things are not true";
  } else {
    return "One or both things are true";
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
