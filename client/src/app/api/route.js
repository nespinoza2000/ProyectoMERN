import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_DOMAIN;
const withCredentialsConfig = { withCredentials: true };
const dataCollection = "tareas"

//* Función para manejar errores uniformemente
const handleApiError = (error) => {
    console.error(error);
    throw error;
};

//* Funciones de Sesión
export async function login(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/session`, data, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function logout() {
    try {
        const response = await axios.delete(`${API_BASE_URL}/session`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

//* Funciones de Usuario
export async function register(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/user`, data, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function passwordResetToken(params = {}) {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/passwordReset`, { params, ...withCredentialsConfig });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function passwordReset(data) {
    try {
        const response = await axios.patch(`${API_BASE_URL}/user/passwordReset`, data, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

//! Funciones de Tareas
export async function createTarea(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/${dataCollection}`, data, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function getAllTareas() {
    try {
        const response = await axios.get(`${API_BASE_URL}/${dataCollection}`, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function updateTarea(data) {
    try {
        const response = await axios.put(`${API_BASE_URL}/${dataCollection}/${data._id}`, data, withCredentialsConfig);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}

export async function deleteTarea(idTarea) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${dataCollection}/${idTarea}`);
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
}


