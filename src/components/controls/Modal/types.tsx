export interface ModalProps {
  show: boolean;
  eventModal: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export type ModalComponent = React.FC<ModalProps>;

export type { ModalProps, ModalComponent };
