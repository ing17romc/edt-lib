import { ModalProps } from '../types';
import { ComponentSize } from '../../types';

export const baseArgs: ModalProps = {
  isOpen: true,
  onClose: () => console.log('Modal closed'),
  title: 'Modal Title',
  children: (
    <div>
      <p>This is the main content of the modal. You can place any type of content here, including forms, images, text, etc.</p>
      <p>The content will scroll automatically if it exceeds the maximum size of the modal.</p>
    </div>
  ),
};

export const withFooter: ModalProps = {
  ...baseArgs,
  title: 'Modal with Footer',
  footer: (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
      <button type="button" style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #ccc' }}>
        Cancel
      </button>
      <button type="button" style={{ padding: '0.5rem 1rem', borderRadius: '4px', background: '#007bff', color: 'white', border: 'none' }}>
        Save Changes
      </button>
    </div>
  ),  
};

export const withoutTitle: ModalProps = {
  ...baseArgs,
  title: '',
  showCloseButton: false,
  children: 'This is a modal without a title or close button. You must provide a way to close it, such as a custom button in the content or in the footer.',
};

export const withCustomSize: ModalProps = {
  ...baseArgs,
  title: 'Large Modal',
  size: ComponentSize.LARGE,
  children: (
    <div>
      <p>This is a modal with a custom size (large).</p>
      <p>You can choose from: small, medium, large or xlarge.</p>
    </div>
  ),
};

export const withLongContent: ModalProps = {
  ...baseArgs,
  title: 'Modal with Long Content',
  children: (
    <div>
      {Array.from({ length: 10 }).map((_, i) => (
        <p key={i} style={{ marginBottom: '1rem' }}>
          Example paragraph {i + 1}. This is long content to demonstrate scrolling within the modal.
          Content that exceeds the maximum height of the modal will generate a scrollbar.
        </p>
      ))}
    </div>
  ),
};

export const withCustomCloseText: ModalProps = {
  ...baseArgs,
  title: 'Modal with Custom Text',
  closeButtonText: 'Close Window',
  children: 'This modal has a custom text for the close button.',
};
