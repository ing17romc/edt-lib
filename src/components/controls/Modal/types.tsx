interface ModalProps {
  show: boolean;
  eventModal: (e: React.MouseEvent<Element, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

type ModalComponent = React.FC<ModalProps>;

export type { ModalProps, ModalComponent };
