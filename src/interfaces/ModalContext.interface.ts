interface IModalContextProps {
    children?: React.ReactNode;
}

interface IModalContext {
    modalIsOpen: boolean;
    setIsOpen: (modalIsOpen: boolean) => void;
    openModal: () => void;
}

export type { IModalContextProps, IModalContext };
