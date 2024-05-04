import { SelectOption } from '@canva/app-ui-kit';
import { create } from 'zustand';

type OptionType = {
    label: string;
    value: any;
};

type PropType = {
    OptionList: any[];
    setNewlist: (newList: any[]) => void;
    addNewItem: () => void;
    editItem: (
        editValue: string | undefined,
        newName: string | undefined
    ) => void;
    deleteItem: (optionValue: string) => void;
};

export const useOptionStore = create<PropType>((set) => ({
    OptionList: [],
    setNewlist: (newList: any[]) => {
        set({ OptionList: newList });
    },
    addNewItem: () => {
        set((state) => ({
            OptionList: [
                ...state.OptionList,
                {
                    label: 'Option' + (state.OptionList.length + 1),
                    value: 'Option' + (state.OptionList.length + 1),
                },
            ],
        }));
    },
    editItem: (editValue: string | undefined, newName: string | undefined) => {
        set((state) => ({
            OptionList: state.OptionList.map((option) =>
                option.value === editValue
                    ? { ...option, label: newName }
                    : option
            ),
        }));
    },
    deleteItem: (optionValue: string) => {
        set((state) => ({
            OptionList: state.OptionList.filter(
                (option) => option.value !== optionValue
            ),
        }));
    },
}));
