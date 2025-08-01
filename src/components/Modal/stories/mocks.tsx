import { ModalProps } from '../types';
import { ComponentSize } from '../../types';

export const baseArgs: ModalProps = {
  isOpen: true,
  onClose: () => console.log('Modal cerrado'),
  title: 'Título del Modal',
  children: (
    <div>
      <p>Este es el contenido principal del modal. Puedes colocar cualquier tipo de contenido aquí, incluyendo formularios, imágenes, texto, etc.</p>
      <p>El contenido se desplazará automáticamente si excede el tamaño máximo del modal.</p>
    </div>
  ),
};

export const withFooter: ModalProps = {
  ...baseArgs,
  title: 'Modal con Pie de Página',
  footer: (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
      <button type="button" style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ccc' }}>
        Cancelar
      </button>
      <button type="button" style={{ padding: '0.5rem 1rem', borderRadius: '4px', background: '#007bff', color: 'white', border: 'none' }}>
        Guardar Cambios
      </button>
    </div>
  ),  
};

export const withoutTitle: ModalProps = {
  ...baseArgs,
  title: '',
  showCloseButton: false,
  children: 'Este es un modal sin título y sin botón de cerrar. Debes proporcionar una forma de cerrarlo, como un botón personalizado en el contenido o en el pie de página.',
};

export const withCustomSize: ModalProps = {
  ...baseArgs,
  title: 'Modal Grande',
  size: ComponentSize.LARGE,
  children: (
    <div>
      <p>Este es un modal con un tamaño personalizado (large).</p>
      <p>Puedes elegir entre: small, medium, large o xlarge.</p>
    </div>
  ),
};

export const withLongContent: ModalProps = {
  ...baseArgs,
  title: 'Modal con Contenido Largo',
  children: (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <p key={i} style={{ marginBottom: '1rem' }}>
          Párrafo de ejemplo {i + 1}. Este es un contenido largo para demostrar el desplazamiento dentro del modal.
          El contenido que exceda la altura máxima del modal generará una barra de desplazamiento.
        </p>
      ))}
    </div>
  ),
};

export const withCustomCloseText: ModalProps = {
  ...baseArgs,
  title: 'Modal con Texto Personalizado',
  closeButtonText: 'Cerrar Ventana',
  children: 'Este modal tiene un texto personalizado para el botón de cierre.',
};
