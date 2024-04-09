import { Rows } from '@canva/app-ui-kit';
import React from 'react';
import SearchBox from '../CommonComponents/searchBox';
import PillBox from '../CommonComponents/pillBox';

export default function MainPage() {
    return (
        <Rows spacing="2u">
            <SearchBox />
            <PillBox />
        </Rows>
    );
}
