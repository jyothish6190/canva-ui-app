import React from 'react';
import { Rows } from '@canva/app-ui-kit';
import { IconData } from '../../ConstData/IconConstData.js';
import SearchBox from '../search-box/SearchBox';
import IconTileHolder from './IconTileHolder';
import { useSearchInputStore } from 'src/Store/SearchInputstore';
import { Header } from '../header/Header';
import { useLocation, useNavigate } from 'react-router-dom';

export default function IconSelectionpage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const Searchtext = useSearchInputStore((state) => state.searchValue);
    const filterData =
        Searchtext.trim() === ''
            ? IconData
            : IconData.filter((item) =>
                  item.Icontext.toLowerCase().includes(Searchtext.toLowerCase())
              );
    const headerName = state?.name || 'Icons';
    const onClickBack = () => navigate(-1);
    return (
        <Rows spacing="2u">
            <Header header={headerName} onClick={onClickBack} />
            <SearchBox onSearchQueryChange={() => {}} />
            <IconTileHolder IconData={filterData} />
        </Rows>
    );
}
