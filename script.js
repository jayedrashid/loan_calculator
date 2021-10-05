// document.querySelector('.loan-form').addEventListener('submit', calculateResults);



// Calculate button 
document.querySelector('.loan-form').addEventListener('submit', function(e) {

  // Hide Results
  document.querySelector('.results').style.display = 'none';
  
  // Show loading
  document.querySelector('.loading').style.display = 'block';

  // calculateResults
  setTimeout(calculateResults, 2000);

  e.preventDefault();
});



// Calculate Results
function calculateResults(e) {
  console.log('Calculating...');

  // Creating Variables
  const amount = document.querySelector('.amount-input');
  const interest = document.querySelector('.interest-input');
  const years = document.querySelector('.years-input');
  
  const monthlyPayment = document.querySelector('.monthly-payment');
  const totalPayment = document.querySelector('.total-payment');
  const totalInterest = document.querySelector('.total-interest');

  // Assigning Values & parseFloat to get number values
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);    // Math.pow() returns the value of x to the power of y (xy).
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {                            // isFinite() determines whether a number is a finite number
    monthlyPayment.value = monthly.toFixed(2);        // toFixed() determines rounding the result. (2) is number of digits to appear after the decimal point
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
    
      // Show Results
      document.querySelector('.results').style.display = 'block';
  
      // Hide loading
      document.querySelector('.loading').style.display = 'none';

  } else {
    showError('Are you dumbass?!!');
  }

  e.preventDefault();
}


// Creating error message
function showError(error) {

  const newErrorDiv = document.createElement('div');    // div creation

  const card = document.querySelector('.card-content');         // reference element selection
  const heading = document.querySelector('.heading');    // reference element selection

  newErrorDiv.className = 'show-alert';             // class creation
  
  const newErrorDivText = document.createTextNode(error);    // TextNode creation
  
  newErrorDiv.appendChild(newErrorDivText);    // append to div
  
  card.insertBefore(newErrorDiv, heading);    // insert error above heading
  

  // Hide Results
  document.querySelector('.results').style.display = 'none';
  
  // Hide loading
  document.querySelector('.loading').style.display = 'none';



  // Styling newErrorDiv
  newErrorDiv.style.fontSize = '20px';
  newErrorDiv.style.color = '#ff0000';
  newErrorDiv.style.backgroundColor = 'yellow';
  newErrorDiv.style.textAlign = 'center';
  
  // Clear error after 3 sec
  setTimeout(clearError, 3000);
}


// Clear error
function clearError() {
  document.querySelector('.show-alert').remove();
}





