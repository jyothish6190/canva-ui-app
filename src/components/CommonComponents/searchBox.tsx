import { ClearIcon, SearchIcon, TextInput } from '@canva/app-ui-kit';
import React from 'react';

export default function SearchBox() {
    return (
        <TextInput
            start={SearchIcon}
            placeholder="Search"
            type="search"
            end={ClearIcon}
        />
    );
}
