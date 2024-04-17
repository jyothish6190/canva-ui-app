import { Box, Column, Columns } from '@canva/app-ui-kit';
import React from 'react';
import { Component } from 'src/models/coponent.model';
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
                                selectedCategories={[]}
                                onClick={() => {}}
                            />
                        );
                    })}
            </Box>
        </>
    );
};

export default ButtonTypesComponent;
