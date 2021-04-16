import { DiscountApplier } from '../discountApplier';
import { Product } from '../product';

describe("DiscountApplier", () => {
    it('getDiscountPercentageValue returns 0 discount for 1 product', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 25, 1)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(0);
    });

    it('getDiscountPercentageValue returns 10 percent discount for total quantity of 12', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 1, 6), new Product("Product 2", 1, 6)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(10);
    });

    it('getDiscountPercentageValue returns 15 percent discount for total quantity of 56', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 1, 28), new Product("Product 2", 1, 28)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(15);
    });

    it('getDiscountPercentageValue returns 5 percent discount for total price of 110 and quantity 2', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 100, 1), new Product("Product 2", 10, 1)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(5);
    });

    it('getDiscountPercentageValue returns 10 percent discount for total price of 550 and quantity 2', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 500, 1), new Product("Product 2", 50, 1)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(10);
    });

    it('getDiscountPercentageValue returns 25 percent discount for total price of 2500 and quantity 2', () => {
        let discountApplier = new DiscountApplier();
        let products = [new Product("Product 1", 2000, 1), new Product("Product 2", 500, 1)];

        let discountValue = discountApplier.getDiscountPercentageValue(products);
        expect(discountValue).toBe(25);
    });
})
