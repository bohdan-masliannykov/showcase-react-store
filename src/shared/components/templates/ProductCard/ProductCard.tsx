import { Product } from '@/shared/types/product.type';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card";
import styles from './ProductCard.module.scss';
import { formatCurrency } from '@/utils/currency.util';
import { NavLink } from 'react-router-dom';
interface ProductEntityProps {
    product: Product;
}

const ProductCard: React.FC<ProductEntityProps> = ({ product }) => {
    return (
        <Card>
            <NavLink to={`/products/${product.id}`}>
                <CardHeader>
                    <img className={styles.product__image} src={product.image} alt={product.title} />
                </CardHeader>
                <CardContent>
                    <CardTitle className={`${styles.product__title}`}>
                        {product.title}
                    </CardTitle>
                    <CardDescription className={`${styles.product__description} mt-2`}>
                        {product.description}
                    </CardDescription>
                </CardContent>
            </NavLink>
            <CardFooter>
                <div className="flex justify-between">
                    <p>{formatCurrency(product.price)}</p>
                    <p>{product.category}</p>
                </div>
            </CardFooter>
        </Card >

    );
};

export default ProductCard;