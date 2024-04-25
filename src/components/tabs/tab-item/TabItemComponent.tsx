import React, { useEffect, useState } from 'react';

import { Rows } from '@canva/app-ui-kit';
import * as Tabs from '@radix-ui/react-tabs';

import ComponentItem from 'src/pages/home/component-list/component-item/ComponentItem';

import { Component } from 'src/models/component.model';
import { Category } from 'src/models/category.model';

type PropTypes = {
    component: Component;
    tab: Category;
};

const TabItemComponent = ({ component, tab }: PropTypes) => {
    const [fields, setFields] = useState<Component[]>([]);

    useEffect(() => {
        const tabFields: Component[] = [];
        component.fields?.forEach((field: Component) => {
            if (field.tabId === tab.value) {
                tabFields.push(field);
            }
        });
        setFields(tabFields);
    }, [tab, component]);

    return (
        <Tabs.Content value={tab.value} key={tab.value}>
            <div style={{ padding: '2rem 0' }}>
                <Rows spacing="2u">
                    {fields?.map((component, index) => {
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
        </Tabs.Content>
    );
};

export default TabItemComponent;
