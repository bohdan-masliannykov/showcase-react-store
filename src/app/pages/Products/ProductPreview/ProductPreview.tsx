import { Product } from '@/shared/types/product.type';
import React from 'react';

interface ProductPreviewProps {
    product: Product;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
    console.log(product)
    return (
        <div className="product-preview">


        </div>
    );
};

export default ProductPreview;