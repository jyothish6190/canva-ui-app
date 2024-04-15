import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rows } from '@canva/app-ui-kit';

import SearchBox from '../../components/CommonComponents/searchBox';
import ComponentList from './component-list/ComponentList';
import CategoriesList from './categories-list/CategoriesList';
import IconList from './icon-list/IconList';

import { categories } from '../../constants/categories';

import { Category } from '../../models/category.model';

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

    const iconSelectHandler = () => {
        navigate(`/icons`);
    };

    return (
        <Rows spacing="2u">
            <SearchBox />
            <CategoriesList
                categories={categories}
                selectedCategories={selectedCategories}
                onClick={categorySelectHandler}
            />
            <IconList onClick={iconSelectHandler} />
            <ComponentList />
        </Rows>
    );
};

export default HomePage;
