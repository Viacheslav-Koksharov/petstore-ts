interface IButton {
    id?: string;
    style: {};
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}

export type { IButton };