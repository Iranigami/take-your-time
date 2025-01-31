// @ts-ignore
import React, { PropsWithChildren } from 'react';

type SelectProps = {
  value: number|string|boolean;
  label: string;
  options: object[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
};

export default function Select(props: PropsWithChildren<SelectProps>) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <select
        className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        disabled={props.disabled}
        onChange={e => {
          props.onChange(e);
        }}
      >
        {
          props.options.map(option => {
            return (
              <option value={option['value']} selected={props.value == option['value']}>
                { option['label'] }
              </option>
            )
          })
        }
      </select>
    </div>
  )
}
