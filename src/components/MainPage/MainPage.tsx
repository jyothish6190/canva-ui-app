import React from 'react';
import {
    Rows,
    InfoIcon,
    Pill,
    Alert,
    Button,
    Badge,
    FormField,
    TextInput,
    Checkbox,
    RadioGroup,
    CheckboxGroup,
    MultilineInput,
    SegmentedControl,
    Slider,
    NumberInput,
    FileInput,
    Select,
    Switch,
    Swatch,
    ColorSelector,
    LoadingIndicator,
    Placeholder,
    ProgressBar,
    AudioCard,
    ImageCard,
    AudioContextProvider,
} from '@canva/app-ui-kit';
import SearchBox from '../CommonComponents/searchBox';
import PillBox from '../CommonComponents/pillBox';
import TwoCardComponent from '../CommonComponents/TwoCardComponent';
import styles from 'styles/components.css';
import Icons from '../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate();
    const jsonData = [
        { type: 'searchBox' },
        { type: 'pillBox' },
        { type: 'icons' },
        {
            type: 'twoCardComponent',
            title1: 'Button',
            title2: 'Icon Button',
            box1: { type: 'button', text: 'Button' },
            box2: { type: 'iconButton', text: 'Icon Button' },
        },
        {
            type: 'twoCardComponent',
            title1: 'Pill',
            title2: 'Alert',
            box1: { type: 'pill', text: 'Pill' },
            box2: {
                type: 'alert',
                text: 'This is an alert. Say something here',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Badge',
            title2: 'Form Field',
            box1: { type: 'badge', text: 'Badge' },
            box2: {
                type: 'formField',
                text1: 'Label',
                text2: 'Description text',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Checkbox',
            title2: 'CheckboxGroup',
            box1: { type: 'checkbox', text: 'Radiogroup' },
            box2: {
                type: 'checkboxGroup',
                text: 'CheckboxGroup',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Radiogroup',
            title2: 'TextInput',
            box1: { type: 'radiogroup', text: 'Radiogroup' },
            box2: {
                type: 'textInput',
                text: 'Placeholder',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'MultilineInput',
            title2: 'Segmented Control',
            box1: { type: 'multiLineInput', text: 'Placeholder' },
            box2: {
                type: 'segmentedControl',
                text1: 'S',
                text2: 'M',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Slider',
            title2: 'NumberInput',
            box1: { type: 'slider', text: '' },
            box2: {
                type: 'numberInput',
                text: '',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'FileInput',
            title2: 'Select',
            box1: { type: 'fileInput', text: '' },
            box2: {
                type: 'select',
                text: '',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Switch',
            title2: 'Swatch',
            box1: { type: 'switch', text: '' },
            box2: {
                type: 'swatch',
                text: '',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'ColorSelector',
            title2: 'LoadingIndicator',
            box1: { type: 'ColorSelector', text: '' },
            box2: {
                type: 'loadingIndicator',
                text: '',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'Placeholder',
            title2: 'ProgressBar',
            box1: { type: 'placeholder', text: '' },
            box2: {
                type: 'progressBar',
                text: '',
            },
        },
        {
            type: 'twoCardComponent',
            title1: 'AudioCard',
            title2: 'ImageCard',
            box1: { type: 'audioCard', text: '' },
            box2: {
                type: 'imageCard',
                text: '',
            },
        },
    ];

    const renderComponents = () => {
        return jsonData.map((item, index) => {
            switch (item.type) {
                case 'searchBox':
                    return <SearchBox key={index} />;
                case 'pillBox':
                    return <PillBox key={index} />;
                case 'icons':
                    return <Icons key={index} />;
                case 'twoCardComponent':
                    return (
                        <TwoCardComponent
                            key={index}
                            title1={item.title1}
                            title2={item.title2}
                            box1={renderBox(item.box1)}
                            box2={renderBox(item.box2)}
                        />
                    );

                default:
                    return null;
            }
        });
    };

    const renderBox = (boxConfig) => {
        switch (boxConfig.type) {
            case 'button':
                return (
                    <Button
                        key={boxConfig.text}
                        alignment="center"
                        onClick={() => {
                            navigate(`/edit`, {
                                state: {
                                    id: '',
                                    type: '',
                                },
                            });
                        }}
                        variant="primary"
                    >
                        {boxConfig.text}
                    </Button>
                );
            case 'iconButton':
                return (
                    <div className={styles.iconContainer} key={boxConfig.text}>
                        <InfoIcon />
                    </div>
                );
            case 'pill':
                return <Pill key={boxConfig.text} text={boxConfig.text} />;
            case 'alert':
                return (
                    <div key={boxConfig.text} className={styles.alertContainer}>
                        <div className={styles.alertInnerContainer}>
                            <Alert tone="positive">{boxConfig.text}</Alert>
                        </div>
                    </div>
                );
            case 'badge':
                return <Badge text={boxConfig.text} tone="assist" />;
            case 'formField':
                return (
                    <div className={styles.formFieldMainContainer}>
                        <div
                            key={boxConfig.text}
                            className={styles.formFieldContainer}
                        >
                            <FormField
                                label={boxConfig.text1}
                                description={boxConfig.text2}
                                control={(props) => <TextInput {...props} />}
                            />
                        </div>
                    </div>
                );
            case 'checkbox':
                return <Checkbox label={boxConfig.text} checked />;
            case 'radiogroup':
                return (
                    <RadioGroup
                        defaultValue={'blueberry'}
                        options={[
                            {
                                label: 'Blueberry',
                                value: 'blueberry',
                            },
                            {
                                label: 'Apple',
                                value: 'apple',
                            },
                            {
                                label: 'Strawberry',
                                value: 'strawberry',
                            },
                        ]}
                    />
                );
            case 'checkboxGroup':
                return (
                    <CheckboxGroup
                        defaultValue={['blueberry']}
                        options={[
                            {
                                label: 'Blueberry',
                                value: 'blueberry',
                            },
                            {
                                label: 'Apple',
                                value: 'apple',
                            },
                            {
                                label: 'Strawberry',
                                value: 'strawberry',
                            },
                        ]}
                    />
                );
            case 'textInput':
                return (
                    <div className={styles.textInputContainer}>
                        <TextInput placeholder={boxConfig.text} type={'text'} />
                    </div>
                );
            case 'multiLineInput':
                return (
                    <div className={styles.multiLineContainer}>
                        <div className={styles.multiLineInnerContainer}>
                            <MultilineInput
                                placeholder={boxConfig.text}
                                autoGrow
                            />
                        </div>
                    </div>
                );
            case 'segmentedControl':
                return (
                    <div
                        style={{
                            width: 165,
                            marginLeft: 20,
                            overflow: 'hidden',
                        }}
                    >
                        <SegmentedControl
                            options={[
                                {
                                    label: 'S',
                                    value: 's',
                                },
                                {
                                    label: 'M',
                                    value: 'm',
                                },
                            ]}
                            defaultValue="s"
                        />
                    </div>
                );
            case 'slider':
                return (
                    <div style={{ width: 128 }}>
                        <div style={{ width: '100%' }}>
                            <Slider
                                defaultValue={0}
                                max={100}
                                min={0}
                                step={1}
                            />
                        </div>
                    </div>
                );
            case 'numberInput':
                return (
                    <div style={{ width: 128 }}>
                        <div style={{ width: '100%' }}>
                            <NumberInput defaultValue={0} />
                        </div>
                    </div>
                );
            case 'fileInput':
                return (
                    <div style={{ width: 128 }}>
                        <FileInput />
                    </div>
                );
            case 'select':
                return (
                    <div style={{ width: 128 }}>
                        <Select options={[{ label: 'Option 1', value: '1' }]} />
                    </div>
                );
            case 'switch':
                return (
                    <div style={{ width: 128 }}>
                        <Switch />
                    </div>
                );
            case 'swatch':
                return (
                    <div style={{ width: 128 }}>
                        <Swatch color="#FF0000" />
                    </div>
                );
            case 'ColorSelector':
                return <ColorSelector color="#143F6B" onChange={() => {}} />;
            case 'loadingIndicator':
                return <LoadingIndicator />;
            case 'placeholder':
                return (
                    <div
                        style={{
                            height: '120px',
                            width: '100px',
                        }}
                    >
                        <Placeholder shape="rectangle" />
                    </div>
                );
            case 'progressBar':
                return <ProgressBar size="medium" tone="info" value={50} />;
            case 'audioCard':
                return (
                    <div style={{ width: 128 }}>
                        <AudioContextProvider>
                            <AudioCard
                                ariaLabel="Add audio to design"
                                audioPreviewUrl="https://www.canva.dev/example-assets/audio-import/audio.mp3"
                                durationInSeconds={86}
                                onClick={() => {}}
                                onDragStart={() => {}}
                                title="Some audio track"
                            />
                        </AudioContextProvider>
                    </div>
                );
            case 'imageCard':
                return (
                    <div className={styles.imageCard}>
                        <ImageCard
                            alt="grass image"
                            ariaLabel="Add image to design"
                            borderRadius="none"
                            onClick={() => {}}
                            onDragStart={() => {}}
                            thumbnailUrl="https://www.canva.dev/example-assets/image-import/grass-image-thumbnail.jpg"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return <Rows spacing="2u">{renderComponents()}</Rows>;
}
