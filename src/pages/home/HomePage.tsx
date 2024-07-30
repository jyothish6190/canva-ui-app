import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Rows } from '@canva/app-ui-kit';

import SearchBox from '../../components/search-box/SearchBox';
import ComponentList from './component-list/ComponentList';
import CategoriesList from './categories-list/CategoriesList';
import IconList from './icon-list/IconList';
import ContainerList from './container-list/container-list';

import { categories } from '../../constants/categories';
import { components } from 'src/constants/components';

import { Category } from '../../models/category.model';
import { Component } from 'src/models/component.model';

import { useComponentStore } from 'src/store/ComponentStore';
import { initAppElement } from '@canva/design';
import { useIconStore } from 'src/store/IconStore';

const appElementClient = initAppElement<any>({
    render: (data) => {
        return [];
    },
});

const HomePage = () => {
    const navigate = useNavigate();
    const { setSelectedComponent } = useComponentStore();
    const { clearIcons } = useIconStore();

    const [showIcons, setShowIcons] = useState(true);
    const [showContainers, setShowContainers] = useState(true);

    const [selectedCategories, setSelectedCategories] = useState<Category[]>(
        []
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAppElement, setSelectedAppElement] =
        useState<any>(undefined);

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
                .replace(/\s+/g, '')
                .toLowerCase()
                .includes(searchQuery.replace(/\s+/g, '').toLowerCase());
        });
        return filteredComponents;
    }, [searchQuery, selectedCategories, components]);

    useEffect(() => {
        appElementClient.registerOnElementChange((appElement) => {
            if (appElement?.data?.selectedComponent) {
                setSelectedAppElement(appElement);
            }
        });

        clearIcons();
    }, []);

    useEffect(() => {
        if (selectedAppElement) {
            const oldComponent = {
                ...selectedAppElement.data.selectedComponent,
            };

            console.log(
                '🚀 ~ useEffect ~ oldComponent:',
                oldComponent,
                selectedAppElement
            );
            if (oldComponent) {
                setSelectedComponent(oldComponent, 'HomePage');
                navigate('/component-details');
            }
        }
    }, [selectedAppElement]);

    useEffect(() => {
        setShowIcons(
            selectedCategories.length > 0
                ? selectedCategories.some((item) => item.value === 'icons')
                : true
        );
        setShowContainers(
            selectedCategories.length > 0
                ? selectedCategories.some(
                      (item) => item.value === 'templates and containers'
                  )
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
        if (
            'icons'
                .toLowerCase()
                .includes(searchQuery.replace(/\s+/g, '').toLowerCase())
        ) {
            selectedCategories.forEach((item) => {
                if (item.value === 'icons') {
                    setShowIcons(true);
                }
            });
            selectedCategories.length === 0 && setShowIcons(true);
        } else {
            setShowIcons(false);
        }
        if (
            'templatesandcontainers'
                .toLowerCase()
                .includes(searchQuery.replace(/\s+/g, '').toLowerCase())
        ) {
            selectedCategories.forEach((item) => {
                if (item.value === 'templates and containers') {
                    setShowContainers(true);
                }
            });
            selectedCategories.length === 0 && setShowContainers(true);
        } else {
            setShowContainers(false);
        }
        setSearchQuery(searchQuery);
    };

    const componentSelectHandler = (component: Component) => {
        console.log('🚀 ~ componentSelectHandler ~ component:', component);
        let newComponent = { ...component };
        newComponent.fields = component.fields?.map((item) => ({ ...item }));
        setSelectedComponent(newComponent, 'HomePage');
        navigate(`/component-details`);
    };

    const iconSelectHandler = () => {
        navigate('/icons', { state: { path: 'home' } });
    };

    const containerSelectHandler = () => {
        navigate('/containers', { state: { path: 'home' } });
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
                {showContainers && (
                    <ContainerList onClick={containerSelectHandler} />
                )}
                {showIcons && <IconList onClick={iconSelectHandler} />}

                <ComponentList
                    showIcon={showIcons}
                    showContainer={showContainers}
                    components={filteredComponentList}
                    searchQuery={searchQuery}
                    onClick={componentSelectHandler}
                />
            </Rows>
        </div>
    );
};

export default HomePage;
