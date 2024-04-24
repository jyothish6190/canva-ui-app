import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Rows } from '@canva/app-ui-kit';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import IconList from './icon-list/IconList';

import { icons } from 'src/constants/icons';
import { Icon } from 'src/models/icons.model';
import { useIconStore } from 'src/store/IconStore';

const IconsListPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setSelectedIcons } = useIconStore();
    const previousPath = location?.state?.path;
    const componentId = location?.state?.componentId;

    const [searchQuery, setSearchQuery] = useState('');

    const iconList = useMemo(() => {
        const iconsFiltered: Icon[] = icons.filter((icon) =>
            icon.label.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return iconsFiltered;
    }, [icons, searchQuery]);

    const searchHandler = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    const backHandler = () => {
        navigate(-1);
    };

    const iconSelectionHandler = (icon: Icon) => {
        if (previousPath !== 'home') {
            setSelectedIcons({ selectedIcon: icon, componentId: componentId });
            navigate(-1);
        } else {
            console.log('🚀 ~ iconSelectionHandler ~ icon:', icon);
        }
    };

    return (
        <Rows spacing="2u">
            <Header header={'Icons'} onClick={backHandler} />
            <SearchBox onSearchQueryChange={searchHandler} />
            <IconList
                icons={iconList}
                searchQuery={searchQuery}
                onClick={iconSelectionHandler}
            />
        </Rows>
    );
};

export default IconsListPage;
