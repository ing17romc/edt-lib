import React, { ReactElement } from 'react';
import type { GetStatusValue } from './types';

/**
 * getStatus
 *
 * Utility component that returns a <strong> element indicating the active or inactive status.
 * The text color varies depending on the received value.
 *
 * @param {GetStatusValue} value - Value representing the status (boolean or numeric)
 * @returns {JSX.Element} <strong> element with the text 'Active' or 'Inactive' and corresponding color
 */
const getStatus = (value: GetStatusValue): ReactElement => (
  <strong className={value ? 'font-blue' : 'font-red'}>
    {value ? 'Active' : 'Inactive'}
  </strong>
);

export default getStatus;
