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
    Box,
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
    TypographyCard,
    VideoCard,
    EmbedCard,
    Title,
    Text,
    Link,
    AudioContextProvider,
    Columns,
    Column,
} from '@canva/app-ui-kit';
import SearchBox from '../CommonComponents/searchBox';
import PillBox from '../CommonComponents/pillBox';
import TwoCardComponent from '../CommonComponents/TwoCardComponent';
import styles from 'styles/components.css';
import Icons from '../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import ExcessContainer from '../CommonComponents/excessContainer';

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
        {
            type: 'twoCardComponent',
            title1: 'Typography Card',
            title2: 'Video Card',
            box1: { type: 'typographyCard', text: '' },
            box2: { type: 'videoCard', text: '' },
        },
        {
            type: 'twoCardComponent',
            title1: 'Embed Card',
            title2: 'Title',
            box1: {
                type: 'embedCard',
                text: '',
                thumbnailUrl: require('../../assets/image/default.png'),
            },
            box2: { type: 'title', text: 'Title' },
        },
        {
            type: 'twoCardComponent',
            title1: 'Text',
            title2: 'Link',
            box1: { type: 'text', text: 'Text' },
            box2: { type: 'link', text: 'Go to Canva' },
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
                    <ExcessContainer dynamic={'300px'}>
                        <Alert tone="positive">{boxConfig.text}</Alert>
                    </ExcessContainer>
                );
            case 'badge':
                return <Badge text={boxConfig.text} tone="assist" />;
            case 'formField':
                return (
                    <ExcessContainer dynamic={'300px'}>
                        <FormField
                            label={boxConfig.text1}
                            description={boxConfig.text2}
                            control={(props) => <TextInput {...props} />}
                        />
                    </ExcessContainer>
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
                    <ExcessContainer dynamic="140px">
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
                    </ExcessContainer>
                );
            case 'slider':
                return (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ width: '80%', paddingLeft: 17 }}>
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
                    <div style={{ padding: 16 }}>
                        <NumberInput defaultValue={0} />
                    </div>
                );
            case 'fileInput':
                return <FileInput />;
            case 'select':
                return (
                    <div
                        style={{
                            position: 'relative',
                            width: 128,
                            height: 128,
                        }}
                    >
                        <Select options={[{ label: 'Option 1', value: '1' }]} />

                        <img
                            src={require('../../assets/image/select.png')}
                            alt="Image 2"
                            style={{
                                position: 'absolute',
                                bottom: -15,
                                right: -25,
                            }}
                        />
                    </div>
                );
            case 'switch':
                return (
                    <div style={{ padding: 16 }}>
                        <Switch defaultValue={true} />
                    </div>
                );
            case 'swatch':
                return (
                    <Swatch
                        fill={['#E0D9FC']}
                        onClick={() => {}}
                        size="small"
                        variant="solid"
                    />
                );
            case 'ColorSelector':
                return (
                    <div
                        style={{
                            position: 'relative',
                            width: 128,
                            height: 128,
                        }}
                    >
                        <Swatch
                            fill={['#E0D9FC']}
                            onClick={() => {}}
                            size="small"
                            variant="solid"
                        />
                        <img
                            src={require('../../assets/image/ColorPicker.png')}
                            alt="Image 2"
                            style={{
                                position: 'absolute',
                                bottom: -15,
                                right: -25,
                            }}
                        />
                    </div>
                );
            case 'loadingIndicator':
                return <LoadingIndicator />;
            case 'placeholder':
                return (
                    <div>
                        {/* First Row */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}
                        >
                            <div
                                style={{
                                    width: '128px',
                                    height: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 20,
                                }}
                            >
                                <Placeholder shape="rectangle" />
                            </div>
                            <div
                                style={{
                                    width: '128px',
                                    height: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 20,
                                }}
                            >
                                <Placeholder shape="rectangle" />
                            </div>
                            <div
                                style={{
                                    width: '90px',
                                    height: '10px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: 20,
                                }}
                            >
                                <Placeholder shape="rectangle" />
                            </div>
                        </div>
                    </div>
                );
            case 'progressBar':
                return (
                    <ExcessContainer dynamic="300px">
                        <ProgressBar size="medium" tone="info" value={50} />
                    </ExcessContainer>
                );
            case 'audioCard':
                return (
                    <div>
                        <AudioContextProvider>
                            <AudioCard
                                ariaLabel="Add audio to design"
                                audioPreviewUrl={''}
                                durationInSeconds={86}
                                onClick={() => {}}
                                onDragStart={() => {}}
                                title="Card title"
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
                            borderRadius="standard"
                            onClick={() => {}}
                            onDragStart={() => {}}
                            thumbnailUrl={require('../../assets/image/default.png')}
                        />
                    </div>
                );
            case 'typographyCard':
                return (
                    <ExcessContainer dynamic="300px">
                        <TypographyCard>
                            <Text lineClamp={1}>
                                The quick brown fox jumps over the lazy dog. The
                                quick brown fox jumps over the lazy dog.
                            </Text>
                        </TypographyCard>
                    </ExcessContainer>
                );
            case 'videoCard':
                return (
                    <div className={styles.videoCard}>
                        <VideoCard
                            ariaLabel="Add video to design"
                            borderRadius="standard"
                            durationInSeconds={8}
                            mimeType="video/mp4"
                            onClick={() => {}}
                            onDragStart={() => {}}
                            thumbnailUrl={require('../../assets/image/default.png')}
                        />
                    </div>
                );
            case 'embedCard':
                return (
                    <EmbedCard
                        ariaLabel="Add embed to design"
                        description="Puppyhood"
                        onClick={() => {}}
                        onDragStart={() => {}}
                        thumbnailUrl={boxConfig.thumbnailUrl}
                        title="Heartwarming Chatter: Adorable Conversation with a puppy"
                    />
                );
            case 'title':
                return <Title>{boxConfig.text}</Title>;
            case 'text':
                return <Text>{boxConfig.text}</Text>;
            case 'link':
                return (
                    <Text size="large">
                        <Link
                            href="https://www.canva.com"
                            id="id"
                            requestOpenExternalUrl={() => {}}
                            title="Canva"
                        >
                            Go to Canva
                        </Link>
                    </Text>
                );
            default:
                return null;
        }
    };

    return <Rows spacing="2u">{renderComponents()}</Rows>;
}
