import queryString from 'query-string';
import config      from '../config.js';

export default class ApiClient {
    constructor({ prefix = 'v1/' } = {}) {
        this.prefix = prefix;
        this.token  = '';
    }

    async get(url, params) {
        return this.request({
            url,
            params,
            method : 'GET'
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method : 'POST',
            body   : payload
        });
    }

    async put(url, payload = {}) {
        return this.request({
            url,
            method : 'PUT',
            body   : payload
        });
    }

    async patch(url, payload = {}) {
        return this.request({
            url,
            method : 'PATCH',
            body   : payload
        });
    }

    async delete(url, payload = {}) {
        return this.request({
            url,
            method : 'DELETE',
            body   : payload
        });
    }

    async request({ url, method, params = {}, body }) {
        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';

        const response = await fetch(
            `${config.apiUrl}${this.prefix}${url}${query}`,
            {
                method,
                headers : {
                    'Content-Type' : 'application/json'
                },
                withCredentials : true,
                crossDomain     : false,
                body            : method !== 'GET' ? JSON.stringify(body) : undefined
            }
        );

        const json = await response.json();

        if (json.status >= 400) throw json.message;

        return json;
    }
}
