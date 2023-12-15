/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/*jshint esversion: 6 */
var cost_per_day = 35;
var no_of_days = 0;
const buttons = document.getElementsByClassName('blue-hover');
const clearButton = document.getElementById('clear-button');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const cost = document.getElementById('calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (var i=0; i < buttons.length; i++) {
    if (buttons[i].nodeName == 'LI') {
        buttons[i].addEventListener('click', (event) => {
            
            if (!event.target.classList.contains('clicked')){
                event.target.classList.add('clicked');
                no_of_days++;
                calculate();
            }
        });
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    for (var i=0; i < buttons.length; i++) {
        if (buttons[i].nodeName == 'LI') {
            buttons[i].classList.remove('clicked');
        }
    }
    no_of_days = 0;
    cost.innerHTML = 0;
    cost_per_day = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', () => {
    cost_per_day = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculate();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', () => {
    cost_per_day = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculate();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    cost.innerHTML = cost_per_day * no_of_days;
    console.log(cost_per_day + '  ' + no_of_days);
}
