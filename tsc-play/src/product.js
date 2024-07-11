var Product = /** @class */ (function () {
    function Product(name, unitPrice) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.name = name;
        this.unitPrice = unitPrice;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        return this.unitPrice * (1 - discount);
    };
    return Product;
}());
var table = new Product('Table', 500);
console.log(table.getDiscountedPrice(0.1)); // 450
