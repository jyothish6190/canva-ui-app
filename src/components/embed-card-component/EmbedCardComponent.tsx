import React from 'react';
import { EmbedCard } from '@canva/app-ui-kit';
import { Component } from 'src/models/coponent.model';

const EmbedCardComponent = ({ component }: { component: Component }) => {
    return (
        <EmbedCard
            ariaLabel="Add embed to design"
            description="Puppyhood"
            onClick={() => {}}
            onDragStart={() => {}}
            thumbnailUrl={component.thumbnailUrl as string}
            title="Heartwarming Chatter: Adorable Conversation with a puppy"
        />
    );
};

export default EmbedCardComponent;
