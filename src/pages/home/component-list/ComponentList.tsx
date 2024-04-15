import React from 'react';
import { Grid } from '@canva/app-ui-kit';

import ComponentCard from './component-card/ComponentCard';

import { Component } from 'src/models/coponent.model';

type ComponentListType = {
    components: Component[];
    onClick: (component: Component) => void;
};

const ComponentList = ({ components, onClick }: ComponentListType) => {
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
                        key={component.name}
                        onClick={(e) => {
                            console.log(
                                '🚀 ~ {components.map ~ component:',
                                component
                            );

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
