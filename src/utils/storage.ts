const storage = {
    getItem: <T>(key: string) => {
        const value = localStorage.getItem(key);
        try {
            return JSON.parse(value || '') as T;
        } catch (e) {
            return value as unknown as T;
        }
    },
    setItem: <T>(key: string, value: T) => {
        const newValue = typeof value === 'string' ? value : JSON.stringify(value);
        window.localStorage.setItem(key, newValue as string);
    },
    removeItem: (key: string) => {
        window.localStorage.removeItem(key);
    },
};

export default storage;
