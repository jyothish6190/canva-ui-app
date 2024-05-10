import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Rows } from '@canva/app-ui-kit';
import { elementToSVG, inlineResources } from 'dom-to-svg';
import { initAppElement } from '@canva/design';

import styles from './ComponentDetailsPage.css';
import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';
import { useElementStore } from 'src/store/elementStore';
import { useLocation, useNavigate } from 'react-router-dom';

type UIData = {
    imgSource: string;
    elementId: string;
};
const appElementClient = initAppElement<UIData>({
    render: ({ imgSource, elementId }) => {
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
type RefValueType = string | null;
const ComponentDetailsPage = () => {
    const navigate = useNavigate();
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const { elements, setElements } = useElementStore();
    const initialLoad = useRef(true);
    const elementId = useRef<RefValueType>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        elementId.current = null;
        appElementClient.registerOnElementChange((appElement) => {
            if (!appElement && !initialLoad.current) {
                navigate('/home');
            } else if (appElement) {
                elementId.current = appElement.data.elementId;
                assignDetails(appElement);
            } else {
                onAddComponent();
            }
            initialLoad.current = false;
        });
    }, []);

    async function assignDetails(appElement) {
        let elementId = appElement.data.elementId;
        let imgSource = appElement.data.imgSource;

        let element = elements.find(
            (obj) => obj.elementId === appElement.data.elementId
        );

        if (element?.component) {
            setSelectedComponent(element?.component);
        }
        await appElementClient.addOrUpdateElement({
            imgSource,
            elementId,
        });
        navigate(`/component-details`);
    }

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
        let elementId = getElementId();
        if (selectedComponent) {
            let updatedElements = [
                ...elements,
                {
                    elementId: elementId,
                    component: selectedComponent,
                },
            ];
            setElements(updatedElements);
        }
        await appElementClient.addOrUpdateElement({
            imgSource,
            elementId,
        });
    }, [ref]);

    function getElementId() {
        const timestamp = new Date().getTime().toString(16);
        const random = Math.random().toString(16).slice(2);
        return elementId.current ? elementId.current : timestamp + random;
    }

    return (
        <>
            {selectedComponent && (
                <div className={styles.componenDetailPage}>
                    <LivePreview>
                        <div ref={ref} style={{ pointerEvents: 'none' }}>
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
                </div>
            )}
        </>
    );
};

export default ComponentDetailsPage;
