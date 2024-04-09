import React from 'react';
import {
    Rows,
    InfoIcon,
    Pill,
    Alert,
    Button,
    Badge,
    FormField,
    Select,
} from '@canva/app-ui-kit';
import SearchBox from './MainageComponents/searchBox';
import PillBox from './MainageComponents/pillBox';
import TwoCardComponent from './MainageComponents/TwoCardComponent';
import styles from 'styles/components.css';

export default function MainPage() {
    const jsonData = [
        { type: 'searchBox' },
        { type: 'pillBox' },
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
            title2: 'Alert',
            box1: { type: 'badge', text: 'Badge' },
            box2: {
                type: 'FormField',
                text: 'This is an alert. Say something here',
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

            case 'FormField':
                return (
                    <div
                        key={boxConfig.text}
                        className={styles.formFieldContainer}
                    >
                        <FormField
                            label="Form field label"
                            description="Form field description"
                            control={(props) => (
                                <Select
                                    {...props}
                                    options={[
                                        {
                                            value: 'blueberry',
                                            label: 'Blueberry',
                                        },
                                        { value: 'apple', label: 'Apple' },
                                        {
                                            value: 'strawberry',
                                            label: 'Strawberry',
                                        },
                                    ]}
                                />
                            )}
                            style={{ marginLeft: '30px' }}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return <Rows spacing="2u">{renderComponents()}</Rows>;
}
