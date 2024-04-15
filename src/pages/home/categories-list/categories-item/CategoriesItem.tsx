import React, { useMemo } from 'react';

import { Pill } from '@canva/app-ui-kit';

import { Category } from 'src/models/category.model';

type CategoryItemType = {
    category: Category;
    selectedCategories: Category[];
    onClick: (category: Category) => void;
};

const CategoriesItem = ({
    category,
    selectedCategories,
    onClick,
}: CategoryItemType) => {
    const isCategorySelected = useMemo(() => {
        let selected = false;
        selectedCategories.forEach((selectedCategory) => {
            if (selectedCategory.id === category.id) {
                selected = true;
            }
        });
        return selected;
    }, [category, selectedCategories]);

    return (
        <Pill
            key={category.id}
            text={category.name}
            selected={isCategorySelected}
            role="switch"
            onClick={() => {
                onClick(category);
            }}
        />
    );
};

export default CategoriesItem;
