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
import { useComponentStore } from 'src/store/ComponentStore';
import { Component } from 'src/models/component.model';

const IconsListPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setIconsList: setSelectedIcons } = useIconStore();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const { setItem } = useLocalStorage(ICONS);
    const { getItem } = useLocalStorage(ICONS);
    setItem([]);

    const previousPath = location?.state?.path;
    const componentId = location?.state?.componentId;
    const optionId = location?.state?.optionId;
    const component: Component = location?.state?.component;

    const [searchQuery, setSearchQuery] = useState('');

    const iconList = useMemo(() => {
        const iconsFiltered: Icon[] = icons.filter((icon) =>
            icon.label
                .replace(/\s+/g, '')
                .toLowerCase()
                .includes(searchQuery.replace(/\s+/g, '').toLowerCase())
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
            if (selectedComponent) {
                selectedComponent.tabValue = component.tabId;
            }

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
        const iconElement = element?.querySelector('span');

        let svgDocument = elementToSVG(iconElement as HTMLElement);

        if (svgDocument) {
            svgDocument.documentElement
                .querySelector('path')
                ?.setAttribute('fill', '#000000');
        }

        await inlineResources(svgDocument.documentElement);

        const elementsWithFill = svgDocument.querySelectorAll('[fill]');

        elementsWithFill.forEach((element) => {
            if (element.tagName.toLowerCase() !== 'path') {
                const parentElement = element.parentElement;
                if (parentElement) {
                    parentElement.removeChild(element);
                }
            }
        });

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
