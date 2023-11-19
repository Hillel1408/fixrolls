export interface LayoutModalProps {
    children: JSX.Element;
    text: string;
    closeModal: () => void;
    active?: boolean;
}
