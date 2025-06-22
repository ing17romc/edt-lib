export type HttpStatusCode = 100 | 200 | 300 | 400 | 500 | number;

export interface ModalHttpMessageProps {
  show: boolean;
  eventModal: (e: React.MouseEvent) => void;
  code: HttpStatusCode;
  title: string;
  message: string;
  details?: string;
}

export type ModalHttpMessageComponent = React.FC<ModalHttpMessageProps>;

export type { ModalHttpMessageProps, ModalHttpMessageComponent };
