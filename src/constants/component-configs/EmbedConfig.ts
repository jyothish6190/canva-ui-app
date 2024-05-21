import { ComponentType } from '../ComponentTypes';
export enum EmbedFieldNames {
    TITLE = 'Title (optional)',
    DESCRIPTION = 'Description (optional)',
    WIDTH = 'Width',
}

export const EmbedConfig = [
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: EmbedFieldNames.TITLE,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Title',
        value: 'Heartwarming Chatter: Adorable Conversation with a puppy',
    },
    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: EmbedFieldNames.DESCRIPTION,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Description text',
        value: 'Puppyhood',
    },

    {
        showComponent: true,
        type: ComponentType.FORM_FIELD,
        name: EmbedFieldNames.WIDTH,
        label: 'Label',
        description: 'Description text',
        placeholder: 'Width',
        value: 296,
        min: 24,
        max: 1366,
    },
];
