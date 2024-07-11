
class Product {
    constructor(
        public name: string,
        public unitPrice: number
    ) { 
        this.name = name;
        this.unitPrice = unitPrice;
    }

    getDiscountedPrice(discount: number): number {
        return this.unitPrice * (1 - discount);
    }
}

const table = new Product('Table', 500);
console.log(table.getDiscountedPrice(0.1)); // 450

type N = 1 | 2 | 3;