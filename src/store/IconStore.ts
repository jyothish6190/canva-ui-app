import { create } from 'zustand';
import { Icon } from 'src/models/icons.model';

type IconType = {
    icon: Icon;
    componentId: string;
};

type PropType = {
    iconsList: IconType[];
    setIconsList: (iconType: IconType) => void;
    deleteIcon: (componentId: string) => void;
};

export const useIconStore = create<PropType>((set) => ({
    iconsList: [],
    setIconsList: (iconType: IconType) =>
        set((state) => ({
            iconsList: [...state.iconsList, iconType],
        })),
    deleteIcon: (componentId: string) =>
        set((state) => ({
            iconsList: state.iconsList.filter(
                (obj) => obj.componentId !== componentId
            ),
        })),
}));
