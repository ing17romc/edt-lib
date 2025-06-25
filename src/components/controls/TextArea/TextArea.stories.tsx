import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea from './index';
import { TextAreaProps } from './types';

export default {
  title: 'Controls/TextArea',
  component: TextArea,
  argTypes: {
    eventChange: { action: 'changed' },
    eventFocus: { action: 'focused' },
    eventBlur: { action: 'blurred' },
    eventKeyDown: { action: 'keyDown' },
  },
} as Meta;

const Template: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <div style={{ maxWidth: '500px', padding: '20px' }}>
      <TextArea
        {...args}
        value={value}
        eventChange={(e) => {
          setValue(e.target.value);
          args.eventChange?.(e);
        }}
      />
    </div>
  );
};

export const Default: StoryFn<TextAreaProps> = Template.bind({});
Default.args = {
  id: 'default-textarea',
  value: '',
  placeholder: 'Escribe algo aquí...',
};

export const WithTitles: StoryFn<TextAreaProps> = Template.bind({});
WithTitles.args = {
  ...Default.args,
  id: 'with-titles-textarea',
  titleTop: 'Título superior',
  titleBottom: 'Título inferior',
};

export const WithPlaceholder: StoryFn<TextAreaProps> = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  id: 'with-placeholder-textarea',
  placeholder: 'Este es un placeholder...',
};

export const Disabled: StoryFn<TextAreaProps> = Template.bind({});
Disabled.args = {
  ...Default.args,
  id: 'disabled-textarea',
  value: 'Este campo está deshabilitado',
  disabled: true,
};

export const ReadOnly: StoryFn<TextAreaProps> = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  id: 'readonly-textarea',
  value: 'Este campo es de solo lectura',
  readOnly: true,
};

export const Required: StoryFn<TextAreaProps> = Template.bind({});
Required.args = {
  ...Default.args,
  id: 'required-textarea',
  required: true,
  titleTop: 'Campo requerido',
};

export const WithCustomRows: StoryFn<TextAreaProps> = Template.bind({});
WithCustomRows.args = {
  ...Default.args,
  id: 'custom-rows-textarea',
  rows: 8,
  titleTop: 'Área de texto con 8 filas',
};

export const WithMaxLength: StoryFn<TextAreaProps> = Template.bind({});
WithMaxLength.args = {
  ...Default.args,
  id: 'maxlength-textarea',
  size: 100,
  titleTop: 'Máximo 100 caracteres',
  titleBottom: 'Caracteres restantes: 100',
};

// Example with state management for character count
const WithCharacterCount: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState('');
  const maxLength = 150;
  const remaining = maxLength - value.length;
  
  return (
    <div style={{ maxWidth: '500px', padding: '20px' }}>
      <TextArea
        {...args}
        id="character-count-textarea"
        value={value}
        size={maxLength}
        eventChange={(e) => {
          setValue(e.target.value);
          args.eventChange?.(e);
        }}
        titleTop="Cuenta de caracteres"
        titleBottom={`Caracteres restantes: ${remaining}`}
      />
    </div>
  );
};

export const CharacterCount = WithCharacterCount;
