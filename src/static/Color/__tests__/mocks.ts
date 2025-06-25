// Mock data for Color component tests
export const mockColorClasses = {
  fontColors: ['font-blue', 'font-red', 'font-gray'],
  backgroundColors: ['bg-blue', 'bg-red', 'bg-gray'],
  scssVariables: ['$black-color', '$white-color', '$primary-color']
};

// Mock for the color utility functions
export const mockColorUtils = {
  getP: (style: string) => ({
    type: 'p',
    style,
    text: ` <span class="${style}"></span>`
  }),
  getSpan: (style: string) => ({
    type: 'span',
    style,
    text: ` <span class="${style}"></span>`
  }),
  getVariablesColor: (style: string) => ({
    type: 'variable',
    style,
    text: ` $${style}`
  })
};
