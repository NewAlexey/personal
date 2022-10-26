import { IContextRadioList, IHeaderRoute } from "./interfaces";

export const headerRouteList: Array<IHeaderRoute> = [
    {
        url: "/",
        title: "Home",
    },
    {
        url: "/react-context",
        title: "React Context",
    },
];

export const radioList: IContextRadioList[] = [
    {
        id: "timeout1",
        delayValue: "500",
        text: "0.5s",
    },
    {
        id: "timeout2",
        delayValue: "1000",
        text: "1s",
    },
    {
        id: "timeout3",
        delayValue: "2000",
        text: "2s",
    },
];

export const COLOURS = {
    primary: "#f26500",
    disabledPrimary: "#ffe4d1",
};

export enum textSizes {
    small = "12px",
    regular = "14px",
    large = "16px",
    mega = "18px",
    megaText = "40px",
    hyperText = "50px",
}

export enum textWeight {
    regular = "400",
    bold = "700",
}

export enum textDisplay {
    inline = "inline",
    block = "block",
    inlineBlock = "inline-block",
}

export const MY_STACK = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Redux",
    "Apollo Client",
    "Styled Components",
    "Formik",
    "Yup",
    "Swiper",
    "Node JS",
    "Fastify",
    "MongoDB",
];
