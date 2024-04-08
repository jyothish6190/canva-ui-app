import { Rows } from '@canva/app-ui-kit';
import React from 'react';
import SearchBox from './MainageComponents/searchBox';
import PillBox from './MainageComponents/pillBox';

export default function MainPage() {
    return (
        <Rows spacing="2u">
            <SearchBox />
            <PillBox />
           
        </Rows>
    );
}
