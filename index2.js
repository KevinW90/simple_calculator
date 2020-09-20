/*
A Simple Calculator

What do I need?
-buttons
  0-9
  +,-,*,/
  =
  ()
-display area
  to display the result

MVP
  Click all buttons to perform actions

POA (Plan of Action)
1) When a user clicks a button (number, symbol), display its value
  onClick(button value)
2) When a user clicks '=', calculate the expression and display its value
  onClick(expression)
*/

//Lets look at how we can solve the issue of having to refresh after every evaluation
//
//What is the problem?
//The display area is equal to the expression entered by clicking the buttons (EX: 2+3=5)
//After an expression is evaluated, the display field continues to add the next expression
//Because the previous expression can no longer be evaluated (the equal sign prevents this),
//we can not just add our next expression to the display and evaluate from display's value

/*POA
1) Create a variable to store the current expression to evaluate
2) When the '=' is clicked, reset the variable to use it again

3) Add a new line to the display to see each expression entered
*/

//Variable to hold the current expression to evaluate
//An older naming convention is to use ALL-CAPS for global variables
//This isn't seen much nowadays because global values are a little dangerous.
//Because the expr() function expects a string, we'll default to an empty string.
let EXPR = '';


/**
 * Event listener for all buttons.
 * 
 * This function handles when the user clicks clicks a button.
 * It performs the necessary action based on the button clicked.
 * 
 * @listens event:click
 * 
 * @param {event} e The click event.
 * 
 */
document.addEventListener('click', e => {
  //Check for a button being clicked
  if (!e.target.matches('button')) return;

  //Just to be safe, prevent any default actions
  e.preventDefault();

  //get value of button clicked
    //the event target is the button
    //get the innerText from the target
    let val = e.target.innerText;
    
  //print the button's value
    //grab the 'display' area
    let display = document.querySelector('.display');
  
  //if the value clicked is not '=', add to the expression
    if (val !== '=') {
      //display the 'x' before changing the internal value to '*'
      //add to display's info
      display.append(val);
      //change 'x' to '*'
      if (val === 'x') val = '*';
      //update the expression variable
      EXPR+=val;

      //scroll to bottom of display
      scroll();
    }
  //else, solve the expression
    else {
      //evaluate the expression in the variable
      let res = eval(EXPR);
      //add '= {res}' and to display
      display.append(val, res);
      //add new line to display area
      display.appendChild(document.createElement('br'));
      //reset EXPR to use again
      EXPR = '';
    }
})