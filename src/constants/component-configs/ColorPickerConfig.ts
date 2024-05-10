import { ComponentType } from '../ComponentTypes';

export enum ColorFieldNames {
    COLOR_PICKER = 'Color',
    ACTIVE = 'Active',
}
export const ColorPickerConfig = [
    {
        showComponent: true,
        type: ComponentType.COLOR_PICKER,
        name: ColorFieldNames.COLOR_PICKER,
        color: '#5BA1E7',
        categoryId: 'color',
    },
    {
        showComponent: true,
        type: ComponentType.SWITCH,
        name: ColorFieldNames.ACTIVE,
        defaultValue: false,
    },
];
