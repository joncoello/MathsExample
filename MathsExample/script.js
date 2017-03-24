/*

args.vat =  lightningBridge.round((args.quantity * args.grossPrice * args.net / (args.net + args.lineDiscount)) - args.net 
            - (args.net * vatRate * this.totalDiscountRate), this.vatDP);



args.vat =  lightningBridge.round(mathsHelper.divide(mathsHelper.multiply(mathsHelper.multiply(args.quantity, args.grossPrice), 
            args.net), (args.net + args.lineDiscount)) - args.net - (mathsHelper.multiply(mathsHelper.multiply(args.net, vatRate), 
            this.totalDiscountRate)), this.vatDP);

*/


/// <reference path="c:\users\jon.coello\documents\visual studio 2015\Projects\MathsExample\MathsExample\math.min.js" />
function CalculateAmount() {

    var quantity = 2.00;
    var grossPrice = 3.15;
    var net = 1.2;
    var lineDiscount = 2.0;
    var vatRate = 0.2;
    var totalDiscountRate = 0.8;
    var vatDP = 2;

    // raw js
    var result =
        (quantity * grossPrice * net / (net + lineDiscount)) - net
        - (net * vatRate * totalDiscountRate);

    alert(result);

    //mathjs
    var definition = quantity + " + ";
    //var instance = definition.

    var scope = {
        quantity: 2.00,
        grossPrice: 3.15,
        net: 1.2,
        lineDiscount: 2.0,
        vatRate: 0.2,
        totalDiscountRate: 0.8,
        vatDP: 2
    };

    var result = math.eval("round((quantity * grossPrice * net / (net + lineDiscount)) - net - (net * vatRate * totalDiscountRate), vatDP)", scope)

    alert(result);
    
}