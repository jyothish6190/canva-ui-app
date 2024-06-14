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
    cardHeight: string;
    cardWidth: string;
    cardBorder: 'none' | 'standard';
};

const initialState: videoCardStateData = {
    videoDuration: 8,
    cardHeight: '168 px',
    cardWidth: '296 px',
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
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.min}px`,
                            };
                        });
                    } else {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardHeight: `${field.value}px`,
                            };
                        });
                    }
                }
            }
            if (field.name === VideoFieldNames.WIDTH) {
                if (field.max !== undefined && field.min !== undefined) {
                    if ((field.value as any) > field.max) {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.max}px`,
                            };
                        });
                    } else if ((field.value as any) < field.min) {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.min}px`,
                            };
                        });
                    } else {
                        setVideoCardState((prevState) => {
                            return {
                                ...prevState,
                                cardWidth: `${field.value}px`,
                            };
                        });
                    }
                }
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
                    width: videoCardState.cardWidth,
                    height: videoCardState.cardHeight,
                }}
            >
                <VideoCard
                    ariaLabel="Add video to design"
                    borderRadius={videoCardState.cardBorder}
                    durationInSeconds={videoCardState.videoDuration}
                    mimeType="video/mp4"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl={require('assets/images/video-card.jpg')}
                    videoPreviewUrl={require('assets/images/video-card.jpg')}
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
                    thumbnailUrl={require('assets/images/video-card.jpg')}
                    videoPreviewUrl={require('assets/images/video-card.jpg')}
                />
            </div>
        );
    }
};

export default VideoCardComponent;
