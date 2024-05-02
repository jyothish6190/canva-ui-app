import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Rows } from '@canva/app-ui-kit';
import { upload } from '@canva/asset';
import { addNativeElement } from '@canva/design';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import IconList from './icon-list/IconList';

import { icons } from 'src/constants/icons';
import { Icon } from 'src/models/icons.model';
import { useIconStore } from 'src/store/IconStore';
import { elementToSVG, inlineResources } from 'dom-to-svg';

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
        const element = document.getElementById(icon.label);

        const svgDocument = elementToSVG(element as HTMLElement);

        await inlineResources(svgDocument.documentElement);

        // Get SVG string
        const svgString = new XMLSerializer().serializeToString(svgDocument);

        // Remove any characters outside the Latin1 range
        var decoded = unescape(encodeURIComponent(svgString));

        // Remove style tag if any as it is not supported in canva
        decoded = decoded.replace('<style/>', '');
        // Now we can use btoa to convert the svg to base64

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        const result = await upload({
            type: 'IMAGE',
            mimeType: 'image/svg+xml',

            url: imgSource,
            thumbnailUrl: imgSource,
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
