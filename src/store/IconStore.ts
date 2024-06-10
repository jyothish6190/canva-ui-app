import { create } from 'zustand';
import { Icon } from 'src/models/icons.model';

export type IconType = {
    icon: Icon;
    componentId: string;
    optionId?: string;
};

type PropType = {
    iconsList: IconType[];
    setIconsList: (iconType: IconType) => void;
    deleteIcon: (componentId: string, optionId?: string) => void;
    clearIcons: () => void;
};

export const useIconStore = create<PropType>((set) => ({
    iconsList: [],
    setIconsList: (iconType: IconType) =>
        set((state) => ({
            iconsList: [...state.iconsList, iconType],
        })),
    deleteIcon: (componentId: string, optionId?: string) =>
        set((state) => ({
            iconsList: deleteIcon(state.iconsList, componentId, optionId),
        })),
    clearIcons: () => set((state) => ({ iconsList: [] })),
}));

const deleteIcon = (
    icons: IconType[],
    componentId: string,
    optionId?: string
) => {
    console.log('🚀deleteIcon ~ icons:', icons, componentId, optionId);

    return icons.filter((icon) => {
        if (icon.componentId === componentId) {
            if (icon.optionId !== optionId) {
                return icon;
            }
        } else {
            return icon;
        }
    });
};
