const apiRequest = async ({ url, method, data, token }) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
};
