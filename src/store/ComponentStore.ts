import { create } from 'zustand';
import { Component } from 'src/models/coponent.model';

type PropType = {
    selectedComponent: Component | undefined;
    setSelectedComponent: (component: Component) => void;
};

export const useComponentStore = create<PropType>((set) => ({
    selectedComponent: undefined,
    setSelectedComponent: (component: Component) =>
        set({ selectedComponent: component }),
}));
