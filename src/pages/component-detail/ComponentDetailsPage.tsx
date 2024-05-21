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
import { upload } from '@canva/asset';

type AppElementData = {
    elementId: string;
};

const images = {};

const appElementClient = initAppElement<AppElementData>({
    render: (data) => {
        return [
            {
                type: 'IMAGE',
                width: 'auto',
                height: 100,
                top: 0,
                left: 0,
                ref: images[data.elementId],
                ...data,
            },
        ];
    },
});
type RefValueType = string | null;
type ElementListType = any;

const ComponentDetailsPage = () => {
    const navigate = useNavigate();
    const { selectedComponent, setSelectedComponent } = useComponentStore();
    const { elements, setElements } = useElementStore();
    const initialLoad = useRef(true);
    const elementId = useRef<RefValueType>(null);
    const updatedElementList = useRef<ElementListType>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        elementId.current = null;
        appElementClient.registerOnElementChange((appElement) => {
            elementId.current = appElement?.data?.elementId as string;
            if (!appElement && !initialLoad.current) {
                navigate('/home');
            } else if (appElement && !initialLoad.current) {
                elementId.current = appElement.data.elementId;
                assignDetails(appElement);
            } else if (!appElement) {
                onAddComponent();
            }
            initialLoad.current = false;
        });
    }, []);

    async function assignDetails(appElement) {
        let elementId = appElement.data.elementId;
        let imageId = appElement.data.imageId;
        let element = elements?.find(
            (obj) => obj.elementId === appElement.data.elementId
        );

        if (element?.component) {
            setSelectedComponent(element?.component);
        }
        navigate(`/component-details`);
    }

    const onAddComponent = useCallback(async () => {
        let selectedElementId = elementId?.current?.toString();
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

        let element3 = document.getElementById('imageHTML');
        if (element3)
            element3.innerHTML = `<img src=${imgSource} alt="Description of image">`;
        let elementIdNew = getElementId();
        if (selectedComponent) {
            let updatedItems = elements;
            if (selectedElementId) {
                updatedItems = elements.filter(
                    (element) =>
                        element?.elementId.toString() !== selectedElementId
                );
            }
            let updatedElements = [
                ...updatedItems,
                {
                    elementId: elementIdNew,
                    component: selectedComponent,
                },
            ];
            updatedElementList.current = updatedElements;
            await setElements(updatedElements);
        }

        const result = await upload({
            id: elementIdNew,
            type: 'IMAGE',
            mimeType: 'image/svg+xml',
            url: imgSource,
            thumbnailUrl: imgSource,
        });
        images[elementIdNew] = result.ref;
        await appElementClient.addOrUpdateElement({
            elementId: elementIdNew,
        });
    }, [ref]);

    function getElementId() {
        const timestamp = new Date().getTime().toString(16);
        const random = Math.random().toString(16).slice(2);
        if (elementId.current) delete images[elementId.current];
        return timestamp + random;
    }

    function getScale(component) {
        let scale = 1;
        let width = 0;
        let max = 0;
        let widthParam = component?.fields.filter(
            (field) => field.name === 'Width'
        )[0];
        if (widthParam) {
            width = widthParam.value;
            max = widthParam.max;
        }
        if (width > max) {
            scale = 300 / max;
        } else if (width > 308) {
            scale = 300 / width;
        }
        return scale.toString();
    }

    return (
        <>
            {selectedComponent && (
                <>
                    <div className={styles.componenDetailPage}>
                        <LivePreview>
                            <div
                                ref={ref}
                                style={{
                                    pointerEvents: 'none',
                                    scale: getScale(selectedComponent),
                                }}
                            >
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
                    <p>Live preview html</p>
                    <div id="innerHTML"></div>{' '}
                    <p>base64 image after DOMtoSVG conversion</p>
                    <div id="imageHTML"></div>
                </>
            )}
        </>
    );
};

export default ComponentDetailsPage;
