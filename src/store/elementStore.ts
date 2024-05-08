import { create } from 'zustand';

import { Component } from 'src/models/component.model';

export type ElementType = {
    elementId: string;
    component: Component;
};

type PropType = {
    elements: ElementType[] | [];
    setElements: (elements: ElementType[]) => void;
};

export const useElementStore = create<PropType>((set) => ({
    elements: [],
    setElements: (elements: ElementType[]) =>
        set({
            elements: elements,
        }),
}));
