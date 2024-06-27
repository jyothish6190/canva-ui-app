import { upload } from '@canva/asset';
import { inlineResources } from 'dom-to-svg';

import { getElementId } from 'src/component-utils/ComponentUtils';
import { ComponentType } from 'src/constants/ComponentTypes';
import { Component } from 'src/models/component.model';

export const addComponentHandler = async (
    component: Component,
    svgElement: XMLDocument
) => {
    const imageResult = (await getImageSourceFromComponent(component))
        ? await getImageSourceFromComponent(component)
        : await convertElementToSvg(svgElement);

    let elementId = getElementId();

    let width = 'auto' as any,
        height = 100 as any;

    const componentString = JSON.stringify(component);

    let data = {
        elementId: elementId,
        selectedComponent: componentString,
    };

    const appElementData = {
        type: 'IMAGE',
        top: 0,
        left: 0,
        width: width,
        height: height,
        ref: imageResult?.ref,
        data: data,
    };

    return appElementData;
};

const convertElementToSvg = async (svgElement: XMLDocument) => {
    await inlineResources(svgElement.documentElement);

    const svgString = new XMLSerializer().serializeToString(svgElement);

    var decoded = unescape(encodeURIComponent(svgString));

    decoded = decoded.replace(
        /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
        ''
    );

    var base64 = btoa(decoded);

    var url = `data:image/svg+xml;base64,${base64}`;
    const image = uploadImage(url, 'image/svg+xml');
    return image;
};

const getImageSourceFromComponent = async (component: Component) => {
    if (
        component?.type === ComponentType.IMAGE_CARD ||
        component?.type === ComponentType.VIDEO_CARD
    ) {
        const url = component?.previewUrl
            ? component?.previewUrl
            : component?.thumbnailUrl;
        const image = await uploadImage(url as string, 'image/jpeg');
        return image;
    } else {
        return null;
    }
};

const uploadImage = async (imageUrl: string, mimeType: any) => {
    const image = await upload({
        type: 'IMAGE',
        mimeType: mimeType,
        url: imageUrl,
        thumbnailUrl: imageUrl,
    });
    return image;
};

export const getScale = (component) => {
    const divelement = document.querySelector(`#preview-id`);
    let width = 290;
    let height = 220;

    let widthParam = component?.fields?.filter(
        (field) => field.name === 'Width'
    )[0];
    let heightParam = component?.fields?.filter(
        (field) => field.name === 'Height'
    )[0];
    if (widthParam && widthParam.value) {
        width = widthParam.value;
    }

    if (heightParam) {
        height = heightParam.value;
    } else if ((divelement as HTMLElement)?.offsetHeight) {
        height = (divelement as HTMLElement).offsetHeight;
    }
    if (width > 290 || height > 220) {
        return Math.min(290 / width, 220 / height).toString();
    } else return '1';
};
