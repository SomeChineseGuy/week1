var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  //This returns the function groupComapny
 return groupCompany();
}

//This function will cal the  total sales of each company in each prov and return it
function calculateSalesOfEachCompanyInEachProv (salesProv){
  var totalSales = 0;
  for (var i = 0; i < salesProv.length; i++) {
    totalSales += salesProv[i]
  }
  return totalSales
}
// console.log(calculateSalesOfEachCompanyInEachProv(companySalesData[0].sales))
// This function will cal the taxes
function calTax (taxProv, totalSales) {
  var taxRate = salesTaxRates[taxProv]
  // console.log(taxRate)
  return salesTaxRates[taxProv] * totalSales
}
// console.log(calTax(companySalesData[0].province, calculateSalesOfEachCompanyInEachProv(companySalesData[0].sales)))
//This function does a few things and may seem like the most difficult of all the functions to understand
//This Function puts everything together.
function groupCompany (){
  var output = {};
  //This line creates an obj to hold exp results
  for (var i = 0; i < companySalesData.length; i++) {
    var totalSalesInLoop = calculateSalesOfEachCompanyInEachProv(companySalesData[i].sales);
    var totalTaxInLoop = calTax(companySalesData[i].province, totalSalesInLoop )
    if (companySalesData[i].name in output) {
      output[companySalesData[i].name].totalSales = output[companySalesData[i].name].totalSales +
      totalSalesInLoop;
      output[companySalesData[i].name].totalTaxes = output[companySalesData[i].name].totalTaxes +
      totalTaxInLoop;
    } else {
      output[companySalesData[i].name] = {'totalSales':totalSalesInLoop, 'totalTaxes':totalTaxInLoop}
    }
  }
  // It will give this obj to who ever calls it
  return output;
  //This will show you what the function does
} //console.log(groupCompany())
// console.log(groupCompany(companySalesData));

var results = calculateSalesTax(companySalesData, salesTaxRates);
//prettyText organized the out come to look pretty
//Google JSON JS on MDN (First part is the object, replacer which I don't need, amount of space)
var prettyText = JSON.stringify(results, null, 2)
console.log(prettyText)

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/