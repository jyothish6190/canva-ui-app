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
} from '@canva/app-ui-kit';
import SearchBox from '../CommonComponents/searchBox';
import PillBox from '../CommonComponents/pillBox';
import TwoCardComponent from '../CommonComponents/TwoCardComponent';
import styles from 'styles/components.css';
import Icons from '../../components/Icons/Icons';

export default function MainPage() {
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
            box1: { type: 'pill', text: 'pill' },
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
                        onClick={() => {}}
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
            case 'textInput':
                return (
                    <div className={styles.textInputContainer}>
                        <TextInput placeholder={boxConfig.text} type={'text'} />
                    </div>
                );
            case 'multiLineInput':
                return (
                    <div className={styles.multiLineInnerContainer}>
                        <MultilineInput placeholder={boxConfig.text} autoGrow />
                    </div>
                );
            case 'segmentedControl':
                return (
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
                );

            default:
                return null;
        }
    };

    return <Rows spacing="2u">{renderComponents()}</Rows>;
}
``;
