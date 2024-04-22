import React, { useEffect, useMemo, useState } from 'react';

import * as Tabs from '@radix-ui/react-tabs';

import { Component } from 'src/models/component.model';

import TabItemComponent from './tab-item/TabItemComponent';

import styles from './TabsList.css';

type PropType = {
    component: Component;
};

const TabsList = ({ component }: PropType) => {
    const [controlFields, setControlFields] = useState<Component[]>([]);
    const [optionFields, setOptionFields] = useState<Component[]>([]);

    useEffect(() => {
        const controlComponents: Component[] = [];
        const optionComponents: Component[] = [];

        component?.fields?.forEach((field: Component) => {
            if (field.tabId === 'control') {
                controlComponents.push(field);
            } else {
                optionComponents.push(field);
            }
        });

        setControlFields([...controlComponents]);
        setOptionFields([...optionComponents]);
    }, [component]);
    return (
        <Tabs.Root
            defaultValue={component.defaultTabValue}
            orientation="vertical"
            className={styles.TabsRoot}
        >
            <Tabs.List
                className={styles.TabsList}
                aria-label="Manage your account"
            >
                <Tabs.Trigger className={styles.TabsTrigger} value="control">
                    Control
                </Tabs.Trigger>
                <Tabs.Trigger className={styles.TabsTrigger} value="options">
                    Options
                </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="control">
                <TabItemComponent components={controlFields} />
            </Tabs.Content>

            <Tabs.Content value="options">
                <TabItemComponent components={optionFields} />
            </Tabs.Content>
        </Tabs.Root>
    );
};

export default TabsList;
