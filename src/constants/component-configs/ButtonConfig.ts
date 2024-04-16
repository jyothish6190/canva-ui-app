import { Placeholder } from '@canva/app-ui-kit';
import { ComponentType } from '../ComponentTypes';
import { icons, iconsWithoutIcon } from '../icons';

export const ButtonConfig = [
    {
        type: ComponentType.SEGMENTED_CONTROL,
        name: 'Variant',
        options: [
            {
                label: 'Primary',
                value: 'primary',
            },
            {
                label: 'Secondary',
                value: 'secondary',
            },
            {
                label: 'Tertiary',
                value: 'Tertiary',
            },
        ],
        defaultValue: 'primary',
        value: 'primary',
    },
    {
        type: ComponentType.FORM_FIELD,
        name: 'Text',
        label: 'Label',
        description: 'Description text',
        placeholder: 'Button',
    },
    {
        type: ComponentType.SELECT,
        name: 'Icon (optional)',
        options: iconsWithoutIcon,
        placeholder: 'Choose an Icon',
    },
    {
        type: ComponentType.SELECT,
        name: 'State',
        options: iconsWithoutIcon,
        placeholder: 'Choose an Icon',
    },
    // {
    //     id: 'text',
    // },
    // {
    //     id: 'icon',
    //     optional: true,
    // },
    // {
    //     id: 'button-state',
    //     selected: 'default',
    // },
    // {
    //     id: 'hug-content',
    //     selected: true,
    // },
    // {
    //     id: 'width',
    //     'default-value': '56',
    //     selected: 'small',
    // },
];
