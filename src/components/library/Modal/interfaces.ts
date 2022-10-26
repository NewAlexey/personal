export interface IModal {
    isOpen: boolean;
    closeModal: () => void;
    render: (props: { handleSmoothlyClose: () => void }) => JSX.Element;
}

export type IModalComponent = Omit<IModal, "isOpen">

export interface IModalContainer {
    isMount: boolean;
    isOpen: boolean;
}
