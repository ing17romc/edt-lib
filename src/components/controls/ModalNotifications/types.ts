export type NotificationType = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESSFULL';

export interface ModalNotificationsProps {
  title: string;
  message: string;
  details?: string;
  type?: NotificationType;
  eventContinue: (e: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
  eventModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ModalNotificationsComponent = React.FC<ModalNotificationsProps>;

export type { ModalNotificationsProps, ModalNotificationsComponent };
