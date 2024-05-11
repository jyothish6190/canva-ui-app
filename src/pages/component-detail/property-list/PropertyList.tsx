import React from 'react';
import { Rows } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import ComponentItem from 'src/pages/home/component-list/component-item/ComponentItem';
import TabsList from 'src/components/tabs/TabsList';

type PropType = {
    component: Component;
};

const PropertyList = ({ component }: PropType) => {
    if (component && component.tabs && component.tabs.length > 0) {
        return <TabsList component={component} />;
    }

    return (
        <Rows spacing="2u">
            {component.fields?.map((field, index) => {
                return (
                    <ComponentItem
                        component={field}
                        isProperty={true}
                        key={index}
                    />
                );
            })}
        </Rows>
    );
};

export default PropertyList;
