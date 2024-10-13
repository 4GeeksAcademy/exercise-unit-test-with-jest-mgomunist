// Euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07; 
    return valueInDollar;
};

// Dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 149.03;  
    return valueInYen;
};

// Yenes a libras
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;  
    return valueInPound;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

