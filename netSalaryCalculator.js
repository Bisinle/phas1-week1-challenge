const grossIncome = prompt("Enter Your Gros salary");

//Netsalary calculator,calculates the netSalary of an individual ,recieves 4 parameter which are function we passed to it,

function NetSalaryCalculator(grossIncome,NHIFrangePicker,TotalTaxCalculator,NSSFCalculator) {
  //function recieves 2 variables to calculate the net
  let NSSF = NSSFCalculator(grossIncome)
  let NHIFpicker = NHIFrangePicker(grossIncome); //declares a variable NHIFpicker and assignes a value returned by the  funciton NHIFrangePicker, after
  //being ivoked and passed the grossIncome variable
  if (grossIncome < NHIFpicker) {
    NHIFpicker = 0;
    totalTax = TotalTaxCalculator(grossIncome, NHIFpicker,NSSF); //assignes a value of  to the variable 'totalTax' which is an array  returned by the function TotalTaxCalculator
  } else {
    totalTax = TotalTaxCalculator(grossIncome, NHIFpicker,NSSF); //assignes a value of  to the variable 'totalTax' which is an array  returned by the function TotalTaxCalculator
    //the TotalTaxCalculator functino recieves two parameters, calculated the total tax anf then returns the value
  }
  let taxableIcome = totalTax[3]
  let TotalActualTax = totalTax[0]

  let netSalary = taxableIcome - TotalActualTax; //declares a variable netSalary, then subtracts the grossInocme from the second elemt of the array returned by
  //the function TotalTaxCalculator, which is assigned to the variable totalTax, to give us the netSalary of an individual
  console.log(
    `Gross Income: ${grossIncome},\nNSSF: ${totalTax[1]},\nTaxable Income: ${totalTax[3]} ,\nNHIF: ${NHIFpicker},\nPAYE: ${totalTax[2]},\nTotal tax : ${totalTax[0]} `
  );
  //above line prints  the variables inside, to the console or terminal so we can view and see them,
  return `net salary: ${netSalary}`; //return the variable netSalary
}

console.log(
  NetSalaryCalculator(grossIncome,NHIFrangePicker,TotalTaxCalculator,NSSFCalculator)
); //prints the results return by the NetSalaryCalculator function

//CALCULATES the total tax paid by an individual
/**
 * TotalTaxCalculator functino calculates the totals tax paid by an individual, it recieves two parameters
 * "grossIncome" and "NHIF" which are passed form the function above
 *
 */
function TotalTaxCalculator(grossIncome, NHIF, NSSF) {
  let personalReleif = 2400;
  let taxableIncome = grossIncome - NSSF; //removing NSSF from the grossIncome
  let PAYE = PayeCalculator(taxableIncome, personalReleif); //capturing what the payeCalculator(a functin defined blow) returns in variable for later use

  let totalTax = PAYE + NHIF; //calculating the total tax
  return [totalTax, NSSF, PAYE,taxableIncome]; //return an array of those three value
}

//Calculates the PAYE
/**the fucntino "PayeCalculator" below, calculates the PAYE of an individual, it accepts the parameter "taxableIncom" which is passed from
 * the TotalTaxCalculator function, it checks where the taxable income falls and depending on the range it falls, it calculates the tax using
 * the tax rates provided in this link (https://www.aren.co.ke/payroll/taxrates.htm),
 */
function PayeCalculator(taxableIncome, personalReleif) {
  let tax;
  //the if blocks below checks if the taxableIncome falls between 0 and 24000, if yess, it does the calcualtion  and returns that value so we can export it outside the funcitno
  if (taxableIncome > personalReleif) {
    //this if block tests if the texableIcome is more than the personal releif, it can only pass if that is the case
    if (taxableIncome > 0 && taxableIncome <= 24000) {
      return taxableIncome * 0.1;
    } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
      //if the condition above is false, check  if it falls between 24000  and 32333
      tax = (24000 - 0) * 0.1 + (taxableIncome - 24000) * 0.25; // if yess, do the calculation and store it the variable tax we decalared above
      return tax; //return the tax variable to be used outside the fucntion
    } else if (taxableIncome > 32333) {
      // if the two previous condition are false
      tax =
        (24000 - 0) * 0.1 +
        (32333 - 24000) * 0.25 +
        (taxableIncome - 32333) * 0.3;
      //if this condition is true, do the calculations above and store them in the tax variable
      return tax; //then return the variable for later use
    }
  } else {
    // if the taxableIcome is less or equals to the personalreleif, an indivdual should not pay any tax because the personalReleif is always deducted from the tax
    return 0;
  }
}

//chooses the NHIF range where a an idvidual salary falls
/**the function below recieves a parameter "grossIncome" which is entered by the user when prompted and then runs it through the
 * if statement to find which range it falls and then pick the return value that specifit "if block" return
 */
function NHIFrangePicker(grossIncome) {
  let NHIF;
  if (grossIncome > 0 && grossIncome <= 5999) {
    NHIF = 150;
    return NHIF;
  } else if (grossIncome > 5999 && grossIncome <= 7999) {
    NHIF = 300;
    return NHIF;
  } else if (grossIncome > 7999 && grossIncome <= 11999) {
    NHIF = 400;
    return NHIF;
  } else if (grossIncome > 11999 && grossIncome <= 14999) {
    NHIF = 500;
    return NHIF;
  } else if (grossIncome > 14999 && grossIncome <= 19999) {
    NHIF = 600;
    return NHIF;
  } else if (grossIncome > 19999 && grossIncome <= 24999) {
    NHIF = 750;
    return NHIF;
  } else if (grossIncome > 24999 && grossIncome <= 29999) {
    NHIF = 850;
    return NHIF;
  } else if (grossIncome > 29999 && grossIncome <= 34999) {
    NHIF = 900;
    return NHIF;
  } else if (grossIncome > 34999 && grossIncome <= 39999) {
    NHIF = 950;
    return NHIF;
  } else if (grossIncome > 39999 && grossIncome <= 44999) {
    NHIF = 1000;
    return NHIF;
  } else if (grossIncome > 44999 && grossIncome <= 49999) {
    NHIF = 1100;
    return NHIF;
  } else if (grossIncome > 49999 && grossIncome <= 59999) {
    NHIF = 1200;
    return NHIF;
  } else if (grossIncome > 59999 && grossIncome <= 69999) {
    NHIF = 1300;
    return NHIF;
  } else if (grossIncome > 69999 && grossIncome <= 79999) {
    NHIF = 1400;
    return NHIF;
  } else if (grossIncome > 79999 && grossIncome <= 89999) {
    NHIF = 1500;
    return NHIF;
  } else if (grossIncome > 89999 && grossIncome <= 99999) {
    NHIF = 1600;
    return NHIF;
  } else {
    NHIF = 1700;
    return NHIF;
  }
}

function NSSFCalculator(grossIncome) {
  let NSSF;
  //the if blocks below checks if the taxableIncome falls between 0 and 24000, if yess, it does the calcualtion  and returns that value so we can export it outside the funcitno
    //this if block tests if the texableIcome is more than the personal releif, it can only pass if that is the case
    if (grossIncome > 0 && grossIncome <= 6000) {
      return grossIncome * 0.06;
    } else if (grossIncome > 6000 && grossIncome <= 18000) {
      //if the condition above is false, check  if it falls between 24000  and 32333
      NSSF = (6000 - 0) * 0.06 + (grossIncome - 6000) * 0.06; // if yess, do the calculation and store it the variable tax we decalared above
      return NSSF; //return the tax variable to be used outside the fucntion
    } else if (grossIncome > 18000) {
      // if the two previous condition are false
      NSSF =
        (6000 - 0) * 0.06 +
        (18000 - 6000) * 0.06 +
        (grossIncome - 18000) * 0.06;
      //if this condition is true, do the calculations above and store them in the tax variable
      return NSSF; //then return the variable for later use
    }
  console.log("ffffffffffffffffffffffffffffffffffff"+NSSF);
}
