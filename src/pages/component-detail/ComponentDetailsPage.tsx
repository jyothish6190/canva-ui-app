import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Rows } from '@canva/app-ui-kit';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { Component } from 'src/models/coponent.model';

const ComponentDetailsPage = () => {
    const location = useLocation();

    const component: Component = location.state;

    return (
        <Rows spacing="2u">
            <LivePreview>
                <ComponentItem component={component} isProperty={true} />
            </LivePreview>
            <PropertyList component={component} />
            <Button
                stretch={true}
                variant="primary"
                children="Update Component"
                onClick={() => {}}
            />
        </Rows>
    );
};

export default ComponentDetailsPage;
