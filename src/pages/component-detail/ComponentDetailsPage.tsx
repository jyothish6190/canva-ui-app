import React, { useRef } from 'react';

import { addNativeElement } from '@canva/design';
import { upload } from '@canva/asset';
import { Button, Rows } from '@canva/app-ui-kit';
import html2canvas from 'html2canvas';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';

const ComponentDetailsPage = () => {
    const { selectedComponent } = useComponentStore();

    const updateComponentHandler = async () => {
        const element = document.getElementById('live-preview'),
            canvas = await html2canvas(element as HTMLElement),
            data = canvas.toDataURL('image/jpeg');

        const result = await upload({
            type: 'IMAGE',
            mimeType: 'image/jpeg',
            url: data,
            thumbnailUrl: data,
        });
        console.log('🚀 ~ updateComponentHandler ~ result:', result);

        await addNativeElement({
            type: 'IMAGE',
            ref: result.ref,
        });
    };

    return (
        <>
            {selectedComponent && (
                <Rows spacing="2u">
                    <LivePreview>
                        <div id="live-preview">
                            <ComponentItem
                                component={selectedComponent}
                                isProperty={true}
                            />
                        </div>
                    </LivePreview>
                    <PropertyList component={selectedComponent} />
                    <Button
                        stretch={true}
                        variant="primary"
                        children="Update Component"
                        onClick={updateComponentHandler}
                    />
                </Rows>
            )}
        </>
    );
};

export default ComponentDetailsPage;
