import { ArrowLeftIcon, Button, Rows } from '@canva/app-ui-kit';
import React from 'react';
import { IconData } from '../../ConstData/IconConstData.js';
import SearchBox from '../CommonComponents/searchBox';
import IconTileHolder from './IconTileHolder';
import { useSearchInputStore } from 'src/Store/SearchInputstore';

export default function IconSelectionpage() {
    const Searchtext = useSearchInputStore((state) => state.searchValue);
    const filterData =
        Searchtext.trim() === ''
            ? IconData
            : IconData.filter((item) =>
                  item.text.toLowerCase().includes(Searchtext.toLowerCase())
              );
    return (
        <Rows spacing="2u">
            <Button variant="tertiary" icon={ArrowLeftIcon} alignment="start">
                Icons
            </Button>
            <SearchBox />
            <IconTileHolder IconData={filterData} />
        </Rows>
    );
}
