import React from 'react';
import { ImageCard } from '@canva/app-ui-kit';

import styles from './ImageCard.css';

const ImageCardComponent = () => {
    return (
        <div className={styles.container}>
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
};

export default ImageCardComponent;
