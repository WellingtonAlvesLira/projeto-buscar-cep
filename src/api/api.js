const axios = require('axios');

const axiosInstance = axios.create({
   baseURL: 'https://viacep.com.br/ws/json/'
})

export default {
    name: 'api',
    methods: {
        get(url){
          return axiosInstance.get(url);

        },
        
    }
}