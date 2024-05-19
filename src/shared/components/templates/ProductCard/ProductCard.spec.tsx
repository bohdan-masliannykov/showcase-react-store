import { describe, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import ProductCard from "./ProductCard";
import { Product } from "@/shared/types/product.type";
import { BrowserRouter as Router } from 'react-router-dom';

describe('ProductCard', () => {
    const product: Product = {
        id: 1,
        title: 'Hat',
        price: 2.99,
        category: 'hats',
        description: 'A nice hat',
        image: 'hat.jpg',
        rating: {
            rate: 4,
            count: 1
        }
    };

    beforeEach(() => {
        render(
            <Router>
                <ProductCard product={product} />
            </Router>
        );
    });

    it('should render product card', () => {
        const title = screen.getByTestId('product-title');
        const description = screen.getByTestId('product-description');
        const price = screen.getByTestId('product-price');
        const category = screen.getByTestId('product-category');

        expect(title.innerHTML).toEqual(product.title);
        expect(description.innerHTML).toEqual(product.description);
        expect(price.innerHTML).toEqual(`$${product.price}`);
        expect(category.innerHTML).toEqual(product.category);
    });

    it('should have correct link', () => {
        const titleLink = screen.getByTestId('product-title').parentElement;
        expect(titleLink).toHaveAttribute('href', `/products/${product.id}`);
    });

    it('should have correct link and image', () => {
        const image = screen.getByTestId('product-image');
        const imageLink = image.parentElement;
        expect(imageLink).toHaveAttribute('href', `/products/${product.id}`);
        expect(image).toHaveAttribute('src', product.image);
    });
})