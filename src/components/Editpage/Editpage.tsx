import React from 'react';
import { Button, Switch } from '@canva/app-ui-kit';
import styles from 'styles/components.css';
import LivePreview from './EditpageComponents/Livepreview';
import SegmentedControls from './EditpageComponents/SegmentedControls';
import CommonTextInput from './EditpageComponents/CommontextInput';
import CommonSelectInput from './EditpageComponents/CommonSelectinput';
import DimensionSelector from './EditpageComponents/DimensionSelector';

export default function EditPage() {
    return (
        <div className={styles.EditpageMainContainer}>
            <LivePreview />
            <SegmentedControls />
            <CommonTextInput />
            <CommonSelectInput />
            <Switch label="Hug content" />
            <DimensionSelector />
            <Button
                stretch={true}
                variant="primary"
                children="Update Componet"
            />
        </div>
    );
}
