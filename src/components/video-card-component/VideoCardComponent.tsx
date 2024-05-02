import React, { useEffect, useState } from 'react';
import { VideoCard } from '@canva/app-ui-kit';

import styles from './VideoCard.css';
import { Component } from 'src/models/component.model';
import { VideoFieldNames } from 'src/constants/component-configs/VideoCardConfig';

type videoCardProp = {
    component: Component;
    isProperty: boolean;
};

type videoCardStateData = {
    videoDuration: number;
    cardHeight: number;
    cardWidth: number;
    cardBorder: 'none' | 'standard';
};

const initialState: videoCardStateData = {
    videoDuration: 8,
    cardHeight: 168,
    cardWidth: 296,
    cardBorder: 'none',
};

const VideoCardComponent = ({ component, isProperty }: videoCardProp) => {
    const [videoCardState, setVideoCardState] =
        useState<videoCardStateData>(initialState);

    useEffect(() => {
        component.fields?.forEach((field: Component) => {
            if (field.name === VideoFieldNames.DURATION) {
                setVideoCardState((prevState) => {
                    return { ...prevState, videoDuration: field.value || 8 };
                });
            }
            if (field.name === VideoFieldNames.HEIGHT) {
                setVideoCardState((prevState) => {
                    return { ...prevState, cardHeight: field.value || 160 };
                });
            }
            if (field.name === VideoFieldNames.WIDTH) {
                setVideoCardState((prevState) => {
                    return { ...prevState, cardWidth: field.value || 325 };
                });
            }
            if (field.name === VideoFieldNames.ROUNDED_CORNER) {
                setVideoCardState((prevState) => {
                    return { ...prevState, cardBorder: field.value || 'none' };
                });
            }
        });
    }, [component]);

    if (isProperty) {
        return (
            <div
                style={{
                    width: videoCardState.cardWidth + 'px',
                    height: videoCardState.cardHeight + 'px',
                }}
            >
                <VideoCard
                    ariaLabel="Add video to design"
                    borderRadius={videoCardState.cardBorder}
                    durationInSeconds={videoCardState.videoDuration}
                    mimeType="video/mp4"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={require('assets/images/default.png')}
                    videoPreviewUrl={require('assets/images/default.png')}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <VideoCard
                    ariaLabel="Add video to design"
                    borderRadius="standard"
                    durationInSeconds={8}
                    mimeType="video/mp4"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={require('assets/images/default.png')}
                    videoPreviewUrl={require('assets/images/default.png')}
                />
            </div>
        );
    }
};

export default VideoCardComponent;
