import { ComponentType } from '../ComponentTypes';

export enum ColorFieldNames {
    COLOR_PICKER = 'Color picker',
    ACTIVE = 'Active',
}
export const ColorPickerConfig = [
    {
        showComponent: true,
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
