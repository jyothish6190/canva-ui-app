import React, { useEffect, useRef } from 'react';

import { Button } from '@canva/app-ui-kit';
import { elementToSVG, inlineResources } from 'dom-to-svg';
import { initAppElement } from '@canva/design';
import { upload } from '@canva/asset';
import { useNavigate } from 'react-router-dom';

import styles from './ComponentDetailsPage.css';
import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';

import { useComponentStore } from 'src/store/ComponentStore';
import { Component } from 'src/models/component.model';
import { ComponentType } from 'src/constants/ComponentTypes';

type AppElementData = {
    elementId: string;
};

const images = {};

const appElementClient = initAppElement<any>({
    render: (data) => {
        return [
            {
                ...data,
            },
        ];
    },
});
type RefValueType = string | null;

const ComponentDetailsPage = () => {
    const navigate = useNavigate();
    const { selectedComponent, setSelectedComponent } = useComponentStore();

    const initialLoad = useRef(true);
    const elementId = useRef<RefValueType>(null);
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
                document.getElementById('container')?.scrollTo(0, 0);
                onAddComponent();
            }
            initialLoad.current = false;
        });
    }, []);

    async function assignDetails(appElement) {
        const oldComponent = {
            ...(appElement?.data?.selectedComponent as Component),
        };

        if (oldComponent) {
            setSelectedComponent(oldComponent);
        }
    }

    const onAddComponent = async () => {
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

        let elementIdNew = getElementId();

        let appElementData = {} as any;
        let width = 'auto' as any,
            height = 100 as any;
        let data = { elementId: elementIdNew, selectedComponent };
        selectedComponent?.fields?.map((field) => {
            if (field.type === ComponentType.NUMBER_INPUT) {
                if (field?.name.includes('Width')) {
                    width = Number(field?.value) || 'auto';
                }
                if (field?.name.includes('Height')) {
                    height = Number(field?.value) || 'auto';
                }
            }
        });
        if (
            selectedComponent?.type === ComponentType.IMAGE_CARD ||
            selectedComponent?.type === ComponentType.VIDEO_CARD
        ) {
            const image = await upload({
                type: 'IMAGE',
                mimeType: 'image/jpeg',
                url:
                    (selectedComponent?.previewUrl as string) ||
                    (selectedComponent?.thumbnailUrl as string),
                thumbnailUrl:
                    (selectedComponent.previewUrl as string) ||
                    (selectedComponent?.thumbnailUrl as string),
            });
            appElementData = {
                type: 'IMAGE',
                top: 0,
                left: 0,
                width: width,
                height: height,
                ref: image.ref,
                ...data,
            };
        } else {
            const result = await upload({
                id: elementIdNew,
                type: 'IMAGE',
                mimeType: 'image/svg+xml',
                url: imgSource,
                thumbnailUrl: imgSource,
            });
            images[elementIdNew] = result.ref;

            appElementData = {
                type: 'IMAGE',
                width: 'auto',
                height: 100,
                top: 0,
                left: 0,
                ref: images[elementIdNew],
                ...data,
            };
        }
        await appElementClient.addOrUpdateElement(appElementData);
    };

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
        let widthParam = component?.fields?.filter(
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
                            children="Update component"
                            onClick={onAddComponent}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default ComponentDetailsPage;
