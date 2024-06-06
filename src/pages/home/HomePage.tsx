import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Rows } from '@canva/app-ui-kit';

import SearchBox from '../../components/search-box/SearchBox';
import ComponentList from './component-list/ComponentList';
import CategoriesList from './categories-list/CategoriesList';
import IconList from './icon-list/IconList';

import { categories } from '../../constants/categories';
import { components } from 'src/constants/components';

import { Category } from '../../models/category.model';
import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { initAppElement } from '@canva/design';
import { ElementType, useElementStore } from 'src/store/elementStore';
import { useIconStore } from 'src/store/IconStore';

const appElementClient = initAppElement<any>({
    render: (data) => {
        return [];
    },
});

const HomePage = () => {
    const navigate = useNavigate();
    const { setSelectedComponent } = useComponentStore();
    const { elements, setElements } = useElementStore();
    const { clearIcons } = useIconStore();

    const [showIcons, setShowIcons] = useState(true);
    const [isAppElement, setIsAppElement] = useState(true);

    const [selectedCategories, setSelectedCategories] = useState<Category[]>(
        []
    );
    const [searchQuery, setSearchQuery] = useState('');

    const filteredComponentList = useMemo(() => {
        let componentsByCategory: Component[] = [];

        // filter by category
        if (selectedCategories.length > 0) {
            components.forEach((component) => {
                selectedCategories.forEach((category) => {
                    if (component.categoryId === category.value) {
                        componentsByCategory.push(component);
                    }
                });
            });
        } else {
            componentsByCategory = [...components];
        }

        // search
        let filteredComponents = componentsByCategory.filter((component) => {
            return component.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        });
        return filteredComponents;
    }, [searchQuery, selectedCategories, components]);

    useEffect(() => {
        clearIcons();
        appElementClient.registerOnElementChange((appElement) => {
            console.log(
                '🚀 ~ appElementClient.registerOnElementChange ~ appElement:',
                appElement
            );

            if (appElement?.data?.selectedComponent) {
                setIsAppElement(true);
                if (elements && elements.length > 0) {
                    elements.forEach((element: ElementType) => {
                        if (element.elementId === appElement?.data?.elementId) {
                            const oldComponent = {
                                ...element.component,
                            };

                            if (oldComponent) {
                                setSelectedComponent(oldComponent, 'HomePage');
                                navigate('/component-details');
                            }
                        }
                    });
                }
            }
            setIsAppElement(false);
        });
    }, []);

    useEffect(() => {
        setShowIcons(
            selectedCategories.length > 0
                ? selectedCategories.some((item) => item.value === 'icons')
                : true
        );
    }, [selectedCategories]);

    const categorySelectHandler = (category: Category) => {
        const index = selectedCategories.findIndex(
            (selectedCategory) => selectedCategory.value === category.value
        );
        if (index >= 0) {
            selectedCategories.splice(index, 1);
            setSelectedCategories([...selectedCategories]);
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const searchHandler = (searchQuery: string) => {
        if ('icons'.toLowerCase().includes(searchQuery.toLowerCase())) {
            selectedCategories.forEach((item) => {
                if (item.value === 'icons') {
                    setShowIcons(true);
                }
            });
            selectedCategories.length === 0 && setShowIcons(true);
        } else {
            setShowIcons(false);
        }
        setSearchQuery(searchQuery);
    };

    const componentSelectHandler = (component: Component) => {
        let newComponent = { ...component };
        newComponent.fields = component.fields?.map((item) => ({ ...item }));
        setSelectedComponent(newComponent, 'HomePage');
        navigate(`/component-details`);
    };

    const iconSelectHandler = () => {
        navigate('/icons', { state: { path: 'home' } });
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
                {showIcons && <IconList onClick={iconSelectHandler} />}

                <ComponentList
                    showIcon={showIcons}
                    components={filteredComponentList}
                    searchQuery={searchQuery}
                    onClick={componentSelectHandler}
                />
            </Rows>
        </div>
    );
};

export default HomePage;
