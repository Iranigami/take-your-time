// @ts-ignore
import React, { PropsWithChildren } from 'react';

type ButtonProps = {
  className? :string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function Button(props: PropsWithChildren<ButtonProps>) {
  const className = props.className || 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

  return (
    <button
      className={className}
      onClick={e => {
        props.onClick(e);
      }}
    >
      { props.children }
    </button>
  )
}
