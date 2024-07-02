import React, { useEffect, useState } from 'react';
import { EmbedCard } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import ExcessContainer from '../CommonComponents/excessContainer';
import { EmbedFieldNames } from 'src/constants/component-configs/EmbedConfig';
import thumbnailImage from '../../../assets/images/embed-card.png';
import styles from './EmbedCardComponet.css';

type EmbedPropType = {
    component: Component;
    isProperty: boolean;
};

type EmbedStatedata = {
    embedTitle: string;
    embedDescription: string;
    embedWidth: string;
};

const initialState: EmbedStatedata = {
    embedTitle: 'Heartwarming Chatter: Adorable Conversation with a puppy',
    embedDescription: 'Puppyhood',
    embedWidth: '296 px',
};

const EmbedCardComponent = ({ component, isProperty }: EmbedPropType) => {
    const [embedState, setEmbedState] = useState<EmbedStatedata>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === EmbedFieldNames.TITLE) {
                setEmbedState((prevState) => {
                    return {
                        ...prevState,
                        embedTitle:
                            field.value ||
                            'Heartwarming Chatter: Adorable Conversation with a puppy',
                    };
                });
            }
            if (field.name === EmbedFieldNames.DESCRIPTION) {
                setEmbedState((prevState) => {
                    return {
                        ...prevState,
                        embedDescription: field.value || 'Puppyhood',
                    };
                });
            }
            if (field.name === EmbedFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setEmbedState((prevState) => {
                            return {
                                ...prevState,
                                embedWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setEmbedState((prevState) => {
                            return {
                                ...prevState,
                                embedWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setEmbedState((prevState) => {
                            return {
                                ...prevState,
                                embedWidth: `${field.value}px`,
                            };
                        });
                    }
                }
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                className={styles['embed-card']}
                style={{ width: embedState.embedWidth }}
            >
                <EmbedCard
                    ariaLabel="Add embed to design"
                    description={embedState.embedDescription}
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={thumbnailImage}
                    title={embedState.embedTitle}
                />
            </div>
        );
    } else {
        return (
            <ExcessContainer dynamic={260}>
                <EmbedCard
                    ariaLabel="Add embed to design"
                    description="Puppyhood"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={component.thumbnailUrl as string}
                    title="Heartwarming Chatter: Adorable Conversation with a puppy"
                />
            </ExcessContainer>
        );
    }
};

export default EmbedCardComponent;
