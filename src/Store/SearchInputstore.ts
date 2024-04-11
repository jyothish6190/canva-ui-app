import { create } from 'zustand';
type SearchInputStore = {
    searchValue: string;
    setSearchValue: (value: string) => void;
};

export const useSearchInputStore = create<SearchInputStore>((set) => ({
    searchValue: '',
    setSearchValue: (value: string) => set({ searchValue: value }),
}));
