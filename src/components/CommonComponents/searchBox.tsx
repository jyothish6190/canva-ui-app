import React from 'react';
import { Button, ClearIcon, SearchIcon, TextInput } from '@canva/app-ui-kit';
import { useSearchInputStore } from 'src/Store/SearchInputstore';

export default function SearchBox() {
    const { searchValue, setSearchValue } = useSearchInputStore();
    return (
        <TextInput
            start={SearchIcon}
            placeholder="Search"
            value={searchValue}
            type="search"
            end={
                searchValue && (
                    <Button
                        variant="tertiary"
                        icon={ClearIcon}
                        onClick={() => {
                            setSearchValue('');
                        }}
                    />
                )
            }
            onChange={(value: string) => {
                setSearchValue(value);
            }}
        />
    );
}
