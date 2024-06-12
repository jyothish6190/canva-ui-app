import { ComponentType } from '../ComponentTypes';

export enum ColorFieldNames {
    COLOR_PICKER = 'Color',
    ACTIVE = 'Show color picker flyout',
}
export const ColorPickerConfig = [
    {
        showComponent: false,
        type: ComponentType.COLOR_PICKER,
        name: ColorFieldNames.COLOR_PICKER,
        color: '#E0D9FC',
        categoryId: 'color',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: ColorFieldNames.ACTIVE,
        defaultValue: false,
    },
];
