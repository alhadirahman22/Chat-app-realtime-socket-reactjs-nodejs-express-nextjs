import secureLocalStorage from "react-secure-storage";
import jwt from "jsonwebtoken"
const getTextAlignment = (i18n) => {
    try {
        if (i18n.language == "ae" || i18n.language == "sa") {
            return ("rtl")
        } else {
            return ("ltr")
        }
    } catch (error) {

    }
    return ("ltr")

}


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

const verifyJwt = (token) => {
    return jwt.verify(token, process.env.APP_KEY);
}

const encJwt = (data) => {
    return jwt.sign(data, process.env.APP_KEY)
};

const Helper = {
    getTextAlignment,
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
    verifyJwt,
    encJwt
};

export default Helper;