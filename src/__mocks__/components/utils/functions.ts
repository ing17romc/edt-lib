import { ChangeEvent } from 'react';

const functions = {
  getValueInput: (e: ChangeEvent<HTMLSelectElement>) => ({
    key: e.target.id,
    value: parseInt(e.target.value, 10),
  }),
};

export default functions;
