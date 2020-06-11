import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'POST', body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
                console.log(body);
            }

            const response =  fetch(url, { method, body, headers });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something go wrong');
            }

            return data;
        } catch (e) {
            setError(e.message);
            return e;
        }
    }, []);

    const clearError = () => {
        setError(null);
    }

    return { request, error, clearError };
}