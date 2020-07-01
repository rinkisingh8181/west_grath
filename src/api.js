import axios from 'axios';

export const getSource = () => axios.CancelToken.source();

const createConfig = ({ token, source, ...rest }) => ({
    cancelToken: source.token,
    ...rest
});

export const http = axios.create({
    baseURL: `http://api.tftcinternational.com/api`
});

http.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export const account = {
    url: '/account',
    fetch: function(token, source) {
        return http.get(`${this.url}`, createConfig({
            token,
            source
        }));
    }
};

export const collections = {
    url: '/collections',
    fetch: function(token, source) {
        return http.get(`${this.url}`, createConfig({
            token,
            source
        }));
    }
};

export const product = {
    url: '/product',
    fetch: function(token, source) {
        return http.get(`${this.url}`, createConfig({
            token,
            source
        }));
    }
};
