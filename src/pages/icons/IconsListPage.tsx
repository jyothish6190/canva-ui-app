import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rows } from '@canva/app-ui-kit';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import IconList from './icon-list/IconList';

import { icons } from 'src/constants/icons';
import { Icon } from 'src/models/icons.model';

const IconsListPage = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState('');

    const iconList = useMemo(() => {
        const iconsFiltered: Icon[] = icons.filter((icon) =>
            icon.name.toLowerCase().includes(searchQuery)
        );

        return iconsFiltered;
    }, [icons, searchQuery]);

    const searchHandler = (searchQuery: string) => {
        setSearchQuery(searchQuery.toLowerCase());
    };

    const backHandler = () => {
        navigate(-1);
    };

    return (
        <Rows spacing="2u">
            <Header header={'Icons'} onClick={backHandler} />
            <SearchBox onSearchQueryChange={searchHandler} />
            <IconList icons={iconList} />
        </Rows>
    );
};

export default IconsListPage;
