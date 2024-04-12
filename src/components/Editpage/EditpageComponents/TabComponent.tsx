import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styles from 'styles/components.css';
import DimensionSelector from './DimensionSelector';
import CommonSelectInput from './CommonSelectinput';
import SegmentedControls from './SegmentedControls';
import { Switch } from '@canva/app-ui-kit';
import CommonTextInput from './CommontextInput';
import FileInputViewer from './FileInputViewer';

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
                <div className={styles.Tabcontentholder}>
                    <SegmentedControls />
                    <CommonTextInput />
                    <FileInputViewer />
                </div>
            </Tabs.Content>
            <Tabs.Content className={styles.TabsContent} value="tab2">
                <div className={styles.Tabcontentholder}>
                    <CommonSelectInput />
                    <Switch label="Hug content" />
                    <DimensionSelector />
                </div>
            </Tabs.Content>
        </Tabs.Root>
    );
}
