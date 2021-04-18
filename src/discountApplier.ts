import { Product } from './product';

export class DiscountApplier {
    getDiscountPercentageValue(products: Product[]): number {
        let discountValue = 0;
        if (products.length === 1) {
            return 0;
        }

        let allProductsQuantity = products.reduce((sum, product) => sum + product.quantity, 0);

        if (allProductsQuantity > 10 && allProductsQuantity <= 50) {
            discountValue += 10;
        }
        if (allProductsQuantity > 50) {
            discountValue += 15;
        }

        let allProductsPrice = products.reduce((sum, product) => sum + product.quantity * product.price, 0);

        if (allProductsPrice > 100 && allProductsPrice <= 500) {
            discountValue += 5;
        }
        if (allProductsPrice > 500 && allProductsPrice <= 2000) {
            discountValue += 10;
        }
        if (allProductsPrice > 2000) {
            discountValue += 25;
        }

        return discountValue;
    }
}