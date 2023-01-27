import axios from 'axios';

const API_URL: string = 'https://api.escuelajs.co/api/v1';

export const axiosGet = axios.create({ //AXIOS GET REQUEST
   baseURL: API_URL,
   method: 'get',
   timeout: 15000,
});

export const axiosPost = axios.create({ ///AXIOS POST REQUEST
   baseURL: API_URL,
   method: 'post',
   timeout: 15000,
});

export const axiosPut = axios.create({ //AXIOS PUT REQUEST
   baseURL: API_URL,
   method: 'put',
   timeout: 15000,
});

export const axiosDelete = axios.create({ //AXIOS DELETE REQUEST
   baseURL: API_URL,
   method: 'delete',
   timeout: 15000,
});
