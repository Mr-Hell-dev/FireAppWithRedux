const validateEmail = (value) => {
    let result = false;
    if (value.length > 0) {
        const reg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        result = reg.test(value);
    }
    return result;
};

const validateName = (value) => {
    let result = false;
    if (value.length > 0 && value.length < 30) {
        const reg = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
        result = reg.test(value);
        return result;
    }
    return result;
};

const validatePhone = (value) => {
    let result = false;
    if (value.length > 0 && value.length < 10) {
        const reg = /[7-9][0-9]{9}/;
        result = reg.test(value);
    }
    return result;
};
const validatepassword = (value) => {
    let result = false;
    if (value.length < 30 && value.length > 0) {
        result = true;
    }
    return result;
};

module.exports = {
    validateEmail,
    validateName,
    validatePhone,
    validatepassword,
};
