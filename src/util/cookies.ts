import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setCookie = (name: string, value: unknown, options: any = {}) => {
    if (!options.path) options.path = '/';
    cookies.set(name, JSON.stringify(value), options);  
};

export const getCookie = (name: string) => {
    const data = cookies.get(name);
    if (!data) return null;

    try {
        return JSON.parse(data);                    
    } catch {
        return data;
    }
};

export const removeCookie = (name: string, options: any = {}) => {
    if (!options.path) options.path = '/';
    cookies.remove(name, options);
};
