import React, { useState } from 'react';

import styles from './ButtonType.css';
import { Category } from 'src/models/category.model';
import { Component } from 'src/models/component.model';

import CategoriesItem from 'src/pages/home/categories-list/categories-item/CategoriesItem';
import { useComponentStore } from 'src/store/ComponentStore';

type PropType = {
    component: Component;
};

const ButtonTypesComponent = ({ component }: PropType) => {
    const { selectedComponent, setComponentField } = useComponentStore();

    const [selectedCategory, setSelectedCategory] = useState<Category>();

    const selectHandler = (category: Category) => {
        setSelectedCategory(category);
        setComponentField(component, category.value);
    };

    return (
        <>
            <div className={styles.container}>
                {component &&
                    component.options &&
                    component.options.map((category, index) => {
                        return (
                            <CategoriesItem
                                key={index}
                                category={category as any}
                                selectedCategories={
                                    selectedCategory
                                        ? [selectedCategory]
                                        : (component.selectedCategories as Category[])
                                }
                                onClick={selectHandler}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default ButtonTypesComponent;
