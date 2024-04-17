import React from 'react';
import { VideoCard } from '@canva/app-ui-kit';

import styles from './VideoCard.css';

const VideoCardComponent = () => {
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
};

export default VideoCardComponent;
