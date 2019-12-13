var customerPhoneNumbers = []; // Array because it can accpet more than one number. 
var customerName = ''; //Customer name

function addPhoneNumber(num){
    customerPhoneNumbers.push(num); // Adds a number to the array above. 
};

function setCustomerName(name) { // Set customer name.
    customerName = name; 
};

export { customerPhoneNumbers, addPhoneNumber, customerName, setCustomerName};