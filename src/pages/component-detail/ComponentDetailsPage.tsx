import React, { useEffect, useRef, useState } from 'react';

import { Button } from '@canva/app-ui-kit';
import { elementToSVG, inlineResources } from 'dom-to-svg';
import { initAppElement } from '@canva/design';
import { upload } from '@canva/asset';
import { useNavigate } from 'react-router-dom';

import styles from './ComponentDetailsPage.css';
import sliderStyle from './../../components/slider/SliderComponent.css';
import LivePreview from 'src/pages/component-detail/live-preview/LivePreview';
import ComponentItem from '../home/component-list/component-item/ComponentItem';
import PropertyList from './property-list/PropertyList';
import { getScale, removeDuplicateIds } from './ComponentDetailsPageUtils';

import { useComponentStore } from 'src/store/ComponentStore';
import { ComponentType } from 'src/constants/ComponentTypes';
import Session from 'svg-text-to-path';
import { ColorPickertoBase64 } from 'src/components/color-selector/ColorSelectorUtils';
import { FormControlNames } from 'src/components/form-field-component/FormFieldConfig';
import { useIconStore } from 'src/store/IconStore';

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
    const {
        selectedComponent,
        setSelectedComponent,
        setUpdateComponentTrigger,
    } = useComponentStore();
    const { clearIcons } = useIconStore();

    const [onUpdate, setOnUpdate] = useState(false);

    const [imageUrl, setImageUrl] = useState();
    const [scale, setScale] = useState('1');

    const initialLoad = useRef(true);
    const updateTrigger = useRef(true);
    const elementId = useRef<RefValueType>(null);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        elementId.current = null;
        appElementClient.registerOnElementChange((appElement) => {
            elementId.current = appElement?.data?.elementId as string;
            if (!appElement && !initialLoad.current) {
                navigate('/home');
            } else if (appElement && !initialLoad.current) {
                clearIcons();
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
            ...appElement.data.selectedComponent,
        };
        console.log(
            '🚀 ~ assignDetails ~ oldComponent:',
            oldComponent,
            appElement
        );

        if (oldComponent) {
            updateTrigger.current = !updateTrigger.current;
            setUpdateComponentTrigger(updateTrigger.current);
            setSelectedComponent(oldComponent, 'ComponentDetailsPage');
        }
    }

    function assignBorderCorner(svgDocument) {
        // Check if defs already exists
        let defs = svgDocument.querySelector('defs');
        if (!defs) {
            // Create defs if it doesn't exist
            defs = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'defs'
            );
            svgDocument.documentElement.appendChild(defs);
        }

        // Create a clipPath element
        const clipPath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'clipPath'
        );
        clipPath.setAttribute('id', 'rounded-corner-clip');

        // Create a rounded rectangle
        const rect = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'rect'
        );
        const image = svgDocument.querySelector('image');

        if (image) {
            image.setAttribute('preserveAspectRatio', 'none'); // Set the preserveAspectRatio none

            rect.setAttribute('x', image?.getAttribute('x')?.toString() || '0');
            rect.setAttribute('y', image?.getAttribute('y')?.toString() || '0');
            rect.setAttribute(
                'width',
                image?.getAttribute('width')?.toString() || '256'
            );
            rect.setAttribute(
                'height',
                image?.getAttribute('height')?.toString() || '168'
            );
            rect.setAttribute('rx', '10'); // Set the border radius
            rect.setAttribute('ry', '10'); // Set the border radius

            // Append the rectangle to the clipPath
            clipPath.appendChild(rect);

            // Append the clipPath to the defs
            defs.appendChild(clipPath);

            // Select the first <image> element within the SVG
            // Apply the clipPath to the image
            image.setAttribute('clip-path', 'url(#rounded-corner-clip)');
        } else {
            console.error('No <image> element found in the SVG');
        }
    }

    function getObject(arrayItems, type, value) {
        let item = arrayItems.find((arrayItem) => arrayItem[type] === value);
        return item || null;
    }

    useEffect(() => {
        if (
            selectedComponent?.type === ComponentType.EMBED_CARD &&
            ref.current?.querySelector('img') &&
            onUpdate
        ) {
            onAddComponent();
        }
    }, [ref.current]);

    const onAddComponent = async () => {
        let selectedElementId = elementId?.current?.toString();
        if (ref.current === null) {
            return;
        }
        const previewDiv = document.getElementById('preview-id');
        let scale;
        let numberInput;
        let imgWithCorner = false;
        let svgDocument;
        if (previewDiv) {
            // Get the computed style of the element
            let computedStyle = window.getComputedStyle(previewDiv);

            // Get the transform property
            scale = computedStyle.scale;
            previewDiv.style.scale = '1';
        }
        // number input alignment
        let spinItem;
        if (selectedComponent?.fields)
            spinItem = getObject(
                selectedComponent.fields,
                'name',
                'Spin buttons'
            );

        if (
            (selectedComponent?.type === ComponentType.NUMBER_INPUT ||
                (selectedComponent?.type === ComponentType.FORM_SELECT &&
                    selectedComponent?.fields &&
                    getObject(
                        selectedComponent.fields,
                        'value',
                        FormControlNames.FORM_NUMBER_INPUT
                    ))) &&
            spinItem &&
            spinItem.value
        ) {
            numberInput = document.querySelector('#preview-id input');
            if (numberInput) {
                let paddingAdjust = 39.3 + numberInput.value?.length * 3.7;
                let paddingAdjustValue = 'calc(50% - ' + paddingAdjust + 'px)';
                numberInput.style.paddingLeft = paddingAdjustValue;
            }
        }

        removeDuplicateIds(ref.current);

        svgDocument = elementToSVG(ref.current as HTMLElement);

        if (selectedComponent?.type === ComponentType.EMBED_CARD) {
            setOnUpdate(true);
            if (ref.current && ref.current.querySelector('img')) {
                svgDocument = elementToSVG(ref.current);
            } else {
                svgDocument = elementToSVG('' as any);
            }
        } else if (selectedComponent?.type === ComponentType.SLIDER) {
            document
                .getElementById('sliderInput')
                ?.classList.add(sliderStyle['slider-input']);

            svgDocument = elementToSVG(ref.current);

            document
                .getElementById('sliderInput')
                ?.classList.remove(sliderStyle['slider-input']);
        } else {
            svgDocument = elementToSVG(ref.current);
        }

        if (previewDiv) previewDiv.style.scale = scale;

        // remove number input alignment
        if (numberInput) numberInput.style.paddingLeft = '0px';

        await inlineResources(svgDocument.documentElement);
        if (selectedComponent?.type === ComponentType.PROGRESS_BAR) {
            if (ref.current) {
                svgDocument
                    .querySelector('linearGradient')
                    ?.removeAttribute('gradientTransform');
            }
        }
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
            let isRounderCorner =
                selectedComponent.fields?.find(
                    (item) => item.name === 'Rounded Corners'
                ).value === 'standard';

            if (isRounderCorner) {
                assignBorderCorner(svgDocument);
                imgWithCorner = true;
            }
        } else if (selectedComponent?.type === ComponentType.EMBED_CARD) {
            assignBorderCorner(svgDocument);
            width = 'auto';
            imgWithCorner = true;
        } else if (
            selectedComponent?.type === ComponentType.PROGRESS_BAR ||
            selectedComponent?.type === ComponentType.PLACEHOLDER
        ) {
            height = 'auto';
        } else {
            (width = 'auto' as any), (height = 100 as any);
        }

        const svgString = new XMLSerializer().serializeToString(svgDocument);

        let session = new Session(svgString, {
            useFontFace: true,
            fonts: {
                'Canva Sans': [
                    {
                        wght: 400,
                        ital: 0,
                        source: require('assets/fonts/CanvaSans-Regular.woff'),
                    },
                    {
                        wght: 500,
                        ital: 0,
                        source: require('assets/fonts/CanvaSans-Medium.woff'),
                    },
                    {
                        wght: 700,
                        ital: 0,
                        source: require('assets/fonts/CanvaSans-Bold.woff'),
                    },
                ],
            },
        });
        await session.replaceAll();
        let out = session.getSvgString();

        var decoded = unescape(encodeURIComponent(out));

        decoded = decoded.replace(
            /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
            ''
        );

        var base64 = btoa(decoded);

        var imgSource = `data:image/svg+xml;base64,${base64}`;

        if (
            !imgWithCorner &&
            (selectedComponent?.type === ComponentType.IMAGE_CARD ||
                selectedComponent?.type === ComponentType.VIDEO_CARD)
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
        } else if (selectedComponent?.type === ComponentType.COLOR_PICKER) {
            let colorPickerSvg;

            if (selectedComponent.fields) {
                const hasColorPickerField = selectedComponent.fields.some(
                    (field) =>
                        field.value &&
                        field.name.includes('Show color picker flyout')
                );
                colorPickerSvg = hasColorPickerField
                    ? await ColorPickertoBase64()
                    : imgSource;
            }

            const result = await upload({
                id: elementIdNew,
                type: 'IMAGE',
                mimeType: 'image/svg+xml',
                url: colorPickerSvg,
                thumbnailUrl: colorPickerSvg,
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
                width: width,
                height: height,
                top: 0,
                left: 0,
                ref: images[elementIdNew],
                ...data,
            };
        }

        if (selectedComponent?.type === ComponentType.EMBED_CARD) {
            if (ref.current && ref.current.querySelector('img')) {
                setOnUpdate(false);
            } else {
                setOnUpdate(true);
            }
        } else {
            setOnUpdate(false);
        }

        await appElementClient.addOrUpdateElement(appElementData);
    };

    function getElementId() {
        const timestamp = new Date().getTime().toString(16);
        const random = Math.random().toString(16).slice(2);
        if (elementId.current) delete images[elementId.current];
        return timestamp + random;
    }

    useEffect(() => {
        setTimeout(() => {
            setScale(getScale(selectedComponent));
        });
    }, [selectedComponent]);

    return (
        <>
            {selectedComponent && (
                <>
                    <div className={styles.componenDetailPage}>
                        <LivePreview>
                            {imageUrl && <img src={imageUrl} />}

                            <div
                                id="preview-id"
                                ref={ref}
                                style={{
                                    pointerEvents: 'none',
                                    scale: scale,
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
                            onClick={() => {
                                onAddComponent();
                                setOnUpdate(true);
                            }}
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default ComponentDetailsPage;
