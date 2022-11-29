export interface IModal {
    closeModal: () => void;
    render: (props: { handleSmoothlyClose: () => void }) => JSX.Element;
}

export interface IModalContainer {
    isMount: boolean;
    isOpen: boolean;
}
