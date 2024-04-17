import React from 'react';
import { Rows } from '@canva/app-ui-kit';

import { Component } from 'src/models/coponent.model';
import ComponentItem from 'src/pages/home/component-list/component-item/ComponentItem';

type PropType = {
    component: Component;
};

const PropertyList = ({ component }: PropType) => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <Rows spacing="3u">
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
        </div>
    );
};

export default PropertyList;
