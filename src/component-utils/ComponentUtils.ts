export const getElementId = () => {
    const timestamp = new Date().getTime().toString(16);
    const random = Math.random().toString(16).slice(2);
    const id = timestamp + random;
    return id;
};

export const getScale = (component) => {
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
};
