import { SelectOption } from '@canva/app-ui-kit';
import { create } from 'zustand';

type OptionType = {
    label: string;
    value: any;
};

type PropType = {
    OptionList: any[];
    setNewlist: (newList: any[]) => void;
    addNewItem: (file?: boolean) => void;
    editItem: (
        editValue: string | undefined,
        newData: string | undefined
    ) => void;
    deleteItem: (optionValue: string) => void;
};

export const useOptionStore = create<PropType>((set) => ({
    OptionList: [],
    setNewlist: (newList: any[]) => {
        set({ OptionList: newList });
    },
    addNewItem: (file?: boolean) => {
        set((state) => ({
            OptionList: [
                ...state.OptionList,
                {
                    label:
                        file === true
                            ? 'Option' + (state.OptionList.length + 1)
                            : 'exapmple File' +
                              (state.OptionList.length + 1) +
                              '.png',
                    value:
                        file === true
                            ? 'Option' + (state.OptionList.length + 1)
                            : 'exapmple File' +
                              (state.OptionList.length + 1) +
                              '.png',
                },
            ],
        }));
    },
    editItem: (editValue: string | undefined, newData: string | undefined) => {
        set((state) => ({
            OptionList: state.OptionList.map((option) =>
                option.value === editValue
                    ? { ...option, label: newData, value: newData }
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
