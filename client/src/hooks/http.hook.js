import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const response = await fetch(url, { method, body, headers });
            const data = await response.json();

            if (!response.ok)
            {
                throw new Error(data.message || 'Something go wrong');
            }
            return data;
        } catch (e) {
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = () => { setError(null) };

    return { request, error, clearError };
};