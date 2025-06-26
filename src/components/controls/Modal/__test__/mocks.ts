import React from 'react';
import { ModalProps } from '../types';

export const mockEventModal = jest.fn();

export const mockChildren = React.createElement('div', null, 'Test Content');

export const defaultProps: ModalProps = {
  show: true,
  eventModal: mockEventModal,
  children: mockChildren,
};

export const withTitleChildren = React.createElement(
  React.Fragment,
  null,
  React.createElement('h2', { id: 'modal-title' }, 'Test Title'),
  React.createElement('p', null, 'This is a test modal content')
);
