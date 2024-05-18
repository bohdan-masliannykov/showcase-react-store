import { LoadingWrapper } from '@/shared/components/molecules/LoadingWrapper/LoadingWrapper';
import { CategoriesList } from '@/shared/components/templates/CategoriesList/CategoriesList';
import ProductCard from '@/shared/components/templates/ProductCard/ProductCard';
import { Product } from '@/shared/types/product.type';
import { useProductListHook } from './userProductList.hook';

const ProductsList: React.FC = () => {
    const {
        isLoadingProducts,
        isLoadingCategories,
        products,
        categories,
        category,
        onSelectCategory,
    } = useProductListHook();

    return (
        <div className='container'>
            <LoadingWrapper loading={isLoadingCategories}>
                <div className='flex justify-center pt-12'>
                    <CategoriesList selectedCategory={category!} list={categories!} onSelectCategory={onSelectCategory}></CategoriesList>
                </div>
            </LoadingWrapper>
            <div className='min-h-96 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12 justify-items-center sm:justify-items-start'>
                {isLoadingProducts ? Array(4).fill(0).map((i: number, index) => <ProductCard.Mock key={index} />) : products!.map((product: Product) => (<ProductCard key={product.id} product={product!} />))}
            </div>
        </div>
    );
};

export default ProductsList;