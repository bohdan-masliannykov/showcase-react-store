import { Product } from '@/shared/types/product.type';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/components/ui/card"
interface ProductEntityProps {
    product: Product;
}

const ProductEntity: React.FC<ProductEntityProps> = ({ product }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle> <h1>{product.title}</h1></CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card >

    );
};

export default ProductEntity;