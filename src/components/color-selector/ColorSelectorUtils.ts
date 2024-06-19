import { elementToSVG, inlineResources } from 'dom-to-svg';

export const SvgtoBase64 = async () => {
    const htmlElement = document.getElementById('colorSvg') as any;

    const svgDocument = elementToSVG(htmlElement);

    console.log('htmlElement', htmlElement);
    console.log('svgDocumnet', svgDocument);

    // await inlineResources(svgDocument.documentElement);

    const svgString = new XMLSerializer().serializeToString(svgDocument);

    let cleanedSvgString = svgString.replace(
        /data-stacking-context="true"|<g data-stacking-layer[^/<]*\/>|<!--[^>]*><style\/>|aria-[^"]*"[^"]*"|[^\x20-\x7E]+/g,
        ''
    );

    var base64 = btoa(cleanedSvgString);

    var imgSource = `data:image/svg+xml;base64,${base64}`;
    console.log('Svg', imgSource);

    return imgSource;
};
