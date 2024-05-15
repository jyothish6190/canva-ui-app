import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { upload } from '@canva/asset';
import { addNativeElement } from '@canva/design';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import IconList from './icon-list/IconList';

import styles from './IconlistPage.css';
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
        const pathElement = svgDocument.querySelector(
            '#mask-for-svg11 + g > path'
        );

        pathElement?.setAttribute('fill', 'black');
        await inlineResources(svgDocument.documentElement);

        const svgString = new XMLSerializer().serializeToString(svgDocument);

        var decoded = unescape(encodeURIComponent(svgString));

        decoded = decoded.replace(
            /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
            ''
        );

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;
        const result = await upload({
            type: 'IMAGE',
            mimeType: 'image/svg+xml',

            url: imgSource,
            thumbnailUrl: imgSource,
        });

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
        <div className={styles.iconPage}>
            <Header header={'Icons'} onClick={backHandler} />
            <SearchBox onSearchQueryChange={searchHandler} />
            <IconList
                icons={iconList}
                searchQuery={searchQuery}
                onClick={iconSelectionHandler}
            />
        </div>
    );
};

export default IconsListPage;
