import React, { useCallback, useRef } from 'react';

import { addNativeElement } from '@canva/design';
import { upload } from '@canva/asset';
import { Button, Rows } from '@canva/app-ui-kit';
import { elementToSVG, inlineResources } from 'dom-to-svg';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';

const ComponentDetailsPage = () => {
    const { selectedComponent } = useComponentStore();

    const ref = useRef<HTMLDivElement>(null);

    const onButtonClick = useCallback(async () => {
        if (ref.current === null) {
            return;
        }
        const svgDocument = elementToSVG(ref.current);

        // Inline external resources (fonts, images, etc) as data: URIs
        await inlineResources(svgDocument.documentElement);

        // Get SVG string
        const svgString = new XMLSerializer().serializeToString(svgDocument);

        // Remove any characters outside the Latin1 range
        var decoded = unescape(encodeURIComponent(svgString));

        // Now we can use btoa to convert the svg to base64
        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        const result = await upload({
            id: 'sajhdgjadgd',
            type: 'IMAGE',
            mimeType: 'image/svg+xml',
            url: imgSource,
            thumbnailUrl: imgSource,
        });
        console.log('🚀 ~ onButtonClick ~ result:', result);

        const res = await addNativeElement({
            type: 'IMAGE',
            ref: result.ref,
        });

        console.log('🚀 ~ onButtonClick ~ res:', res);
    }, [ref]);

    return (
        <>
            {selectedComponent && (
                <Rows spacing="2u">
                    <LivePreview>
                        <div ref={ref}>
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
                        onClick={onButtonClick}
                    />
                </Rows>
            )}
        </>
    );
};

export default ComponentDetailsPage;
