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
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { ICONS } from 'src/constants/common-constants';

const IconsListPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIconsList: setSelectedIcons } = useIconStore();
    const { setItem } = useLocalStorage(ICONS);
    const { getItem } = useLocalStorage(ICONS);
    setItem([]);

    const previousPath = location?.state?.path;
    const componentId = location?.state?.componentId;
    const optionId = location?.state?.optionId;

    const [searchQuery, setSearchQuery] = useState('');

    const iconList = useMemo(() => {
        const iconsFiltered: Icon[] = icons.filter((icon) =>
            icon.label.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return iconsFiltered;
    }, [icons, searchQuery]);

    const iconSelectionHandler = (icon: Icon) => {
        if (previousPath !== 'home') {
            setSelectedIcons({
                icon: icon,
                componentId: componentId,
                optionId: optionId,
            });
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
        const element = document.getElementById(icon.value);
        const clone = element?.cloneNode(true) as HTMLElement;
        clone.style.color = 'black';

        const svgDocument = elementToSVG(clone as HTMLElement);

        await inlineResources(svgDocument.documentElement);

        const svgString = new XMLSerializer().serializeToString(svgDocument);

        var decoded = unescape(encodeURIComponent(svgString));

        decoded = decoded.replace(
            /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
            ''
        );

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        const iconLists = getItem();
        const iconReference = iconLists.find((element) => {
            return element.iconKey === icon.value;
        });

        if (!iconReference) {
            const result = await upload({
                type: 'IMAGE',
                mimeType: 'image/svg+xml',

                url: imgSource,
                thumbnailUrl: imgSource,
            });

            await addNativeElement({
                type: 'IMAGE',
                ref: result.ref,
                width: 'auto',
                height: icon.value == 'minus-icon' ? 5 : 40,
                top: 250,
                left: 350,
            });
            const newIcon = [
                ...iconLists,
                {
                    iconKey: icon.value,
                    iconRef: result.ref,
                },
            ];
            setItem(newIcon);
        } else {
            await addNativeElement({
                type: 'IMAGE',
                ref: iconReference.iconRef,
                width: 'auto',
                height: 40,
                top: 250,
                left: 350,
            });
        }
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
