import React from 'react';

import { Rows } from '@canva/app-ui-kit';

import ComponentItem from 'src/pages/home/component-list/component-item/ComponentItem';

import { Component } from 'src/models/component.model';

type PropTypes = {
    components: Component[];
};

const TabItemComponent = ({ components }: PropTypes) => {
    return (
        <div style={{ padding: '2rem 0' }}>
            <Rows spacing="2u">
                {components?.map((component, index) => {
                    return (
                        <ComponentItem
                            component={component}
                            isProperty={true}
                            key={index}
                        />
                    );
                })}
            </Rows>
        </div>
    );
};

export default TabItemComponent;
