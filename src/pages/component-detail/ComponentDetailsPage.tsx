import React, { useCallback, useEffect, useRef, useState } from 'react';

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
        appElementClient.registerOnElementChange((appElement) => {
            if (!appElement && !initialLoad.current) {
                navigate('/home');
            } else {
                onAddComponent();
            }
            initialLoad.current = false;
        });
    }, []);

    const onAddComponent = useCallback(async () => {
        if (ref.current === null) {
            return;
        }
        const svgDocument = elementToSVG(ref.current);

        await inlineResources(svgDocument.documentElement);

        const svgString = new XMLSerializer().serializeToString(svgDocument);

        var decoded = unescape(encodeURIComponent(svgString));

        decoded = decoded.replace(
            /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
            ''
        );

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
