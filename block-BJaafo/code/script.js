function fullName(firstName = "", lastName = "") {
  return firstName + " " + lastName;
};

let result =  fullName("Arya", "Stark");

let expectedResult = "AryaStark";

if (result !== expectedResult) {
    throw new Error(`${result} is not equal to ${expectedResult}`);
};

let newResult =  fullName("John", "Snow");

let expectedNewResult = "John Snow";

if (newResult !== expectedNewResult) {
    throw new Error(`${newResult} is not equal to ${expectedNewResult}`);
};
/* After the 1st test fails the second test is not run so
   there will be no output for the second test */


  function totalAmount(amount = 0, taxRate = 0) {
    return amount + (amount * taxRate / 100);
  }; 

  let resultAmount = totalAmount(500, 18);
  
  let expectedAmount = 580;

  if (resultAmount !== expectedAmount) {
    throw new Error(`${resultAmount} is not equal to ${expectedAmount}`);
};

let newResultAmount = totalAmount(1000, 18);
  
let newExpectedAmount = 1180;

if (resultAmount !== expectedAmount) {
  throw new Error(`${newResultAmount} is not equal to ${newExpectedAmount}`);
};

/* After the 1st test fails the second test is not run so
   there will be no output for the second test */