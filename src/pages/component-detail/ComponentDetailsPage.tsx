import React from 'react';
import { Button, Rows } from '@canva/app-ui-kit';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';

const ComponentDetailsPage = () => {
    const { selectedComponent } = useComponentStore();

    return (
        <>
            {selectedComponent && (
                <Rows spacing="2u">
                    <LivePreview>
                        <ComponentItem
                            component={selectedComponent}
                            isProperty={true}
                        />
                    </LivePreview>
                    <PropertyList component={selectedComponent} />
                    <Button
                        stretch={true}
                        variant="primary"
                        children="Update Component"
                        onClick={() => {}}
                    />
                </Rows>
            )}
        </>
    );
};

export default ComponentDetailsPage;
