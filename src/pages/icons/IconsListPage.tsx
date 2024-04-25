import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Rows } from '@canva/app-ui-kit';
import html2canvas from 'html2canvas';
import { upload } from '@canva/asset';
import { addNativeElement } from '@canva/design';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import IconList from './icon-list/IconList';

import { icons } from 'src/constants/icons';
import { Icon } from 'src/models/icons.model';
import { useIconStore } from 'src/store/IconStore';

const IconsListPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIconsList: setSelectedIcons } = useIconStore();

    const previousPath = location?.state?.path;
    const componentId = location?.state?.componentId;

    const [searchQuery, setSearchQuery] = useState('');

    const iconList = useMemo(() => {
        const iconsFiltered: Icon[] = icons.filter((icon) =>
            icon.label.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return iconsFiltered;
    }, [icons, searchQuery]);

    const iconSelectionHandler = (icon: Icon) => {
        if (previousPath !== 'home') {
            setSelectedIcons({ icon: icon, componentId: componentId });
            navigate(-1);
        } else {
            updateComponentHandler(icon);
        }
    };

    const searchHandler = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    const backHandler = () => {
        navigate(-1);
    };
    const updateComponentHandler = async (icon) => {
        const element = document.getElementById(icon.label),
            canvas = await html2canvas(element as HTMLElement),
            data = canvas.toDataURL('image/jpeg');

        const result = await upload({
            type: 'IMAGE',
            mimeType: 'image/jpeg',
            url: data,
            thumbnailUrl: data,
        });
        console.log('🚀 ~ updateComponentHandler ~ result:', result);

        await addNativeElement({
            type: 'IMAGE',
            ref: result.ref,
            width: 100,
            height: 100,
            top: 250,
            left: 350,
        });
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
