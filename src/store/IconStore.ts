import { create } from 'zustand';
import { Icon } from 'src/models/icons.model';

type PropType = {
    selectedIcon: Icon | undefined;
    setSelectedIcon: (Icon: Icon | undefined) => void;
};

export const useIconStore = create<PropType>((set) => ({
    selectedIcon: undefined,
    setSelectedIcon: (Icon: Icon | undefined) => set({ selectedIcon: Icon }),
}));
