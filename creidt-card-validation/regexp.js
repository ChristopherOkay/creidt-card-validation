//change inputs to text credit cards results
let creditCard = "4934567891234567";
let cvv = "123";

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function to check cvv
function cvvValidation() {
  let cvvValue = /^[0-9]{3}$/.test(cvv);
  console.log('===========Displaying if CVV entered is valid==============')
  if (cvvValue === true) {
    console.log("This is a valid cvv card \n");
  } else {
    console.log("Not a valid card cvv details \n");
  }
}

//function to check validity of number length
function validityCheck() {
  let checkCardValidity = /^[0-9]{16}$/.test(creditCard);
  console.log('===========Displaying if card numbers entered is valid==============')
  if (checkCardValidity === true) {
    console.log("This is a valid card \n");
  } else {
    console.log("Not a valid card details \n");
  }
}

//function for card type validation
function creditCardType() {
  //visa and master card validation check
  let visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/.test(creditCard);
  let masterCard =
    /^^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/.test(
      creditCard
    );

    console.log('===========Displaying the entered credit card type==============')

  if (visaCard === true) {
    console.log("This is a visa card \n");
  } else if (masterCard === true) {
    console.log("This a MasterCard \n");
  } else {
    console.log("No card type \n");
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//results display
validityCheck();
cvvValidation();
creditCardType();
