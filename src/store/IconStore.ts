import { create } from 'zustand';
import { Icon } from 'src/models/icons.model';

type IconType = {
    selectedIcon: Icon;
    componentId: string;
};

type PropType = {
    selectedIcons: IconType[];
    setSelectedIcons: (iconType: IconType) => void;
    deleteSelectedIcon: (componentId: string) => void;
};

export const useIconStore = create<PropType>((set) => ({
    selectedIcons: [],
    setSelectedIcons: (iconType: IconType) =>
        set((state) => ({
            selectedIcons: [...state.selectedIcons, iconType],
        })),
    deleteSelectedIcon: (componentId: string) =>
        set((state) => ({
            selectedIcons: state.selectedIcons.filter(
                (obj) => obj.componentId !== componentId
            ),
        })),
}));
