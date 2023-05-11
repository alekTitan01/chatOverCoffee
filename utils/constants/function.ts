import { MessageType } from "@utils/types/main";

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

export const sortDate = (messageData: MessageType[]) => {
    return messageData.sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    });
};
