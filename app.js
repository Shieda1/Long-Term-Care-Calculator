// https://www.omnicalculator.com/finance/long-term-care
// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalinflatedcostafterthespecifiedperiodRadio = document.getElementById('totalinflatedcostafterthespecifiedperiodRadio');
const costofpresentyearRadio = document.getElementById('costofpresentyearRadio');
const noofyearsRadio = document.getElementById('noofyearsRadio');
const rateofinflationRadio = document.getElementById('rateofinflationRadio');

let totalinflatedcostafterthespecifiedperiod;
let costofpresentyear = v1;
let noofyears = v2;
let rateofinflation = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

totalinflatedcostafterthespecifiedperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of present year';
  variable2.textContent = 'No. of years';
  variable3.textContent = 'Rate of inflation';
  costofpresentyear = v1;
  noofyears = v2;
  rateofinflation = v3;
  result.textContent = '';
});

costofpresentyearRadio.addEventListener('click', function() {
  variable1.textContent = 'Total inflated cost after the specified period';
  variable2.textContent = 'No. of years';
  variable3.textContent = 'Rate of inflation';
  totalinflatedcostafterthespecifiedperiod = v1;
  noofyears = v2;
  rateofinflation = v3;
  result.textContent = '';
});

noofyearsRadio.addEventListener('click', function() {
  variable1.textContent = 'Total inflated cost after the specified period';
  variable2.textContent = 'Cost of present year';
  variable3.textContent = 'Rate of inflation';
  totalinflatedcostafterthespecifiedperiod = v1;
  costofpresentyear = v2;
  rateofinflation = v3;
  result.textContent = '';
});

rateofinflationRadio.addEventListener('click', function() {
  variable1.textContent = 'Total inflated cost after the specified period';
  variable2.textContent = 'Cost of present year';
  variable3.textContent = 'No. of years';
  totalinflatedcostafterthespecifiedperiod = v1;
  costofpresentyear = v2;
  noofyears = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalinflatedcostafterthespecifiedperiodRadio.checked)
    result.textContent = `Total inflated cost after the specified period = ${computetotalinflatedcostafterthespecifiedperiod().toFixed(2)}`;

  else if(costofpresentyearRadio.checked)
    result.textContent = `Cost of present year = ${computecostofpresentyear().toFixed(2)}`;

  else if(noofyearsRadio.checked)
    result.textContent = `No. of years = ${computenoofyears().toFixed(2)}`;

  else if(rateofinflationRadio.checked)
    result.textContent = `Rate of inflation = ${computerateofinflation().toFixed(2)}`;
})

// calculation

function computetotalinflatedcostafterthespecifiedperiod() {
  return Number(costofpresentyear.value) * Math.pow(1 + (Number(rateofinflation.value) / 100), Number(noofyears.value));
}

function computecostofpresentyear() {
  return Number(totalinflatedcostafterthespecifiedperiod.value) / Math.pow(1 + (Number(rateofinflation.value) / 100), Number(noofyears.value));
}

function computenoofyears() {
  return Number(costofpresentyear.value) - (Number(totalinflatedcostafterthespecifiedperiod.value) * (Number(rateofinflation.value) / 100));
}

function computerateofinflation() {
  return (Math.pow(Number(totalinflatedcostafterthespecifiedperiod.value) / Number(costofpresentyear.value), 1 / Number(noofyears.value)) - 1) * 100;
}