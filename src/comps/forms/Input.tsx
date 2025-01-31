// @ts-ignore
import React, { PropsWithChildren } from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string|number;
  type?: string;
  className?: string;
  disabled?: boolean;
};

export default function Input(props: PropsWithChildren<InputProps>){
  const _type = props.type || 'text';

  return(
    <div className={'w-full'}>
      { props.label &&
        (
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {props.label}
          </label>
        )
      }
      <input
        className={`${props.className} w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        type={_type}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onInput={e => {
          props.onInput(e);
        }}
      />
    </div>
  )
}