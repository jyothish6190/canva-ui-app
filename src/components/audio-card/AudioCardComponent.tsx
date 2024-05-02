import React, { useEffect, useState } from 'react';

import { AudioCard, AudioContextProvider } from '@canva/app-ui-kit';

import { Component } from 'src/models/component.model';
import { AudioCardFieldNames } from 'src/constants/component-configs/AudioCardConfig';

type AudioCardPropType = {
    component: Component;
    isProperty: boolean;
};

type AudioCardStateData = {
    cardTitle: string;
    audioDuration: number;
    cardState: 'default' | 'hover';
    cardWidth: number;
};

const initialState: AudioCardStateData = {
    cardTitle: 'Card title',
    audioDuration: 86,
    cardState: 'default',
    cardWidth: 296,
};

const AudioCardComponent = ({ component, isProperty }: AudioCardPropType) => {
    const [audioCardState, setAudioCardState] =
        useState<AudioCardStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === AudioCardFieldNames.TITLE) {
                setAudioCardState((prevState) => {
                    return {
                        ...prevState,
                        cardTitle: field.value || 'Card title',
                    };
                });
            }
            if (field.name === AudioCardFieldNames.DURATION) {
                setAudioCardState((prevState) => {
                    return {
                        ...prevState,
                        audioDuration: field.value || 86,
                    };
                });
            }
            if (field.name === AudioCardFieldNames.STATE) {
                setAudioCardState((prevState) => {
                    return {
                        ...prevState,
                        cardState: field.value || 'default',
                    };
                });
            }
            if (field.name === AudioCardFieldNames.WIDTH) {
                setAudioCardState((prevState) => {
                    return {
                        ...prevState,
                        cardWidth: field.value || 296,
                    };
                });
            }
        });
    }, [component]);
    if (isProperty) {
        return (
            <div style={{ width: audioCardState.cardWidth + 'px' }}>
                <AudioContextProvider>
                    <AudioCard
                        ariaLabel="Add audio to design"
                        audioPreviewUrl={''}
                        durationInSeconds={audioCardState.audioDuration}
                        onClick={() => {}}
                        onDragStart={() => {}}
                        title={audioCardState.cardTitle}
                    />
                </AudioContextProvider>
            </div>
        );
    } else {
        return (
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
        );
    }
};

export default AudioCardComponent;
