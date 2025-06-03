// Calculator Form

// Get the <form> element on the page
let form = document.querySelector('form');

// event listener to handle the form's submit event
form.addEventListener('submit', e => {
  e.preventDefault(); // stops the page from reloading on submit

  // references to form inputs and output field
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  // evals the expression and shows the result
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});


// Buttons

// 15 buttons inside #error-btns section
const [
  logBtn, errorBtn, countBtn, warnBtn, assertBtn, clearBtn, dirBtn,
  dirxmlBtn, groupStartBtn, groupEndBtn, tableBtn, timeStartBtn,
  timeEndBtn, traceBtn, globalErrorBtn, tryCatchBtn, throwErrorBtn, trackJsBtn
] = document.querySelectorAll('#error-btns > button');


// Debugging demos for the buttons

// 1. simple message to the console
logBtn.addEventListener('click', () => {
  console.log("Console Log: Hello from console.log!");
});

// 2. an error message (red in console)
errorBtn.addEventListener('click', () => {
  console.error("Console Error: This is an error message.");
});

// 3. logs button click count
countBtn.addEventListener('click', () => {
  console.count("Console Count clicked");
});

// 4. logs a yello warning message
warnBtn.addEventListener('click', () => {
  console.warn("Console Warn: Just a heads up.");
});

// 5. logs a message if the assertion is false
assertBtn.addEventListener('click', () => {
  const x = 2;
  const y = 3;
  // Only logs an error if x is not greater than y (which it isn't)
  console.assert(x > y, "Console Assert: x is not greater than y");
});

// 6. clears the entire console output
clearBtn.addEventListener('click', () => {
  console.clear(); // Wipes the console clean
});

// 7. shows a JS view of the body element (all properties and methodscan u h)
dirBtn.addEventListener('click', () => {
  console.dir(document.body);
});

// 8. shows DOM tree view of the body element
dirxmlBtn.addEventListener('click', () => {
  console.dirxml(document.body);
});

// starts a collapsible group
groupStartBtn.addEventListener('click', () => {
  console.group("Console Group Start");
  console.log("Inside the group...");
});

// 10. ends current console group
groupEndBtn.addEventListener('click', () => {
  console.groupEnd();
  console.log("Group closed.");
});

// 11. displays array of objects as a table
tableBtn.addEventListener('click', () => {
  const sampleData = [
    { name: "Lavin", age: 20 },
    { name: "Clarissa", age: 21 }
  ];
  console.table(sampleData);
});

// 12. starts a console timer
timeStartBtn.addEventListener('click', () => {
  console.time("Timer");
});

// 13. ends the timer and logs elapsed time
timeEndBtn.addEventListener('click', () => {
  console.timeEnd("Timer");
});

// 14. logs call stack trace
traceBtn.addEventListener('click', () => {
  function one() { two(); }
  function two() { three(); }
  function three() { console.trace("Trace demo"); }
  one();
});

// shows the try/catch
tryCatchBtn.addEventListener('click', () => {
  try {
    // trigger error
    JSON.parse("not valid JSON");
  } catch (err) {
    console.error("Try/Catch Demo: JSON parse failed:", err.message);
  } finally {
    console.log("Try/Catch Demo: This always runs.");
  }
});

// custom error class for the validation error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
// throws and catches a custom validation error
throwErrorBtn.addEventListener('click', () => {
  try {
    let age = -5;
    if (age < 0) throw new ValidationError("Age must be non-negative!");
  } catch (err) {
    console.error("Throw Custom Error Demo:", err);
  }
});

// triggers a global error
globalErrorBtn.addEventListener('click', () => {
  nonExistentFunction(); 
});
// catches all uncaught error from anywhere on the page
window.onerror = function (message, source, lineno, colno, error) {
  console.log("Global error caught!");
  console.log(`Message: ${message}`);
  console.log(`Source: ${source}`);
  console.log(`Line: ${lineno}, Column: ${colno}`);
  console.log("Error object:", error);
};

// manually tracks error for testing
trackJsBtn.addEventListener('click', () => {
  TrackJS.track('TrackJS Manual Error Triggered from button');
});
