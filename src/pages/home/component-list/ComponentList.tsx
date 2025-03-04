import React, { useMemo } from 'react';
import { Grid } from '@canva/app-ui-kit';

import ComponentCard from './component-card/ComponentCard';

import { Component } from 'src/models/component.model';
import ErrrorMessage from 'src/components/error-message/ErrrorMessage';

type ComponentListType = {
    components: Component[];
    searchQuery: string;
    onClick: (component: Component) => void;
    showIcon: boolean;
    showContainer: boolean;
};

const ComponentList = ({
    components,
    searchQuery,
    onClick,
    showIcon,
    showContainer,
}: ComponentListType) => {
    const errorMessage = useMemo(() => {
        return `Sorry, we couldn’t find any components for “${searchQuery}”.
                Try adjusting your search or filters.`;
    }, [searchQuery]);
    if (!components || components.length === 0) {
        return showIcon === false && showContainer == false ? (
            <ErrrorMessage errorMessage={errorMessage} />
        ) : null;
    }

    return (
        <Grid
            alignX="stretch"
            alignY="stretch"
            columns={2}
            spacingY="2u"
            spacingX="1u"
        >
            {components.map((component) => {
                return (
                    <div
                        style={{ cursor: 'pointer' }}
                        key={component.name}
                        onClick={(e) => {
                            e.preventDefault();

                            onClick(component);
                        }}
                    >
                        <ComponentCard component={component} />
                    </div>
                );
            })}
        </Grid>
    );
};

export default ComponentList;
