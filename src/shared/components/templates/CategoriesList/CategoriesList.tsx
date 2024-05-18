import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

type CategoriesListProps = {
    list: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ list, onSelectCategory, selectedCategory }) => {
    const [_selectedCategory, setSelectedCategory] = useState<string>(selectedCategory || 'all')

    const _onSelectCategory = (category: string) => {
        if (_selectedCategory === category) return; //prevent re-fetching the same category
        setSelectedCategory(category);
        onSelectCategory(category);
    }

    return (
        <Tabs defaultValue={_selectedCategory} value={_selectedCategory}>
            <TabsList>
                {list.map((item: string, index: number) => (<TabsTrigger className="capitalize" key={index} onClick={() => _onSelectCategory(item)} value={item}>{item}</TabsTrigger>))}
            </TabsList>
        </Tabs>
    )
}