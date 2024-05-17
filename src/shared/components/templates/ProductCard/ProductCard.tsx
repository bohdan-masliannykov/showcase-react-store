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
interface ProductEntityProps {
    product: Product;
}

const ProductCard: React.FC<ProductEntityProps> = ({ product }) => {
    return (
        <Card>
            <CardHeader>
                <img className={styles.product__image} src={product.image} alt={product.title} />
            </CardHeader>
            <CardContent>
                <CardTitle>
                    <h3 className={`${styles.product__title}`}>{product.title}</h3>
                </CardTitle>
                <CardDescription>
                    <p title={product.description} className={`${styles.product__description} mt-2`}>{product.description}</p>
                </CardDescription>
            </CardContent>
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