import React from 'react';
import { AudioCard, AudioContextProvider } from '@canva/app-ui-kit';

const AudioCardComponent = () => {
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
};

export default AudioCardComponent;
