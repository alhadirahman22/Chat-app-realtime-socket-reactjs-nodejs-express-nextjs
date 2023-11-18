import jwt from "jsonwebtoken"
import axios from 'axios';
import Cookies from 'js-cookie';
import secureLocalStorage from "react-secure-storage";

const verifyJwt = (token) => {
    return jwt.verify(token, process.env.APP_KEY);
}

const encJwt = (data) => {
    return jwt.sign(data, process.env.APP_KEY)
};


const getLocalStorage = (key, initialValue, encrypt = false) => {
    try {
        let value = null;
        if (!encrypt) {
            value = localStorage.getItem(key);
        }
        else {
            value = secureLocalStorage.getItem(key);
        }

        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        // if error, return initial value
        return initialValue;
    }
}

const setLocalStorage = (key, value, encrypt = false) => {
    try {
        if (!encrypt) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            secureLocalStorage.setItem(key, JSON.stringify(value));
        }

    } catch (e) {
        console.log(e);
    }
}

const removeLocalStorage = (key, encrypt = false) => {
    try {
        if (!encrypt) {
            localStorage.removeItem(key);
        }
        else {
            secureLocalStorage.removeItem(key);
        }

    } catch (e) {
        console.log(e);
    }
}


const instance = () => {
    const csrfToken = Cookies.get('csrfToken');
    const dkey = verifyJwt(csrfToken);
    const out = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': dkey.key
            // Add any other default headers you need
        },
    });

    return out;
}
const Helper = {
    verifyJwt,
    encJwt,
    instance,
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
};

export default Helper;