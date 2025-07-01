import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectorProps {
  id: string;
  value: number;
  options: Option[];
  eventChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  titleTop: string;
}

const Selector: React.FC<SelectorProps> = ({
  id,
  value,
  options,
  eventChange,
  titleTop,
}) => {
  return (
    <div>
      <label htmlFor={id}>{titleTop}</label>
      <select
        id={id}
        value={value}
        onChange={eventChange}
        data-testid={`selector-${id}`}
        aria-label={titleTop}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Selector };
