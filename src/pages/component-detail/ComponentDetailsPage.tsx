import React, { useCallback, useEffect, useRef, useState } from 'react';

import { addNativeElement } from '@canva/design';
import { upload } from '@canva/asset';
import { Button, Rows } from '@canva/app-ui-kit';
import { elementToSVG, inlineResources } from 'dom-to-svg';
import { initAppElement } from '@canva/design';

import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';
import { useNavigate } from 'react-router-dom';

type UIData = {
    imgSource: string;
};
const appElementClient = initAppElement<UIData>({
    render: ({ imgSource }) => {
        return [
            {
                type: 'IMAGE',
                dataUrl: imgSource,
                width: 'auto',
                height: 100,
                top: 0,
                left: 0,
            },
        ];
    },
});

const ComponentDetailsPage = () => {
    const navigate = useNavigate();
    const { selectedComponent } = useComponentStore();
    const initialLoad = useRef(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        onAddComponent();
        appElementClient.registerOnElementChange((appElement) => {
            if (!appElement && !initialLoad.current) navigate('/home');
            initialLoad.current = false;
        });
    }, []);

    const onAddComponent = useCallback(async () => {
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

        // Remove style tag if any as it is not supported in canva
        decoded = decoded.replace('<style/>', '');
        // Now we can use btoa to convert the svg to base64

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        await appElementClient.addOrUpdateElement({ imgSource });
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
                        onClick={onAddComponent}
                    />
                </Rows>
            )}
        </>
    );
};

export default ComponentDetailsPage;
