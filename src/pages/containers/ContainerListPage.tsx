import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { upload } from '@canva/asset';
import { addNativeElement } from '@canva/design';

import { Header } from 'src/components/header/Header';
import SearchBox from 'src/components/search-box/SearchBox';
import ContainerList from './container-list/ContainerList';

import styles from './ContainerlistPage.css';
import { containers } from 'src/constants/containers';
import { Container } from 'src/models/containers.model';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { CONTAINERS } from 'src/constants/common-constants';

const ContainerListPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { setItem } = useLocalStorage(CONTAINERS);
    const { getItem } = useLocalStorage(CONTAINERS);
    setItem([]);

    const previousPath = location?.state?.path;

    const [searchQuery, setSearchQuery] = useState('');

    const containerList = useMemo(() => {
        const containersFiltered: Container[] = containers.filter((container) =>
            container.label
                .replace(/\s+/g, '')
                .toLowerCase()
                .includes(searchQuery.replace(/\s+/g, '').toLowerCase())
        );

        return containersFiltered;
    }, [containers, searchQuery]);

    const containerSelectionHandler = (container: Container) => {
        if (previousPath !== 'home') {
            navigate(-1);
        } else {
            updateComponentHandler(container);
        }
    };

    const searchHandler = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    const backHandler = () => {
        navigate(-1);
    };
    const updateComponentHandler = async (container) => {
        if (!container.main) return;
        let file = require(`assets/containers/main/${container.main}`);
        let svgVal = await fetch(file);
        const svgString = await svgVal.text();
        var decoded = unescape(encodeURIComponent(svgString));

        decoded = decoded.replace(
            /fill="rgb\(255, 255, 255\)"/g,
            'fill="rgb(0, 0, 0)"'
        );

        decoded = decoded.replace(/fill="#ffffff"/g, 'fill="#ffffffdc"');

        decoded = decoded.replace(
            /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
            ''
        );

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        const containerLists = getItem();
        const containerReference = containerLists.find((element) => {
            return element.containerKey === container.value;
        });

        if (!containerReference) {
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
                height: 40,
                top: 250,
                left: 350,
            });
        } else {
            await addNativeElement({
                type: 'IMAGE',
                ref: containerReference.containerRef,
                width: 'auto',
                height: 40,
                top: 250,
                left: 350,
            });
        }
    };

    return (
        <div className={styles.containerPage}>
            <Header header={'Templates and containers'} onClick={backHandler} />
            <SearchBox onSearchQueryChange={searchHandler} />
            <ContainerList
                containers={containerList}
                searchQuery={searchQuery}
                onClick={containerSelectionHandler}
            />
        </div>
    );
};

export default ContainerListPage;
