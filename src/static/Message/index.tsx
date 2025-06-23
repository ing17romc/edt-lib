/**
 * Message
 *
 * Este componente muestra diferentes tipos de mensajes de estado (éxito, información, advertencia y peligro) para la interfaz de usuario.
 * Útil para mostrar retroalimentación visual clara al usuario según el contexto de la acción realizada.
 *
 * @param props - Props del componente Message (actualmente no recibe ninguna, reservado para futuras extensiones).
 * @returns Elementos React que representan mensajes de distintos estados visuales.
 */
import React from 'react';
import type { MessageProps } from './types';

const Message: React.FC<MessageProps> = () => (
  <div>
    <div className="message message-success">
      <strong>Success!</strong> Indicates a successful or positive action.
    </div>
    <div className="message message-info">
      <strong>Info!</strong> Indicates a neutral informative change or action.
    </div>
    <div className="message message-warning">
      <strong>Warning!</strong> Indicates a warning that might need attention.
    </div>
    <div className="message message-danger">
      <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
    </div>
  </div>
);

export default Message;