export const useLocalStorage = (key: string) => {
    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log('🚀 ~ setItem ~ error:', error);
        }
    };

    const getItem = () => {
        try {
            const value = window.localStorage.getItem(key);
            if (!value) {
                throw 'value not found';
            }
            return JSON.parse(value);
        } catch (error) {
            console.log('🚀 ~ getItem ~ error:', error);
            return undefined;
        }
    };

    const deletItem = () => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log('🚀 ~ deletItem ~ error:', error);
        }
    };

    return { setItem, getItem, deletItem };
};
