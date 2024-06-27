import { SelectOption } from '@canva/app-ui-kit';
import { Component } from 'src/models/component.model';

export const getOptions = (component: Component) => {
    return component.options as SelectOption<string>[];
};
