interface IHeaderRoute {
    url: string;
    title: string;
}

export const HEADER_ROUTES: Array<IHeaderRoute> = [
    {
        url: "/",
        title: "Home",
    },
    {
        url: "/react-context",
        title: "React Context",
    },
];
