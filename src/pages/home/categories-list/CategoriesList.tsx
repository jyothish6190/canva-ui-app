import React from 'react';
import { Box, Carousel } from '@canva/app-ui-kit';

import { Category } from '../../../models/category.model';
import CategoriesItem from './categories-item/CategoriesItem';

type CategoriesListType = {
    categories: Category[];
    selectedCategories: Category[];
    onClick: (category: Category) => void;
};

const CategoriesList = ({
    categories,
    selectedCategories,
    onClick,
}: CategoriesListType) => {
    return (
        <Box flexDirection="column" justifyContent="spaceBetween">
            <Carousel>
                {categories.map((category) => {
                    return (
                        <CategoriesItem
                            key={category.value}
                            category={category}
                            selectedCategories={selectedCategories}
                            onClick={onClick}
                        />
                    );
                })}
            </Carousel>
        </Box>
    );
};

export default CategoriesList;
