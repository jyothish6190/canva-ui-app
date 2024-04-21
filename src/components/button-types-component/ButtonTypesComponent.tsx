import React from 'react';

import { Box } from '@canva/app-ui-kit';

import { Category } from 'src/models/category.model';
import { Component } from 'src/models/component.model';

import CategoriesItem from 'src/pages/home/categories-list/categories-item/CategoriesItem';

type PropType = {
    component: Component;
};

const ButtonTypesComponent = ({ component }: PropType) => {
    return (
        <>
            <Box display="flex" justifyContent="spaceBetween">
                {component &&
                    component.options &&
                    component.options.map((category, index) => {
                        return (
                            <CategoriesItem
                                key={index}
                                category={category as any}
                                selectedCategories={
                                    component.selectedCategories
                                        ? (component.selectedCategories as Category[])
                                        : []
                                }
                                onClick={() => {}}
                            />
                        );
                    })}
            </Box>
        </>
    );
};

export default ButtonTypesComponent;
