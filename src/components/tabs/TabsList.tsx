import React from 'react';

import * as Tabs from '@radix-ui/react-tabs';

import { Component } from 'src/models/component.model';

import TabItemComponent from './tab-item/TabItemComponent';

import styles from './TabsList.css';

type PropType = {
    component: Component;
};

const TabsList = ({ component }: PropType) => {
    if (!component || !component.tabs) {
        return;
    }

    return (
        <Tabs.Root
            defaultValue={component.defaultTabValue}
            orientation="vertical"
            className={styles.TabsRoot}
        >
            <Tabs.List className={styles.TabsList} aria-label="tabs">
                {component.tabs.map((tab) => {
                    return (
                        <Tabs.Trigger
                            key={tab.value}
                            className={styles.TabsTrigger}
                            value={tab.value}
                        >
                            {tab.label}
                        </Tabs.Trigger>
                    );
                })}
            </Tabs.List>

            {component.tabs.map((tab) => {
                return <TabItemComponent component={component} tab={tab} />;
            })}
        </Tabs.Root>
    );
};

export default TabsList;
