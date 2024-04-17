import { ComponentType } from '../ComponentTypes';
import { iconsWithoutIcon } from '../icons';

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
        options: [
            {
                label: 'Default',
                value: 'default',
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
        defaultValue: 'default',
        placeholder: 'Choose a State',
    },
    {
        type: ComponentType.SWITCH,
        name: 'Hug Content',
        defaultValue: true,
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
