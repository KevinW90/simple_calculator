/*
A Simple Calculator

What do I need?
-buttons
  0-9
  +,-,*,/
  =
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
      //change 'x' to '*'
      if (val === 'x') val = '*';
      //add to display's info
      display.append(val);
    }  
  //else, solve the expression
    else {
      //evaluate the expression in the display area
      let res = eval(display.innerText);
      //add '= {res}' to display
      display.append(val, res);
    }
})
////////The above code works for a single executable expression in the display area////////
////////You must refresh the page after every expression is evaluated////////

