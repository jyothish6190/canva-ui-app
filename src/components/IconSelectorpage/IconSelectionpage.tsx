import React from 'react';
import { ArrowLeftIcon, Button, Rows } from '@canva/app-ui-kit';
import { IconData } from '../../ConstData/IconConstData.js';
import SearchBox from '../CommonComponents/searchBox';
import IconTileHolder from './IconTileHolder';
import { useSearchInputStore } from 'src/Store/SearchInputstore';
import { Header } from '../Header';
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
            <Header
                showBackButton={true}
                name={headerName}
                onClickBack={onClickBack}
            />
            <SearchBox />
            <IconTileHolder IconData={filterData} />
        </Rows>
    );
}
