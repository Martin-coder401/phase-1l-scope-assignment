// Write your solution in this file!
// 1. Declare a global variable customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly creates a global variable
}

// 4. Function to overwrite the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'some customer';

// 6. Function to try and change the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'a new customer'; // This will throw an error
}