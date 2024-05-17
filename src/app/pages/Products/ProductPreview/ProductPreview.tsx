import { Product } from '@/shared/types/product.type';
import React from 'react';

interface ProductPreviewProps {
    product: Product;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
    return (
        <div className="product-preview">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductPreview;