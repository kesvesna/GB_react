import axios from 'axios';
import { withLogger } from "./logger";

const BASE_URL = 'https://api.github.com';

class Request {
    constructor(token) {
        this.token = token;
        this.request = withLogger(axios.create(
            {
                baseUrl: BASE_URL
            }
        ));
    }

    setToken = (token) => {
        this.token = token;
    }

    removeToken = (token) => {
        this.token = null;
    }

    requestWithToken = () => {
        return (
            {
                headers: {
                    'x-token': this.token
                }
            }
        )
    }

    get = (url, withAuth) => {
        let config = {};

        if (withAuth) {
            config = {...config, ...this.requestWithToken()}
        }
        return this.request.get(BASE_URL + url, config);
    }

    post = (url, params, withAuth) => {
        let config = {};

        if (withAuth) {
            config = {...config, ...this.requestWithToken()}
        }
        return this.request.post(BASE_URL + url, params, config);
    }
}

export const request = new Request();