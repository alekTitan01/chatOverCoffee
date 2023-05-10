export const validity = (value: string) => {
    let isNumChar = false;
    let isCapital = false;
    let isNumerical = false;
    let isSpecial = false;

    if (/.{8,}/.test(value)) {
        isNumChar = true;
    }

    if (/[A-Z]+/.test(value)) {
        isCapital = true;
    }

    if (/\d+/.test(value)) {
        isNumerical = true;
    }

    if (/[!@#$%^&*()\-\+=\[\]{}|\\;:'",.<>\/?]+/g.test(value)) {
        isSpecial = true;
    }
    return {
        isNumChar,
        isCapital,
        isNumerical,
        isSpecial,
    };
};
