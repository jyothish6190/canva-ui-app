import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styles from 'styles/components.css';
import DimensionSelector from './DimensionSelector';
import CommonSelectInput from './CommonSelectinput';

export default function TabComponent() {
    return (
        <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
            <Tabs.List className={styles.TabsList}>
                <Tabs.Trigger className={styles.TabsTrigger} value="tab1">
                    Tab 1
                </Tabs.Trigger>
                <Tabs.Trigger className={styles.TabsTrigger} value="tab2">
                    Tab 2
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className={styles.TabsContent} value="tab1">
                <p>Tab1 value</p>
            </Tabs.Content>
            <Tabs.Content className={styles.TabsContent} value="tab2">
                <div className={styles.Tabcontentholder}>
                    <CommonSelectInput />
                    <DimensionSelector />
                </div>
            </Tabs.Content>
        </Tabs.Root>
    );
}
