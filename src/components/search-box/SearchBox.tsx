import React, { useState } from 'react';
import { Button, ClearIcon, SearchIcon, TextInput } from '@canva/app-ui-kit';

type SearchBoxType = {
    placeholder?: string;
    onSearchQueryChange: (searchQuery: string) => void;
};

const SearchBox = ({ placeholder, onSearchQueryChange }: SearchBoxType) => {
    const [searchQuery, setSearchQuery] = useState('');

    const clearSearchButton = () => {
        return (
            <>
                {searchQuery.length > 0 && (
                    <Button
                        variant="tertiary"
                        icon={ClearIcon}
                        onClick={() => {
                            setSearchQuery('');
                            onSearchQueryChange('');
                        }}
                    />
                )}
            </>
        );
    };
    return (
        <TextInput
            start={SearchIcon}
            placeholder={placeholder ? placeholder : 'Search'}
            value={searchQuery}
            type="search"
            end={clearSearchButton}
            onChange={(value: string) => {
                setSearchQuery(value);
                onSearchQueryChange(value);
            }}
        />
    );
};

export default SearchBox;
