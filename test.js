const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("3.5 euros should be 3.745 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("10 dollars should be 1490.3 yenes", function() {
    expect(fromDollarToYen(10)).toBe(1490.3);
});

test("1000 yenes should be 7.2 pounds", function() {
    expect(fromYenToPound(1000)).toBe(7.2);
});
