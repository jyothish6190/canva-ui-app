import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rows } from '@canva/app-ui-kit';

import SearchBox from '../../components/search-box/SearchBox';
import ComponentList from './component-list/ComponentList';
import CategoriesList from './categories-list/CategoriesList';
import IconList from './icon-list/IconList';

import { categories } from '../../constants/categories';
import { components } from 'src/constants/components';

import { Category } from '../../models/category.model';
import { Component } from 'src/models/coponent.model';

const HomePage = () => {
    const navigate = useNavigate();

    const [selectedCategories, setSelectedCategories] = useState<Category[]>(
        []
    );
    const categorySelectHandler = (category: Category) => {
        const index = selectedCategories.findIndex(
            (selectedCategory) => selectedCategory.id === category.id
        );
        if (index >= 0) {
            selectedCategories.splice(index, 1);
            setSelectedCategories([...selectedCategories]);
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const searchHandler = (searchQuery: string) => {
        console.log('🚀 ~ searchHandler ~ searchQuery:', searchQuery);
    };

    const componentSelectHandler = (component: Component) => {
        navigate(`/component-details`, {
            state: component,
        });
    };

    const iconSelectHandler = () => {
        navigate(`/icons`);
    };

    return (
        <div style={{ paddingBottom: '1rem' }}>
            <Rows spacing="2u">
                <SearchBox onSearchQueryChange={searchHandler} />
                <CategoriesList
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onClick={categorySelectHandler}
                />
                <IconList onClick={iconSelectHandler} />
                <ComponentList
                    components={components}
                    onClick={componentSelectHandler}
                />
            </Rows>
        </div>
    );
};

export default HomePage;
