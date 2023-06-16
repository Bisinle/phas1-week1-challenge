const grossIncome =90000//prompt("Enter Your Gros salary");




//Netsalary calculator
function NetSalaryCalculator(grossIncome, NHIFrangePicker,TotalTaxCalculator,PayeCalculator) { //function recieves 2 variables to calculate the net
  
  let NHIFpicker = NHIFrangePicker(grossIncome);
  totalTax = TotalTaxCalculator(grossIncome, NHIFpicker);
  let netSalary = grossIncome - totalTax[0];
  console.log(`Gross Income: ${grossIncome},\nNHIF: ${NHIFpicker},\nNSSHF: ${totalTax[1]},\nPAYE: ${totalTax[2]},\nTotal tax : ${totalTax[0]} `);
  return `net salary: ${netSalary}`;
}

console.log(NetSalaryCalculator(grossIncome,  NHIFrangePicker, TotalTaxCalculator));




//CALCULATES the total tax paid by an individual
function TotalTaxCalculator(grossIncome, NHIF) {
  let NSSF = 1080; 
  let taxableIncome = grossIncome - NSSF; //removing NSSF from the grossIncome
  let PAYE = PayeCalculator(taxableIncome); //capturing what the payeCalculator returns in variable for late use
  let totalTax = PAYE + NHIF; //calculating the total tax
  return [totalTax,NSSF,PAYE];
}


//Calculates the PAYE
function PayeCalculator(taxableIncome) {
  let tax;
  if (taxableIncome > 0 && taxableIncome <= 24000) {
    return taxableIncome * 0.1;
  } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
    tax = (24000 - 0) * 0.1 + (taxableIncome - 24000) * 0.25;
    return tax;
  } else if (taxableIncome > 32333) {
    tax =
      (24000 - 0) * 0.1 +
      (32333 - 24000) * 0.25 +
      (taxableIncome - 32333) * 0.3;
    return tax;
  }
}


//chooses the NHIF range where a an idvidual salary falls
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
