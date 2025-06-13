import axios from 'axios';


const isDevelopement=import.meta.env.MODE ==='development'
const baseUrl=isDevelopement? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_DEPLOY
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 0,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
);

AxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('Token');

            try {
                const refreshResponse = await axios.post(`${baseUrl}api/refresh-token/`, {}, {
                    headers: { Authorization: `Token ${localStorage.getItem('Token')}` }
                });

                if (refreshResponse.status === 200) {
                    localStorage.setItem('Token', refreshResponse.data.token);
                    error.config.headers.Authorization = `Token ${refreshResponse.data.token}`;
                    return axios(error.config);
                }
            } catch (refreshError) {
                console.error("Failed to refresh token:", refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default AxiosInstance;
