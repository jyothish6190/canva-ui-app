import React, { useEffect, useState } from 'react';
import { EmbedCard } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';
import ExcessContainer from '../CommonComponents/excessContainer';
import { EmbedFieldNames } from 'src/constants/component-configs/EmbedConfig';

type EmbedPropType = {
    component: Component;
    isProperty: boolean;
};

type EmbedStatedata = {
    embedTitle: string;
    embedDescription: string;
    embedWidth: number;
};

const initialState: EmbedStatedata = {
    embedTitle: 'Heartwarming Chatter: Adorable Conversation with a puppy',
    embedDescription: 'Puppyhood',
    embedWidth: 296,
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
                setEmbedState((prevState) => {
                    return {
                        ...prevState,
                        embedWidth: field.value || 296,
                    };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div style={{ width: embedState.embedWidth + 'px' }}>
                <EmbedCard
                    ariaLabel="Add embed to design"
                    description={embedState.embedDescription}
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={component.thumbnailUrl as string}
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
