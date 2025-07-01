import { SelectorOption } from '../types';

export const mockOptions: SelectorOption[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3', disabled: true },
  { value: '4', label: 'Opción 4' },
  { value: '5', label: 'Opción 5' },
];

// Para el propósito de las pruebas, usamos un tipo que incluya tanto las opciones planas como agrupadas
type GroupedOption = {
  label: string;
  options: SelectorOption[];
};

export const mockGroupedOptions: GroupedOption[] = [
  {
    label: 'Grupo 1',
    options: [
      { value: '1', label: 'Opción 1' },
      { value: '2', label: 'Opción 2' },
    ],
  },
  {
    label: 'Grupo 2',
    options: [
      { value: '3', label: 'Opción 3' },
      { value: '4', label: 'Opción 4', disabled: true },
    ],
  },
];

export const mockLongListOptions = Array.from({ length: 20 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Opción ${i + 1} - Este es un texto más largo para probar el desbordamiento`,
}));
