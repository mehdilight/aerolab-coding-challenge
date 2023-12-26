export const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export const getAuthHeaders = () => {
    return {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`
    }
}
