
import { ProductMock } from '@/shared/components/templates/ProductMock/ProductMock';
import { ProductView } from '@/shared/components/templates/ProductView/ProductView';
import { ProductsState } from '@/shared/types/products-state.type';
import { RootState } from '@/store';
import { asyncGetProducByIdThunk } from '@/store/actions/products.actions';
import { productsActions } from '@/store/slices/products.slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductPreview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const state: ProductsState = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const { data: product, loading } = state.preview;

    useEffect(() => {
        dispatch(asyncGetProducByIdThunk(id));
        return () => {
            // clean store preview to refetch only fresh data
            dispatch(productsActions.resetPreview());
        }
    }, []);

    return (
        <div className="product-preview">
            <div className="container py-12">
                {!loading && product ? <ProductView product={product!} /> : <ProductMock />}
            </div>
        </div>
    );
};

export default ProductPreview;