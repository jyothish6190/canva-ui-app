import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Switch } from '@canva/app-ui-kit';
import styles from 'styles/components.css';
import LivePreview from './EditpageComponents/Livepreview';
import SegmentedControls from './EditpageComponents/SegmentedControls';
import CommonTextInput from './EditpageComponents/CommontextInput';
import CommonSelectInput from './EditpageComponents/CommonSelectinput';
import DimensionSelector from './EditpageComponents/DimensionSelector';
import FileInputViewer from './EditpageComponents/FileInputViewer';
import TabComponent from './EditpageComponents/TabComponent';

export default function EditPage() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const headerName = state?.name || 'Button';
    const onClickBack = () => navigate(-1);
    return (
        <>
            <div className={styles.EditpageMainContainer}>
                <LivePreview />
                <TabComponent />
                <SegmentedControls />
                <CommonTextInput />
                <CommonSelectInput />
                <Switch label="Hug content" />
                <DimensionSelector />
                <FileInputViewer />
                <Button
                    stretch={true}
                    variant="primary"
                    children="Update Component"
                    onClick={onClickBack}
                />
            </div>
        </>
    );
}
